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
			querySelector: () => {},
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
		
		const stub = sandbox.stub(DOM.document, 'querySelector')
		stub.withArgs('template.hello').returns(fakeElement)
		stub.withArgs('template.hello.world').returns(fakeElement)
		stub.withArgs('.hello').returns(fakeElement)
		stub.withArgs('.hello.world').returns(fakeElement)
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

	describe('Utils.getTemplate()', () =>
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

		it('should throw if template doesn\'t exist', () =>
		{
			should(() => Utils.getTemplate('wrong')).throw()
		})
	})

	describe('Utils.getElement()', () =>
	{
		it('should throw if parameter "selector" is a non-empty String', () =>
		{
			should(() => Utils.getElement()).throw()
			should(() => Utils.getElement(null)).throw()
			should(() => Utils.getElement(undefined)).throw()
			should(() => Utils.getElement('')).throw()
			should(() => Utils.getElement(false)).throw()
			should(() => Utils.getElement(0)).throw()

			should(() => Utils.getElement('.hello')).not.throw()
			should(() => Utils.getElement('.hello.world')).not.throw()
		})

		it('should throw if optional parameter "parent" is not a ParentNode', () =>
		{
			should(() => Utils.getElement('.hello', null)).throw()
			should(() => Utils.getElement('.hello', '')).throw()
			should(() => Utils.getElement('.hello', false)).throw()
			should(() => Utils.getElement('.hello', 0)).throw()
			should(() => Utils.getElement('.hello', {})).throw()
			should(() => Utils.getElement('.hello', () => {})).throw()

			should(() => Utils.getElement('.hello', DOM.document)).not.throw()
		})

		it('should throw if parameter "selector" doesn\'t return a Element', () =>
		{
			should(() => Utils.getElement('.wrong')).throw()
		})
	})
})
