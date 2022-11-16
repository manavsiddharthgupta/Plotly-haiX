export function lineData(xAxis, yAxis, name, color, size, showscale) {
  return {
    x: xAxis,
    y: yAxis,
    name,
    type: "scatter",
    marker: { color, size, showscale },
  };
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
