document.addEventListener("turbolinks:load", function() {
	console.log('It works! From Main');

	window.onscroll = function() {fixNavbar()};

	var navbar = document.getElementById("navbar");
	var sticky = navbar.offsetTop;

	function fixNavbar() {
		if (window.pageYOffset >= sticky) {
			navbar.classList.add("fixed-top")
		} else {
			navbar.classList.remove("fixed-top");
		}
	}

	new WOW().init();
	var scroll = new SmoothScroll('a[href*="#"]', {
		speed: 1000,
		speedAsDuration: true,
		header: '[data-scroll-header]'
	});

})
