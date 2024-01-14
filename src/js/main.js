/*document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('js-enabled');

const jumpElement = document.querySelector('.jump');
const jumpText = jumpElement.textContent;

for (let i = 0; i < 24; i++) {
    let tableau = jumpText[i];
    jumpElement.insertAdjacentHTML('beforeend',`<span>${tableau}</span`);
}*/


document.querySelector('html').classList.add('js-enabled');

const h1Selector = document.querySelector('.jump');
const lettresSeparees = h1Selector.textContent;
function removeH1 (){
    h1Selector.textContent = '';
}
removeH1();

for (const lettre of lettresSeparees) {
    const nbsp = '\u00A0';
    if (lettre === lettre){
    h1Selector.insertAdjacentHTML('beforeend', `<span>${lettre}</span>` );
    }
    if (lettre === ' '){
        h1Selector.insertAdjacentHTML('beforeend', `<span>${nbsp}</span>`);
    }
}








































