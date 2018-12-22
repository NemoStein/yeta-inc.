import { HTMLElement as DOMElement } from '../DOM.js'

export default class GameObject extends DOMElement
{
	/**
	 * Enrich a HTML Element into this type
	 * @param {HTMLElement} element 
	 * @returns {GameObject}
	 */
	static from(element)
	{
		if (!(element instanceof DOMElement))
		{
			throw new Error('Param "element" must be of type HTMLElement')
		}

		/** @type {GameObject} */
		const object = Object.setPrototypeOf(element, this.prototype)
		object.initialize()

		return object
	}

	/**
	 * Initializes this object after it has been enriched.
	 */
	initialize()
	{
		/** @type {Set<GameObject>} */
		this.objects = new Set()
	}

	/**
	 * Adds a GameObject to this
	 * @param {GameObject} object 
	 */
	attach(object)
	{
		if (!this.objects.has(object))
		{
			this.objects.add(object)
			this.append(object)
		}
	}

	/**
	 * Removes a GameObject from this
	 * @param {GameObject} object 
	 */
	detach(object)
	{
		if (this.objects.has(object))
		{
			this.objects.delete(object)
			this.removeChild(object)
		}
	}

	/**
	 * Updates this object on each gameloop
	 */
	update() {}
}
