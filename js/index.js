//'use strict'

window.addEventListener('load', () => {
	const sounds = document.querySelectorAll(".sound")
	const pads   = document.querySelectorAll(".pads div")
	const visual = document.querySelector(".visual")
	const vis    = document.querySelector(".visualizer")
	const time   = document.querySelectorAll(".time")
	const colors = [
		"#60d394",
		"#d36060",
		"#c060d3",
		"#d3d160",
		"#6860d3",
		"#60b2d3"
	]

	//dealing with the sounds
	/*pads.forEach((pad, index) => {
		pad.addEventListener('click', function() {
			sounds[index].currentTime = 0
			sounds[index].play()
		})
	})*/

	console.log(this)
	console.log(Audio)

	for (let i = 0; i < pads.length; i++) {
		pads[i].addEventListener('click',function(e) {
			
			//play if the song is not playing
			if (sounds[i].paused) {
				sounds[i].play()
			}
			//pause if the song is playing
			else if (sounds[i].played) {
				sounds[i].pause()
			}

			//show current time of the playing song
			setInterval(function() {
				time[i].innerText = sounds[i].currentTime
			},1000)

			//start visualizer
			createBubbles(i)
			vis.classList.add('run')
		})

		pads[i].addEventListener('dblclick',function(e) {
			sounds[i].currentTime = 0;
		})
	}

	//function that is creating visuals for the app
	const createBubbles = (currentIndex) => {
		const bubble = document.createElement("div")
		visual.appendChild(bubble)
		bubble.style.backgroundColor = colors[currentIndex]
		bubble.style.animation       = 'jump 3s ease'
		vis.style.backgroundColor    = colors[currentIndex]
		bubble.addEventListener('animationend', function() {
			visual.removeChild(this)
		})
	}
})