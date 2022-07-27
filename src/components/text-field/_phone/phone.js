import Cleave from 'cleave.js';
require('cleave.js/dist/addons/cleave-phone.RU');

let cleave = new Cleave('.text-field_phone', {
    phone: true,
    phoneRegionCode: 'RU',
});