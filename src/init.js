function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    const title = document.createElement('h3');
    title.textContent = 'coffee&coffee'
    header.appendChild(title)
    header.appendChild(navBar());



    return header
}

function navBar() {
    const nav = document.createElement('nav');

    const about = document.createElement('button');
    about.classList.add('nav-button');
    about.textContent = 'About';

    const menu = document.createElement('button');
    menu.classList.add('nav-button');
    menu.textContent = 'Menu';

    const contact = document.createElement('button');
    contact.classList.add('nav-button');
    contact.textContent = 'Contact';
    



    nav.appendChild(about);
    nav.appendChild(menu);
    nav.appendChild(contact);

    return nav
}


function pageLoad() {
    console.log('heh');
    content.appendChild(createHeader());

}


export default pageLoad;


//create seperate header content bla bla functions, gather them
//in one function and call from index