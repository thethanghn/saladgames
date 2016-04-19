var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

var questions = [
  { 
    id: 1,
    question: 'I want to replace seared tuna by 2 scoops of tuna flake, would it be possible?',
    answer: 'We only allow replacing one ingredient with another thus, you can only receive one scoop. The other option is for you to CYO'
  },
  { 
    id: 2,
    question: 'IF I don\'t want romaine lettuce for my tuna san, but I want spinach do I need to pay an extra?',
    answer: 'Yes, there will be an extracharge of $1.50'
  },
  { 
    id: 3,
    question: 'Can I change the seared tuna with tuna flakes and free range egg?',
    answer: 'We only allow one ingredient to be switched to another if you wish to change one ingredient.'
  }
];

var nextTimeAsking = function() {
  return Math.random() * 10 * 1000;
}
var timer = null;
var interval = null;

var Arrangements = React.createClass({
  propTypes: {
    startPicking: React.PropTypes.bool,
    selectedDish: React.PropTypes.object,
    gradients: React.PropTypes.array,
    onBack: React.PropTypes.func,
    onSelect: React.PropTypes.func
  },
  getInitialState: function() {
    return {
      showQuestion: false,
      selectedQuestion: null,
      askedQuestions: [],
      selectingGradients: []
    }
  },
  componentDidMount: function() {
    console.log('componentDidMount');
    var parent = this;
    var action = function() {
      var ids = _.map(questions, function(q) { return q.id; });
      var remaining = _.difference(ids, parent.state.askedQuestions);
      var keepAsking = false;
      if (remaining.length > 0) {
        var nextId = remaining[parseInt(Math.random() * remaining.length)];
        var question = _.find(questions, function(q) { return q.id === nextId; });
        // mark this question as asked
        parent.state.askedQuestions.push(nextId);
        parent.setState({showQuestion: true, selectedQuestion: question});
        keepAsking = true;
      } else {
        window.clearTimeout(timer);
      }

      if (keepAsking) {
        timer = setTimeout(function() {
          console.log('render again in the loop');
          action();
        }, nextTimeAsking());
      }
    }

    interval = setInterval(function() {
      if (!parent.props.startPicking) {
        return false;
      }
      timer = setTimeout(function() {
        console.log('render again');
        action();
      }, nextTimeAsking());  
      window.clearInterval(interval);
    }, 5000);
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
  closeModal: function() {
    console.log('modal closing');
    this.setState({showQuestion: false});
  },
  renderGradientItems: function(gradients) {
    var selectingGradients = this.state.selectingGradients;
    var items = [];
    for (var i = 0; i < gradients.length; i++) {
      var grad = gradients[i];
      var src = ['/assets/images/', _.toLower(grad.name.replace('/', ' ')), '.jpg'].join('');
      var selecting = _.includes(selectingGradients, grad.id) ? 'selecting' : '';
      var cls = ['grad-item', 'grad-' + grad.id].join(' ');
      var item = <div className={cls} key={i} onClick={this.handleGradientSelect.bind(this, grad.id)}>
                      <img src={src} className={['grad', selecting].join(' ')} alt={grad.name} title={grad.name}/>
                    </div>;
      items.push(item);
    }

    return items;
  },
  renderQuestion: function() {
    return <Modal isOpen={this.state.showQuestion} closeModal={this.closeModal} question={this.state.selectedQuestion}/>
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
        {this.renderQuestion()}
      </div>
    );
  }
});