import React, { Component } from "react";

class QuizAnswer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeAnswer: this.props.activeAnswer
    }
  }

  componentWillReceiveProps(nextProps) {
    // Lo reciben todos los elementos
    if(this.state.activeAnswer === true) {
      this.setState({
        activeAnswer: nextProps.activeAnswer
      })
    }
  }

  handleClickAnswer = () => {
    this.props.handleClickAnswer(this.props.value, this.props.answer)
    this.setState({
      activeAnswer: !this.state.activeAnswer
    })
  }

  render() {
    return (
      <div className={`answer-btn mt-15px px-15px w-90 center crs-pointer bg-animation${this.state.activeAnswer ? ' active-answer' : ''}`} onClick={this.handleClickAnswer}>{this.props.answer}</div>
    )
  }
}

export default QuizAnswer;
