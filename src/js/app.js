import YetaInc from './yetainc/YetaInc.js'

document.addEventListener('DOMContentLoaded', () =>
{
	const game = /** @type {YetaInc} */ (YetaInc.from(document.getElementById('App')))
	game.start()
})
