import Plot from "react-plotly.js";

const Chart = (props) => {
  return <Plot data={props.data} layout={props.chartlayout} />;
};
export default Chart;
