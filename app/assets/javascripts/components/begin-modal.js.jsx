var BeginModal = React.createClass({
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
        <div className='modal-open'>
          <div className="modal fade in" id="myModal" role="dialog" style={{display: 'block', paddingLeft: '0px'}} tabIndex="-1">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button aria-label="Close" className="close" data-dismiss="modal" type="button">
                    <span aria-hidden="true">×</span>
                  </button>
                  <h4 className="modal-title" id="myModalLabel">Salad Bar Arrangement Game</h4>
                </div>
                <div className="modal-body">
                  <h4>Customer: Can I have a Tuna San Salad, please?</h4>
                </div>
                <div className="modal-footer">
                  <button className="btn btn-primary" type="button" onClick={this.handleCloseModal}>Yes!</button>
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