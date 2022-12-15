import createHome from "./home";
import createAbout from "./about";
import createStore from "./store";
import createContact from "./contact";

function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    const title = document.createElement('h1');
    title.textContent = 'coffee&coffee';
    header.appendChild(title);
    header.appendChild(navBar());
    title.addEventListener('click',()=>{
        createHome();
    });

    return header;
}

function navBar() {
    const nav = document.createElement('nav');

    const home = document.createElement('button');
    home.classList.add('nav-button');
    home.setAttribute('id', 'home-button');
    home.textContent = 'Home';
    home.addEventListener('click',()=>{
        createHome();
    });

    const about = document.createElement('button');
    about.classList.add('nav-button');
    about.setAttribute('id', 'about-button');
    about.textContent = 'About';
    about.addEventListener('click',()=>{
        createAbout();
    });

    const store = document.createElement('button');
    store.classList.add('nav-button');
    store.setAttribute('id', 'store-button');
    store.textContent = 'Store';
    store.addEventListener('click',()=>{
        createStore();
    });

    const contact = document.createElement('button');
    contact.classList.add('nav-button');
    contact.setAttribute('id', 'contact-button');
    contact.textContent = 'Contact';
    contact.addEventListener('click', ()=>{
        createContact();
    });

    nav.appendChild(home);
    nav.appendChild(about);
    nav.appendChild(store);
    nav.appendChild(contact);

    return nav;
};

function createContainer (){
    const container = document.createElement('div');
    container.setAttribute('id', 'container');
    return container;
};

export default function pageLoad() {
    const content = document.getElementById('content');    
    content.appendChild(createHeader());
    content.appendChild(createContainer());
    createHome();   
};