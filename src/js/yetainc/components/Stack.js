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
		this.tags.add('horizontal')
		this.tags.remove('vertical')
	}
	
	vertical()
	{
		this.tags.remove('horizontal')
		this.tags.add('vertical')
	}
}