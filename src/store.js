function createStore(){
    const container = document.getElementById('container');
    document.body.style.backgroundImage = "url('img/store-background.jpg')";
    const storeContainer = document.createElement('div');
    const title = document.createElement('h3');
    title.textContent = 'Welcome to Store!';
    

    storeContainer.appendChild(title)
    container.innerHTML = '';
    container.appendChild(storeContainer);
}

export default createStore;