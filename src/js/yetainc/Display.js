export default class Display extends HTMLElement
{
	/**
	 * Enrich a HTML Element into this type
	 * @param {HTMLElement} element 
	 * @returns {Display}
	 */
	static from(element)
	{
		/** @type {Display} */
		const display = Object.setPrototypeOf(element, this.prototype)
		display.initialize()

		return display
	}

	/**
	 * Initializes this object after it has been enriched.
	 */
	initialize() {}
}
