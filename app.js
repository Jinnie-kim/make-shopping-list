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

let id = 0;
function createLists (listItem) {
    const listRow = document.createElement('li');
    listRow.setAttribute('class', 'shopping-list');
    listRow.setAttribute('data-id', id);
    listRow.innerHTML = `
                <div class="shopping-list-row">
                    <span class="shopping-list">${listItem}</span>
                    <button class="shopping-delete-btn">
                        <i class="fas fa-trash" data-id=${id}></i>
                    </button>
                </div>
                <div class="shopping-divider"></div>`;
        id++;
    return listRow;
}

addBtn.addEventListener('click', () => {
    onAdd();
});

input.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') {
        onAdd();
    }
});

shoppingBoard.addEventListener('click', (event) => {
    const id = event.target.dataset.id
    if(id) {
        const toBeDeleted = document.querySelector(`.shopping-list[data-id="${id}"]`);
        toBeDeleted.remove();
    }
});