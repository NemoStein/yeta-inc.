import { document } from '../DOM.js'
import Display from './Display.js'
import Button from './components/Button.js'

export default class YetaInc extends Display
{
	static create()
	{
		return /** @type {YetaInc} */ (this.from(document.getElementById('App')))
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
