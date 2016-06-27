
	
// $( function() {
          


	function validateEmail(email) {
	    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(email);
	}





	$("#customform").submit(function(e){  

		// window.alert('hi there');    
		e.preventDefault();

		var name = $("#f-name").val();
		var email = $("#f-email").val();
		var msg = $("#f-message").val();
		var dataString = 'name=' + name + '&email=' + email + '&msg=' + msg;

		var _DO = false;

		if( !name || !msg ){
			// console.log('DONT');
		}else{
			_DO = true;
			// console.log('DO');
		}

		if( validateEmail(email) ){
			_DO = true;
		}else{
			_DO = false;
		}



		// console.log(name);
		// console.log(	validateEmail(email)  );



		if(_DO){

			$.ajax({
			    type: "POST",
			    url: "php/send.php",
			    data: dataString,
			    success: function(){
			          $('#customform').fadeOut(1000);
			          $('.f-success').delay(1000).fadeIn(1000);
			          $('.f-error').fadeOut(1000);
			        }

			});

		}

		return false;

	});  







// });      
 