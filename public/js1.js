$(function(){
let chosenName;
let chosenTeam;
let chosenStat; 


$('#dropdown-team').change(function() {

	chosenTeam = $("#dropdown-team :selected").text() 	// Variable equals what was selected
	$('.currentTeam').remove()		// Remove the current options

	$.get("/teamName", function(data) {
		if(!data){
			console.log("No data received");	
		}
		console.log("Received data");
		switch(chosenTeam){
			case "Bedford": 
			for (let i = 0; i < data.length; i++){
			$('.teamName').append("<option class='currentTeam' value='" + data[i]['Name'] + "'>" + data[i]['Name'] + "</option>")	
			}
			break;
			case "Bayswater Morley":
			break;
			case "Fremantle":
			break;
		}
		})

  		
})
$('.submit').click(function() {
	chosenTeam = $("#dropdown-team :selected").text();
	chosenName = $("#dropdown-name :selected").text();
	chosenStat = $("#dropdown-stat :selected").text();
	console.log(chosenStat);

})


});
