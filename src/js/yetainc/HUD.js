import GameObject from './GameObject.js'
import Toolbar from './components/Toolbar.js'
import Button from './components/Button.js'
import { Direction } from './Bitmask.js'
import Stack from './components/Stack.js'

export default class HUD extends Stack
{
	constructor()
	{
		super()

		this.mapButton = new Button('Map', () => {})
		this.workersButton = new Button('Workers', () => {})
		this.facilitiesButton = new Button('Facilities', () => {})
		this.researchButton = new Button('Research', () => {})
		this.logsButton = new Button('Logs', () => {})
		this.statsButton = new Button('Stats', () => {})

		const upperMenu = new Toolbar()
		const lowerMenu = new Toolbar()
		const view = GameObject.empty()

		upperMenu.border = Direction.DOWN
		upperMenu.attach(this.mapButton, this.workersButton, this.facilitiesButton, this.researchButton)

		lowerMenu.border = Direction.UP
		lowerMenu.attach(this.logsButton, this.statsButton)

		view.tags.add('expand')

		this.vertical()
		this.attach(upperMenu, view, lowerMenu)
	}
}
