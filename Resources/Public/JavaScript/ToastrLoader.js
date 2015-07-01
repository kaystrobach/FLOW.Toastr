/**
 * Created by kay on 25.04.14.
 */

toastr.options = {
	"closeButton": true,
	"debug": false,
	"positionClass": "toast-top-right",
	"onclick": null,
	"showDuration": "000",
	"hideDuration": "1000",
	"timeOut": "5000",
	"extendedTimeOut": "1000",
	"showEasing": "swing",
	"hideEasing": "linear",
	"showMethod": "fadeIn",
	"hideMethod": "fadeOut"
};

(function ( $ ) {

	$.fn.ToastrLoader = function (flashmessages) {
		var messages = flashmessages;
		$.each(messages, function(key, value) {
			switch(value.severity) {
				case 'Warning':
					toastr.warning(value.message, value.title, {"timeOut": "15000"});
				break;
				case 'Notice':
				case 'Information':
					toastr.info(   value.message, value.title, {"timeOut": "8000"});
				break;
				case 'OK':
					toastr.success(value.message, value.title, {"timeOut": "8000"});
				break;
				case 'Error':
					toastr.error(  value.message, value.title, {"timeOut": "15000"});
					break;
				default:
					alert('Unknown Severity ' + value.severity);
			}
		});
	}
}) ( jQuery );
