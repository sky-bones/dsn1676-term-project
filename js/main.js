
var $navMenu = $('.nav-menu');
var $nav1 = $('.nav-toggle');
var $btn = $('.btn');
var $btnPanel = $('.btn-panel-down');
var $pop = $('.pop');

$navMenu.on('click', function() {
	console.log('js-panel-open');
	$nav1.toggleClass('js-panel-open');
});

$btnPanel.on('click', function () {
$pop.toggleClass('js-panel-down');
});
