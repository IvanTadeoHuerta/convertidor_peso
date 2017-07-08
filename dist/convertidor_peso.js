'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.kilogramosALibras = kilogramosALibras;
exports.librasAKilogramos = librasAKilogramos;

var libra = 2.20462262;
var kilogramos = 0.453592;

function kilogramosALibras() {
	var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

	var result = void 0;
	try {
		if (/^\s*$/.test(param)) throw 'Ingresa n\xFAmero';
		if (isNaN(param)) throw param + ' No es n\xFAmero v\xE1lido';
		result = param + ' kg. esquivale a  ' + Number((param * libra).toFixed(4)) + ' lb.';
	} catch (err) {
		result = err;
	}

	return result;
}

function librasAKilogramos() {
	var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

	var result = void 0;
	try {
		if (/^\s*$/.test(param)) throw 'Ingresa n\xFAmero';
		if (isNaN(param)) throw param + ' No es n\xFAmero v\xE1lido';
		result = param + ' lb. esquivale a  ' + Number((kilogramos * param).toFixed(4)) + ' kg.';
	} catch (err) {
		result = err;
	}

	return result;
}