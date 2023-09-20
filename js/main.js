let workSelection = document.querySelectorAll ('.work')
let workLinks = document.querySelector('.work-links')

function showNav() {
    workLinks.classList.add('show');
}

function hideNav() {
    workLinks.classList.remove('show');
};

workSelection.forEach(work => work.addEventListener('mouseenter', showNav));
workSelection.forEach(work => work.addEventListener('mouseleave', hideNav));

//Appendix

//Prompt: Hi, what's wrong with this code? -inserted code-
//Return: You are trying to use forEach on workSelection, but it's a single DOM element, not a collection. To select multiple elements with the class 'work', you should use document.querySelectorAll('.work')