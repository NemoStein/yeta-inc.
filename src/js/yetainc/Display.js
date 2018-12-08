export default class Display extends HTMLElement
{
	/**
	 * Enrich a HTML Element into this type
	 * @param {HTMLElement} element 
	 * @returns {Display}
	 */
	static from(element)
	{
		return Object.setPrototypeOf(element, this.prototype)
	}
}