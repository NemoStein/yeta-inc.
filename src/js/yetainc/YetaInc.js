import Display from './Display.js'
import Button from './components/Button.js'

export default class YetaInc extends Display
{
	start()
	{
		const button = Button.create('Hello world')
		
		this.append(button)
	}
}