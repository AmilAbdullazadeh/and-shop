$(function(){
	var $gallery = $('.gallery a').simpleLightbox();

	$gallery.on('show.simplelightbox', function(){
		console.log('Requested for showing');
	})
	.on('shown.simplelightbox', function(){
		console.log('Shown');
	})
	.on('close.simplelightbox', function(){
		console.log('Requested for closing');
	})
	.on('closed.simplelightbox', function(){
		console.log('Closed');
	})
	.on('change.simplelightbox', function(){
		console.log('Requested for change');
	})
	.on('next.simplelightbox', function(){
		console.log('Requested for next');
	})
	.on('prev.simplelightbox', function(){
		console.log('Requested for prev');
	})
	.on('nextImageLoaded.simplelightbox', function(){
		console.log('Next image loaded');
	})
	.on('prevImageLoaded.simplelightbox', function(){
		console.log('Prev image loaded');
	})
	.on('changed.simplelightbox', function(){
		console.log('Image changed');
	})
	.on('nextDone.simplelightbox', function(){
		console.log('Image changed to next');
	})
	.on('prevDone.simplelightbox', function(){
		console.log('Image changed to prev');
	})
	.on('error.simplelightbox', function(e){
		console.log('No image found, go to the next/prev');
		console.log(e);
	});

	var $gallery1 = $('.gallery1 a').simpleLightbox();

	$gallery1.on('show.simplelightbox', function(){
		console.log('Requested for showing');
	})
	.on('shown.simplelightbox', function(){
		console.log('Shown');
	})
	.on('close.simplelightbox', function(){
		console.log('Requested for closing');
	})
	.on('closed.simplelightbox', function(){
		console.log('Closed');
	})
	.on('change.simplelightbox', function(){
		console.log('Requested for change');
	})
	.on('next.simplelightbox', function(){
		console.log('Requested for next');
	})
	.on('prev.simplelightbox', function(){
		console.log('Requested for prev');
	})
	.on('nextImageLoaded.simplelightbox', function(){
		console.log('Next image loaded');
	})
	.on('prevImageLoaded.simplelightbox', function(){
		console.log('Prev image loaded');
	})
	.on('changed.simplelightbox', function(){
		console.log('Image changed');
	})
	.on('nextDone.simplelightbox', function(){
		console.log('Image changed to next');
	})
	.on('prevDone.simplelightbox', function(){
		console.log('Image changed to prev');
	})
	.on('error.simplelightbox', function(e){
		console.log('No image found, go to the next/prev');
		console.log(e);
	});
});