const mockery = require('mockery')
const sinon = require('sinon')
const should = require('should')

describe('Display', () =>
{
	let Display
	const sandbox = sinon.createSandbox()
	
	const DOM = {
		HTMLElement: function HTMLElement() {}
	}
	
	const fakeElement = new DOM.HTMLElement()

	before(() =>
	{
		mockery.enable({ useCleanCache: true })
		mockery.registerAllowable('../../src/js/yetainc/Display.js')
		mockery.registerMock('../DOM.js', DOM)

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
	
	describe('Display.from()', () =>
	{
		it('should throw if "element" is not provided or is not a HTMLElement', () =>
		{
			should(() => Display.from()).throw()
			should(() => Display.from(null)).throw()
			should(() => Display.from(undefined)).throw()
			should(() => Display.from(13)).throw()
			should(() => Display.from(true)).throw()
			should(() => Display.from('hello')).throw()
			should(() => Display.from({})).throw()
			should(() => Display.from(() => {})).throw()
			
			should(() => Display.from(fakeElement)).not.throw()
		})
		
		it('should enriched an element and initialize it', () =>
		{
			const spy = sandbox.spy(fakeElement, 'initialize')
			const display = Display.from(fakeElement)
			
			display.should.be.instanceOf(DOM.HTMLElement)
			display.should.be.instanceOf(Display)
			
			spy.should.be.calledOnce()
		})
	})
})
