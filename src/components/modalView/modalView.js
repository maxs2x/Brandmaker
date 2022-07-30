import HystModal from 'hystmodal';

import {phoneNumberValidation} from '../text-field/_phone-height-s/phone-height-s.js';

const myModal = new HystModal({
	linkAttributeName: 'data-hystmodal',
    backscroll: true,
	beforeOpen: function(modal){
		phoneNumberValidation('.text-field', '.text-field__placeholder_phone-height-s');
		console.log('work');
	},
//	afterClose: function(modal){
//		console.log('Message after modal has closed');
//	},
});