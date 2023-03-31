class Style {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
}

const STYLES = [
    new Style('background-color', 'red'),
    new Style('color', 'white'),
    new Style('font-size', '20px'),
    new Style('padding', '10px'),
    new Style('margin', '10px'),
    new Style('border', '1px solid black'),
    new Style('border-radius', '5px')
] 

function printText () {
    let html = '';
    STYLES.forEach((style)=>{
        html += `<div style="${style.name}: ${style.value}">${style.name}: ${style.value}</div>`
    })
    document.write(
        html
    )
}

printText();