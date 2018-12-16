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
	static create(label = '', action = null)
	{
		const button = /** @type {Button} */ (this.from(Utils.getTemplate('component.button')))

		button.action = action
		button.label = label

		return button
	}

	initialize()
	{
		this.labelElement = this.querySelector('.label')
		
		this.enable()
		this.addEventListener('click', () =>
		{
			if (this.enabled && this.onButtonClick)
			{
				this.onButtonClick(this)
			}
		})
	}

	/**
	 * @returns {OnButtonClick}
	 */
	get action()
	{
		return this.onButtonClick
	}
	set action(value)
	{
		this.onButtonClick = value
	}

	/**
	 * @returns {String}
	 */
	get label()
	{
		return this.labelElement.textContent
	}
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
