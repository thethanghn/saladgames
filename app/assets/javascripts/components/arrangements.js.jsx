var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

var questions = [
  { 
    id: 1,
    question: 'I want to replace seared tuna with 2 scoops of tuna flakes, would it be possible?',
    choices: [
      { id: 1, text: 'No you cannot replace any ingredients for signature items' },
      { id: 2, text: 'Yes it is possible but we can only give you 1 scoop' },
      { id: 3, text: 'Yes it is possible with no charge' }
    ],
    answer: 2
  },
  { 
    id: 2,
    question: 'If I want baby spinach and not romaine lettuce for tuna san salad do I have to pay extra?',
    choices: [
      { id: 1, text: 'Yes' },
      { id: 2, text: 'No' },
      { id: 3, text: 'No you cannot replace any ingredients for signature items' }
    ],
    answer: 1
  },
  { 
    id: 3,
    question: 'Can I split my Tuna San to half of it as a wrap?',
    choices: [
      { id: 1, text: 'Yes with an additional charge of $2 for the tortilla wrap' },
      { id: 2, text: 'No we do not do that' },
      { id: 3, text: 'Yes. Just pay for the price of the salad' }
    ],
    answer: 1
  },
  { 
    id: 4,
    question: 'Can I have an extra breadsticks?',
    choices: [
      { id: 1, text: 'Yes with an additional charge of $0.50' },
      { id: 2, text: 'No. Strictly 1 breadstick per salad or wrap' },
      { id: 3, text: 'Only if you purchase a soup with your salad' }
    ],
    answer: 1
  },
  { 
    id: 5,
    question: 'Are the breadsticks and crackers gluten-free or vegetarian?',
    choices: [
      { id: 1, text: 'They are gluten-free and vegetarian' },
      { id: 2, text: 'They are not gluten-free and non-vegetarian' },
      { id: 3, text: 'They are vegetarian not VEGAN and not gluten-free' }
    ],
    answer: 3
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
    onSelect: React.PropTypes.func,
    onWinning: React.PropTypes.func
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
    this.triggerQuestion();
  },
  triggerQuestion: function() {
    var parent = this;
    var action = function() {
      var ids = _.map(questions, function(q) { return q.id; });
      var remaining = _.difference(ids, parent.state.askedQuestions);
      if (remaining.length > 0) {
        var nextId = remaining[parseInt(Math.random() * remaining.length)];
        var question = _.find(questions, function(q) { return q.id === nextId; });
        // mark this question as asked
        parent.state.askedQuestions.push(nextId);
        parent.setState({showQuestion: true, selectedQuestion: question});
      } else {
        window.clearTimeout(timer);
      }
    }

    interval = setInterval(function() {
      if (!parent.props.startPicking || parent.state.showQuestion) {
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
      this.props.onWinning();
    }
    this.setState({selectingGradients: selectingGradients});
  },
  closeModal: function() {
    console.log('modal closing');
    var parent = this;
    this.setState({showQuestion: false, selectedQuestion: null}, function() {
      parent.triggerQuestion();
    });
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
          <button onClick={this.handleHintPress} className="btn btn-info">Hint</button>
          <button onClick={this.handleResetPress} className="btn btn-info">Reset</button>
        </div>
        {this.renderQuestion()}
      </div>
    );
  }
});