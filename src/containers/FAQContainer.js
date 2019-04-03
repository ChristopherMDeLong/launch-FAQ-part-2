import React from 'react';
import Question from '../components/Question';
import NewQuestionForm from '../containers/NewQuestionForm';


class FAQContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selectedQuestion: null,
      questions: []
    }

    this.toggleQuestionSelect = this.toggleQuestionSelect.bind(this)
    this.addFAQ = this.addFAQ.bind(this)
  }

  toggleQuestionSelect(id) {
    if (id === this.state.selectedQuestion) {
      this.setState({ selectedQuestion: null})
    } else {
      this.setState({ selectedQuestion: id })
    }
  }

  componentDidMount(){
    fetch('http://localhost:4567/api/v1/questions')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw(error);
      }
    })
  .then(response => response.json())
  .then(body => {
    this.setState({questions: body})
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`));
}

  addFAQ(payload) {
    let formattedPayload = payload
    fetch('/api/v1/questions', {
      method: 'POST',
      body: JSON.stringify(formattedPayload)
    })
    .then(response => {
      if(response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      let newQuestions = this.state.questions.concat(body)
      this.setState({questions: newQuestions})
    })
    .catch(error => console.error(`Error in fetch; ${error.message}`));
  }

  render() {
    let questions = this.state.questions.map(question => {
      let selected;
      if (this.state.selectedQuestion === question.id) {
        selected = true
      }

      let handleClick = () => { this.toggleQuestionSelect(question.id) }

      return(
        <Question
          key={question.id}
          question={question.question}
          answer={question.answer}
          selected={selected}
          handleClick={handleClick}
        />
      )
    })

    return(
      <div className='page'>
        <h1>We Are Here To Help</h1>

        <div className='question-list'>
          {questions}
        <NewQuestionForm addFAQ={this.addFAQ}/>
        </div>
      </div>
    )
  }
}

export default FAQContainer;
