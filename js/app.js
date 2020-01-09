// Scrolling navigation bar

$(window).scroll(function() {
	if ($(this).scrollTop() > 57 && $(window).width() >= 960) {
		$('.navbar').addClass("sticky");
	} else {
		$('.navbar').removeClass("sticky");
	}
})

// Mobile sliding navigation bar

function navSlide() {
	var menu = document.querySelector('.menu');
	var nav = document.querySelector('.nav-links');
	nav.classList.toggle('nav-active');
	menu.classList.toggle('menu-toggle');
}

// Image modal

$(document).on('show.bs.modal', '#modal-image', function(event) {
	var image = $(event.relatedTarget).attr('src');
	var caption = $(event.relatedTarget).attr('alt');
	
	$('#modal-img').attr('src', image);
	$('#modal-caption').text(caption);
});

// Parallax

$(window).scroll(function() {
	parallax();
});

function parallax() {
	var wScroll = $(window).scrollTop();
	if ($(window).width() >= 960) {
		$('.parallax-bg').css('background-position', 'center ' + (wScroll * 0.5) + 'px');
	}
}
