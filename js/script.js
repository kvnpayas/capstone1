/* Navigation Desktop and Tablet Phone */
var toggleIcon = document.querySelector('#toggleIcon');
toggleIcon.addEventListener('click', function() {

	console.log('Working'); /* for debugging */

	var nav1 = document.querySelector('#headerInner');
	nav1.setAttribute('hidden', 'hidden');

	var header = document.querySelector('#outerCont');
	header.removeAttribute('hidden');

});

var close = document.querySelector('#close');
close.addEventListener('click', function() {

	console.log('Working'); /* for debugging */

	var nav1 = document.querySelector('#outerCont');
	nav1.setAttribute('hidden', 'hidden');

	var header = document.querySelector('#headerInner');
	header.removeAttribute('hidden');

});

/* Bootstrap Carousel */
$('section.awSlider .carousel').carousel({
	pause: "hover",
  interval: 2000
});

var startImage = $('section.awSlider .item.active > img').attr('src');
$('section.awSlider').append('<img src="' + startImage + '">');

$('section.awSlider .carousel').on('slid.bs.carousel', function () {
 var bscn = $(this).find('.item.active > img').attr('src');
	$('section.awSlider > img').attr('src',bscn);
});


/* Footer Slide UP and Down*/
$('body').on('click','#iconFooter',function(){
	console.log('Working'); /* for debugging */
    if($('#footer').hasClass("visible"))
    {
        $('#iconFooter').animate({
            bottom: '-5%'
        },250);
        $('#footer').animate({
            bottom: '-20%'
        },250).toggleClass("visible");
    }else
    { 
        $('#iconFooter').animate({
            bottom: '15%'
        },250);
        $('#footer').animate({
            bottom: '0px'
        },250).toggleClass("visible");
    }
    
});

/* Dropdown Island Select */
$(document).on('change', '.islandSelect', function() {
  var target = $(this).data('target');
  var show = $("option:selected", this).data('show');
  $(target).children().addClass('hide');
  $(show).removeClass('hide');
});
$(document).ready(function(){
	$('.islandSelect').trigger('change');
});


/* Navigation Mobile Phone*/
$('body').on('click','#toggle',function(){
  console.log('Working'); /* for debugging */
    if($('#dropdownMenu').hasClass("visible"))
    {
        $('#dropdownMenu').animate({
            top: '-21%'
        },250).toggleClass("visible");
    }else
    { 
        $('#dropdownMenu').animate({
            top: '10%'
        },250).toggleClass("visible");
    }
    
});