var dishes= [
  {
    id: 1,
    name: 'Tuna San',
    image: '/assets/images/tuna san.jpg',
    gradients: [ 2, 15, 12 ]
  }
];

var gradients = [
  {
    id: 1,
    name: 'Kale'
  },
  {
    id: 2,
    name: 'Spinach'
  },
  {
    id: 3,
    name: 'Lettuce'
  },
  {
    id: 4,
    name: 'Red & White Cabbage'
  },
  {
    id: 5,
    name: 'Rocket Leaves'
  },
  {
    id: 6,
    name: 'Pasta'
  },
  {
    id: 7,
    name: 'Alfalfa Sprouts'
  },
  {
    id: 8,
    name: 'Vermicelli'
  },
  {
    id: 9,
    name: 'Mango'
  },
  {
    id: 10,
    name: 'Brown Rice'
  },
  {
    id: 11,
    name: 'Kidney Beans'
  },
  {
    id: 12,
    name: 'Tomato'
  },
  {
    id: 13,
    name: 'Mandarin Orange'
  },
  {
    id: 14,
    name: 'Tofu'
  },
  {
    id: 15,
    name: 'Edamame'
  },
  {
    id: 16,
    name: 'Onions'
  },
  {
    id: 17,
    name: 'Green apple'
  },
  {
    id: 18,
    name: 'Soba'
  },
  {
    id: 19,
    name: 'Chick peas'
  },
  {
    id: 20,
    name: 'Beetroot'
  },
  {
    id: 21,
    name: 'Grapes'
  },
  {
    id: 22,
    name: 'Carrot'
  },
  {
    id: 23,
    name: 'Potato'
  },
  {
    id: 24,
    name: 'Brocoli'
  },
  {
    id: 25,
    name: 'Celery'
  },
  {
    id: 26,
    name: '"French Bean/Snow Peas"'
  },
  {
    id: 27,
    name: 'Cucumber'
  },
  {
    id: 28,
    name: 'Sunflower Seeds'
  },
  {
    id: 29,
    name: 'Jalapeńo'
  },
  {
    id: 30,
    name: 'Pomelo'
  },
  {
    id: 31,
    name: 'Capsicum'
  },
  {
    id: 32,
    name: 'Roasted Pumpkin'
  },
  {
    id: 33,
    name: 'Mushrooms'
  },
  {
    id: 34,
    name: 'Sweet Corn'
  },
  {
    id: 35,
    name: 'Olives'
  },
  {
    id: 36,
    name: 'Yellow Raisins'
  },
  {
    id: 37,
    name: 'Grated Egg'
  },
  {
    id: 38,
    name: 'Quinoa'
  },
  {
    id: 39,
    name: 'Falafel'
  },
  {
    id: 40,
    name: 'Lentils'
  },
  {
    id: 41,
    name: 'Croutons'
  },
  {
    id: 42,
    name: 'Croutons'
  },
  {
    id: 43,
    name: 'Free Range Egg'
  },
  {
    id: 44,
    name: 'Cheddar Cheese'
  },
  {
    id: 45,
    name: 'Almond  Flakes/Walnut'
  },
  {
    id: 46,
    name: 'Grilled Tofu'
  },
  {
    id: 47,
    name: 'Avocado'
  },
  {
    id: 48,
    name: 'Feta Cheese'
  },
  {
    id: 49,
    name: 'Parmesan Cheese'
  },
  {
    id: 50,
    name: 'Tuna Flakes'
  },
  {
    id: 51,
    name: 'Tandoori Chicken'
  },
  {
    id: 52,
    name: 'Grilled Chicken'
  },
  {
    id: 53,
    name: 'Bacon Bits'
  },
  {
    id: 54,
    name: 'Crab Stick'
  },
  {
    id: 55,
    name: 'Turkey Ham'
  },
  {
    id: 56,
    name: 'Zottarella Cheese'
  },
  {
    id: 57,
    name: 'Seared Tuna'
  },
  {
    id: 58,
    name: 'Cajun Prawn'
  },
  {
    id: 59,
    name: 'Smoked Salmon'
  },
  {
    id: 60,
    name: 'Tandoori Chicken'
  },
  {
    id: 61,
    name: 'Grilled Chicken'
  },
];

var Root = React.createClass({
  getInitialState: function() {
    return {
      showDishes: true,
      selectedDish: null
    };
  },
  propTypes: {
    name: React.PropTypes.string
  },
  handleDishSelect: function(item) {
    this.setState({showDishes: false, selectedDish: item});
  },
  handleBackPress: function() {
    this.setState({showDishes: true, selectedDish: null});
  },
  renderDishes: function() {
    return (
      <Dishes dishes={dishes} gradients={gradients} onSelect={this.handleDishSelect}/>
    );
  },
  renderGradients: function() {
    var selectedDish = this.state.selectedDish;
    return (
      <Arrangements
          selectedDish={selectedDish}
          gradients={gradients}
          onBack={this.handleBackPress}/>
    );
  },
  render: function() {
    var showDishes = this.state.showDishes;
    var selectedDish = this.state.selectedDish;
    var welcome = ['Hi ', this.props.name, ', ', 'please pick the dish', (!showDishes ? [' ', selectedDish.name].join('') : '') ].join('');
    return (
      <div>
        <h3>{welcome}</h3>
        {showDishes ? this.renderDishes() : this.renderGradients()}
      </div>
    );
  }
});