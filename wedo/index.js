function modifyText() {
		if(this.currentTime >= 0 && this.currentTime < 4) {
			var el = document.getElementById("lyrics");
			el.innerHTML = " ";
		}
		if(this.currentTime >= 4 && this.currentTime < 6) {
			var el = document.getElementById("lyrics");
			el.innerHTML = "Who controls the British crown?";
		}
		else if(this.currentTime >= 6 && this.currentTime < 8.5){
			var el = document.getElementById("lyrics");
			el.innerHTML = "Who keeps the metric system down?";
		}
		else if(this.currentTime >= 8.5 && this.currentTime < 12.5){
			var el = document.getElementById("lyrics");
			el.innerHTML = "We do, we do!";
		}
		else if(this.currentTime >= 12.5 && this.currentTime < 14.5){
			var el = document.getElementById("lyrics");
			el.innerHTML = "Who keeps Atlantis off the maps?";
		}
		else if(this.currentTime >= 14.5 && this.currentTime < 16.5){
			var el = document.getElementById("lyrics");
			el.innerHTML = "Who keeps the Martians under wraps?";
		}
		else if(this.currentTime >= 16.5 && this.currentTime < 21){
			var el = document.getElementById("lyrics");
			el.innerHTML = "We do, we do!";
		}
		else if(this.currentTime >= 21 && this.currentTime < 25){
			var el = document.getElementById("lyrics");
			el.innerHTML = "Who holds back the electric car?";
		}
		else if(this.currentTime >= 25 && this.currentTime < 29){
			var el = document.getElementById("lyrics");
			el.innerHTML = "Who makes Steve Guttenberg a star?";
		}
		else if(this.currentTime >= 29.5 && this.currentTime < 33.5){
			var el = document.getElementById("lyrics");
			el.innerHTML = "We do, we do!";
		}
		else if(this.currentTime >= 33.5 && this.currentTime < 35.5){
			var el = document.getElementById("lyrics");
			el.innerHTML = "Who robs cavefish of their sight?";
		}
		else if(this.currentTime >= 35.5 && this.currentTime < 38){
			var el = document.getElementById("lyrics");
			el.innerHTML = "Who rigs every Oscar night?";
		}
		else if(this.currentTime >= 38 && this.currentTime < 46){
			var el = document.getElementById("lyrics");
			el.innerHTML = "We do!";
		}
	}

	var v = document.getElementById("wedo");
	v.addEventListener("loadstart", function() { v.play(); }, true);
	v.addEventListener("timeupdate", modifyText);
