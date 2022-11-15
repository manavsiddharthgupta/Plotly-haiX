export function getTimelineData(timeline, socialMedia) {
  let positive = {
    data: [],
    name: "positive",
    bgcolor: "white",
    linecolor: "#b5b5b6",
  };
  let neutral = {
    data: [],
    name: "neutral",
    bgcolor: "#12b5cb",
    linecolor: "#018786",
  };
  let negative = {
    data: [],
    name: "negative",
    bgcolor: "#f28b82",
    linecolor: "#d93025",
  };
  let meanSentiments = {
    data: [],
    name: "mean sentiments",
  };
  let dates = [];

  if (socialMedia === "twitter") {
    timeline.forEach((currTimeline) => {
      meanSentiments.data.push(currTimeline.meanSentiment);
      positive.data.push(currTimeline.sentimentAsCategories.positiveTweets + 1);
      neutral.data.push(currTimeline.sentimentAsCategories.neutralTweets);
      negative.data.push(currTimeline.sentimentAsCategories.negativeTweets);
      const mydate = new Date(currTimeline.date);
      dates.push(mydate.toDateString());
    });
  } else {
    timeline.forEach((currTimeline) => {
      meanSentiments.data.push(currTimeline.meanSentiment);
      positive.data.push(
        currTimeline.sentimentAsCategories.positiveComments + 1
      );
      neutral.data.push(currTimeline.sentimentAsCategories.neutralComments);
      negative.data.push(currTimeline.sentimentAsCategories.negativeComments);
      const mydate = new Date(currTimeline.date);
      dates.push(mydate.toDateString());
    });
  }

  return {
    yAxisData: [positive, negative, neutral, meanSentiments],
    xAxisData: dates,
  };
}

export function barData(xAxis, yAxis, name, bgcolor, linecolor) {
  return {
    x: xAxis,
    y: yAxis,
    name,
    type: "bar",
    text: yAxis,
    marker: {
      color: bgcolor,
      line: {
        color: linecolor,
        width: 1.5,
      },
    },
  };
}

export function lineData(xAxis, yAxis, name, color, size, showscale) {
  return {
    x: xAxis,
    y: yAxis,
    name,
    type: "scatter",
    marker: { color, size, showscale },
  };
}

export function getBarChartData(allData) {
  let bardata = [];
  allData.yAxisData.forEach((each) => {
    let createBarData = "";
    if (each.name !== "mean sentiments") {
      createBarData = barData(
        allData.xAxisData,
        each.data,
        each.name,
        each.bgcolor,
        each.linecolor
      );
      bardata.push(createBarData);
    }
  });
  return bardata;
}

export function getLineChartData(allData) {
  let linedata = [];
  allData.yAxisData.forEach((each) => {
    let createBarData = "";
    if (each.name === "mean sentiments") {
      createBarData = lineData(
        allData.xAxisData,
        each.data,
        each.name,
        "red",
        10,
        each.name
      );
      linedata.push(createBarData);
    }
  });
  return linedata;
}
