import Card from "./Card";
import Chart from "./Chart";
import OuterCard from "./OuterCard";
const SocialChart = (props) => {
  return (
    <OuterCard>
      <Card>
        <Chart data={props.data.barData} chartlayout={props.data.barLayout} />
      </Card>
      <Card>
        <Chart data={props.data.lineData} chartlayout={props.data.lineLayout} />
      </Card>
    </OuterCard>
  );
};
export default SocialChart;
