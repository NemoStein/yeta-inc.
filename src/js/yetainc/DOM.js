export default class DOM
{
	/**
	 * @param {String} key The key of the template
	 * @param {HTMLElement} [parent] An optional parent to look for the template
	 * @returns {HTMLElement} An active clone of the template
	 */
	static getTemplate(key, parent)
	{
		/** @type {HTMLTemplateElement} */
		const template = (parent || document).querySelector(`template.${key}`)
		const container = document.createElement('div')
		
		container.append(document.importNode(template.content, true))
		container.classList.add(...key.split('.').map(value => value))
		
		return container
	}
}
