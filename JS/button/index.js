
const parentElements = document.getElementsByClassName("parent-block");

for (let index = 0; index < parentElements.length; index++) {
    const btnElement = parentElements[index];
    const createBtn = document.createElement('button');
    createBtn.textContent = 'Save';
    createBtn.style.width = "80%";
    createBtn.style.height = "10%";
    createBtn.style.marginBottom = "5%";
    btnElement.appendChild(createBtn);
};



