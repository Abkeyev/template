function showMenu() {
	var menu = document.getElementById('menu')
	menu.classList.toggle('open')
}

document.addEventListener('DOMContentLoaded',
	function(){
		document.querySelectorAll('a[href^="#"]')
			.forEach(anchor => {
		    anchor.addEventListener('click',
		    	function (e) {
		        e.preventDefault();
		        document
		        	.querySelector(this.getAttribute('href'))
		        	.scrollIntoView({
		            behavior: 'smooth'
		        	});
		        if(anchor.id !== "top")
		        	showMenu()
		    	});
			});
	});

window.onscroll = function() {
	var top = document.getElementById('top')
	if(window.pageYOffset > 65) {
		top.classList.add('show')
	}else{
		top.classList.remove('show')
	}
}
















