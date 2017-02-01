
$(document).ready(function(){
	var $results = $("#results");
    $('input[type="submit"]').click(function(){
        $.getJSON("https://data.gov.uk/data/api/service/health/pharmacies/partial_postcode?partial_postcode=TW8", 
	        function(data){
	        	for (i=0; i <= data.result.length; i++) {

	        		if( data.result[i].address2 !== "") {
	        			data.result[i].address2 = ","+data.result[i].address2;
	        		}

		            $results.append("<li>Name: "+ data.result[i].name + "</br>" + "Address: "+ data.result[i].address1
		            + data.result[i].address2 + "</br>" + "City: " + data.result[i].city + "</br>"
		            + "Phone: "+ data.result[i].phone +"</li>");
	        	}
	        	$( "li" ).addClass( "pharm-logo" );
       		}
    	);

    });

});





            
         