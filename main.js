
$(document).ready(function(){
	var $results = $("#results");
    $('input[type="submit"]').click(function(){
    	var $userInput = document.getElementsByTagName("input")[0].value;
        $.getJSON("https://data.gov.uk/data/api/service/health/pharmacies/partial_postcode?partial_postcode=" +$userInput, 
	        function(data){
	        	$results.html("");
	        	for (i=0; i <= data.result.length; i++) {

	        		/*if( data.result[i].address2 === "") {
	        			data.result[i].address2 = ", " +data.result[i].address2;
	        		}
	        		*/
		            $results.append("<li>" + data.result[i].name + "</br>" + data.result[i].address1 +", " 
		            + data.result[i].address2 + 

		            "<a href='http://maps.google.com/maps?&z=15&mrt=yp&t=k&q="+ data.result[i].latitude + "+" + data.result[i].longitude+"'>"
		            + "<input type='button' value='Find' /></a>" 


		            + "</br>" 

		            + data.result[i].city + "</br>"
		            + data.result[i].phone +"</li>"+ "</br>");

		           
	        	}
	        	$( "li" ).addClass( "pharm-logo" );
       		}
    	);

    });

});





            
         