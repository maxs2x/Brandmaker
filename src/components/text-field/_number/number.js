import Cleave from 'cleave.js';

let cleave = new Cleave('.text-field_number', {
    numeral: true,
    numeralIntegerScale: 4,
    numeralDecimalMark: ',',
    delimiter: ' ',
    numeralPositiveOnly: true,
});

