const themeBtn = document.querySelector('.theme-btn'),
    imageDark = `<img src="./images/dark.png" alt="Moon" class="theme-img">`,
    imageLight = `<img src="./images/light.png" alt="Sun" class="theme-img">`,
    paragraph = document.querySelectorAll('[data-light-color]'),
    cards = document.querySelectorAll('[data-dark-card]'),
    titles = document.querySelectorAll('[data-white-text]');

const darkMode = () => {
	document.body.classList.add('dark');
    themeBtn.innerHTML = imageLight;

    paragraph.forEach(elem => elem.classList.add('light-color'));

    cards.forEach(elem => elem.classList.add('dark-card'));

    titles.forEach(elem => elem.classList.add('white-color'));

    localStorage.setItem("webTheme", "dark");
}

const lightMode = () => {
	document.body.classList.remove('dark');
    themeBtn.innerHTML = imageDark;

    paragraph.forEach(elem => elem.classList.remove('light-color'));

    cards.forEach(elem => elem.classList.remove('dark-card'));

    titles.forEach(elem => elem.classList.remove('white-color'));

    localStorage.setItem("webTheme", "light");
}

const changeTheme = () => {
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark');

        if (document.body.classList.contains('dark')) {
            darkMode()
        } else {
            lightMode();
        }
    })
}

document.addEventListener('DOMContentLoaded', () => {
    changeTheme();
    if (localStorage.getItem("webTheme") === "dark") {
        darkMode()
    }

    else if (localStorage.getItem("webTheme") === "light") {
    	lightMode();
    }
})