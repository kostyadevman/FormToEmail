'use strict'

const form = document.querySelector('.order__form');

// const obj = {
//     legend: '',
//     inputs: [ ]
// };

// const inputObj = {
//     name: '',
//     type: ''
//     value: '',
//     label: '',
//     checked: bool
// }

const objList = [];

console.log(form);
form.querySelectorAll('.form__fieldset').forEach(item => {
    let obj = {};

    obj.legend = item.querySelector('legend').textContent
    obj.inputs = []

    item.querySelectorAll('input').forEach(i => {
        let inputObj = {}
        inputObj.name = i.name
        inputObj.type = i.type
        inputObj.value = i.value
        inputObj.label = i.labels[0].textContent
        inputObj.checked = i.checked
        obj.inputs.push(inputObj);
    })
    console.log(obj)
    objList.push(obj);
});


const makeReport = () => {
    objList.forEach(item => {
        console.log(item.legend + '\n');
        item.inputs.forEach(i => {
            console.log(i.label + ' :' + i.value);
        })
    });
};
makeReport()



// TODO
// 1. Посмотри как работать с FormData
// 2. Бери выбранные поля ( см. index.html ) и сформируй заказ
// 3. Разберись как отправить сформированный отчет на почту. Например https://smtpjs.com/
