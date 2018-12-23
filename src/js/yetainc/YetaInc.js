import GameObject from './GameObject.js'
import Button from './components/Button.js'
import Utils from './Utils.js';

export default class YetaInc extends GameObject
{
	constructor()
	{
		super(Utils.getElement('#App'))
		
		this.samples()
	}

	start()
	{
		this.early = performance.now()
		this.elapsed = 0
		this.tickTime = 1000 / 10
	}
	
	update()
	{
		const now = performance.now()
		this.elapsed = now - this.early
		
		if (this.elapsed > this.tickTime)
		{
			this.early = now
			
			super.update()
		}
	}
	
	samples()
	{
		const button = new Button('Hello world', button =>
		{
			button.label = 'Bye world'
		})
		.disable()
		
		this.attach(button)
		
		this.attach(new Button('Hello world', button =>
		{
			button.label = 'Bye world'
		}))
	}
}
