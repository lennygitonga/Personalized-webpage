let form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let name = document.querySelector('#name').value
    let age = document.querySelector('#age').value

    localStorage.setItem('name', name);
    localStorage.setItem('age', age);

    localStorage.getItem('name');
    localStorage.getItem('age');
});
