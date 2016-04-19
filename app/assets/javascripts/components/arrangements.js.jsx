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

var tileConfig = [
  [
    { id: 1, colSpan: 1, rowSpan: 2 },
    { id: 4, colSpan: 1, rowSpan: 2 },
    { id: 6, colSpan: 1, rowSpan: 2 },
    { id: 10, colSpan: 1, rowSpan: 2 },
    { id: 14, colSpan: 1, rowSpan: 2 },
    { id: 18, colSpan: 1, rowSpan: 2 },
    { id: 22, colSpan: 1, rowSpan: 2 },
    { id: 26, colSpan: 1, rowSpan: 2 },
    { id: 30, colSpan: 1, rowSpan: 2 },
    { id: 34, colSpan: 1, rowSpan: 2 },
    { id: 38, colSpan: 1, rowSpan: 2 },
    { id: 78, colSpan: 1, rowSpan: 2 },
    { id: 46, colSpan: 1, rowSpan: 2 },
    { id: 50, colSpan: 1, rowSpan: 2 },
    { id: 54, colSpan: 1, rowSpan: 2 },
    { id: 56, colSpan: 1, rowSpan: 2 },
    { id: 58, colSpan: 1, rowSpan: 2 },
    { id: 0, colSpan: 1, rowSpan: 1 },
    { id: 0, colSpan: 1, rowSpan: 1 },
    { id: 0, colSpan: 1, rowSpan: 1 }
  ],
  [
    { id: 0, colSpan: 1, rowSpan: 1 },
    { id: 0, colSpan: 1, rowSpan: 1 },
    { id: 0, colSpan: 1, rowSpan: 1 }
  ],
  [
    { id: 2, colSpan: 1, rowSpan: 2 },
    { id: 5, colSpan: 1, rowSpan: 2 },
    { id: 7, colSpan: 1, rowSpan: 2 },
    { id: 11, colSpan: 1, rowSpan: 2 },
    { id: 15, colSpan: 1, rowSpan: 2 },
    { id: 19, colSpan: 1, rowSpan: 2 },
    { id: 23, colSpan: 1, rowSpan: 2 },
    { id: 27, colSpan: 1, rowSpan: 2 },
    { id: 31, colSpan: 1, rowSpan: 2 },
    { id: 35, colSpan: 1, rowSpan: 2 },
    { id: 39, colSpan: 1, rowSpan: 2 },
    { id: 43, colSpan: 1, rowSpan: 2 },
    { id: 47, colSpan: 1, rowSpan: 2 },
    { id: 51, colSpan: 1, rowSpan: 2 },
    { id: 55, colSpan: 1, rowSpan: 2 },
    { id: 57, colSpan: 1, rowSpan: 2 },
    { id: 59, colSpan: 1, rowSpan: 2 },
    { id: 0, colSpan: 1, rowSpan: 1 },
    { id: 0, colSpan: 1, rowSpan: 1 },
    { id: 0, colSpan: 1, rowSpan: 1 }
  ],
  [
    { id: 0, colSpan: 1, rowSpan: 1 },
    { id: 0, colSpan: 1, rowSpan: 1 },
    { id: 0, colSpan: 1, rowSpan: 1 }
  ],
  [
    { id: 3, colSpan: 2, rowSpan: 4 },
    { id: 8, colSpan: 1, rowSpan: 2 },
    { id: 12, colSpan: 1, rowSpan: 2 },
    { id: 16, colSpan: 1, rowSpan: 2 },
    { id: 20, colSpan: 1, rowSpan: 2 },
    { id: 24, colSpan: 1, rowSpan: 2 },
    { id: 28, colSpan: 1, rowSpan: 2 },
    { id: 32, colSpan: 1, rowSpan: 2 },
    { id: 36, colSpan: 1, rowSpan: 2 },
    { id: 40, colSpan: 1, rowSpan: 2 },
    { id: 44, colSpan: 1, rowSpan: 2 },
    { id: 48, colSpan: 1, rowSpan: 2 },
    { id: 52, colSpan: 1, rowSpan: 2 },
    { id: 60, colSpan: 1, rowSpan: 1 },
    { id: 63, colSpan: 1, rowSpan: 1 },
    { id: 64, colSpan: 1, rowSpan: 1 },
    { id: 65, colSpan: 1, rowSpan: 1 },
    { id: 0, colSpan: 1, rowSpan: 1 },
    { id: 66, colSpan: 1, rowSpan: 1 }
  ],
  [
    { id: 67, colSpan: 1, rowSpan: 1 },
    { id: 68, colSpan: 1, rowSpan: 1 },
    { id: 69, colSpan: 1, rowSpan: 1 },
    { id: 70, colSpan: 1, rowSpan: 1 },
    { id: 0, colSpan: 1, rowSpan: 1 },
    { id: 71, colSpan: 1, rowSpan: 1 }
  ],
  [
    { id: 9, colSpan: 1, rowSpan: 2 },
    { id: 13, colSpan: 1, rowSpan: 2 },
    { id: 17, colSpan: 1, rowSpan: 2 },
    { id: 21, colSpan: 1, rowSpan: 2 },
    { id: 25, colSpan: 1, rowSpan: 2 },
    { id: 29, colSpan: 1, rowSpan: 2 },
    { id: 33, colSpan: 1, rowSpan: 2 },
    { id: 37, colSpan: 1, rowSpan: 2 },
    { id: 41, colSpan: 1, rowSpan: 2 },
    { id: 45, colSpan: 1, rowSpan: 2 },
    { id: 49, colSpan: 1, rowSpan: 2 },
    { id: 53, colSpan: 1, rowSpan: 2 },
    { id: 72, colSpan: 1, rowSpan: 1 },
    { id: 73, colSpan: 1, rowSpan: 1 },
    { id: 74, colSpan: 1, rowSpan: 1 },
    { id: 75, colSpan: 1, rowSpan: 1 },
    { id: 0, colSpan: 1, rowSpan: 1 },
    { id: 0, colSpan: 1, rowSpan: 1 },
  ],
  [
    { id: 76, colSpan: 1, rowSpan: 1 },
    { id: 77, colSpan: 1, rowSpan: 1 },
    { id: 61, colSpan: 1, rowSpan: 1 },
    { id: 62, colSpan: 1, rowSpan: 1 },
    { id: 0, colSpan: 1, rowSpan: 1 },
    { id: 0, colSpan: 1, rowSpan: 1 },
  ]
];

var SCREEN_W = 1140;
var CELL_W = parseInt(1140 / 20);
var CELL_H = parseInt(CELL_W * 3 / 4);

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
  renderGradientItems: function(gradients, start, end) {
    var gradients = this.props.gradients;
    var selectingGradients = this.state.selectingGradients;
    var items = [];

    // for (var i = start; i < end; i++) {
    //   var grad = gradients[i];
    //   var src = ['/assets/images/', _.toLower(grad.name.replace('/', ' ')), '.jpg'].join('');
    //   var selecting = _.includes(selectingGradients, grad.id) ? 'selecting' : '';
    //   var cls = ['grad-item', 'grad-' + grad.id].join(' ');
    //   var item = <div className={cls} key={i} onClick={this.handleGradientSelect.bind(this, grad.id)}>
    //                   <img src={src} className={['grad', selecting].join(' ')} alt={grad.name} title={grad.name}/>
    //                 </div>;
    //   items.push(item);
    // }
    for (var j = 0; j < tileConfig.length; j++) {
      var row = tileConfig[j];
      var cells = [];
      for (var i = 0; i < row.length; i++) {
        var tile = row[i];
        var colSpan = tile.colSpan ? tile.colSpan : 1;
        var rowSpan = tile.rowSpan ? tile.rowSpan : 1;
        var grad = _.find(gradients, function(g) { return g.id == tile.id;});
        var cell = null;
        var w = colSpan * CELL_W;
        var h = rowSpan * CELL_H;
        var key = [i, j].join('');
        if (grad) {
          var src = ['/assets/images/', _.toLower(grad.name.replace('/', ' ')), '.jpg'].join('');
          var selecting = _.includes(selectingGradients, grad.id) ? 'selecting' : '';
          var cls = ['grad-item', 'grad-' + grad.id, selecting].join(' ');
          var text = grad.name;

          var content = grad.type == 'flavour' ? <span>{grad.name}</span> : <img src={src} alt={grad.name} title={grad.name}/>;
          
          cell = <td key={key}
                    className='grad-td'
                    colSpan={colSpan}
                    rowSpan={rowSpan}
                    style={{height: (h + 'px'), width: (w + 'px')}}>
                    <div className={cls} style={{height: (h + 'px'), width: (w + 'px')}} onClick={this.handleGradientSelect.bind(this, grad.id)}>
                      {content}
                    </div>
                </td>;
          
        } else {
          console.log('aaa');
          cell = <td key={key} className='grad-item' colSpan={colSpan} rowSpan={rowSpan}>
                    <div style={{display: 'block', height: (h + 'px'), width: (w + 'px')}}></div>
                  </td>;
        }

        cells.push(cell);
      }
      items.push(<tr key={j}>{cells}</tr>);
    }

    return (<table className="table">{items}</table>);
  },
  renderFlavorItems: function(gradients,start,end) {
    var selectingGradients = this.state.selectingGradients;
    var items = [];
    for (var i = start; i < end; i++) {
      var grad = gradients[i];
      var src = ['/assets/images/', _.toLower(grad.name.replace('/', ' ')), '.jpg'].join('');
      var selecting = _.includes(selectingGradients, grad.id) ? 'selecting' : '';
      var cls = ['grad-item', 'grad-' + grad.id].join(' ');
      var item = <div className={cls} key={i} onClick={this.handleGradientSelect.bind(this, grad.id)}>
                      <p className={['grad', selecting].join(' ')} alt={grad.name} title={grad.name}> {grad.name} </p>
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
        <div className="arrangement-table">
          {this.renderGradientItems(gradients,0,34)}
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