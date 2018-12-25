import GameObject from '../GameObject.js'
import Utils from '../Utils.js'

export default class Stack extends GameObject
{
	constructor()
	{
		super(Utils.getTemplate('component.stack'))
	}
}