var dataproject = {
	init: function(){
		//dataproject.share();
		dataproject.calendar();
	},
	share: function(){
		$(".icon-twitter").on("click", function(){
			var tweet = ""; //Tweet text
			var url = ""; //Interactive URL
			var twitter_url = "https://twitter.com/intent/tweet?text="+tweet+"&url="+url+"&tw_p=tweetbutton";
			window.open(twitter_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;
		});
		$(".icon-facebook").on("click", function(){
			var picture = ""; //Picture URL
			var title = ""; //Post title
			var description = ""; //Post description
			var url = ""; //Interactive URL
	    	var facebook_url = "https://www.facebook.com/dialog/feed?display=popup&app_id=310302989040998&link="+url+"&picture="+picture+"&name="+title+"&description="+description+"&redirect_uri=http://www.facebook.com";    		
			window.open(facebook_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;
		});
	},
	calendar: function(){
		var calEvents = [[0,1,13,3,"Alexandria","VA",161.28,0],[1,2,7,5,"Tucson","AZ",1,284.00,0],[2,2,10,2,"Phoenix","AZ",405.18,0],[3,2,21,1,"San Diego","CA",601.00,0],[4,3,6,3,"Austin","TX",1,110.00,0],[5,3,11,1,"Charlotte","NC",270.00,0],[6,4,1,2,"Atlanta","GA",596.00,0],[7,4,3,4,"Washington","DC",925.00,0],[8,4,8,2,"Boston","MA",696.00,0],[9,4,17,1,"San Diego","CA",0,0],[10,4,27,2,"New Orleans","LA",770.00,0],[11,4,29,0,"Phoenix","AZ",400.00,0],[12,5,12,0,"New York","NY",0,0],[13,5,17,0,"Washington","DC",55.54,0],[14,6,16,1,"Washington","DC",78.04,0],[15,6,21,0,"New York","NY",350.00,0],[16,6,22,4,"Denver","CO",498.00,0],[17,7,6,0,"St. Louis","MO",0,0],[18,7,11,0,"Nashville","TN",499.00,0],[19,7,12,2,"Washington","DC",543.00,0],[20,7,21,0,"New York","NY",362.00,0],[21,9,8,2,"Arlington","VA",372.00,0],[22,9,20,0,"New York","NY",233.00,0],[23,10,4,1,"Washington","DC",400.00,0],[24,10,6,1,"MEMPHIS","TN",630.00,0],[25,10,9,1,"Washington","DC",399.00,0],[26,10,18,1,"Franklin","MA",222.00,0],[27,10,19,4,"Boston to Miami; Miami to BWI","",566.47,1],[29,10,23,3,"Richmond","VA",324.00,0],[30,10,24,1,"Charlotte","NC",0,0],[31,10,27,1,"Ocean City","MD",84.00,0],[32,11,7,2,"San Diego","CA",497.00,0],[33,11,12,1,"New Orleans","LA",772.00,0],[34,11,14,1,"Orlando","FL",383.00,0],[35,11,18,0,"Washington","DC",69.00,0],[36,11,19,0,"TAMPA","FL",229.00,0],[37,11,29,0,"New York","NY",457.00,0],[38,11,30,0,"Washington","DC",43.00,1],[40,12,9,2,"New York","NY",64.00,0],[41,12,13,1,"New York","NY",440.00,0]];
		var calBlocks = d3.selectAll('.calViz__day--trip');
		var tooltip = d3.select('.calViz')
			.append('div')
			.attr('class','tooltip')
			.style('position', 'absolute')
			.style('visibility', 'hidden');
		var tooltipline0 = tooltip.append('p')
			.attr('class','tooltip__text');
		var tooltipline1 = tooltip.append('p')
			.attr('class','tooltip__text');
		calBlocks
			.on('mouseover', function(){
				var dataID = $(this).data('trip');
				tooltip.style('visibility', 'visible');
				tooltipline0.text(calEvents[dataID][1] + '/' + calEvents[dataID][2] + ' - ' +
					calEvents[dataID][1] + '/' + (calEvents[dataID][2] + calEvents[dataID][3]));
			})
			.on('mousemove', function(){
				return tooltip.style('top', (event.pageY-30)+'px')
				.style("left",(event.pageX)+"px");
			})
			.on("mouseout", function(){
				return tooltip.style("visibility", "hidden");
			});




		// var calBuilder = [[31,6],[29,2],[31,3],[30,6],[31,1],[30,4],[31,6],[31,2],[30,5],[31,7],[30,3],[31,5]];
		// var calEvents = [[0,1,13,3,"Alexandria","VA",161.28,0],[1,2,7,5,"Tucson","AZ",1,284.00,0],[2,2,10,2,"Phoenix","AZ",405.18,0],[3,2,21,1,"San Diego","CA",601.00,0],[4,3,6,3,"Austin","TX",1,110.00,0],[5,3,11,1,"Charlotte","NC",270.00,0],[6,4,1,2,"Atlanta","GA",596.00,0],[7,4,3,4,"Washington","DC",925.00,0],[8,4,8,2,"Boston","MA",696.00,0],[9,4,17,1,"San Diego","CA",0,0],[10,4,27,2,"New Orleans","LA",770.00,0],[11,4,29,0,"Phoenix","AZ",400.00,0],[12,5,12,0,"New York","NY",0,0],[13,5,17,0,"Washington","DC",55.54,0],[14,6,16,1,"Washington","DC",78.04,0],[15,6,21,0,"New York","NY",350.00,0],[16,6,22,4,"Denver","CO",498.00,0],[17,7,6,0,"St. Louis","MO",0,0],[18,7,11,0,"Nashville","TN",499.00,0],[19,7,12,2,"Washington","DC",543.00,0],[20,7,21,0,"New York","NY",362.00,0],[21,9,8,2,"Arlington","VA",372.00,0],[22,9,20,0,"New York","NY",233.00,0],[23,10,4,1,"Washington","DC",400.00,0],[24,10,6,1,"MEMPHIS","TN",630.00,0],[25,10,9,1,"Washington","DC",399.00,0],[26,10,18,1,"Franklin","MA",222.00,0],[27,10,19,4,"Boston to Miami; Miami to BWI","",566.47,1],[28,10,19,4,"","",375.00,1],[29,10,23,3,"Richmond","VA",324.00,0],[30,10,24,1,"Charlotte","NC",0,0],[31,10,27,1,"Ocean City","MD",84.00,0],[32,11,7,2,"San Diego","CA",497.00,0],[33,11,12,1,"New Orleans","LA",772.00,0],[34,11,14,1,"Orlando","FL",383.00,0],[35,11,18,0,"Washington","DC",69.00,0],[36,11,19,0,"TAMPA","FL",229.00,0],[37,11,29,0,"New York","NY",457.00,0],[38,11,30,0,"Washington","DC",43.00,1],[39,11,30,0,"Arlington","VA",0,1],[40,12,9,2,"New York","NY",64.00,0],[41,12,13,1,"New York","NY",440.00,0]];
		// // var screenWidth = $(window).innerWidth();
		// // if (screenWidth > 600) {
		// // 	screenWidth = 600;
		// // }
		// var sqWidth = 10;
		// var sqPadding = 1;
		// var dataWidth = 1000;
		// var dataHeight = 1000;
		// var dataWrap = d3.select('.calViz')
		// 	.append('div')
		// 	.attr('class','calViz__viz');
		// var sqSVG = dataWrap.append('svg')
		// 	.style('width',dataWidth)
		// 	.style('height',dataHeight);

		// var startPos, color, calClass, calID;
		// var calCounter = 0;
		// var dayCounter = 0;
		// var tempI, tempJ;
		// for(var i = 0;i < calBuilder.length;i++) {
		// 	startPos = calBuilder[i][1]%7; // Start day of the week
		// 	for(var j = 0;j < calBuilder[i][0];j++) {
		// 		if(i == calEvents[calCounter][1]-1 && j == calEvents[calCounter][2]-1) {
		// 			color = '#DD0000';
		// 			calID = calEvents[calCounter][0];
		// 			calClass = 'calViz__day--' + calID;
		// 			calCounter++;
		// 		} else {
		// 			color = '#eeeeee';
		// 			calClass = 'calViz__day--empty';
		// 		};
		// 		sqSVG.append('rect')
		// 			// .transition()
		// 			// .duration(100)
		// 			// .delay(i * 100 * 31 + j * 100)
		// 			.style('width',sqWidth - sqPadding)
		// 			.style('height',sqWidth - sqPadding)
		// 			// .style('fill-opacity',.8)
		// 			.attr('class','calViz__day ' + calClass)
		// 			.attr('fill',color)
		// 			.attr('transform',
		// 				"translate(" + ((i%3) * 8 * sqWidth +
		// 				((j+startPos)%7)*sqWidth) + "," +
		// 				((Math.floor(i/3) * 9 * sqWidth) + (Math.floor((j+startPos)/7) * sqWidth)) + ")");


		// 			// .attr('transform',
		// 			// 	"translate(" + (i*8*sqWidth + // Month location
		// 			// 	((j+startPos)%7)*sqWidth) + "," + // Day location adjusted to start day (x)
		// 			// 	(Math.floor((j+startPos)/7) * sqWidth * Math.floor(i/3)) + ")"); // Row location (y)
		// 	};
		// };
		// for(var i = 0;i < calBuilder.length;i++) {
		// 	startPos = calBuilder[i][1]%7; // Start day of the week
		// 	sqSVG.append('text')
		// 		.text(i)
		// 		.attr('transform',
		// 			"translate(" + (i*8*sqWidth) + ",0)"// Day location adjusted to start day (x)
		// 			); // Row location (y)
		// };
	}

}
$(document).ready(function(){
	dataproject.init();
	console.log("connected");
});
