


document.querySelector('html').classList.remove('no-js');
document.querySelector('html').classList.add('js-active');


//menu deroulant mode mobile

const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('is-open');
    });
});

