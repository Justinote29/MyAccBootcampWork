

window.onload = function () {
        Particles.init({
            selector: '.background'
        });

    };


var particles = Particles.init({
	selector: '.background',
    color:'#2382e1',
  connectParticles: true
});

$("#section2").parallax({
    imageSrc: 'assets/1.jpg'
});


$("#section3").parallax({
    imageSrc: 'assets/2.jpg'
});



