/**
 * Created by kay on 25.04.14.
 */

toastr.options = {
	"closeButton": true,
	"debug": false,
	"positionClass": "toast-bottom-full-width",
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
					toastr.warning(value.message, value.title, {"timeOut": "10000"});
				break;
				case 'Information':
					toastr.info(   value.message, value.title, {"timeOut": "3000"});
				break;
				case 'OK':
					toastr.success(value.message, value.title, {"timeOut": "3000"});
				break;
				case 'Error':
					toastr.error(  value.message, value.title, {"timeOut": "10000"});
					break;
				default:
					alert('Unknown Severity ' + value.severity);
			}
		});
	}
}) ( jQuery );
