import DOM from '../DOM.js'

export default class Utils
{
	/**
	 * @param {String} key The key of the template
	 * @param {ParentNode} [parent] An optional parent to look for the template
	 * @returns {HTMLElement} An active clone of the template
	 */
	static getTemplate(key, parent = DOM)
	{
		/** @type {HTMLTemplateElement} */
		const template = parent.querySelector(`template.${key}`)
		const container = DOM.createElement('div')
		
		container.append(DOM.importNode(template.content, true))
		container.classList.add(...key.split('.').map(value => value))
		
		return container
	}
}