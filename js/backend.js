'use strict'

const form = document.querySelector('.order__form');

const formData = new FormData(form);

const key_description_map = new Map()
const key_value_map = new Map()

// let labels = document.getElementsByName('label')

for (let[name, value] of formData) {
    // console.log(`${name} = ${value}`)
    key_value_map.set(name, value);
    const input_elements = document.getElementsByName(name);
    console.log(input_elements.length)

    // in type = radio first element = checked
    const input_element = input_elements[0];

    for (let i = 0; i < input_element.labels.length; i++) {
        let label_element = input_element.labels[i];
        // console.log(`${name} = ${label_element.textContent}`)
        key_description_map.set(name, label_element.textContent);
    }
}

if (key_value_map.size !== key_description_map.size) {
    alert('Error');
}


let result_str;
result_str = '';
for (let [key, value] of key_value_map.entries()) {
    result_str += key_description_map.get(key) + " " + value + "\n";
    // result_str.concat('123');
}

// TODO:
//  как динамически можно выйти на title в элементах radio ?

console.log(result_str);



// TODO
// 1. Посмотри как работать с FormData
// 2. Бери выбранные поля ( см. index.html ) и сформируй заказ
// 3. Разберись как отправить сформированный отчет на почту. Например https://smtpjs.com/
