$(document).ready(function(){
	$('video').on('click','video', function(){
			$('video').fadeout()
		});
	$('.heading').blurjs({
		// source: 'body',
		radius: 100,
		overlay: 'rgba(255,255,255,0.4)'
	});
});