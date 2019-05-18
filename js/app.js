// Scrolling navigation bar

$(window).scroll(function() {
	if ($(this).scrollTop() > 63 && $(window).width() >= 960) {
		$('.navbar').addClass("sticky");
	}
	else {
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

// Modal

function modal() {
	var modal = document.getElementById('modal');
	var modalOpen = document.getElementById('modal-open');
	var modalClose = document.getElementById('modal-close');
	
	modalOpen.addEventListener('click', openModal(modal));
	modalClose.addEventListener('click', closeModal(modal));
	window.addEventListener('click', outsideClick);
}

function openModal(modal) {
	modal.style.display = 'block';
}

function closeModal(modal) {
	modal.style.display = 'none';
}

function outsideClick(e) {
	if (e.target == modal) {
		modal.style.display = 'none';
	}
}

modal();