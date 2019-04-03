import React, { Component } from 'react'
import TextField from '../components/TextField'

class NewQuestionForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      question: '',
      answer: ''
    }
    this.handleQuestionChange = this.handleQuestionChange.bind(this)
    this.handleAnswerChange = this.handleAnswerChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClear = this.handleClear.bind(this)
  }

  handleQuestionChange(event) {
    this.setState({ question: event.target.value })
  }

  handleAnswerChange(event) {
    this.setState({ answer: event.target.value })
  }
  handleClear() {
    this.setState({question:'', answer:''})
  }

  handleSubmit(event){
    event.preventDefault()
    let payload = {
      id: '',
      question: this.state.question,
      answer: this.state.answer
    }
    this.props.addFAQ(payload)
    this.handleClear()
  }

  render(){

    return(
      <form onSubmit={this.handleSubmit}>
        <TextField
          name='question'
          content={this.state.question}
          placeholder='Enter A New Question'
          handlerFunction={this.handleQuestionChange}
        />
        <TextField
          name='answer'
          content={this.state.answer}
          placeholder='Enter The New Answer'
          handlerFunction={this.handleAnswerChange}
        />
        <input type="submit" value="Submit New Q & A" />
      </form>
    )
  }
}

export default NewQuestionForm;
