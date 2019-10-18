/* Открытие меню */
var main = function() {
var isOpen = 0;
var isEdit = 0;
    $('.openMenu').click(function() {
		if(isOpen == 0 && isEdit == 0){
			$('.right').animate({left: '0px'}, 200);  //скорость движения меню в мс
			$('body').animate({left: '100%'}, 200);
			isOpen = 1;
			isEdit = 1;
			setTimeout(ok, 1);
		}
    });
	$('.openMenu').click(function() {
		if(isOpen == 1 && isEdit == 0){
			$('.right').animate({left: '-100%'}, 200);
			$('body').animate({left: '0px'}, 200);
			isOpen = 0;
			setTimeout(ok, 1);
		}
    });
	var ok = function(){
		isEdit = 0;
	}
};

$(document).ready(main); /* как только страница полностью загрузится, будет
               вызвана функция main, отвечающая за работу меню */