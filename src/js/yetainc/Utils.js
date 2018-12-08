export default class Utils
{
	/**
	 * @param {String} reference The classes to look for
	 * @param {HTMLElement} [parent] An optional parent to look for the template
	 */
	static getTemplate(reference, parent)
	{
		return (parent || document).querySelector(`template.${reference}`)
	}
}