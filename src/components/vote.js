import React, { Component } from 'react'
import * as FontAwesome from 'react-icons/lib/fa'
import { myStyle, orange } from '../utils/colors'

export class Thumb extends Component{
  state = {
    check:false
  }

  componentDidMount(){
    this.setState({check: this.props.defaultValue})
  }

  toggleCheck(){
    this.setState({check: !this.state.check})
    this.props.clickEvent()
  }

  direction(opacitySetting){
    let button = {
      'up':<FontAwesome.FaThumbsUp style={{...myStyle.thumbUp,...opacitySetting}} onClick={this.toggleCheck.bind(this)}/>,
      'down':<FontAwesome.FaThumbsDown style={{...myStyle.thumbDown,...opacitySetting}} onClick={this.toggleCheck.bind(this)}/>,
      'left':<FontAwesome.FaHandOLeft style={{...myStyle.thumbUp,...opacitySetting}} onClick={this.toggleCheck.bind(this)}/>,
      'right':<FontAwesome.FaHandORight style={{...myStyle.thumbUp,...opacitySetting}} onClick={this.toggleCheck.bind(this)}/>,
    }
    return(
      button[this.props.direction]
    )
  }
  render(){
    const opacitySetting = (this.state.check)?{opacity: 1.0}:{};
    return(
      <span>
      {
        this.direction.call(this,opacitySetting)
      }
      </span>
    )
  }
}

export class Vote extends Component{
  state = {
    currentNumber:0,
    newNumber:0,
    isUpVote:false,
    isDownVote:false,
  }

  toggleUpVoteBtn(){
    let futureValue = !this.state.isUpVote
    this.setState({
      isDownVote:futureValue,
    })
  }

  toggleDownVoteBtn(){
    let futureValue = !this.state.isDownVote
    this.setState({
      isDownVote:futureValue,
    })
  }

  render(){
    return(
      <div>
        <span>
          <span style={{color:orange}}>
            {this.state.newNumber}
          </span>
        </span>
        <span>
          <FontAwesome.FaFlag style={{color:orange,margin: '0 2 0 4'}}/>
        </span>
          <Thumb direction={'up'} defaultValue={this.isUpVote} clickEvent={this.toggleUpVoteBtn.bind(this)}/>
          <Thumb direction={'down'} defaultValue={this.isDownVote} clickEvent={this.toggleDownVoteBtn.bind(this)}/>
      </div>
    )
  }
}