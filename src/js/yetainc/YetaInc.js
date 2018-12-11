import Display from './Display.js'
import Button from './components/Button.js'

export default class YetaInc extends Display
{
	start()
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
