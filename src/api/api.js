class GetData {
  constructor(api){
    this.token = localStorage.token?localStorage.token:Math.random().toString(36).substr(-8)
    this.headers = (data)=>({'headers':{'Authorization':data.toString(),'Content-Type':'application/json'}})
    this.methods = (data)=>({[data.toString()]:{methods:data.toString()}}) 
    this.body = (data)=>({body:JSON.stringify(data)})
    this.api = api||'http://localhost:3001'
  }
  Connet( param, HTTPinterface ){
    let httpObject = this.Combine(HTTPinterface)
    return fetch( `${this.api}/${param}`, httpObject )
    .then(res => res.json())
  }
  Combine(data){
    return data.reduce((a,b)=>(Object.assign(a,b)))
  }
}

class CategoryAPI extends GetData{
  constructor(api){
    super(api)
    this.quaryCategory = 'categories'
    this.quaryPosts = 'posts'
  }
  getAllCategory(){
    return super.Connet(`${this.quaryCategory}`,[this.headers(this.token)])
  }
  getCategoryPosts(category){
    return super.Connet(`${category}/${this.quaryPosts}`,[this.headers(this.token)])
  }
}

class CommentAPI extends GetData {
  constructor(api){
    super(api)
    this.quaryComments = 'comments'
    this.quaryPosts = 'posts'
  }
  getPostComments(id){
    return super.Connet(`${this.quaryPosts}/${id}/${this.quaryComments}`,[this.headers(this.token)])
  }
  addComment({ id,timestamp,body,author,parentId }){
    return super.Connet(`${this.quaryComments}`,[this.headers(this.token),this.methods('POST'),this.body({id,timestamp,body,author,parentId})])
  }
  getCommentDetails(id){
    return super.Connet(`${this.quaryComments}/${id}`,[this.headers(this.token)])
  }
  votingComment(id,vote){
    return super.Connet(`${this.quaryComments}/${id}`,[this.headers(this.token),this.methods('POST'),this.body({vote})])
  }
  upVoteComment(id){
    return this.votingComment(id,'upVote')
  }
  downVoteComment(id){
    return this.votingComment(id,'downVote')
  }
  updateComments(id,timestamp,body){
    return super.Connet(`${this.quaryComments}/${id}`,[this.headers(this.token),this.methods('PUT'),this.body({timestamp,body})])
  }
  deleteComments(id){
    return super.Connet(`${this.quaryComments}/${id}`,[this.headers(this.token),this.methods('DELETE')])
  }
}

class PostAPI extends GetData {
  constructor(api){
    super(api)
    this.quaryPosts = 'posts'
  }
  getAllPosts(){
    return super.Connet(`${this.quaryPosts}`,[this.headers(this.token)])
  }
  addPost({ id,timestamp,title,body,author,category }){
    return super.Connet(`${this.quaryPosts}`,[this.headers(this.token),this.methods('POST'),this.body({ id,timestamp,title,body,author,category })])
  }
  getPostDetails(id){
    return super.Connet(`${this.quaryPosts}/${id}`,[this.headers(this.token)])
  }
  votingPost(id,vote){
    return super.Connet(`${this.quaryPosts}/${id}`,[this.headers(this.token),this.methods('POST'),this.body({vote})])
  }
  upVotePost(id){
    return this.votingPost(id,'upVote')
  }
  downVotePost(id){
    return this.votingPost(id,'downVote')
  }
  updateComments(id,title,body){
    return super.Connet(`${this.quaryPosts}/${id}`,[this.headers(this.token),this.methods('PUT'),this.body({title,body})])
  }
  deletePost(id){
    return super.Connet(`${this.quaryPosts}/${id}`,[this.headers(this.token),this.methods('DELETE')])
  }
}


export { CategoryAPI, CommentAPI, PostAPI }