import moment from "moment";
import { Channel, MessageCount } from "./type"

export const engagementMessageOverTimeChartOptions = (messageCountList: MessageCount[], channels: Channel[]) => {
    const series: {
        data: number[];
        name: string;
    }[] = []
    const categories: string[] = []
    for (const messageCount of messageCountList) {
        const name = getChannelsName(channels, messageCount.channelId)
        const date = moment(messageCount.timeBucket).format("MMM Do")
        if (!name) continue
        if (!series?.length) {
            const data = [Number(messageCount.count)]
            series.push({
                data,
                name
            })
            categories.push(date)
            continue
        }
        const targetSeriesIndex = series.findIndex(serie => serie?.name === name)
        if (targetSeriesIndex === -1) {
            const data = [Number(messageCount.count)]
            series.push({
                data,
                name
            })
        } else {
            series[targetSeriesIndex].data.push(Number(messageCount.count))
        }
        categories.push(date)
    }

    return {
        title: {
            text: 'Chart Test'
        }, 
        series: series.filter(serie => serie?.data?.length > 1),
        xAxis: {
            categories,
          },
        tooltip: {
            useHTML: true,
            formatter: function (this: Highcharts.TooltipFormatterContextObject) {
                return `<div>
                    <div>${this.series.name}</div>
                    <div>${this.y} message(s) on ${this.x}</div>
                </div>`
            }
        }
    }
}

const getChannelsName = (channels: Channel[], channelId: string) => {
    let channelName = ""

    for (const channel of channels) {
        if (channel.id === channelId) {
            channelName = channel?.name
        }
    }
    return channelName
}

