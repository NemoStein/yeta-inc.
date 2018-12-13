import Display from '../Display.js'
import Utils from '../Utils.js'

/**
 * @callback OnButtonClick
 * @param {Button} button The clicked button
 */

export default class Button extends Display
{
	/**
	 * @param {String} label
	 * @param {OnButtonClick} action
	 * @returns {Button}
	 */
	static create(label, action)
	{
		const button = /** @type {Button} */ (this.from(Utils.getTemplate('component.button')))

		button.action = action
		button.label = label

		return button
	}

	initialize()
	{
		this.enabled = true
		this.labelElement = this.querySelector('.label')
		this.addEventListener('click', () =>
		{
			if (this.enabled && this.onButtonClick)
			{
				this.onButtonClick(this)
			}
		})
	}

	/**
	 * @param {OnButtonClick} value
	 */
	set action(value)
	{
		this.onButtonClick = value
	}

	/**
	 * @param {String} value
	 */
	set label(value)
	{
		this.labelElement.textContent = value
	}

	enable()
	{
		this.enabled = true
		this.classList.remove('disabled')
		
		return this
	}

	disable()
	{
		this.enabled = false
		this.classList.add('disabled')
		
		return this
	}
}
