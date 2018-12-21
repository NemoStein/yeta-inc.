const mockery = require('mockery')
const sinon = require('sinon')

require('should')

describe('YetaInc', () =>
{
	let YetaInc
	const sandbox = sinon.createSandbox()
	
	const DOM = {
		document: {}
	}
	
	const Display = class Display
	{
		static from()
		{
			const display = Object.setPrototypeOf(new Display(), YetaInc.prototype)
			display.initialize()

			return display
		}
	}
	
	before(() =>
	{
		mockery.enable({ useCleanCache: true })
		mockery.registerAllowable('../../src/js/yetainc/YetaInc.js')
		mockery.registerMock('../DOM.js', DOM)
		mockery.registerMock('./Display.js', Display)

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
})
