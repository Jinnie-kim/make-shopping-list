'use strict'

const shoppingBoard = document.querySelector('.shopping-board');
const addBtn = document.querySelector('.shopping-add-btn');
const input = document.querySelector('.shopping-input');

function onAdd () {
    const listItem = input.value;

    const list = createLists(listItem);

    shoppingBoard.appendChild(list);

    input.value = '';
    input.focus();

}

function createLists (listItem) {

    const list = document.createElement('div');
    list.setAttribute('class', 'shopping-list');
    
    const listRow = document.createElement('li');
    listRow.setAttribute('class', 'shopping-list-row');

    const text = document.createElement('span');
    text.setAttribute('class', 'shopping-list');
    text.innerText = listItem;

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'shopping-delete-btn');
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.addEventListener('click', () => {
        list.removeChild(listRow);
    })

    listRow.appendChild(text);
    listRow.appendChild(deleteBtn);

    list.appendChild(listRow);

    return list;
}

addBtn.addEventListener('click', () => {
    onAdd();
})