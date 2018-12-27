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
		const upperMenu = new Toolbar()
		const mapButton = new Button('Map', () => {})
		const workersButton = new Button('Workers', () => {})
		const facilitiesButton = new Button('Facilities', () => {})
		const researchButton = new Button('Research', () => {})
		
		upperMenu.border = Direction.DOWN
		upperMenu.attach(mapButton, workersButton, facilitiesButton, researchButton)
		
		const lowerMenu = new Toolbar()
		const logsButton = new Button('Logs', () => {})
		const statsButton = new Button('Stats', () => {})
		
		lowerMenu.border = Direction.UP
		lowerMenu.attach(logsButton, statsButton)
		
		const view = GameObject.empty()
		view.element.classList.add('expand')
		
		const ui = new Stack()
		ui.vertical()
		ui.attach(upperMenu, view, lowerMenu)
		
		this.attach(ui)
	}
}
