import Display from '../Display.js'
import DOM from '../DOM.js'

export default class Button extends Display
{
	/**
	 * @param {String} [label]
	 * @returns {Button}
	 */
	static create(label)
	{
		const button = /** @type {Button} */ (this.from(DOM.getTemplate('component.button')))
		button.label = label || ''
		
		return button
	}

	initialize()
	{
		this.labelElement = this.querySelector('.label')
	}

	set label(value)
	{
		this.labelElement.textContent = value
	}
}
