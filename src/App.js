import React, { useState, useEffect, Fragment } from "react";
import mytwitterData from "./json/twitter_api_response (2).json";
import facebookSentiment from "./json/facebook_sentiment.json";
import linkedInData from "./json/linkedin_data_for test (2).json";
import { getTimelineData } from "./func/getTimelineData";
import { getBarChartData } from "./func/BarData";
import { getLineChartData } from "./func/LineData";
import { barlayout, lineLayout } from "./func/layout";
import SocialChart from "./ui/SocialChart";
// import mapData from "./func/MapData";
// import MapChart from "./ui/MapChart";

export default function App() {
  const [twitterData, setTwitterData] = useState({
    barData: [],
    lineData: [],
    barLayout: {},
    lineLayout: {},
  });

  const [facebookData, setFacebookData] = useState({
    barData: [],
    lineData: [],
    barLayout: {},
    lineLayout: {},
  });

  useEffect(() => {
    // let say we are using fetch to get the alltwitterData and allfacebookdata
    // using useEffect we can transform the data.
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
    console.log(
      linkedInData.stats.linkedin.timelineStats.organisationFollowersLifetime[0]
        .followers_split.followerCountsByRegion
    );

    setTwitterData({
      barData: twitterbardata,
      lineData: twitterLinedata,
      barLayout: twitterbarlayout,
      lineLayout: twitterLinelayout,
    });

    setFacebookData({
      barData: facebookbardata,
      lineData: facebooklinedata,
      barLayout: facebookbarLayout,
      lineLayout: facebooklinelayout,
    });
  }, []);

  return (
    <>
      <SocialChart data={twitterData} />
      <SocialChart data={facebookData} />
      {/* <MapChart /> */}
    </>
  );
}
