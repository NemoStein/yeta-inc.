import GameObject from './GameObject.js'
import Utils from './Utils.js'
import HUD from './HUD.js'

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
		this.attach(new HUD())
	}
}
