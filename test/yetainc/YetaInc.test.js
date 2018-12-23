const mockery = require('mockery')
const sinon = require('sinon')

require('should')

describe('YetaInc', () =>
{
	let YetaInc
	const sandbox = sinon.createSandbox()

	const GameObject = class GameObject
	{
		static from()
		{
			const object = Object.setPrototypeOf(new GameObject(), YetaInc.prototype)
			object.initialize()

			return object
		}
		
		initialize() {}
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
		mockery.registerMock('./GameObject.js', GameObject)
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

	describe('new YetaInc', () =>
	{
		
	})
})
