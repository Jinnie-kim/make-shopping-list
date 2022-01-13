'use strict'

const shoppingBoard = document.querySelector('.shopping-board');
const addBtn = document.querySelector('.shopping-add-btn');
const input = document.querySelector('.shopping-input');

function onAdd () {
    const listItem = input.value;
    if(listItem === '') {
        input.focus();
        return;
    }
    const list = createLists(listItem);

    shoppingBoard.appendChild(list);

    list.scrollIntoView({
        block: 'center',
        behavior: 'smooth'
    })

    input.value = '';
    input.focus();
}

function createLists (listItem) {
    const listRow = document.createElement('li');
    listRow.setAttribute('class', 'shopping-list');

    const list = document.createElement('div');
    list.setAttribute('class', 'shopping-list-row');

    const text = document.createElement('span');
    text.setAttribute('class', 'shopping-list');
    text.innerText = listItem;

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'shopping-delete-btn');
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.addEventListener('click', () => {
        shoppingBoard.removeChild(listRow);
    })

    const itemDivider = document.createElement('div');
    itemDivider.setAttribute('class', 'shopping-divider');

    list.appendChild(text);
    list.appendChild(deleteBtn);
    
    listRow.appendChild(list);
    listRow.appendChild(itemDivider);

    return listRow;
}

addBtn.addEventListener('click', () => {
    onAdd();
})

input.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') {
        onAdd();
    }
})