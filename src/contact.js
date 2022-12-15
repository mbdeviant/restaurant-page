function createContact() {
    const container = document.getElementById('container');
    document.body.style.backgroundImage = "url('img/contact-background.jpg')";

    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');

    const title = document.createElement('h3');
    title.classList.add('home-title');
    title.textContent = 'Contact';

    const text = document.createElement('p');
    text.classList.add('home-text');
    text.innerHTML = `Currently, we do all the marketing online. <br>
                     If you'd like to contact us,<br> here's our mail address and phone number.<br>
                     coffewcoffee@loremipsum.com <br>
                     +1327 7777 47`;
    const ps = document.createElement('p');
    ps.classList.add('ps');
    ps.innerHTML = `PS: We don't have room service.`;

    contactContainer.appendChild(title);
    contactContainer.appendChild(text);
    contactContainer.appendChild(ps);

    container.innerHTML = '';
    container.appendChild(contactContainer);
    
};

export default createContact;