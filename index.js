/**
 * Módulo: isPlain
 * Objetivo: Determina si el valor pasado es un objeto plano.
 */
module.exports = function isPlain(o) {
	return Boolean(
		o !== null &&
		Object.prototype.toString.call(o) === '[object Object]' &&
		o.constructor &&
		o.constructor.prototype.hasOwnProperty('hasOwnProperty')
	);
}
