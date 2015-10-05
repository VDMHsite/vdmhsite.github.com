$(document).ready(function(){

	$(this).on('click','this', function(){
			$(this).fadeOut()
		});

	$('.heading').blurjs({
		// source: 'body',
		radius: 100,
		overlay: 'rgba(255,255,255,0.4)'
	});
});