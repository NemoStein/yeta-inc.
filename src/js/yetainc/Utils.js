import { document } from '../DOM.js'

export default class Utils
{
	/**
	 * @param {String} key The key of the template
	 * @param {ParentNode} [parent] An optional parent to look for the template
	 * @returns {HTMLElement} An active clone of the template
	 */
	static getTemplate(key, parent = document)
	{
		if (!key || typeof key !== 'string')
		{
			throw new Error('Parameter "key" must be a non-empty String')
		}
		
		if (!parent || !parent.querySelector)
		{
			throw new Error('Parameter "parent" must be of type "Element", "Document" or "DocumentFragment"')
		}
		
		/** @type {HTMLTemplateElement} */
		const template = parent.querySelector(`template.${key}`)
		if (!template)
		{
			throw new Error(`Template "${key}" not found`)
		}
		
		const container = document.createElement('div')

		container.append(document.importNode(template.content, true))
		container.classList.add(...key.split('.').map(value => value))

		return container
	}
	
	/**
	 * @param {String} selector 
	 * @param {ParentNode} [parent] An optional parent to look for the selector
	 * @returns {HTMLElement} An HTMLElement
	 */
	static getElement(selector, parent = document)
	{
		if (!selector || typeof selector !== 'string')
		{
			throw new Error('Parameter "selector" must be a non-empty String')
		}
		
		if (!parent || !parent.querySelector)
		{
			throw new Error('Parameter "parent" must be of type "Element", "Document" or "DocumentFragment"')
		}
		
		/** @type HTMLElement */
		const element = parent.querySelector(selector)
		if (!element)
		{
			throw new Error(`Element "${selector}" not found`)
		}
		
		return element
	}
	
	/**
	 * @returns {HTMLElement} An HTMLElement
	 */
	static createElement()
	{
		return document.createElement('div')
	}
}
