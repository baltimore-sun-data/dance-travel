var dataproject = {
    init: function() {
        dataproject.calendar();
    },
    share: function() {
        $(".icon-twitter").on("click", function() {
            var tweet = "";
            var url = "";
            var twitter_url = "https://twitter.com/intent/tweet?text=" + tweet + "&url=" + url + "&tw_p=tweetbutton";
            window.open(twitter_url, "mywin", "left=200,top=200,width=500,height=300,toolbar=1,resizable=0");
            return false;
        });
        $(".icon-facebook").on("click", function() {
            var picture = "";
            var title = "";
            var description = "";
            var url = "";
            var facebook_url = "https://www.facebook.com/dialog/feed?display=popup&app_id=310302989040998&link=" + url + "&picture=" + picture + "&name=" + title + "&description=" + description + "&redirect_uri=http://www.facebook.com";
            window.open(facebook_url, "mywin", "left=200,top=200,width=500,height=300,toolbar=1,resizable=0");
            return false;
        });
    },
    calendar: function() {
        var calBuilder = [ [ 31, 6 ], [ 29, 2 ], [ 31, 3 ], [ 30, 6 ], [ 31, 1 ], [ 30, 4 ], [ 31, 6 ], [ 31, 2 ], [ 30, 5 ], [ 31, 7 ], [ 30, 3 ], [ 31, 5 ] ];
        var calEvents = [ [ 0, 1, 13, 3, "Alexandria", "VA", 161.28, 0 ], [ 1, 2, 7, 5, "Tucson", "AZ", 1, 284, 0 ], [ 2, 2, 10, 2, "Phoenix", "AZ", 405.18, 0 ], [ 3, 2, 21, 1, "San Diego", "CA", 601, 0 ], [ 4, 3, 6, 3, "Austin", "TX", 1, 110, 0 ], [ 5, 3, 11, 1, "Charlotte", "NC", 270, 0 ], [ 6, 4, 1, 2, "Atlanta", "GA", 596, 0 ], [ 7, 4, 3, 4, "Washington", "DC", 925, 0 ], [ 8, 4, 8, 2, "Boston", "MA", 696, 0 ], [ 9, 4, 17, 1, "San Diego", "CA", 0, 0 ], [ 10, 4, 27, 2, "New Orleans", "LA", 770, 0 ], [ 11, 4, 29, 0, "Phoenix", "AZ", 400, 0 ], [ 12, 5, 12, 0, "New York", "NY", 0, 0 ], [ 13, 5, 17, 0, "Washington", "DC", 55.54, 0 ], [ 14, 6, 16, 1, "Washington", "DC", 78.04, 0 ], [ 15, 6, 21, 0, "New York", "NY", 350, 0 ], [ 16, 6, 22, 4, "Denver", "CO", 498, 0 ], [ 17, 7, 6, 0, "St. Louis", "MO", 0, 0 ], [ 18, 7, 11, 0, "Nashville", "TN", 499, 0 ], [ 19, 7, 12, 2, "Washington", "DC", 543, 0 ], [ 20, 7, 21, 0, "New York", "NY", 362, 0 ], [ 21, 9, 8, 2, "Arlington", "VA", 372, 0 ], [ 22, 9, 20, 0, "New York", "NY", 233, 0 ], [ 23, 10, 4, 1, "Washington", "DC", 400, 0 ], [ 24, 10, 6, 1, "MEMPHIS", "TN", 630, 0 ], [ 25, 10, 9, 1, "Washington", "DC", 399, 0 ], [ 26, 10, 18, 1, "Franklin", "MA", 222, 0 ], [ 27, 10, 19, 4, "Boston to Miami; Miami to BWI", "", 566.47, 1 ], [ 28, 10, 19, 4, "", "", 375, 1 ], [ 29, 10, 23, 3, "Richmond", "VA", 324, 0 ], [ 30, 10, 24, 1, "Charlotte", "NC", 0, 0 ], [ 31, 10, 27, 1, "Ocean City", "MD", 84, 0 ], [ 32, 11, 7, 2, "San Diego", "CA", 497, 0 ], [ 33, 11, 12, 1, "New Orleans", "LA", 772, 0 ], [ 34, 11, 14, 1, "Orlando", "FL", 383, 0 ], [ 35, 11, 18, 0, "Washington", "DC", 69, 0 ], [ 36, 11, 19, 0, "TAMPA", "FL", 229, 0 ], [ 37, 11, 29, 0, "New York", "NY", 457, 0 ], [ 38, 11, 30, 0, "Washington", "DC", 43, 1 ], [ 39, 11, 30, 0, "Arlington", "VA", 0, 1 ], [ 40, 12, 9, 2, "New York", "NY", 64, 0 ], [ 41, 12, 13, 1, "New York", "NY", 440, 0 ] ];
        var sqWidth = 10;
        var sqPadding = 1;
        var dataWidth = 1e3;
        var dataHeight = 100;
        var dataWrap = d3.select(".calViz").append("div").attr("class", "calViz__viz");
        var sqSVG = dataWrap.append("svg").style("width", dataWidth).style("height", dataHeight);
        var startPos, color, calClass, calID;
        var calCounter = 0;
        var dayCounter = 0;
        var tempI, tempJ;
        for (var i = 0; i < calBuilder.length; i++) {
            startPos = calBuilder[i][1] % 7;
            for (var j = 0; j < calBuilder[i][0]; j++) {
                if (i == calEvents[calCounter][1] - 1 && j == calEvents[calCounter][2] - 1) {
                    color = "#DD0000";
                    calID = calEvents[calCounter][0];
                    calClass = "calViz__day--" + calID;
                    dayCounter = calEvents[calCounter][3];
                    tempJ = j;
                    while (dayCounter != 0) {
                        createSquare(i, tempJ, calClass, color);
                        tempJ++;
                        dayCounter--;
                    }
                    calCounter++;
                } else {}
            }
        }
        function createSquare(i, j, calClass, color) {
            sqSVG.append("rect").style("width", sqWidth - sqPadding).style("height", sqWidth - sqPadding).attr("class", "calViz__day " + calClass).attr("fill", color).attr("transform", "translate(" + (i * 8 * sqWidth + (j + startPos) % 7 * sqWidth) + "," + Math.floor((j + startPos) / 7) * sqWidth + ")");
        }
    }
};

$(document).ready(function() {
    dataproject.init();
    console.log("connected");
});