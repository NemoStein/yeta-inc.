import GameObject from './GameObject.js'
import Utils from './Utils.js'
import Button from './components/Button.js'
import Stack from './components/Stack.js'
import Toolbar from './components/Toolbar.js'
import { Direction } from './Bitmask.js'

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
		const ui = new Stack()
		const upperMenu = new Toolbar()

		const mapButton = new Button('Map', () => researchButton.enable()).disable()
		const workersButton = new Button('Workers', () => facilitiesButton.enable())
		const facilitiesButton = new Button('Facilities', () => mapButton.enable()).disable()
		const researchButton = new Button('Research', () => {}).disable()

		upperMenu.border = Direction.DOWN

		ui.attach(upperMenu)
		upperMenu.attach(mapButton, workersButton, facilitiesButton, researchButton)


		this.attach(ui)
	}
}
