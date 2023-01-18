/* #### CARROSSEL - 1 #### */

$(function(){
	$('#slide img:eq(0)').addClass('ativo').show();

	var texto = $(".ativo").attr("alt");
	$('#slide').prepend("<p>"+texto+"</p>");
	setInterval(slide,3000);

	function slide(){

		if ($('.ativo').next().size()){
			$('.ativo')
			.fadeOut()
			.removeClass("ativo")
			.next()
			.fadeIn().addClass("ativo");
		}else{
			$('.ativo')
			.fadeOut()
			.removeClass("ativo");
			$('#slide img:eq(0)')
			.fadeIn()
			.addClass("ativo");
		}
			var texto = $(".ativo").attr("alt");
			$('#slide p')
			.hide()
			.html(texto)
			.delay(300)
			.fadeIn();
	}
});

/* #### CARROSSEL - 2 #### */


$(function(){
	$('#slide2 img:eq(0)').addClass('ativo2').show();

	var texto = $(".ativo2").attr("alt");
	$('#slide2').prepend("<p>"+texto+"</p>");
	setInterval(slide,3000);

	function slide(){

		if ($('.ativo2').next().size()){
			$('.ativo2')
			.fadeOut()
			.removeClass("ativo2")
			.next()
			.fadeIn().addClass("ativo2");
		}else{
			$('.ativo2')
			.fadeOut()
			.removeClass("ativo2");
			$('#slide2 img:eq(0)')
			.fadeIn()
			.addClass("ativo2");
		}
			var texto = $(".ativo2").attr("alt");
			$('#slide2 p')
			.hide()
			.html(texto)
			.delay(300)
			.fadeIn();
	}
});