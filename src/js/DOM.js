let document
let element

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

export { document, element as HTMLElement }
