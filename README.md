FLOW.Toastr
===========

This Package converts the flow flashmessages into toastr messages.

http://codeseven.github.io/toastr/

To use it just provide jQuery in your template and use:

```
	{namespace toastr=KayStrobach\Toastr\ViewHelpers}
	<toastr:ToastrFlashMessages />
		
additionally you need the following in your header
	<link href="{f:uri.resource(path:'Contrib/Toastr/toastr.css', package:'KayStrobach.Toastr')}" rel="stylesheet">
	<script src="{f:uri.resource(path:'Contrib/Toastr/toastr.js', package:'KayStrobach.Toastr')}"></script>

```
