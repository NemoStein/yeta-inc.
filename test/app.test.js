const mockery = require('mockery')
const sinon = require('sinon')

require('should-sinon')

describe('app.js', () =>
{
	const sandbox = sinon.createSandbox()

	const fakeElement = 'fake-element'

	const DOM = {
		document:
		{
			addEventListener: sandbox.spy(),
			getElementById: sandbox.stub().returns(fakeElement),
		},
		HTMLElement: {}
	}

	const YetaInc = class
	{
		static from() { return null }
		start() {}
	}

	before(() =>
	{
		mockery.enable({ useCleanCache: true })
		mockery.registerAllowable('../src/js/app.js')
		mockery.registerMock('./DOM.js', DOM)
		mockery.registerMock('./yetainc/YetaInc.js', YetaInc)
	})

	afterEach(() =>
	{
		sandbox.restore()
		mockery.resetCache()
	})

	after(() =>
	{
		mockery.deregisterAll()
		mockery.disable()
	})

	it('should disable document contextmenu', () =>
	{
		const event = {
			stopImmediatePropagation: sinon.spy(),
			preventDefault: sinon.spy(),
		}

		require('../src/js/app.js')

		DOM.document.addEventListener.should.be.calledWithExactly('contextmenu', sinon.match.func)
		DOM.document.addEventListener.withArgs('contextmenu').args[0][1](event)

		event.preventDefault.should.be.calledOnce()
		event.stopImmediatePropagation.should.be.calledOnce()
	})

	it('should wait for DOMContentLoaded and create a YetaInc instance and start it', () =>
	{
		const yetainc = new YetaInc()
		const YetaIncFromStub = sandbox.stub(YetaInc, 'from').returns(yetainc)
		const yetaincStartStub = sandbox.stub(yetainc, 'start')

		require('../src/js/app.js')

		DOM.document.addEventListener.should.be.calledWithExactly('DOMContentLoaded', sinon.match.func)
		DOM.document.addEventListener.withArgs('DOMContentLoaded').args[0][1]()
		DOM.document.getElementById.should.be.calledOnce()
		DOM.document.getElementById.should.be.calledWith('App')

		YetaIncFromStub.should.be.calledOnce()
		YetaIncFromStub.should.be.calledWithExactly(fakeElement)
		yetaincStartStub.should.be.calledOnce()
	})
})