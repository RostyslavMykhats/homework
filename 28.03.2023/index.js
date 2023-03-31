// task 1
let shoppingList = [];

// Функція для виведення списку покупок
function printShoppingList() {
    console.log("Список покупок:");
    // Сортуємо список за статусом покупки (куплено/не куплено) та виводимо елементи
    shoppingList.sort((a, b) => a.isBought - b.isBought).forEach(item => {
        console.log(`${item.name} (${item.quantity}) - ${item.isBought ? "куплено" : "не куплено"}`);
    });
}

// Функція для додавання покупки до списку
function addShoppingListItem(name, quantity) {
    // Шукаємо чи існує вже продукт з такою назвою в списку
    let itemIndex = shoppingList.findIndex(item => item.name === name);
    if (itemIndex !== -1) {
        // Якщо продукт існує, то збільшуємо його кількість
        shoppingList[itemIndex].quantity += quantity;
    } else {
        // Якщо продукту немає в списку, то додаємо його як новий елемент
        shoppingList.push({
            name: name,
            quantity: quantity,
            isBought: false
        });
    }
}

// Функція для позначення покупки як придбаної
function buyShoppingListItem(name) {
    // Шукаємо продукт з такою назвою в списку
    let itemIndex = shoppingList.findIndex(item => item.name === name);
    if (itemIndex !== -1) {
        // Якщо продукт знайдено, то позначаємо його як придбаний
        shoppingList[itemIndex].isBought = true;
    } else {
        // Якщо продукту немає в списку, то виводимо повідомлення про помилку
        console.log(`Помилка: продукт ${name} не знайдено в списку покупок.`);
    }
}


// task 2
let receipt = [
    { name: "Хліб", quantity: 2, price: 10 },
    { name: "Молоко", quantity: 1, price: 20 },
    { name: "Яйця", quantity: 12, price: 2 },
    { name: "Картопля", quantity: 5, price: 5 },
    { name: "Масло", quantity: 1, price: 30 },
];

function printReceipt(receipt) {
    console.log("Чек:");
    for (let item of receipt) {
        console.log(`${item.name} x ${item.quantity} - ${item.price} грн.`);
    }
}

function calculateTotal(receipt) {
    let total = 0;
    for (let item of receipt) {
        total += item.quantity * item.price;
    }
    return total;
}

function getMostExpensiveItem(receipt) {
    let mostExpensive = null;
    for (let item of receipt) {
        if (!mostExpensive || item.price > mostExpensive.price) {
            mostExpensive = item;
        }
    }
    return mostExpensive;
}

function getAveragePrice(receipt) {
    let totalQuantity = 0;
    let totalPrice = 0;
    for (let i = 0; i < receipt.length; i++) {
        totalQuantity += receipt[i].quantity;
        totalPrice += receipt[i].quantity * receipt[i].price;
    }
    return totalPrice / totalQuantity;
}


// task 3
const styles = [
    { name: 'color', value: 'red' },
    { name: 'font-size', value: '20px' },
    { name: 'text-align', value: 'center' },
    { name: 'text-decoration', value: 'underline' }
];

function applyStyles(styles, text) {
    let styleString = '';
    styles.forEach(style => {
        styleString += `${style.name}: ${style.value}; `;
    });
    document.write(`<p style="${styleString}">${text}</p>`);
}

applyStyles(styles, 'Hello world!');

// task 4
// масив аудиторій
const classrooms = [
    { name: '101', capacity: 20, faculty: 'IT' },
    { name: '102', capacity: 15, faculty: 'IT' },
    { name: '201', capacity: 18, faculty: 'Management' },
    { name: '202', capacity: 12, faculty: 'Management' },
    { name: '301', capacity: 16, faculty: 'Marketing' },
    { name: '302', capacity: 14, faculty: 'Marketing' },
];

// функція для виведення всіх аудиторій
function showAllClassrooms() {
    console.log('All classrooms:');
    classrooms.forEach(classroom => console.log(classroom));
}

// функція для виведення аудиторій для зазначеного факультету
function showClassroomsForFaculty(faculty) {
    console.log(`Classrooms for ${faculty}:`);
    const filteredClassrooms = classrooms.filter(classroom => classroom.faculty === faculty);
    filteredClassrooms.forEach(classroom => console.log(classroom));
}

// функція для виведення аудиторій, що підходять для переданої групи
function showClassroomsForGroup(group) {
    console.log(`Classrooms for group from ${group.faculty} with ${group.studentsCount} students:`);
    const filteredClassrooms = classrooms.filter(classroom => classroom.faculty === group.faculty && classroom.capacity >= group.studentsCount);
    filteredClassrooms.forEach(classroom => console.log(classroom));
}

// функція для сортування аудиторій за кількістю місць
function sortClassroomsByCapacity() {
    console.log('Classrooms sorted by capacity:');
    const sortedClassrooms = classrooms.sort((a, b) => a.capacity - b.capacity);
    sortedClassrooms.forEach(classroom => console.log(classroom));
}

// функція для сортування аудиторій за назвою
function sortClassroomsByName() {
    console.log('Classrooms sorted by name:');
    const sortedClassrooms = classrooms.sort((a, b) => a.name.localeCompare(b.name));
    sortedClassrooms.forEach(classroom => console.log(classroom));
}

// виклики функцій для демонстрації їх роботи
showAllClassrooms();
showClassroomsForFaculty('IT');
showClassroomsForGroup({ faculty: 'Marketing', studentsCount: 15 });
sortClassroomsByCapacity();
sortClassroomsByName();
