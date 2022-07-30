import Cleave from 'cleave.js';
require('cleave.js/dist/addons/cleave-phone.RU');


function phoneNumberValidation(input, placeholder) {
    console.log('work');
    if (document.querySelector(input)) {    
        let cleave = new Cleave(input, {
            phone: true,
            phoneRegionCode: 'RU',
        });
        
    // ищем инпут с вводом номера телефона и скрываем ему
    // стандартный плэйсхолдер если в него введены цифры
    // после записываем введеные значени
    // в атрибут инпута "value"
    
        let labels = document.querySelectorAll(placeholder);
    
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
}

export {phoneNumberValidation};


