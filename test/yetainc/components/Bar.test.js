const mockery = require('mockery')
const sinon = require('sinon')

require('should')

describe('Components.Bar', () =>
{
	let Bar
	const sandbox = sinon.createSandbox()

	before(() =>
	{
		mockery.enable({ useCleanCache: true })
		mockery.registerAllowable('../../../src/js/yetainc/components/Bar.js')

		Bar = require('../../../src/js/yetainc/components/Bar.js').default
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
