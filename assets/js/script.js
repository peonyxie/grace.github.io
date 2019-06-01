
$(document).ready(function() {
	const distanceToNextImage = -450;
	let currentImageNumber = 0;
	let value = 0;
	let numImagesCQ = 3;
	let numImagesBJ = 2;
	let numImagesMia = 4;
	let numImagesSF = 5;
	let numImagesLA = 2;
	let numImagesCan = 4;

	$("#lightboxBJ #right").click(function(){
		currentImageNumber += 1;
		currentImageNumber = currentImageNumber % numImagesBJ;
		value = (currentImageNumber * distanceToNextImage);
		$('#lightboxBJ #carousel-strip').css("left", value + "px");
	})
	$("#lightboxSF #right").click(function(){
		currentImageNumber += 1;
		currentImageNumber = currentImageNumber % numImagesSF;
		value = (currentImageNumber * distanceToNextImage);
		$('#lightboxSF #carousel-strip').css("left", value + "px");
	})
	$("#lightboxLA #right").click(function(){
		currentImageNumber += 1;
		currentImageNumber = currentImageNumber % numImagesLA;
		value = (currentImageNumber * distanceToNextImage);
		$('#lightboxLA #carousel-strip').css("left", value + "px");
	})
	
	
	$("#lightboxBJ #left").click(function(){
		currentImageNumber -= 1;
		currentImageNumber = currentImageNumber % numImagesBJ;
		value = (currentImageNumber * distanceToNextImage);
		$('#lightboxBJ #carousel-strip').css("left", value + "px");
	})
	$("#lightboxSF #left").click(function(){
		currentImageNumber -= 1;
		currentImageNumber = currentImageNumber % numImagesSF;
		value = (currentImageNumber * distanceToNextImage);
		$('#lightboxSF #carousel-strip').css("left", value + "px");
	})
	$("#lightboxLA #left").click(function(){
		currentImageNumber -= 1;
		currentImageNumber = currentImageNumber % numImagesLA;
		value = (currentImageNumber * distanceToNextImage);
		$('#lightboxLA #carousel-strip').css("left", value + "px");
	})
	
//click close, hide lightbox 
	$("#lightboxBJ #overlay, #lightboxBJ #close").click(function() {		
		$("#lightboxBJ").hide();
		currentImageNumber = 0;

	})
	$("#lightboxSF #overlay, #lightboxSF #close").click(function() {		
		$("#lightboxSF").hide();
		currentImageNumber = 0;

	})
	$("#lightboxLA #overlay, #lightboxLA #close").click(function() {		
		$("#lightboxLA").hide();
		currentImageNumber = 0;

	})
//click on icon, display lightbox 
	$('.icon#1').click(function(){
		$('#lightboxBJ #carousel-container').css("display", "inline")
		$("#lightboxBJ").show();		
		currentImageNumber = 0;
		value = (currentImageNumber * distanceToNextImage).toString();
		$('#carousel-strip').css("left", value + "px");
	})
	$('.icon#2').click(function(){
		$('#lightboxSF #carousel-container').css("display", "inline")
		$("#lightboxSF").show();		
		currentImageNumber = 0;
		value = (currentImageNumber * distanceToNextImage).toString();
		$('#carousel-strip').css("left", value + "px");
	})
	$('.icon#3').click(function(){
		$('#lightboxLA #carousel-container').css("display", "inline")
		$("#lightboxLA").show();		
		currentImageNumber = 0;
		value = (currentImageNumber * distanceToNextImage).toString();
		$('#carousel-strip').css("left", value + "px");
	})
})