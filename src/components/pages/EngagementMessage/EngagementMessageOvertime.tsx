import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { engagementMessageOverTimeChartOptions } from "./EngagementHelper";
import messageCountList from "./messageCountList";
import channels from "./channels";
import { useRef } from "react";

const EngagementMessagesOverTime = () => {
  const options = engagementMessageOverTimeChartOptions(
    messageCountList,
    channels
  );

  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  return (
    <HighchartsReact
      ref={chartComponentRef}
      highcharts={Highcharts}
      options={options}
    />
  );
};

export default EngagementMessagesOverTime;
