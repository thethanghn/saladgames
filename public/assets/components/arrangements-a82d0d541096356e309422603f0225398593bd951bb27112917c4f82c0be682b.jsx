var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

var Arrangements = React.createClass({
  propTypes: {
    selectedDish: React.PropTypes.object,
    gradients: React.PropTypes.array,
    onBack: React.PropTypes.func,
    onSelect: React.PropTypes.func
  },
  getInitialState: function() {
    return {
      selectingGradients: []
    }
  },
  handleDishSelect: function(item, event) {
    if (this.props.onSelect) {
      this.props.onSelect(item);
    }
  },
  handleBackPress: function() {
    if (this.props.onBack) {
      this.props.onBack();
    }
  },
  handleHintPress: function() {
    var neededGradients = this.props.selectedDish.gradients;
    console.log(neededGradients);
    for (var i = 0; i < neededGradients.length; i++) {
      var cls = '.grad-' + neededGradients[i];
      $(cls).addClass('animated flash').one(animationEnd, function() {
        $(this).removeClass('animated flash');
      });
    };
  },
  handleResetPress: function() {
    this.setState({selectingGradients: []});
  },
  handleGradientSelect: function(id) {
    var selectingGradients = this.state.selectingGradients;
    if (_.includes(selectingGradients, id)) {
      selectingGradients = _.without(selectingGradients, id);
    } else {
      selectingGradients.push(id);
    }
    var result = this.props.selectedDish.gradients;
    if (selectingGradients.length == result.length && _.difference(selectingGradients, result).length == 0) {
      alert('You won');
    }
    this.setState({selectingGradients: selectingGradients});
  },
  renderGradientItems: function(gradients) {
    var selectingGradients = this.state.selectingGradients;
    var items = [];
    for (var i = 0; i < gradients.length; i++) {
      var grad = gradients[i];
      var src = ['/assets/images/', _.toLower(grad.name.replace('/', '')), '.jpg'].join('');
      var selecting = _.includes(selectingGradients, grad.id) ? 'selecting' : '';
      var cls = ['col-xs-1', 'grad-' + grad.id].join(' ');
      var item = <div className={cls} key={i} onClick={this.handleGradientSelect.bind(this, grad.id)}>
                      <img src={src} className={['grad', selecting].join(' ')} alt={grad.name} title={grad.name}/>
                    </div>;
      items.push(item);
    }

    return items;
  },
  render: function() {
    var gradients = this.props.gradients;
    return (
      <div>
        <div className="arrangement-table row">
          {this.renderGradientItems(gradients)}
        </div>
        <div className="actions">
          <button onClick={this.handleBackPress} className="btn btn-success">Back to Dish Select</button>
          <button onClick={this.handleHintPress} className="btn btn-info">Hint</button>
          <button onClick={this.handleResetPress} className="btn btn-info">Reset</button>
        </div>
      </div>
    );
  }
});