import createStore from "./store";

function createHome() {
    const container = document.getElementById('container');
    document.body.style.backgroundImage = "url('img/background.jpg')";
    const homeContainer = document.createElement('div');
    homeContainer.classList.add('home-container');
    homeContainer.setAttribute('id', 'home-container');

    const title = document.createElement('h3');
    title.classList.add('home-title');
    title.textContent = 'YOUR BEST COMPANION';

    const text = document.createElement('p');
    text.classList.add('home-text');
    text.innerHTML = `is usually a cup of coffee. <br> When you wake up, <br> while working,<br>or with a friend.<br>
                      So make it count, <br> with coffee&coffee.`;

    const button = document.createElement('button');
    button.classList.add('home-button');
    button.textContent = 'Go to Store';
    button.addEventListener('click', () => {
        createStore();
    });

    homeContainer.appendChild(title);
    homeContainer.appendChild(text);
    homeContainer.appendChild(button);

    container.innerHTML = '';
    container.appendChild(homeContainer);
};

export default createHome;