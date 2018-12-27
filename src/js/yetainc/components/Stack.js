import GameObject from '../GameObject.js'
import Utils from '../Utils.js'

export default class Stack extends GameObject
{
	constructor()
	{
		super(Utils.getTemplate('component.stack'))
		
		this.vertical()
	}
	
	horizontal()
	{
		this.element.classList.add('horizontal')
		this.element.classList.remove('vertical')
	}
	
	vertical()
	{
		this.element.classList.remove('horizontal')
		this.element.classList.add('vertical')
	}
}