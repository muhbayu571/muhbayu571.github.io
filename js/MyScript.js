$(document).ready(function(){
    $('.button-collapse').sideNav();
     $('[name=nav-ambil]').hide();
     $('#drop-btn-nav').hide();
});

function klik(){
	if($('[name=nav-ambil]').text()==""){
		$('[name=nav-ambil]').text("satu");
		$('.nav-buatan').css('width','100%');
		$('.nav-buatan').css('border-top-right-radius','0');
		$('.nav-buatan').css('border-top-left-radius','0');
		$('.nav-buatan').css('border-bottom-right-radius','0');
		$('.nav-buatan').css('border-bottom-left-radius','0');
		$('.nav-buatan').css('border-radius','10px');
		$('.tanda').css('transform','rotate(585deg)');
		$('.tanda').css('right','23px');
	}else{
		$('[name=nav-ambil]').text('');
		$('.nav-buatan').css('width','70px');
		$('.nav-buatan').css('overflow','hidden');
		$('.nav-buatan').css('height','70px');
		$('.nav-buatan').css('border-radius','50%');
		$('.tanda').css('transform','rotate(0deg)');		
	}
}

function dropdown(){
	$('.nav-buatan').css('overflow','unset');
}