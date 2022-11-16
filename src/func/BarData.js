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
