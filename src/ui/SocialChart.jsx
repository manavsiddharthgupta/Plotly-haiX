import Card from "./Card";
import Chart from "./Chart";
import MapChart from "./MapChart";
import OuterCard from "./OuterCard";
const SocialChart = (props) => {
  const combineData = [...props.data.barData, ...props.data.lineData];
  console.log(props.data.barLayout);
  const combinedLayout = props.data.barLayout;
  combinedLayout.width = 600;
  return (
    <OuterCard>
      <Card>
        <Chart data={props.data.barData} chartlayout={props.data.barLayout} />
      </Card>
      <Card>
        <Chart data={props.data.lineData} chartlayout={props.data.lineLayout} />
      </Card>
      <Card>
        <Chart data={combineData} chartlayout={combinedLayout} />
      </Card>
    </OuterCard>
  );
};
export default SocialChart;
