function moveToSlide2() {
	console.log("Function moveToSlide2() is reportedly functioning.")
	document.getElementById('slidetwo').style.display = 'block';
	document.getElementById('slideone').style.display = 'none'
}

function moveToSlide3() {
	document.getElementById('slidetwo').style.display = 'none';
	document.getElementById('slidethree').style.display = 'block';
}

function movetoslide4() {
	document.getElementById('slidethree').style.display = 'none';
	document.getElementById('slidefour').style.display = 'block';
	document.body.style.backgroundImage = "url('cricket-bg.jpg')";
}
function movetoslide5() {
	document.getElementById('slidefour').style.display = 'none';
	document.getElementById('slidefive').style.display = 'block';
	document.body.style.backgroundImage = "url('football.jpg')";
}

function movetoslide6() {
	document.getElementById('slidefive').style.display = "none";
	document.getElementById('slidesix').style.display = 'block';
	document.body.style.backgroundImage = "url('olympics.jpg')"
}