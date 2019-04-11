function showMenu() {
	var menu = document.getElementById('menu')
	menu.classList.toggle('open')
}

function modalClose() {
	document.querySelector('.modal-over').classList.remove('show')
	document.querySelector('body').style.overflowY = 'scroll'
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

		var menu = document.querySelectorAll('ul.menu > li > a')
		var currentMenu = document.querySelector('a.current')
		for(var i=0;i<menu.length;i++){
			menu[i].addEventListener('click',
				function(e){
					e.preventDefault();
					currentMenu.classList.remove('current')
					currentMenu = this
					this.classList.add('current')
				})
		}
		var works = document.querySelectorAll('.work-items > div')
		const modalInnerHtml = document.querySelector('.modal').innerHTML
		for(var i=0;i<works.length;i++){
			works[i].addEventListener('click',
				function(e){
					document.querySelector('.modal-over').classList.add('show')
					var modal = document.querySelector('.modal')
					modal.innerHTML = modalInnerHtml + this.innerHTML
					document.querySelector('body').style.overflowY = 'hidden'
				})
		}
		let array = [4,8,12,99,0,47,98,15,78]
		console.log(array.length)
		for(i=0;i<array.length;i++){
			for(j=0;j<array.length - 1;j++){
				if(array[j] > array[j+1]){
					var temp = array[j]
					array[j] = array[j+1]
					array[j+1] = temp
				}
			}
		}
		console.log(array)
	});

window.onscroll = function() {
	var top = document.getElementById('top')
	var header = document.getElementsByTagName('header')[0]
	if(window.pageYOffset > 65) {
		top.classList.add('show')
		header.classList.add('scroll')
	}else{
		top.classList.remove('show')
		header.classList.remove('scroll')
	}
}



