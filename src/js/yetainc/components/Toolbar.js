import GameObject from '../GameObject.js'
import Utils from '../Utils.js'
import { Direction } from '../Bitmask.js'

export default class Toolbar extends GameObject
{
	constructor()
	{
		super(Utils.getTemplate('component.toolbar'))
	}

	set hudLocation(bitmask)
	{
		this.element.classList.toggle('border-top', (bitmask & Direction.UP) === 0)
		this.element.classList.toggle('border-right', (bitmask & (Direction.UP & Direction.DOWN)) !== 0)
		this.element.classList.toggle('border-bottom', (bitmask & Direction.DOWN) === 0)
		this.element.classList.toggle('border-left', (bitmask & (Direction.UP & Direction.DOWN)) !== 0)
	}
}
