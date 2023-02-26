const submit = document.getElementById('submit').addEventListener('click', () => {
    const num = parseFloat(document.querySelector('.number').value);
    const deg = parseInt(document.querySelector('.degree').value);
    function power(num, deg) {
        if (deg === 0) {
            return 1;
        }
        if (deg > 0) {
            return num * power(num, deg - 1);
        } else {
            return 1 / (num * power(num, -deg - 1));
        }
    }
    const numDone = power(num, deg);
    function renderElementsOnPage(numDone) {
        let html = '';
        html += `<div class="rend">
        <h1 class="complit-number">${numDone}</h1>
        </div>`
        const TARGET = document.querySelector('.result');
        TARGET.innerHTML = html;
    }
    renderElementsOnPage(numDone);
});




