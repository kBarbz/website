$(function(){
let chosenName;
let chosenTeam;
let chosenStat; 
let $restartButton = $('#restart').detach();

$('#dropdown-team').change(function() {

	$('.pre-value1').remove();
	chosenTeam = $("#dropdown-team :selected").text() 	// Variable equals what was selected
	$('.currentTeam').remove()		// Remove the current options

	$.get("/teamName", chosenTeam, function(data) {
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
			case "Bayswater Morley 1":
			for (let i = 0; i < data.length; i++){
			$('.teamName').append("<option class='currentTeam' value='" + data[i]['Name'] + "'>" + data[i]['Name'] + "</option>")	
			}
			break;
			case "Bayswater Morley 2":
			for (let i = 0; i < data.length; i++){
			$('.teamName').append("<option class='currentTeam' value='" + data[i]['Name'] + "'>" + data[i]['Name'] + "</option>")	
			}
			break;
			case "Bayswater Morley 3":
			for (let i = 0; i < data.length; i++){
			$('.teamName').append("<option class='currentTeam' value='" + data[i]['Name'] + "'>" + data[i]['Name'] + "</option>")	
			}
			break;
			case "Fremantle 1":
			for (let i = 0; i < data.length; i++){
			$('.teamName').append("<option class='currentTeam' value='" + data[i]['Name'] + "'>" + data[i]['Name'] + "</option>")	
			}
			break;
			case "Fremantle 2":
			for (let i = 0; i < data.length; i++){
			$('.teamName').append("<option class='currentTeam' value='" + data[i]['Name'] + "'>" + data[i]['Name'] + "</option>")	
			}
			break;
		}
		})

  		
})
$('#dropdown-stat').change(function() {
	$('.pre-value2').remove();
})


$('.calculate').click(function() {
	chosenTeam = $("#dropdown-team :selected").val();
	chosenName = $("#dropdown-name :selected").val();
	chosenStat = $("#dropdown-stat :selected").val();
	
	if(chosenTeam = "") {
		console.log('fail');
	}
	$('#title').text(chosenName);
	 $('#restart-button').append($restartButton);
	$detached = $('.main1').detach();
	
})


$('#restart-button').click(function() {	
	$('#title').text('Silly Statistics');
	$('.main').prepend($detached);
	$('#restart').detach();
});

});
