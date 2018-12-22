import GameObject from './GameObject.js'
import Button from './components/Button.js'
import Utils from './Utils.js';

export default class YetaInc extends GameObject
{
	static create()
	{
		return /** @type {YetaInc} */ (this.from(Utils.getElement('#App')))
	}
	
	initialize()
	{
		super.initialize()
		
		this.samples()
	}

	start()
	{
		
	}
	
	samples()
	{
		const button = Button.create('Hello world', button =>
		{
			button.label = 'Bye world'
		})
		.disable()
		
		this.attach(button)
		
		this.attach(Button.create('Hello world', button =>
		{
			button.label = 'Bye world'
		}))
	}
}
