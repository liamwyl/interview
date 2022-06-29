window.onload = function() {
	var b1 = document.getElementById('b1')
	var b2 = document.getElementById('b2')
	var b3 = document.getElementById('b3')
	var b4 = document.getElementById('b4')
	var b5 = document.getElementById('b5')
	var b6 = document.getElementById('b6')
	var b7 = document.getElementById('b7')
	var b8 = document.getElementById('b8')
	var b9 = document.getElementById('b9')

	b1.onclick = function() {
		b2.style.width = 0
		b2.innerHTML = ''
		b3.style.width = 0
		b3.innerHTML = ''
		b1.style.left = 0 + 'px'
		b1.style.top = 0 + 'px'
		setTimeout(function() {
			b4.style.display = 'block'
			b5.style.display = 'block'
			b6.style.display = 'block'
		}, 0)
	}

	b4.onclick = function() {
		b5.style.width = 0
		b5.innerHTML = ''
		b6.style.width = 0
		b6.innerHTML = ''
		b4.style.left = -310 + 'px'
		b4.style.top = 105 + 'px'
		setTimeout(function() {
			b7.style.display = 'block'
			b8.style.display = 'block'
			b9.style.display = 'block'
		}, 0)
	}

	b7.onclick = function() {
		b8.style.width = 0
		b8.innerHTML = ''
		b9.style.width = 0
		b9.innerHTML = ''
		b7.style.left = -619 + 'px'
		b7.style.top = 209 + 'px'
	}
}
