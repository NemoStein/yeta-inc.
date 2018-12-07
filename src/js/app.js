import YetaInc from './YetaInc.js'

document.addEventListener('DOMContentLoaded', () =>
{
	/** @type {YetaInc} */
	// @ts-ignore
	const game = YetaInc.from(document.getElementById('App'))
	game.start()
})