	function plyvido()
	{
		document.getElementById('ActiveVideo').play();
		document.getElementById('play').style.display="none";
		document.getElementById('stop').style.display="block";
	}
	function stpVido()
	{
		document.getElementById('ActiveVideo').pause();
		document.getElementById('stop').style.display="none";
		document.getElementById('play').style.display="block";play
	}
	function ShowActive() {
		document.getElementById('ActiveVideoHover').style.display='block';
	}
	function ShowSmall(id) {
		var hover ="SmallVideo"+id[id.length-1];
		document.getElementById(hover).style.display='block';
	}
	function HideActive() {
		document.getElementById('ActiveVideoHover').style.display='none';
	}
	function HideSmall(id) {
		var hover ="SmallVideo"+id[id.length-1];
		document.getElementById(hover).style.display='none';
	}
	function BackClasses(id) {
		  setTimeout(
		    function() {

		      document.getElementById('ActiveVideo').classList.remove('zoomOutLeft');
			document.getElementById(id).classList.remove('zoomInRight');
		    }, 2000);
		}
	function MovingVideos(num)
	{
		var id = "MiniVideoPart"+num
		var idVideo = "VideoNumber"+num
		document.getElementById('ActiveVideo').classList.add('zoomOutLeft');
		document.getElementById(id).classList.add('zoomInRight');

		

		setTimeout(
		    function() {

		     var video1 = document.getElementById('ActiveVideo');
			var video2 = document.getElementById(idVideo);
			var temp = '';
			temp = video1.src;
			video1.src = video2.src;
			video2.src = temp;
			    }, 1119);

		BackClasses(id);
	}
window.onscroll = function() {
	scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}


function topFunction() {
    var body = $("html, body");
body.stop().animate({scrollTop:0}, 500, 'swing', function() { 
   
});
}

function ShowContactUs()
{
	var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

function ShowMixHover(id)
{
	var hoverID = "overlay"+id[id.length-1];

	document.getElementById(hoverID).style.display ="block";
}