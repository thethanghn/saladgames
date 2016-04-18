var Dishes = React.createClass({
  propTypes: {
    dishes: React.PropTypes.array,
    gradients: React.PropTypes.array,
    onSelect: React.PropTypes.func
  },
  handleDishSelect: function(item, event) {
    if (this.props.onSelect) {
      this.props.onSelect(item);
    }
  },
  renderGradients: function(dish, allGradients) {
    var items = [];
    var gradients = _.filter(allGradients, function(i) {
      return _.includes(dish.gradients, i.id);
    });
    for (var i = 0; i < gradients.length; i++) {
      console.log(i);
      console.log(gradients[i].name);
      var item = <li key={i}>{gradients[i].name}</li>;
      console.log(item);
      items.push(item);
    }
    console.log(items);
    return items;
  },
  render: function() {
    var dishes = this.props.dishes;
    var allGradients = this.props.gradients;
    var items = [];
    for (var i = 0; i < dishes.length; i++) {
      var dish = dishes[i];
      var gradients = this.renderGradients(dish, allGradients);
      items.push(<div key={i} className="col-sm-2 dish-item" onClick={this.handleDishSelect.bind(this, dishes[i])}>
          <image title={dishes[i].name} src={dishes[i].image}/>
          <h5>Gradients:</h5>
          <ul>
            {gradients}
          </ul>
        </div>);
    }
    return (
      <div className="row">
        {items}
      </div>
    );
  }
});