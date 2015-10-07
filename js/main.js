var datajson;

window.addEventListener('onload',init());
function init(){

	buildEventListener();	

	// GET REQUEST
	$.ajax({
	    url: 'data/data.json',
	    type: 'GET',
	    failure: function(err){
	        // what to do on failure
	        // generally, handle the error
	        console.log ("There was an issue getting the data");
	    },
	    success: function(response) {
	        // what to do on success
	        console.log(response);
	        datajson = response;
	        console.log('here');
	      buildDoughnutChart(response.candidates);
	      buildLineChart();
	      filterData(response.candidates);
	     

	    }
	});

}

function buildEventListener() {
	var links = document.getElementsByClassName("filter") 
	for(var i=0;i<links.length;i++){
		links[i].addEventListener('click',filterData)
	}
}


function filterData(event){

	var targetedId = event.target.id;
	console.log(targetedId);

	if(targetedId=='tabNCR'){
		document.getElementById('candidate1').innerHTML = datajson.candidates[0].pulseNCR;
		document.getElementById('candidate2').innerHTML = datajson.candidates[1].pulseNCR;
		document.getElementById('candidate3').innerHTML = datajson.candidates[2].pulseNCR;
		document.getElementById('candidate4').innerHTML = datajson.candidates[3].pulseNCR;		
	} else if (targetedId=='tabBL'){
		document.getElementById('candidate1').innerHTML = datajson.candidates[0].pulseBL;
		document.getElementById('candidate2').innerHTML = datajson.candidates[1].pulseBL;
		document.getElementById('candidate3').innerHTML = datajson.candidates[2].pulseBL;	
		document.getElementById('candidate4').innerHTML = datajson.candidates[3].pulseBL;		
	} else if (targetedId=='tabVIS'){
		document.getElementById('candidate1').innerHTML = datajson.candidates[0].pulseVIS;
		document.getElementById('candidate2').innerHTML = datajson.candidates[1].pulseVIS;
		document.getElementById('candidate3').innerHTML = datajson.candidates[2].pulseVIS;	
		document.getElementById('candidate4').innerHTML = datajson.candidates[3].pulseVIS;		
	} else if (targetedId=='tabMIN'){
		document.getElementById('candidate1').innerHTML = datajson.candidates[0].pulseMIN;
		document.getElementById('candidate2').innerHTML = datajson.candidates[1].pulseMIN;
		document.getElementById('candidate3').innerHTML = datajson.candidates[2].pulseMIN;	
		document.getElementById('candidate4').innerHTML = datajson.candidates[3].pulseMIN;		
	} else if (targetedId=='tabABC'){
		document.getElementById('candidate1').innerHTML = datajson.candidates[0].pulseABC;
		document.getElementById('candidate2').innerHTML = datajson.candidates[1].pulseABC;
		document.getElementById('candidate3').innerHTML = datajson.candidates[2].pulseABC;	
		document.getElementById('candidate4').innerHTML = datajson.candidates[3].pulseABC;		
	} else if (targetedId=='tabD'){
		document.getElementById('candidate1').innerHTML = datajson.candidates[0].pulseD;
		document.getElementById('candidate2').innerHTML = datajson.candidates[1].pulseD;
		document.getElementById('candidate3').innerHTML = datajson.candidates[2].pulseD;	
		document.getElementById('candidate4').innerHTML = datajson.candidates[3].pulseD;		
	} else if (targetedId=='tabE'){
		document.getElementById('candidate1').innerHTML = datajson.candidates[0].pulseE;
		document.getElementById('candidate2').innerHTML = datajson.candidates[1].pulseE;
		document.getElementById('candidate3').innerHTML = datajson.candidates[2].pulseE;	
		document.getElementById('candidate4').innerHTML = datajson.candidates[3].pulseE;		
	}

	event.preventDefault();

}


function buildDoughnutChart(candidates) {

	var data = []; // empty array that we will add to

	console.log(candidates);
	for(var i=0;i<candidates.length;i++){
		var c = {
			value: candidates[i].pulseRP,
			label: candidates[i].name,
			color: candidates[i].color

		}
		console.log(c);
		data.push(c);
	}

	console.log(data);	

	var options = {
		
		    segmentShowStroke : true,
		    segmentStrokeWidth : 0.01,
		    percentageInnerCutout : 30,
		    animationSteps : 168,
		    animationEasing : "easeOutCirc",
	}

	var ctx = document.getElementById("doughnutChart").getContext("2d");

	var myDoughnutChart = new Chart(ctx).Doughnut(data,options);
}

function buildLineChart(){
	
	var data = {
	    labels: ["June 24 to July 2, 2014", "September 8 to 14, 2014", "March 1 to 7, 2015", "May 30 to June 5, 2015", "September 8 to 14, 2015"],
	    datasets: [
	        {
	            label: "Grace Poe",
	            fillColor: "rgba(107,185,240,0.2)",
	            strokeColor: "rgba(107,185,240,1)",
	            pointColor: "rgba(107,185,240,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(107,185,240,1)",
	            data: [12,10,14,30,26]
	        },
	        {
	            label: "Mar Roxas",
	            fillColor: "rgba(247,202,24,0.2)",
	            strokeColor: "rgba(247,202,24,1)",
	            pointColor: "rgba(247,202,24,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(247,202,24,1)",
	            data: [7,13,4,10,20]
	        },
	        {
	            label: "Jojo Binay",
	            fillColor: "rgba(211,84,0,0.2)",
	            strokeColor: "rgba(211,84,0,1)",
	            pointColor: "rgba(211,84,0,1)",
	            pointStrokeColor: "#D35400",
	            pointHighlightFill: "#D35400",
	            pointHighlightStroke: "rgba(211,84,0,1)",
	            data: [41,31,29,22,19]
	        },
	         {
	            label: "Rody Duterte",
	            fillColor: "rgba(150,40,27,0.2)",
	            strokeColor: "rgba(150,40,27,1)",
	            pointColor: "rgba(150,40,27,1)",
	            pointStrokeColor: "#E74C3C",
	            pointHighlightFill: "#E74C3C",
	            pointHighlightStroke: "rgba(150,40,27,1)",
	            data: [0,0,12,15,16]
	        },
	    /***     {
	            label: "Other candidates",
	            fillColor: "rgba(151,187,205,0.2)",
	            strokeColor: "rgba(151,187,205,1)",
	            pointColor: "rgba(151,187,205,1)",
	            pointStrokeColor: "#E74C3C",
	            pointHighlightFill: "#E74C3C",
	            pointHighlightStroke: "rgba(151,187,205,1)",
	            data: [40,46,41,23,19]
	        } ***/
	    ],
	      
	};	

	var options = {
		datasetStroke : true,
		datasetFill : true,
		pointDotRadius :5
		
	}

	var ctx = document.getElementById("lineChart").getContext("2d");
	
	var myLineChart = new Chart(ctx).Line(data, options);	
	
	var chartLegend = myLineChart.generateLegend();
	
	$('#lineChartLegend').append(chartLegend);
}