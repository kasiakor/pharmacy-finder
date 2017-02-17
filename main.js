
$(document).ready(function(){
	var $results = $("#results");
    $('input[type="submit"]').click(function(){
    	var $userInput = document.getElementsByTagName("input")[0].value;
        $.getJSON("https://data.gov.uk/data/api/service/health/pharmacies/partial_postcode?partial_postcode=" +$userInput, 
	        function(data){
	        	for (i=0; i <= data.result.length; i++) {

	        		/*if( data.result[i].address2 === "") {
	        			data.result[i].address2 = ", " +data.result[i].address2;
	        		}
	        		*/

		            $results.append("<li>" + data.result[i].name + "</br>" + data.result[i].address1 +", " 
		            + data.result[i].address2 + "<input type='button' id='field' value='Find' />" + "</br>" + data.result[i].city + "</br>"
		            + data.result[i].phone +"</li>"+ "</br>");


			        $('#field').click(function() {
				    window.location.href = 'google-maps.html';
				    return false;
					});

		           
	        	}
	        	$( "li" ).addClass( "pharm-logo" );



	        	


       		}
    	);

    });

			    

});





            
         