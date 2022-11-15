import React, { useState, useEffect } from "react";
import "./App.css";
import mytwitterData from "./json/twitter_api_response (2).json";
import facebookSentiment from "./json/facebook_sentiment.json";
import Chart from "./ui/Chart";
import {
  getBarChartData,
  getLineChartData,
  getTimelineData,
} from "./func/getTimelineData";
import Card from "./ui/Card";
import { barlayout, lineLayout } from "./func/layout";

export default function App() {
  const [twitterData, setTwitterData] = useState({
    twitterBarData: [],
    twitterLineData: [],
    twitterBarLayout: {},
    twitterLineLayout: {},
  });

  const [facebookData, setFacebookData] = useState({
    facebookBarData: [],
    facebookLineData: [],
    facebookBarLayout: {},
    facebookLineLayout: {},
  });

  console.log(twitterData, facebookData);

  useEffect(() => {
    console.log("twitternshbdvcj");
    const allTwitterData = getTimelineData(
      mytwitterData.stats.twitter.timelineStats.timeline,
      "twitter"
    );
    const twitterbardata = getBarChartData(allTwitterData);
    const twitterLinedata = getLineChartData(allTwitterData);

    const allFacebookData = getTimelineData(
      facebookSentiment.stats.facebook.timelineStats.timeline,
      "facebook"
    );
    const facebookbardata = getBarChartData(allFacebookData);
    const facebooklinedata = getLineChartData(allFacebookData);

    const twitterbarlayout = barlayout("Twitter Sentiment Categories Timeline");
    const facebookbarLayout = barlayout(
      "Facebook Sentiment Categories Timeline"
    );
    const twitterLinelayout = lineLayout("Twitter Mean Sentiment Timeline");
    const facebooklinelayout = lineLayout("Facebook Mean Sentiment Timeline");

    setTwitterData({
      twitterBarData: twitterbardata,
      twitterLineData: twitterLinedata,
      twitterBarLayout: twitterbarlayout,
      twitterLineLayout: twitterLinelayout,
    });

    setFacebookData({
      facebookBarData: facebookbardata,
      facebookLineData: facebooklinedata,
      facebookBarLayout: facebookbarLayout,
      facebookLineLayout: facebooklinelayout,
    });
  }, []);

  console.log("last");
  return (
    <div className="App">
      <Card>
        <Chart
          data={twitterData.twitterBarData}
          chartlayout={twitterData.twitterBarLayout}
        />
        <Chart
          data={twitterData.twitterLineData}
          chartlayout={twitterData.twitterLineLayout}
        />
      </Card>
      <Card>
        <Chart
          data={facebookData.facebookBarData}
          chartlayout={facebookData.facebookBarLayout}
        />
        <Chart
          data={facebookData.facebookLineData}
          chartlayout={facebookData.facebookLineLayout}
        />
      </Card>
    </div>
  );
}
