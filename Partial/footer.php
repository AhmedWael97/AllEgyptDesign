
		
<section class="Section9">
	<div class="container">
		 <div class="col-lg-2">
			<p><b>GET In Touch</b></p>
			<hr class="Sec9Hr">
			<p>Connect with us .. </p>
			<p><span class="glyphicon glyphicon-home"></span> 14st, Giza Egypt</p>
			<p><span class="glyphicon glyphicon-earphone"></span>   0111111111</p>
			<img src="imgs/one_second_delay.gif" class="LogoImageFooter">
		</div>
		<div class="col-lg-6">
			<p class="text-center"><b>QuickLinks</b></p>
			<hr>
			<div class="row">
				<div class="col-lg-2">
				</div>
				<div class="col-lg-4">
						<a>Awards</a>
						<br>
						<a>Egypt's Attractions</a>
						<br>
						<a>Facts and information </a>
						<br>
						<a>Our Promise to you </a>
						<br>
						<a>Payment Policy </a>
						<br>
						<a>Sleeping trains in Egypt </a>
						<br>
						
				</div>
				<div class="col-lg-4">
					<a>Trade Fairs 2018 - 2019 </a>
					<br>
					<a>Visa Online </a>
					<br>
					<a>What We Do </a>
					<br>
					<a>Why Go Travel Egypt </a>
					<br>
					<a>Word to our Visitor</a>
				</div>
			</div>
			<br>
			<br>
			<br>
			<div class="row">
				<div class="col-lg-2">
					
				</div>
			<div class="col-lg-10">
				<form>
					 <div class="text-center">
					 	 <div class="input-group">
					      <input type="text" class="form-control" placeholder="MILING LIST">
					      <span class="input-group-btn">
					        <button class="btn btn-default BtnFooter" type="button"><span class="glyphicon glyphicon-heart text">
									</span> Thanks</button>
					      </span>
					    </div>
					 </div>
				</form>
			</div>
		  </div>
		</div>

		<div class="col-lg-4">
			<div class="text-center">
				<p><b>FLICKER STEAM</b></p>
			</div>
				<hr>
			<img src="imgs/travel.jpg" width="100%" class="FooterImage">
			<div class="SocialIcons">
				<img src="imgs/skype.png" width="10%" class="SocialImage">
				<img src="imgs/viper.png" width="10%" class="SocialImage">
				<img src="imgs/w.png" width="10%" class="SocialImage">
				<img src="imgs/youtupe.png" width="10%" class="SocialImage">
				<img src="imgs/line.png" width="10%" class="SocialImage">
				<img src="imgs/googel-plus.png" width="10%" class="SocialImage">
				<img src="imgs/facebook.png" width="10%" class="SocialImage">
			</div>
		</div>
	</div>
	<div class="text-center">
			<div class="container row text-center Links">
					<a class="FooterLinks">Nile Cruises</a>
					<a class="FooterLinks">Nile Dahabiya</a>
					<a class="FooterLinks">Plan Accomodations</a>		
					<a class="FooterLinks">Plan A Holiday</a>
					<a class="FooterLinks"> Register Partnership</a>
			</div>
			<br>
		<p><b>
			© 2018 Go Travel Egypt | Copyright by Smart Geeks
		</b></p>
	</div>
</section>



 <script src="js/mixitup.min.js"></script>

        <script>
            var containerEl = document.querySelector('[data-ref~="mixitup-container"]');

            var mixer = mixitup(containerEl, {
                selectors: {
                    target: '[data-ref~="mixitup-target"]'
                }
            });

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
		document.getElementById(hoverID).style.display="block";
	document.getElementById(hoverID).classList.remove('rollOut');
	document.getElementById(hoverID).classList.add('rollIn');


}

function HideMixHover(id)
{
	var hoverID = "overlay"+id[id.length-1];
		document.getElementById(hoverID).classList.add('rollOut');
		document.getElementById(hoverID).classList.remove('rollIn');


	setTimeout(function(){
		document.getElementById(hoverID).style.display='none';
	},1000);
	
}
        </script>
<!-- <script src="js/JavaScript.js"></script> -->
<script src="js/slickk.js"></script>
<script src="js/Slider.js"></script>
