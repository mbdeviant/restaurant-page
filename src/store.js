function createStore() {
    const container = document.getElementById('container');
    document.body.style.backgroundImage = "url('img/store-background.jpg')";

    const storeContainer = document.createElement('div');
    storeContainer.classList.add('store-container');

    const testitem = createItem('COLD BREW BLEND',
        'Made for cold brewing. For those who likes a bitter taste in their coffee. Use cold and filtered water for better experience.');
    const testitem2 = createItem('BLUE MOUNTAIN BEANS',
        'Handpicked from the mountain slopes. From high altitudes and cold temperatures to your cozy and warm desk. Sweet.');
    const testitem3 = createItem('VOLCANICA',
     'Good quality, solid taste. This coffee has one of the biggest seeds. Appearance can be misleading but not this time.');
    const testitem4 = createItem('KONA COFFEE BEAN',
     'This coffee has it\'s own mood. Grown in rich soils, baked with Sun and washed with rain. Right conditions to be perfect.');





    storeContainer.appendChild(testitem);
    storeContainer.appendChild(testitem2);
    storeContainer.appendChild(testitem3);
    storeContainer.appendChild(testitem4);


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

    itemContainer.appendChild(img)
    itemContainer.appendChild(itemTitle);
    itemContainer.appendChild(itemText);

    return itemContainer;
}

export default createStore;