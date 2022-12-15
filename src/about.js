function createAbout() {
    const container = document.getElementById('container');
    document.body.style.backgroundImage = "url('img/about-background.jpg')";
    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-container');
    aboutContainer.setAttribute('id', 'about-container');

    const title = document.createElement('h3');
    title.classList.add('home-title');
    title.textContent = 'About Us';

    const text = document.createElement('p');
    text.classList.add('home-text');
    text.innerHTML = `Set out to serve fellow coffee addicts. <br>
                    coffee&coffee arouse out of necessity. <br>
                    We couldn't find a decent coffee to enjoy.<br>
                    So we said, "Fine, we'll do it ourselves."`;

    aboutContainer.appendChild(title);
    aboutContainer.appendChild(text);
 
    container.innerHTML = '';
    container.appendChild(aboutContainer);
};

export default createAbout;