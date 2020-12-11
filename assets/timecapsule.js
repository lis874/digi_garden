var loadMeme = function(event) {

	var image = new Image();
	var url = URL.createObjectURL(event.target.files[0]);
	image.src = url;


	theParent = document.getElementById("pictures");

	theParent.appendChild(image);

	theParent.insertBefore(image, theParent.firstChild);
};


var loadpic2= function(event) {

  var image = new Image();
  var url = URL.createObjectURL(event.target.files[0]);
  image.src = url;


  theParent = document.getElementById("pictures2");

  theParent.appendChild(image);

  theParent.insertBefore(image, theParent.firstChild);
};


var loadpic3= function(event) {

  var image = new Image();
  var url = URL.createObjectURL(event.target.files[0]);
  image.src = url;


  theParent = document.getElementById("pictures3");

  theParent.appendChild(image);

  theParent.insertBefore(image, theParent.firstChild);
};

