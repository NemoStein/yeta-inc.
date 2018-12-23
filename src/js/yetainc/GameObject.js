import { HTMLElement as DOMElement } from '../DOM.js'

export default class GameObject
{
	/**
	 * Enrich a HTML Element into this type
	 * @param {HTMLElement} element 
	 */
	constructor(element)
	{
		if (!(element instanceof DOMElement))
		{
			throw new Error('Param "element" must be of type HTMLElement')
		}

		this.element = element
		
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
			this.element.append(object.element)
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
			this.element.removeChild(object.element)
		}
	}

	/**
	 * Updates this object on each gameloop
	 */
	update()
	{
		for (const object of this.objects)
		{
			object.update()
		}
	}
}
