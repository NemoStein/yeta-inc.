const mockery = require('mockery')
const sinon = require('sinon')

require('should')

describe('Utils', () =>
{
	let YetaInc
	const sandbox = sinon.createSandbox()

	before(() =>
	{
		mockery.enable({ useCleanCache: true })
		mockery.registerAllowable('../../src/js/yetainc/Utils.js')

		YetaInc = require('../../src/js/yetainc/Utils.js').default
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
