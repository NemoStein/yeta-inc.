export default class DOM
{
	/**
	 * @param {String} key The key of the template
	 * @param {HTMLElement} [parent] An optional parent to look for the template
	 * @returns {HTMLElement} An active clone of the template
	 */
	static getTemplate(key, parent)
	{
		const template = (parent || document).querySelector(`template.${key}`)
		const div = document.createElement('div')
		
		div.append(document.importNode(template, true))
		div.classList.add(...key.split('.').map(value => value))
		
		return div
	}
}