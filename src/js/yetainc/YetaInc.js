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
		this.append(Button.create('Hello world', button =>
		{
			button.label = 'Bye world'
		})
		.disable())
		
		this.append(Button.create('Hello world', button =>
		{
			button.label = 'Bye world'
		}))
	}
}
