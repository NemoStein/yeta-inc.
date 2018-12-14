require('should')

describe('DOM.js', () =>
{
	it('should return the window.document', () =>
	{
		(() => require('../src/js/DOM.js')).should.throw('window is not defined')
	})
})
