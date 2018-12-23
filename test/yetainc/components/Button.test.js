const mockery = require('mockery')
const sinon = require('sinon')
const should = require('should')

describe('Components.Button', () =>
{
	let Button
	const sandbox = sinon.createSandbox()

	const GameObject = class GameObject
	{
		constructor()
		{
			this.element = {

				addEventListener(type, listener)
				{
					if (type === 'click' && !this.listener)
					{
						this.listener = listener
					}
				},

				dispatchEvent(type)
				{
					if (type === 'click' && this.listener)
					{
						this.listener()
					}
				},

				querySelector() { return {} },
				
				get classList()
				{
					return {
						add: () => {},
						remove: () => {},
					}
				}
			}
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
		mockery.registerMock('../GameObject.js', GameObject)
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
		const button = new Button(defaultLabel, defaultCallback)

		button.element.dispatchEvent('click')

		defaultCallback.should.be.calledOnce()
	})

	it('should not react to click events if button is disabled', () =>
	{
		const button = new Button(defaultLabel, defaultCallback)

		button.disable()
		button.element.dispatchEvent('click')

		defaultCallback.should.not.be.called()
	})

	describe('new Button()', () =>
	{
		it('should return a Button', () =>
		{
			new Button().should.be.instanceof(GameObject)
			new Button().should.be.instanceof(Button)
		})

		it('should accept no arguments, a label or a label and callback', () =>
		{
			const buttonA = new Button()
			const buttonB = new Button(defaultLabel)
			const buttonC = new Button(defaultLabel, defaultCallback)

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
			const button = new Button()
			button.enable().enabled.should.be.true()
		})

		it('should return the button itself', () =>
		{
			const button = new Button()
			button.enable().should.equals(button)
		})
	})

	describe('.disable()', () =>
	{
		it('should disable the button', () =>
		{
			const button = new Button()
			button.disable().enabled.should.be.false()
		})

		it('should return the button itself', () =>
		{
			const button = new Button()
			button.disable().should.equals(button)
		})
	})
})
