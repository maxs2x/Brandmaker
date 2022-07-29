import Cleave from 'cleave.js';


if (document.querySelector('.text-field_number')) {
    let cleave = new Cleave('.text-field_number', {
        numeral: true,
        numeralIntegerScale: 4,
        numeralDecimalMark: ',',
        delimiter: ' ',
        numeralPositiveOnly: true,
    });
};



