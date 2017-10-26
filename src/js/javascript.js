var dataproject = {
	init: function(){
		dataproject.share();
		dataproject.calendar();
	},
	share: function(){
		$(".fa-twitter-square").on("click", function(){
			var tweet = "Former Baltimore County superintendent Dallas Dance traveled extensively. View his travel logs."; //Tweet text
			var url = "http://data.baltimoresun.com/news/dance-travel/"; //Interactive URL
			var twitter_url = "https://twitter.com/intent/tweet?text="+tweet+"&url="+url+"&tw_p=tweetbutton";
			window.open(twitter_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;
		});
		$(".fa-facebook-square").on("click", function(){
			var picture = "http://data.baltimoresun.com/news/dance-travel/images/thumb.png"; //Picture URL
			var title = "Visualizing Dallas Dance's trips in 2016"; //Post title
			var description = "Former Baltimore County superintendent Dallas Dance traveled extensively. View his travel logs."; //Post description
			var url = "http://data.baltimoresun.com/news/dance-travel/"; //Interactive URL
	    	var facebook_url = "https://www.facebook.com/dialog/feed?display=popup&app_id=310302989040998&link="+url+"&picture="+picture+"&name="+title+"&description="+description+"&redirect_uri=http://www.facebook.com";    		
			window.open(facebook_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;
		});
	},
	calendar: function(){
		var calEvents = [[1,13,3,"Alexandria","VA","$161.28","AASA: The School Superintendents Association"],[2,7,5,"Tucson","AZ","$1,300.00","ERDI: Education Research & Development Institute"],[2,10,2,"Phoenix","AZ","$405.18","AASA's Large Countywide and Suburban District Consortium"],[2,21,1,"San Diego","CA","$601.00","Edu-Tech"],[3,6,3,"Austin","TX","$1,633.00","SXSW EDU South-By-Southwest EDU"],[3,11,1,"Charlotte","NC","$270.00","AASA"],[4,1,2,"Atlanta","GA","$681.00","ASCD: Association for Supervision and Curriculum Development"],[4,3,4,"Washington","DC","$925.00","CoSN Conference"],[4,8,2,"Boston","MA","$1,237.00","National School Boards Association"],[4,17,1,"San Diego","CA","$72.00","Arizona State University-Global Silicon Valley (ASU-GSV); Discovery Education"],[4,27,2,"New Orleans","LA","$770.00","AASA"],[4,29,0,"Phoenix","AZ","$400.00","AASA"],[5,12,0,"New York","NY","","Bloomberg Philanthropies, Digital Learning Symposium"],[5,17,0,"Washington","DC","$55.54","Atlantic Magazine event"],[6,16,1,"Washington","DC","$78.04","AASA's Large Countywide and Suburban District Consortium"],[6,21,0,"New York","NY","$350.00","College Board"],[6,22,4,"Denver","CO","$650.00","International Society for Technology in Education, board meeting"],[7,6,3,"St. Louis","MO","","ERDI: Economic Research & Development Institute"],[7,11,0,"Nashville","TN","$499.00","Metro Nashville Public Schools"],[7,12,2,"Washington","DC","$543.00","AASA"],[7,21,0,"New York","NY","$362.00","Knewton Inc.'s Symposium"],[9,8,2,"Arlington","VA","$372.00","International Society for Technology in Education, board meeting"],[9,20,0,"New York","NY","$233.00","Concordia Summitt"],[10,4,1,"Washington","DC","$400.00","White House Symposium on the Future of Education R&D and Digital Learning"],[10,6,1,"MEMPHIS","TN","$630.00","AASA"],[10,9,1,"Washington","DC","$0.00","White House Initiative on Educational Excellence for African Americans"],[10,18,1,"Franklin","MA","$222.00","MASSCUE"],[10,19,2,"Miami","FL","$375.00","Council of Great City Schools Miami Intercontinental"],[10,24,1,"Charlotte","NC","$324.00","AASA's Large Countywide and Suburban District Consortium"],[10,27,1,"Ocean City","MD","$89.00","PSSAM Maryland school districts meeting."],[10,28,1,"New Orleans","LA","$446","CDE Leadership Meeting"],[11,7,2,"San Diego","CA","$1,152.00","National Association of School Superintendents"],[11,12,1,"New Orleans","LA","$772.00","AHA"],[11,14,1,"Orlando","FL","$568.00","Walt Disney World Learning Counsel"],[11,18,0,"Washington","DC","$69.00","Job Corps"],[11,19,0,"TAMPA","FL","$585.00","NABSE National Alliance of Black School Educators 44th Annual"],[11,29,0,"New York","NY","$457.00","AIA American Institute of Architects Build America Summitt"],[11,30,0,"Washington","DC","$43.00","Schools, Health and Libraries Broadband Coalition"],[11,30,0,"Arlington","VA","$47.00","Google"],[12,9,2,"New York","NY","$64.00","ISTE Board Meeting"],[12,13,1,"New York","NY","$440.00","College Board Superintendent's Advisory Council Meeting"]];
		var calBlocks = d3.selectAll('.calViz__day--trip');

		var screenWidth = $(window).innerWidth();
		var resizeTimer;
		$(window).on('resize', function(e){
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(function(){
				screenWidth = $(this).innerWidth();
			}, 250);
		});
		var tooltipWrap = d3.select('.tooltipAnchor')
			.style('visibility', 'hidden');
		var tooltip = tooltipWrap.append('div')
			.attr('class','tooltip');
		var tooltipClose = tooltip.append('i')
			.attr('class','fa fa-times-circle-o');
		tooltip.append('p')
			.attr('class','tooltip__header')
			.text('Trip details');
		var tooltipline0 = tooltip.append('p')
			.attr('class','tooltip__text tooltip__text--date');
		var tooltipline1 = tooltip.append('p')
			.attr('class','tooltip__text');
		var tooltipline2 = tooltip.append('p')
			.attr('class','tooltip__text');
		var tooltipline3 = tooltip.append('p')
			.attr('class','tooltip__text');

		var ttTempHR = tooltip.append('hr')
			.attr('class','tooltip__text--temp');
		var ttTemp0 = tooltip.append('p')
			.attr('class','tooltip__text tooltip__text--date tooltip__text--temp')
			.text(calEvents[38][0] + '/' + calEvents[38][1] + ' - ' +
			calEvents[38][0] + '/' + (calEvents[38][1] + calEvents[38][2]));
		var ttTemp1 = tooltip.append('p')
			.attr('class','tooltip__text tooltip__text--temp')
			.text(calEvents[38][3] + ', ' + calEvents[38][4]);
		var ttTemp2 = tooltip.append('p')
			.attr('class','tooltip__text tooltip__text--temp')
			.html('<br><span>Event:</span> ' + calEvents[38][6]);
		var ttTemp3 = tooltip.append('p')
			.attr('class','tooltip__text tooltip__text--temp')
			.html('<span>Cost:</span> ' + calEvents[38][5]);
		var ttTemp = d3.selectAll('.tooltip__text--temp')
			.style('display','none');

		var dataID, currData;
		calBlocks
			.on('mouseover', function(){
				dataID = $(this).data('trip');
				currData = calEvents[dataID];
				tooltipWrap.style('visibility', 'visible');
				tooltipline0.text(currData[0] + '/' + currData[1] + ' - ' +
					currData[0] + '/' + (currData[1] + currData[2]));
				tooltipline1.text(currData[3] + ', ' + currData[4]);
				tooltipline2.html('<br><span>Event:</span> ' + currData[6]);
				if(currData[5] != "") {
					tooltipline3.html('<span>Cost:</span> ' + currData[5]);
				}
				if(dataID == 37) {
					ttTemp.style('display','block');
				} else {
					ttTemp.style('display','none');
				};
			});
		tooltipClose.on('click', function() {
			return tooltipWrap.style("visibility", "hidden");
		});
	}

}
$(document).ready(function(){
	dataproject.init();
	console.log("connected");
});
