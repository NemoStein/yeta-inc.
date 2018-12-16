require('should')

// How am I supposed to test this?

describe('DOM.js', () =>
{
	describe('.document', () =>
	{
		it('should return the window.document', () =>
		{
			(() => require('../src/js/DOM.js').document).should.throw('window is not defined')
		})
	})
	
	describe('.HTMLElement', () =>
	{
		it('should return the HTMLElement type', () =>
		{
			(() => require('../src/js/DOM.js').HTMLElement).should.throw('window is not defined')
		})
	})
})
