const country = String(prompt("Введіть вашу країну / Enter your country (USA,UK,UA)"));

if (country == "USA" || country == "UK") {
    const numberCard = String(prompt("Enter your card number."))

    if (numberCard.length == 19) {

        const name = String(prompt("Enter your name."));
        
        if (name == '') {
            alert("The field is empty.")
        }

        else {
            const age = Number(prompt("Enter your  year of birth."));

            if (age <= 2005) {
                alert(`Good afternoon ${name}, your year of birth is - ${age}. Funds will be sent to your card ${numberCard}. By place of residence ${country}.`)
            }

            else {
                alert("Sorry, but you are not 18 years old.")
            };
        }
    }

    else {
        alert("The card number is incorrect.")
    };
}

else if (country == "UA") {
    const numberCard = String(prompt("Введіть номер вашої карти."));

    if (numberCard.length == 19) {
        const name = String(prompt("Введіть ваше ім'я."));
        
        if (name == '') {
            alert("Поле порожнє.")
        }

        else {
            const age = Number(prompt("Введіть ваш рік народження."));

            if (age <= 2005) {
                alert(`Доброго дня ${name}, ваш рік народження - ${age}. Кошти будуть відправлені на вашу карту - ${numberCard}. Ваша країна народження : ${country}.`)
            }

            else {
                alert("Вибач але тобі нема 18 років.")
            };
        }
    }

    else {
        alert("Номер карти невірний.")
    };
}

else {
    alert("Sorry, we do not work in your country.")
};