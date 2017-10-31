(function ($) {


	Drupal.behaviors.linkclick = {
		
	    attach: function (context, settings) {
	      // When the hyperlink is clicked...
	      $('#otplinkid').click(function(event){
	        // Stop the link's default behavior.
	        event.preventDefault();
	        $("#resp-otp-id").load(Drupal.settings.basePath+"generateotp");
	      });     
	    }
    }
}(jQuery));