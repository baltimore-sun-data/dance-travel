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
        var calEvents = [ [ 0, 1, 13, 3, "Alexandria", "VA", 161.28, 0 ], [ 1, 2, 7, 5, "Tucson", "AZ", 1, 284, 0 ], [ 2, 2, 10, 2, "Phoenix", "AZ", 405.18, 0 ], [ 3, 2, 21, 1, "San Diego", "CA", 601, 0 ], [ 4, 3, 6, 3, "Austin", "TX", 1, 110, 0 ], [ 5, 3, 11, 1, "Charlotte", "NC", 270, 0 ], [ 6, 4, 1, 2, "Atlanta", "GA", 596, 0 ], [ 7, 4, 3, 4, "Washington", "DC", 925, 0 ], [ 8, 4, 8, 2, "Boston", "MA", 696, 0 ], [ 9, 4, 17, 1, "San Diego", "CA", 0, 0 ], [ 10, 4, 27, 2, "New Orleans", "LA", 770, 0 ], [ 11, 4, 29, 0, "Phoenix", "AZ", 400, 0 ], [ 12, 5, 12, 0, "New York", "NY", 0, 0 ], [ 13, 5, 17, 0, "Washington", "DC", 55.54, 0 ], [ 14, 6, 16, 1, "Washington", "DC", 78.04, 0 ], [ 15, 6, 21, 0, "New York", "NY", 350, 0 ], [ 16, 6, 22, 4, "Denver", "CO", 498, 0 ], [ 17, 7, 6, 0, "St. Louis", "MO", 0, 0 ], [ 18, 7, 11, 0, "Nashville", "TN", 499, 0 ], [ 19, 7, 12, 2, "Washington", "DC", 543, 0 ], [ 20, 7, 21, 0, "New York", "NY", 362, 0 ], [ 21, 9, 8, 2, "Arlington", "VA", 372, 0 ], [ 22, 9, 20, 0, "New York", "NY", 233, 0 ], [ 23, 10, 4, 1, "Washington", "DC", 400, 0 ], [ 24, 10, 6, 1, "MEMPHIS", "TN", 630, 0 ], [ 25, 10, 9, 1, "Washington", "DC", 399, 0 ], [ 26, 10, 18, 1, "Franklin", "MA", 222, 0 ], [ 27, 10, 19, 4, "Boston to Miami; Miami to BWI", "", 566.47, 1 ], [ 29, 10, 23, 3, "Richmond", "VA", 324, 0 ], [ 30, 10, 24, 1, "Charlotte", "NC", 0, 0 ], [ 31, 10, 27, 1, "Ocean City", "MD", 84, 0 ], [ 32, 11, 7, 2, "San Diego", "CA", 497, 0 ], [ 33, 11, 12, 1, "New Orleans", "LA", 772, 0 ], [ 34, 11, 14, 1, "Orlando", "FL", 383, 0 ], [ 35, 11, 18, 0, "Washington", "DC", 69, 0 ], [ 36, 11, 19, 0, "TAMPA", "FL", 229, 0 ], [ 37, 11, 29, 0, "New York", "NY", 457, 0 ], [ 38, 11, 30, 0, "Washington", "DC", 43, 1 ], [ 40, 12, 9, 2, "New York", "NY", 64, 0 ], [ 41, 12, 13, 1, "New York", "NY", 440, 0 ] ];
        var calBlocks = d3.selectAll(".calViz__day--trip");
        var tooltip = d3.select(".calViz").append("div").attr("class", "tooltip").style("position", "absolute").style("visibility", "hidden");
        var tooltipline0 = tooltip.append("p").attr("class", "tooltip__text");
        var tooltipline1 = tooltip.append("p").attr("class", "tooltip__text");
        calBlocks.on("mouseover", function() {
            var dataID = $(this).data("trip");
            tooltip.style("visibility", "visible");
            tooltipline0.text(calEvents[dataID][1] + "/" + calEvents[dataID][2] + " - " + calEvents[dataID][1] + "/" + (calEvents[dataID][2] + calEvents[dataID][3]));
        }).on("mousemove", function() {
            return tooltip.style("top", event.pageY - 30 + "px").style("left", event.pageX + "px");
        }).on("mouseout", function() {
            return tooltip.style("visibility", "hidden");
        });
    }
};

$(document).ready(function() {
    dataproject.init();
    console.log("connected");
});