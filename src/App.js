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
  const [twitterData, setTwitterData] = useState([]);
  const [twitterLinedata, settwtLinedata] = useState([]);
  const [twitterbarLayout, setTwitterbarLayout] = useState({});
  const [twitterlineLayout, settwtlinelayout] = useState({});
  const [facebookData, setFacebookData] = useState([]);
  const [facebookLinedata, setfbLinedata] = useState([]);
  const [facebookbarLayout, setfacebookbarLayout] = useState({});
  const [facebooklineLayout, setfblinelayout] = useState({});

  console.log(twitterLinedata, facebookLinedata);
  useEffect(() => {
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

    setTwitterData(twitterbardata);
    settwtLinedata(twitterLinedata);
    setFacebookData(facebookbardata);
    setfbLinedata(facebooklinedata);

    const twitterbarlayout = barlayout("Twitter Sentiment Categories Timeline");
    const facebookbarLayout = barlayout(
      "Facebook Sentiment Categories Timeline"
    );
    const twitterLinelayout = lineLayout("Twitter Mean Sentiment Timeline");
    const fbLinelayout = lineLayout("Facebook Mean Sentiment Timeline");

    setTwitterbarLayout(twitterbarlayout);
    setfacebookbarLayout(facebookbarLayout);
    settwtlinelayout(twitterLinelayout);
    setfblinelayout(fbLinelayout);
  }, []);

  return (
    <div className="App">
      <Card>
        <Chart data={twitterData} chartlayout={twitterbarLayout} />
        <Chart data={twitterLinedata} chartlayout={twitterlineLayout} />
      </Card>
      <Card>
        <Chart data={facebookData} chartlayout={facebookbarLayout} />
        <Chart data={facebookLinedata} chartlayout={facebooklineLayout} />
      </Card>
    </div>
  );
}
