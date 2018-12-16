import { document } from './DOM.js'
import YetaInc from './yetainc/YetaInc.js'

document.addEventListener('contextmenu', event =>
{
	event.stopImmediatePropagation()
	event.preventDefault()
})

document.addEventListener('DOMContentLoaded', () =>
{
	const game = /** @type {YetaInc} */ (YetaInc.from(document.getElementById('App')))
	game.start()
})