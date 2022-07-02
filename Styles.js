const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName(){
    let name = prompt('Enter a new name');
    para.textContent = 'Perfil de Pedro' + name;
}