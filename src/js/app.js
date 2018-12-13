import DOM from './DOM.js'
import YetaInc from './yetainc/YetaInc.js'

DOM.addEventListener('contextmenu', event =>
{
	event.stopImmediatePropagation()
	event.preventDefault()
})

DOM.addEventListener('DOMContentLoaded', () =>
{
	const game = /** @type {YetaInc} */ (YetaInc.from(DOM.getElementById('App')))
	game.start()
})