import { HTMLElement as DOMElement } from '../DOM.js'

export default class Display extends DOMElement
{
	/**
	 * Enrich a HTML Element into this type
	 * @param {HTMLElement} element 
	 * @returns {Display}
	 */
	static from(element)
	{
		if (!(element instanceof DOMElement))
		{
			throw new Error('Param "element" must be of type HTMLElement')
		}
		
		/** @type {Display} */
		const display = Object.setPrototypeOf(element, this.prototype)
		display.initialize()

		return display
	}

	/**
	 * Initializes this object after it has been enriched.
	 */
	initialize() {}
	
	/**
	 * Updates this object on each gameloop
	 */
	update() {}
}
