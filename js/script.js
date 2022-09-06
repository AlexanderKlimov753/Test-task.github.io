const menuBtn = document.querySelector('.burger');
const menu = document.querySelector('.list_burger');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
});
