// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const { add } = require('lodash');
const names = require('./04-names');
const sayHi = require('./05-utils');
const data = require('./06-alternative-flavor');
const {subtractValues, addValues} = require('./07-mind-grenade');
//const mindGrenade = require('./07-mind-grenade');
require('./07-mind-grenade');

//sayHi('susan');
//sayHi(names.john);
//sayHi(names.peter);

//sayHi(data.items[0]);
//sayHi(data.items[1]);

//sayHi(data.singlePerson.name);

addValues();
subtractValues();