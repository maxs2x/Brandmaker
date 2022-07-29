import Cleave from 'cleave.js';
require('cleave.js/dist/addons/cleave-phone.RU');

if (document.querySelector('.text-field_phone')) {    
    let cleave = new Cleave('.text-field_phone', {
        phone: true,
        phoneRegionCode: 'RU',
    });

// ищем инпут с вводом номера телефона и скрываем ему
// стандартный плэйсхолдер если в него введены цифры
// после записываем введеные значени
// в атрибут инпута "value"

    let labels = document.querySelectorAll('.text-field__placeholder_phone');

    for (let elem of labels) {
        let inputElement = elem.previousSibling;
        
        inputElement.onblur = function() {
            let phoneNumber = cleave.getRawValue();

            if (+phoneNumber !== 0) {
                elem.hidden = true;
            } else {
                elem.hidden = false;
            }

            inputElement.setAttribute('value', phoneNumber);
        };

        
    }
};