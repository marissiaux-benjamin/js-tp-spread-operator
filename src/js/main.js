document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('js-enabled');

const jumpElement = document.querySelector('.jump');
const jumpText = jumpElement.textContent

for (let i = 0; i < 24; i++) {
    let tableau = jumpText[i];
    jumpElement.insertAdjacentHTML('beforeend',`<span>${tableau}</span`);
}












