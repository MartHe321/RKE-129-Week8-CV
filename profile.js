const nameSpan = document.querySelector('#name');
const ageSpan = document.querySelector('#age');
const phoneSpan = document.querySelector('#phoneNumber');

window.onload = () => {
    fetch('profile.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        nameSpan.textContent = data.name;
        ageSpan.textContent = data.age;
        phoneSpan.textContent = data.telephone_number;
    })
    .catch(error => console.error('Error loading profile:', error));
};