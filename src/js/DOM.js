/** @type {Document} */
let document
try
{
	document = window.document
}
catch { /* Silently discarding error */ }

/** @type {typeof HTMLElement} */
let element
try
{
	element = HTMLElement
}
catch { /* Silently discarding error */ }

/** @type {Function} */
let rAF
try
{
	rAF = requestAnimationFrame
}
catch { /* Silently discarding error */ }

export
{
	document,
	element as HTMLElement,
	rAF as requestAnimationFrame
}
