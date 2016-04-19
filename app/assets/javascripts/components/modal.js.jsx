var Modal = React.createClass({
  propTypes: {
    closeModal: React.PropTypes.func,
    isOpen: React.PropTypes.bool,
    question: React.PropTypes.object
  },
  handleCloseModal: function() {
    if (this.props.closeModal) {
      this.props.closeModal();
    }
  },
  render: function() {
    if (this.props.isOpen) {
      var question = this.props.question;
      return (
        <div className='modal-open' onClick={this.handleCloseModal}>
          <div className="modal fade in" id="myModal" role="dialog" style={{display: 'block', paddingLeft: '0px'}} tabIndex="-1">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button aria-label="Close" className="close" data-dismiss="modal" type="button">
                    <span aria-hidden="true">×</span>
                  </button>
                  <h4 className="modal-title" id="myModalLabel">Modal title</h4>
                </div>
                <div className="modal-body">
                  <h4>{question.question}</h4>
                  <p>{question.answer}</p>
                </div>
                <div className="modal-footer">
                  <button className="btn btn-default" data-dismiss="modal" type="button"  onClick={this.handleCloseModal}>Close</button>
                  <button className="btn btn-primary" type="button">Save changes</button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade in" onClick={this.handleCloseModal}></div>
        </div>
      );
    } else {
      return null;
    }
  }

});