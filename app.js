'use strict';

const form = document.querySelector('#shopping-list-form');
const inputText = document.querySelector('.shopping-list-input');
const listBoard = document.querySelector('.shopping-list-board');
const  listParent = document.querySelector('.shopping-list-item');
const button = document.querySelector('button');


button.addEventListener('click', (e) => {
    e.preventDefault();
    if(inputText.value.length == 0) {
        alert('Please write items')
    } else if(inputText.value.length != 0) {
    makeList();
    }
})

function makeList() {
    const li = document.createElement('li');
    li.textContent = inputText.value;
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'far fa-check-square');
    deleteButton.addEventListener('click', () => {
        li.parentNode.removeChild(li);
    })  
    li.appendChild(deleteButton);
    listParent.appendChild(li);  
    inputText.value = '';    
}

// function deleteList() {
//     window.addEventListener('load', () => {
//         li.parentNode.removeChild(li);
//     })
// }