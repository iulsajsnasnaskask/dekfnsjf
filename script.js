const menu = document.querySelector('.menu');
const items = document.querySelectorAll('il');
const body = document.querySelector('body')
const navbar = document.getElementById('header');
const imgmenu = navbar.querySelector('.logo');

menu.addEventListener('click', () => {
    let h2text = navbar.querySelector('h2');
    if (navbar.className == 'false') {
    items.forEach(item => {
        item.style.display = 'block';
    });
    navbar.setAttribute('class', true)
    imgmenu.setAttribute('srcset', 'svg/logo.png')
    navbar.style.height = '400px'
    h2text.style.marginBottom = '320px'
    imgmenu.style.marginBottom = '320px'
    menu.style.marginBottom = '320px'
    let newil = navbar.createElement('il')
    newil.innerHTML = 'test'
} else {
    navbar.style.display = 'flex'
    navbar.style.height = '80px'
    h2text.style.marginBottom = '0px'
    imgmenu.style.marginBottom = '0px'
    menu.style.marginBottom = '0px'
    navbar.setAttribute('class', false)
}
});
setInterval(() => {
    let text = document.getElementById('prep')
    if (text.textContent == 'En préparation.') {
        text.innerHTML = 'En préparation..'
    } else if (text.textContent == 'En préparation..') {
        text.innerHTML = 'En préparation...'
    } else if (text.textContent == 'En préparation...') {
    text.innerHTML = 'En préparation'
} else if (text.textContent == 'En préparation') {
    text.innerHTML = 'En préparation.'
}
}, 1000)