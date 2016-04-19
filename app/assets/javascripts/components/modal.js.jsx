var Modal = React.createClass({
  propTypes: {
    closeModal: React.PropTypes.func,
    isOpen: React.PropTypes.bool,
    question: React.PropTypes.object
  },
  getInitialState: function() {
    return {
      answeringState: 'unknown'
    };
  },
  handleCloseModal: function() {
    console.log('handleCloseModal');
    var parent = this;
    this.setState({answeringState: 'unknown'}, function() {
      if (parent.props.closeModal) {
        parent.props.closeModal();
      }  
    });
  },
  handleChoiceSelect: function(choiceId) {
    console.log('handleChoiceSelect');
    console.log(choiceId);
    console.log(this.props.question);
    var state = this.state.answeringState;
    if (choiceId == this.props.question.answer) {
      state = 'correct';
    } else {
      state = 'incorrect';
    }
    this.setState({answeringState: state});
  },
  renderChoices: function(choices) {
    var items = [];
    for (var i = 0; i < choices.length; i++) {
      var choice = choices[i];
      var row = <div key={i}><input type='radio' name='answer' value={choice.id} onClick={this.handleChoiceSelect.bind(this, choice.id)}/> {choice.text}</div>;
      items.push(row);
    }
    console.log(items);
    return items;
  },
  renderAnsweringState: function(state) {
    if (state == 'correct') {
      return (
        <p className="text-success">Congrats! Your answer is correct.</p>
      );
    } else if (state == 'incorrect') {
      return (
        <p className="text-danger">Your answer is not correct yet.</p>
      );
    }

    return null;
  },
  render: function() {
    var parent = this;
    if (this.props.isOpen) {
      var question = this.props.question;
      return (
        <div className='modal-open'>
          <div className="modal fade in" id="myModal" role="dialog" style={{display: 'block', paddingLeft: '0px'}} tabIndex="-1">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title" id="myModalLabel">Modal title</h4>
                </div>
                <div className="modal-body">
                  <h4>{question.question}</h4>
                  <div ref='answerList'>
                    {this.renderChoices(question.choices)}
                    {this.renderAnsweringState(this.state.answeringState)}
                  </div>
                </div>
                <div className="modal-footer">
                  {function() {
                    if (parent.state.answeringState == 'correct') {
                      return <button className="btn btn-default" type="button" onClick={parent.handleCloseModal.bind(parent)}>Close</button>;
                    } else {
                      return null;
                    }
                  }()}
                  
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade in"></div>
        </div>
      );
    } else {
      return null;
    }
  }

});