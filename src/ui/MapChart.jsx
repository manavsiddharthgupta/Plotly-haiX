import Plot from "react-plotly.js";
import Card from "./Card";
import OuterCard from "./OuterCard";

const MapChart = (props) => {
  return (
    <OuterCard>
      <Card>
        <Plot
          layout={{
            width: 500,
            height: 300,
            title: "2022 Follower count by Country",
            geo: {
              scope: "world",
              draggable: false,
              raiseondrag: false,
              countrycolor: "rgb(255, 255, 255)",
              showland: true,
              landcolor: "rgb(217, 217, 217)",
              showlakes: true,
              lakecolor: "rgb(255, 255, 255)",
              subunitcolor: "rgb(255, 255, 255)",
              lonaxis: {},
              lataxis: {},
            },
            margin: {
              l: 0,
              r: 0,
              b: 0,
              t: 0,
              pad: 2,
            },
          }}
        />
      </Card>
    </OuterCard>
  );
};
export default MapChart;
