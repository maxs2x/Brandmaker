import Cleave from 'cleave.js';
require('cleave.js/dist/addons/cleave-phone.RU');

let cleave = new Cleave('.input-phone', {
    phone: true,
    phoneRegionCode: 'RU',
});