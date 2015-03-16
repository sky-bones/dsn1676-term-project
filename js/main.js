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
