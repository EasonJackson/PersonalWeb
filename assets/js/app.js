$(document).ready(
	function(){
    $("#myimage").hover(
    	function(){
    		$(this).animate({width: '250px', height:'250px'}, 100);
    	},        
    	function(){
    		$(this).animate({width: '200px', height:'200px'}, 100);
    	}
    	);
	}
);

$(function(){
  $('#Publications').popover({
  	html: true,
  	content: function(){
      return $('#popover_content_publications').html();
    },
  	trigger: "hover",
    container: 'body',
    //delay: { "show": 100, "hide": 2000 }
  });
});


$(function(){
	var dataval = parseInt($('.progress').attr("data-amount"));
	console.log($('#java').attr("style"));
	//console.log(document.getElementById('java').style);
	$('.progress-bar.bg-success').css('style', function(){
		var styles = "width: 100%"
		console.log(styles);
		return styles;
	});
	console.log($('#java').attr("style"));
});


//radar
$(function(){
	var ctxR = document.getElementById("radarChart").getContext('2d');
	var myRadarChart = new Chart(ctxR, {
	    type: 'radar',
	    data: {
	        labels: ["Designing", "Coding", "Reviewing", "Algorithm", "Data Structure"],
	        datasets: [
	            {
	                label: "Proficiency",
	                fillColor: "rgba(220,220,220,0.2)",
	                strokeColor: "rgba(220,220,220,1)",
	                pointColor: "rgba(220,220,220,1)",
	                pointStrokeColor: "#fff",
	                pointHighlightFill: "#fff",
	                pointHighlightStroke: "rgba(220,220,220,1)",
	                data: [65, 80, 71, 81, 82, 0,0,0,0,0, 65, 80, 71, 81, 82],
	            },
	        ]
	    },
	    options: {
	        responsive: true
	    }    
	});
});

