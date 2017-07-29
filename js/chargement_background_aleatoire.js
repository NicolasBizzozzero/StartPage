function get_random_number(ceil) {
	return Math.floor(Math.random() * ceil)
}

function change_background(image) {
	document.getElementById("background_image").style.backgroundImage = "url(" + image + ")";
}

function construct_image_name(path, name, number, extension) {
	return path + name + number + extension;
}

function change_background_with_a_random_image(path, image_name, extension, number_of_backgrounds_in_directory) {
	var random_image = construct_image_name(path, image_name, get_random_number(number_of_backgrounds_in_directory), extension);
	change_background(random_image);
}

;(function () {
    "use strict";
    var NUMBER_OF_BACKGROUNDS_IN_DIRECTORY = 29;
    var path = "../res/backgrounds/";
    var image_name = "bg";
    var extension = ".jpg";
    change_background_with_a_random_image(path, image_name, extension, NUMBER_OF_BACKGROUNDS_IN_DIRECTORY);
})();