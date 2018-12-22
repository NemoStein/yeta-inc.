let document
let element
let rAF

try
{
	document = window.document
}
catch { /* Silently discarding error */ }

try
{
	element = HTMLElement
}
catch { /* Silently discarding error */ }

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
