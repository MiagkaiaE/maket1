const accordionButtons = document.querySelectorAll('.accordion-item');
console.log(accordionButtons);

for (let button of accordionButtons) {
	// закрываем, если меню другой кнопки раскрыто
	button.addEventListener('click', () => {
		accordionButtons.forEach(otherButton => {
			if (otherButton !== button) {
				 otherButton.parentElement.classList.remove('active');
				 console.log('меню закрыто (другой пункт)');
			}
		});
		button.parentElement.classList.toggle('active');
	})
}

const idEmail = document.getElementById("email");
idEmail.addEventListener ()