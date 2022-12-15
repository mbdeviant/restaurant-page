function createStore() {
    const container = document.getElementById('container');
    document.body.style.backgroundImage = "url('img/store-background.jpg')";

    const storeContainer = document.createElement('div');
    storeContainer.classList.add('store-container');

    const item = createItem('COLD BREW BLEND',
        'Made for cold brewing. For those who likes a bitter taste in their coffee. Use cold and filtered water for better experience.');
    const item2 = createItem('BLUE MOUNTAIN BEANS',
        'Handpicked from the mountain slopes. From high altitudes and cold temperatures to your cozy and warm desk. Sweet.');
    const item3 = createItem('VOLCANICA',
     'Good quality, solid taste. Volcanica has one of the biggest seeds. Appearance can be misleading but not this time.');
    const item4 = createItem('KONA COFFEE BEAN',
     'This coffee has it\'s own mood. Grown in rich soils, baked with Sun and washed with rain. Right conditions to be perfect.');





    storeContainer.appendChild(item);
    storeContainer.appendChild(item2);
    storeContainer.appendChild(item3);
    storeContainer.appendChild(item4);


    container.innerHTML = '';
    container.appendChild(storeContainer);
}

function createItem(title, text) {
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('item-container');

    const img = document.createElement('img');
    img.src = "img/store-asset.jpg";
    img.classList.add('store-item-img');

    const itemTitle = document.createElement('h4');
    itemTitle.classList.add('store-item-title');
    itemTitle.textContent = title;

    const itemText = document.createElement('p');
    itemText.classList.add('store-item-text');
    itemText.textContent = text;

    itemContainer.appendChild(img);
    itemContainer.appendChild(itemTitle);
    itemContainer.appendChild(itemText);

    return itemContainer;
}

export default createStore;