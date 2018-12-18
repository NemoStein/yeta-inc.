const mockery = require('mockery')
const sinon = require('sinon')

require('should')

describe('Display', () =>
{
	let Display
	const sandbox = sinon.createSandbox()

	before(() =>
	{
		mockery.enable({ useCleanCache: true })
		mockery.registerAllowable('../../src/js/yetainc/Display.js')

		Display = require('../../src/js/yetainc/Display.js').default
	})

	afterEach(() =>
	{
		sandbox.restore()
	})

	after(() =>
	{
		mockery.deregisterAll()
		mockery.disable()
	})
})
