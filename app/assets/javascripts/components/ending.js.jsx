var Ending = React.createClass({
  propTypes: {
    dish: React.PropTypes.object,
    onBack: React.PropTypes.func
  },
  handleBackPress: function() {
    if (this.props.onBack) {
      this.props.onBack();
    }
  },
  render: function() {
    var dish = this.props.dish;
    return (
      <div className="finished-screen">
        <h3>Congratulations!</h3>
        <div className="image">
          <img title={dish.name} src={dish.image}/>
        </div>
        <button onClick={this.handleBackPress} className="btn btn-success">Back to Ingredients</button>
      </div>
    );
  }
});