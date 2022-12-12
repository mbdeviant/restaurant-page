function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    const title = document.createElement('h1');
    title.textContent = 'coffee&coffee';
    header.appendChild(title);
    header.appendChild(navBar());

    return header;
}

function navBar() {
    const nav = document.createElement('nav');

    const home = document.createElement('button');
    home.classList.add('nav-button');
    home.setAttribute('id', 'home-button');
    home.textContent = 'Home';

    const about = document.createElement('button');
    about.classList.add('nav-button');
    about.setAttribute('id', 'about-button');
    about.textContent = 'About';

    const store = document.createElement('button');
    store.classList.add('nav-button');
    store.setAttribute('id', 'store-button');
    store.textContent = 'Store';

    const contact = document.createElement('button');
    contact.classList.add('nav-button');
    contact.setAttribute('id', 'contact-button');
    contact.textContent = 'Contact';

    nav.appendChild(home);
    nav.appendChild(about);
    nav.appendChild(store);
    nav.appendChild(contact);

    return nav;
}

function home() {
    const container = document.createElement('div');
    container.classList.add('home-container');

    const title = document.createElement('h3');
    title.classList.add('home-title');
    title.textContent = 'YOUR BEST COMPANION';

    const text = document.createElement('p');
    text.classList.add('home-text');
    text.innerHTML = `is usually a cup of coffee. <br> When you wake up, <br> while working,<br>or with a friend.<br>
                      So make it count, <br> with coffee&coffee.`
    
    const button = document.createElement('button');
    button.classList.add('home-button');
    button.textContent = 'Visit Store';


    container.appendChild(title);
    container.appendChild(text);
    container.appendChild(button);
    //add a button href to store


    return container;
}


function pageLoad() {
    const content = document.getElementById('content');
    content.appendChild(createHeader());
    content.appendChild(home());

}


export default pageLoad;


