$(function (){
	// $('body').on('click',function(){
	// 	$('.options-btn').removeClass('open');
	// });
	// Скрытие меню при клике на область помимо самого меню
	
    $(".phone").mask("+7(999)999-99-99");

    //popup
    $('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});
    // tabs
    $('.filter-tabs .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.filter-tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.filter-tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

	// Select show tab on load page
	let indexOpen = 0;

	let btnTab = document.querySelectorAll('.nav-tab span');
	let contentTab = document.querySelectorAll('.content-tab');

	function tabCurrent(thisTab) {
		let idCurrent = thisTab.dataset.tab;
		
		for (let i = 0; i < btnTab.length; i++) {
			btnTab[i].classList.remove('tab-current');
		}
		thisTab.classList.add('tab-current');
	
		for (let i = 0; i < contentTab.length; i++) {
		if (idCurrent === contentTab[i].id) {
			contentTab[i].classList.add('current-content-tab');
		} else {
			contentTab[i].classList.remove('current-content-tab');
		}
		}
	}

	for (let i = 0, len = btnTab.length; i < len; i++) {
		btnTab[i].onclick = function() {
			tabCurrent(this);
		}
	}

	tabCurrent(btnTab[indexOpen]);

    // tabs

	$('.options-btn').on('click', function(){
		$(this).toggleClass('open');
    });

	$('.background').on('click', function(){
		$('.add-object').removeClass('open');
		$('.background').removeClass('open');
		$('.siderbar').removeClass('open');
		$('.menu-btn').removeClass('open');
	});

	$('.add-btn').on('click', function(){
		$('.add-object').addClass('open');
		$('.background').addClass('open');
    });
	$('.btn-cllose').on('click', function(){
		$('.add-object').removeClass('open');
		$('.background').removeClass('open');
    });
	$('.next-btn').on('click', function(){
		$('.step-two').addClass('open');
		$('.step-one').addClass('hide');
    });
	
	$('select').styler();


	$('.menu-btn').on('click', function(){
		$(this).toggleClass('open');
		$('.siderbar').toggleClass('open');
		$('.background').toggleClass('open');
		$('.wrapper').addClass('open');
	});
	
})
function l_image(a, b) {
	document.example_img.src = a;
	document.getElementById("example_text").innerHTML = b;
}

