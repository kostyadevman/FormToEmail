'use strict'

const form = document.querySelector('.order__form');
const submit = form.querySelector('.form__submit');
const inputType = {
    NUMBER: 'number',
    RADIO: 'radio',
    TEXT: 'text',
    PHONE: 'phone',
    EMAIL: 'email'
}
// const obj = {
//     legend: '',
//     inputs: []
// };

// const inputObj = {
//     name: '',
//     type: ''
//     value: '',
//     label: '',
//     checked: bool,
//     description: ''
// }

const objList = [];

const getVisibleElement = (element) => {
    return (element.classList.contains('visually-hidden')) ? '' : element.textContent;
}

const getDescription = (input) => {
    let description = ''
    const section = input.closest('section');
    if (section) {
        description =  getVisibleElement(section.querySelector('h2'));
    }

    return description;
}

const getFormElements = () => {
    form.querySelectorAll('.form__fieldset').forEach(item => {
        let obj = {};

        obj.legend = getVisibleElement(item.querySelector('legend'));
        obj.inputs = []
        item.querySelectorAll('input, textarea').forEach(i => {
            let inputObj = {}
            inputObj.name = i.name
            inputObj.type = i.type
            inputObj.value = i.value
            inputObj.label = getVisibleElement(i.labels[0])
            inputObj.checked = i.checked
            inputObj.description = getDescription(i)
            obj.inputs.push(inputObj);
        })
        objList.push(obj);
    });
}


const handleInput = (input) => {
    if (input.type === inputType.RADIO && input.checked) {
        console.log(input.label);
    } else if (input.type !== inputType.RADIO && input.value) {
        console.log(input.label + ' ' + input.value);
        if (input.description) {
            console.log('(' + input.description + ')');
        }
    }
}

const makeReport = () => {
    getFormElements();
    objList.forEach(item => {
        console.log('==START===')
        if (item.legend) {
            console.log(item.legend + '\n')
        }
        item.inputs.forEach(handleInput);
        console.log('==END===')
    });
};

const submitClickHandler = (evt) => {
    evt.preventDefault();
    makeReport();
}

submit.addEventListener('click', submitClickHandler)

