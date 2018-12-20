const mockery = require('mockery')
const sinon = require('sinon')
const should = require('should')

describe('Utils', () =>
{
	let Utils
	const sandbox = sinon.createSandbox()

	const fakeElement = {
		content: '',
		append: () => {},
		classList:
		{
			add: () => {}
		}
	}

	const DOM = {
		document:
		{
			querySelector: () => fakeElement,
			createElement: () => fakeElement,
			importNode: () => {},
		}
	}

	before(() =>
	{
		mockery.enable({ useCleanCache: true })
		mockery.registerAllowable('../../src/js/yetainc/Utils.js')
		mockery.registerMock('../DOM.js', DOM)

		Utils = require('../../src/js/yetainc/Utils.js').default
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

	describe('Display.from()', () =>
	{
		it('should throw if parameter "key" is a non-empty String', () =>
		{
			should(() => Utils.getTemplate()).throw()
			should(() => Utils.getTemplate(null)).throw()
			should(() => Utils.getTemplate(undefined)).throw()
			should(() => Utils.getTemplate('')).throw()
			should(() => Utils.getTemplate(false)).throw()
			should(() => Utils.getTemplate(0)).throw()

			should(() => Utils.getTemplate('hello')).not.throw()
			should(() => Utils.getTemplate('hello.world')).not.throw()
		})

		it('should throw if optional parameter "parent" is not a ParentNode', () =>
		{
			should(() => Utils.getTemplate('hello', null)).throw()
			should(() => Utils.getTemplate('hello', '')).throw()
			should(() => Utils.getTemplate('hello', false)).throw()
			should(() => Utils.getTemplate('hello', 0)).throw()
			should(() => Utils.getTemplate('hello', {})).throw()
			should(() => Utils.getTemplate('hello', () => {})).throw()

			should(() => Utils.getTemplate('hello', DOM.document)).not.throw()
		})
	})
})
