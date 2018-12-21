const mockery = require('mockery')
const sinon = require('sinon')

require('should')

describe('YetaInc', () =>
{
	let YetaInc
	const sandbox = sinon.createSandbox()

	const Display = class Display
	{
		static from()
		{
			const display = Object.setPrototypeOf(new Display(), YetaInc.prototype)
			display.initialize()

			return display
		}

		append() {}
	}

	const Buton = {
		create()
		{
			return {
				disable: () => {}
			}
		}
	}

	const Utils = {
		getElement: () => {}
	}

	before(() =>
	{
		mockery.enable({ useCleanCache: true })
		mockery.registerAllowable('../../src/js/yetainc/YetaInc.js')
		mockery.registerMock('./Display.js', Display)
		mockery.registerMock('./components/Button.js', Buton)
		mockery.registerMock('./Utils.js', Utils)

		YetaInc = require('../../src/js/yetainc/YetaInc.js').default
	})

	afterEach(() =>
	{
		sandbox.resetHistory()
	})

	after(() =>
	{
		mockery.deregisterAll()
		mockery.disable()
	})

	describe('YetaInc.create()', () =>
	{
		it('should return a YetaInc', () =>
		{
			YetaInc.create().should.be.instanceof(Display)
			YetaInc.create().should.be.instanceof(YetaInc)
		})
	})
})
