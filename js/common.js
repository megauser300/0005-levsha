$(function() {


$(".to-top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});




$(".page-nav a").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination - 15}, 1024); //скорость прокрутки
	});

$(".gallery a").magnificPopup({
		type : 'image',
		gallery : {
			enabled : true
		},
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});


$('.slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1
});

$(window).enllax();

$(".btn_mnu").click(function() {
	$(this).toggleClass("active");
	$(".page-nav ul").slideToggle();
});


$('[data-toggle="tooltip"]').tooltip();




$('#message3').mouseout(function(){
	$('#message3').css('visibility','hidden');
});


$('#message2').mouseout(function(){
	$('#message2').css('visibility','hidden');
});

$('#message1').mouseout(function(){
	$('#message2').css('visibility','visible');
	$('#message3').css('visibility','visible');
});


/*Да, я знаю это тупо, но я ничего не придумал*/

$("#phone1").mask("+7(999)9999999");
$(".input-phone").mask("+7(999)9999999");
$("#phone3").mask("+7(999)9999999");


function tabscostume(tab) {
	$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
			.eq($(this).index()).fadeIn().addClass('active');
			
		});
	};
	tabscostume("tabs-main");
		
		
	// $('.tabs__btn').each(function(){
		$('.tabs').easyResponsiveTabs({
			width: '768px', 
		})
 

	$(".tbody-price").each(function(){
		if($(this).find("tr").length > 6) {
			$(this).parents("table").after('<div class="link-more-js" ><span>Показать прайс полностью</span></div>');
			// console.log($(this).find("tr").length)
			$(document).on('click',".link-more-js span", function(){
				$(this).hide().parents(".tabs__content.active").find("tr:hidden").slideToggle();
		
			})
		}
	})
});    



