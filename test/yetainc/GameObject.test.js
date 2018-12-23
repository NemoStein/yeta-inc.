const mockery = require('mockery')
const sinon = require('sinon')
const should = require('should')

describe('GameObject', () =>
{
	let GameObject
	const sandbox = sinon.createSandbox()
	
	const DOM = {
		HTMLElement: function HTMLElement() {}
	}
	
	const fakeElement = new DOM.HTMLElement()

	before(() =>
	{
		mockery.enable({ useCleanCache: true })
		mockery.registerAllowable('../../src/js/yetainc/GameObject.js')
		mockery.registerMock('../DOM.js', DOM)

		GameObject = require('../../src/js/yetainc/GameObject.js').default
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
	
	describe('new GameObject()', () =>
	{
		it('should throw if "element" is not provided or is not a HTMLElement', () =>
		{
			should(() => new GameObject()).throw()
			should(() => new GameObject(null)).throw()
			should(() => new GameObject(undefined)).throw()
			should(() => new GameObject(13)).throw()
			should(() => new GameObject(true)).throw()
			should(() => new GameObject('hello')).throw()
			should(() => new GameObject({})).throw()
			should(() => new GameObject(() => {})).throw()
			
			should(() => new GameObject(fakeElement)).not.throw()
		})
	})
})
