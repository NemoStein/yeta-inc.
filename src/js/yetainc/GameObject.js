import { HTMLElement as DOMElement } from '../DOM.js'
import Utils from './Utils.js'

export default class GameObject
{
	/**
	 * @returns {GameObject} An empty GameObject
	 */
	static empty()
	{
		const element = Utils.createElement()
		const object = new GameObject(element)
		object.tags.add('component')
		
		return object 
	}
	
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
		this.render = true

		/** @type {Set<GameObject>} */
		this.objects = new Set()
	}

	/**
	 * Adds a GameObject to this
	 * @param {GameObject[]} objects 
	 */
	attach(...objects)
	{
		for (const object of objects)
		{
			if (!this.objects.has(object))
			{
				this.objects.add(object)
				this.element.append(object.element)
			}
		}

		return this
	}

	/**
	 * Removes a GameObject from this
	 * @param {GameObject[]} objects 
	 */
	detach(...objects)
	{
		for (const object of objects)
		{
			if (this.objects.has(object))
			{
				this.objects.delete(object)
				this.element.removeChild(object.element)
			}
		}

		return this
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
	
	get tags()
	{
		return this.element.classList
	}
	
	set render(value)
	{
		this.tags.toggle('render', value)
	}
}
