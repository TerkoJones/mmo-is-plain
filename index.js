/**
 * Módulo: isPlain
 * Objetivo: Determina si el valor pasado es un objeto y, de ser así, si este así  si si constructor es Object.
 */
module.exports = function isPlain(o) {
	return Boolean(
		o !== null &&
		Object.prototype.toString.call(o) === '[object Object]' &&
		o.constructor &&
		o.constructor.prototype.hasOwnProperty('hasOwnProperty')
	);
}