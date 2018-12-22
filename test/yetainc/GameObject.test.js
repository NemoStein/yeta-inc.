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
	
	describe('GameObject.from()', () =>
	{
		it('should throw if "element" is not provided or is not a HTMLElement', () =>
		{
			should(() => GameObject.from()).throw()
			should(() => GameObject.from(null)).throw()
			should(() => GameObject.from(undefined)).throw()
			should(() => GameObject.from(13)).throw()
			should(() => GameObject.from(true)).throw()
			should(() => GameObject.from('hello')).throw()
			should(() => GameObject.from({})).throw()
			should(() => GameObject.from(() => {})).throw()
			
			should(() => GameObject.from(fakeElement)).not.throw()
		})
		
		it('should enriched an element and initialize it', () =>
		{
			const spy = sandbox.spy(fakeElement, 'initialize')
			const object = GameObject.from(fakeElement)
			
			object.should.be.instanceOf(DOM.HTMLElement)
			object.should.be.instanceOf(GameObject)
			
			spy.should.be.calledOnce()
		})
	})
})
