// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step;

//   blinkyDancer.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };

//   return blinkyDancer;
// };

// =========================

var makeBlinkyDancer = function(top, left, timeBetweenSteps) {

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer"></span>');
  //this.$node = $('<img src="http://files.gamebanana.com/img/ico/sprays/56a242694346b.gif" alt="This will display an animated GIF" />');
  this.setPosition(top, left);
};
makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // this.oldStep();
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // //this.$node.toggle();
  // this.$node2.toggle();
  // console.log(this.$node.toggle());
};

//===================================

var makeCrazyDancer = function(top, left, timeBetweenSteps) {
  
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer2"></span>');//this.$node = $('<span class="dancer2"></span>');
  this.setPosition(top, left);
};
makeCrazyDancer.prototype = Object.create(makeDancer.prototype);
makeCrazyDancer.prototype.constructor = makeCrazyDancer;

makeCrazyDancer.prototype.step = function() {
//console.log(makeDancer);
  // call the old version of step at the beginning of any call to this new version of step
  // this.oldStep();
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // //this.$node.toggle();
  // this.$node2.toggle();
  // console.log(this.$node.toggle());
};
