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
		/** @type {HTMLTemplateElement} */
		const template = parent.querySelector(`template.${key}`)
		const container = document.createElement('div')

		container.append(document.importNode(template.content, true))
		container.classList.add(...key.split('.').map(value => value))

		return container
	}
}
