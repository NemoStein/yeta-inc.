import Display from './Display.js'
import Button from './components/Button.js'
import Utils from './Utils.js';

export default class YetaInc extends Display
{
	static create()
	{
		return /** @type {YetaInc} */ (this.from(Utils.getElement('#App')))
	}

	start()
	{
		this.samples()
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
