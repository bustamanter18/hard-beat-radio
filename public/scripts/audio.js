audio= document.getElementById('audio');

function reproducir()
{
	audio= document.getElementById('audio');
	audio.play();
}
function pausar()
{
	audio.pause();
	audio.currentTime = 0;
	audio=null
}
function ajustarVolumen()
{
	var volumenControl = document.getElementById("volumenControl");
	audio.volume = volumenControl.value;
}
function mutear()
{
	volumenControl.value=0;
	audio.volume = volumenControl.value;
}

