import { document, requestAnimationFrame } from './DOM.js'
import YetaInc from './yetainc/YetaInc.js'

document.addEventListener('contextmenu', event =>
{
	event.stopImmediatePropagation()
	event.preventDefault()
})

document.addEventListener('DOMContentLoaded', () =>
{
	const game = YetaInc.create()
	game.start()
	
	const updateCallback = () =>
	{
		game.update()
		requestAnimationFrame(updateCallback)
	}
	
	requestAnimationFrame(updateCallback)
})