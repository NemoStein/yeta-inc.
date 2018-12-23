import GameObject from '../GameObject.js'
import Utils from '../Utils.js'

/**
 * @callback OnButtonClick
 * @param {Button} button The clicked button
 */

export default class Button extends GameObject
{
	/**
	 * @param {String} label
	 * @param {OnButtonClick} action
	 */
	constructor(label = '', action = null)
	{
		super(Utils.getTemplate('component.button'))
		
		this.labelElement = this.element.querySelector('.label')
		
		this.enable()
		this.element.addEventListener('click', () =>
		{
			if (this.enabled && this.onButtonClick)
			{
				this.onButtonClick(this)
			}
		})
		
		this.action = action
		this.label = label
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
		this.element.classList.remove('disabled')

		return this
	}

	disable()
	{
		this.enabled = false
		this.element.classList.add('disabled')

		return this
	}
}
