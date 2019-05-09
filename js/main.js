// START Video PLYER
$(document).ready(function () {
	$('.content_video__player video').mediaelementplayer({
		pauseOtherPlayers: true,
		stretching: 'none',
		enableAutosize: false,
		autosizeProgress: false,
		features: ['playpause', 'fullscreen']
	});
});
$(document).ready(function () {
	$('.content_episodes__video video').mediaelementplayer({
		pauseOtherPlayers: true,
		stretching: 'none',
		enableAutosize: false,
		autosizeProgress: false,
	});
});
$(document).ready(function () {
	$('.content_bluebox__video video').mediaelementplayer({
		pauseOtherPlayers: true,
		stretching: 'none',
		enableAutosize: false,
		autosizeProgress: false,
	});
});
// END Video PLYER

//START SMOOTH SCROLL
$(document).ready(function () {
	$('a[data-target="menu"]').click(function () {
		var target = $(this).attr('href');
		var wh = $(window).width();
		$('a').removeClass('active');
		$(this).addClass('active');

		if (wh < 480) {
			$('html, body').animate({
				scrollTop: $(target).offset().top - 50
			}, 700);
		} else {
			$('html, body').animate({
				scrollTop: $(target).offset().top
			}, 700);
		}

	});
});
//END SMOOTH SCROLL

//START LANGUAGE SWITCH
$(document).ready(function () {
	var str = document.location.pathname;
	var str = str.replace(/\//g, '');

	if (str == '' || str == 'index.html') {
		$("a[href='index.html']").addClass('active_lang');
	}
	if (str == 'ua.html') {
		$("a[href='ua.html']").addClass('active_lang');

	}

});
//END LANGUAGE SWITCH

// START SUBSCRIBE RU
$(document).ready(function () {
	$("#ru").submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/mail/mail-ru.php", //Change
			data: th.serialize(),
			success: function (data) {
				if (data == 'suc') {
					alert('Спасибо за подписку');
					th.trigger("reset");
				} else {
					alert('Что то пошло не так')
					th.trigger("reset");
				}
			}
		});
		return false;
	});
});
// END SUBSCRIBE RU

// START SUBSCRIBE UA
$(document).ready(function () {
	$("#ua").submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/mail/mail-ua.php", //Change
			data: th.serialize(),
			success: function (data) {
				if (data == 'suc') {
					alert('Дякуємо за пiдписку');
					th.trigger("reset");
				} else {
					alert('Что то пошло не так')
					th.trigger("reset");
				}
			}
		});
		return false;
	});
});
// END SUBSCRIBE UA