var $navExpand = $('.nav-expand');
var $panel = $('.panel');

$navExpand.on('click', function (){

$panel.toggleClass('js-panel-expand');

});



var $storyExpand = $('.story-expand');
var $story = $('.story');

$storyExpand.on('click', function (){

$story.toggleClass('js-panel-expand');

});



var $story2Expand = $('.story-2-expand');
var $story2 = $('.story-2');

$story2Expand.on('click', function (){

$story2.toggleClass('js-panel-expand');

});


var $story3Expand = $('.story-3-expand');
var $story3 = $('.story-3');

$story3Expand.on('click', function (){

$story3.toggleClass('js-panel-expand');

});

var $story4Expand = $('.story-4-expand');
var $story4 = $('.story-4');

$story4Expand.on('click', function (){

$story4.toggleClass('js-panel-expand');

});


$('.smooth-scroll').localScroll();
