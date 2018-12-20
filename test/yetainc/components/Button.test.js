const mockery = require('mockery')
const sinon = require('sinon')
const should = require('should')

describe('Components.Button', () =>
{
	let Button
	const sandbox = sinon.createSandbox()

	const Display = class Display
	{
		addEventListener(type, listener)
		{
			if (type === 'click' && !this.listener)
			{
				this.listener = listener
			}
		}

		dispatchEvent(type)
		{
			if (type === 'click' && this.listener)
			{
				this.listener()
			}
		}

		querySelector() { return {} }
		get classList()
		{
			return {
				add: () => {},
				remove: () => {},
			}
		}

		static from()
		{
			const display = Object.setPrototypeOf(new Display(), Button.prototype)
			display.initialize()

			return display
		}
	}

	const Utils = {
		getTemplate: () => {}
	}

	const defaultLabel = 'label'
	const defaultCallback = sandbox.spy()

	before(() =>
	{
		mockery.enable({ useCleanCache: true })
		mockery.registerAllowable('../../../src/js/yetainc/components/Button.js')
		mockery.registerMock('../Display.js', Display)
		mockery.registerMock('../Utils.js', Utils)

		Button = require('../../../src/js/yetainc/components/Button.js').default
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

	it('should react to click events', () =>
	{
		const button = Button.create(defaultLabel, defaultCallback)

		button.dispatchEvent('click')

		defaultCallback.should.be.calledOnce()
	})

	it('should not react to click events if button is disabled', () =>
	{
		const button = Button.create(defaultLabel, defaultCallback)
		
		button.disable()
		button.dispatchEvent('click')
		
		defaultCallback.should.not.be.called()
	})

	describe('Button.create()', () =>
	{
		it('should return a Button', () =>
		{
			Button.create().should.be.instanceof(Display)
			Button.create().should.be.instanceof(Button)
		})

		it('should accept no arguments, a label or a label and callback', () =>
		{
			const buttonA = Button.create()
			const buttonB = Button.create(defaultLabel)
			const buttonC = Button.create(defaultLabel, defaultCallback)

			buttonA.label.should.be.String()
			buttonA.label.should.be.empty()
			should(buttonA.action).be.null()

			buttonB.label.should.equals(defaultLabel)
			should(buttonB.action).be.null()

			buttonC.label.should.equals(defaultLabel)
			buttonC.action.should.equals(defaultCallback)
		})
	})

	describe('.enable()', () =>
	{
		it('should enable the button', () =>
		{
			const button = Button.create()
			button.enable().enabled.should.be.true()
		})

		it('should return the button itself', () =>
		{
			const button = Button.create()
			button.enable().should.equals(button)
		})
	})

	describe('.disable()', () =>
	{
		it('should disable the button', () =>
		{
			const button = Button.create()
			button.disable().enabled.should.be.false()
		})

		it('should return the button itself', () =>
		{
			const button = Button.create()
			button.disable().should.equals(button)
		})
	})
})
