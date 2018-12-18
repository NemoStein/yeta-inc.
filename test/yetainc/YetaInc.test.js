const mockery = require('mockery')
const sinon = require('sinon')

require('should')

describe('YetaInc', () =>
{
	let YetaInc
	const sandbox = sinon.createSandbox()

	before(() =>
	{
		mockery.enable({ useCleanCache: true })
		mockery.registerAllowable('../../src/js/yetainc/YetaInc.js')

		YetaInc = require('../../src/js/yetainc/YetaInc.js').default
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
