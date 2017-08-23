import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit, OnChanges {
    @Input() dataset: number[];
    chartSettings: any;
    chartInstance: any;

    chartOptions = {
        color: ['#2ec7c9', '#b6a2de', '#5ab1ef', '#ffb980', '#d87a80', '#8d98b3', '#e5cf0d', '#97b552', '#95706d', '#dc69aa', '#07a2a4', '#9a7fd1', '#588dd5', '#f5994e', '#c05050', '#59678c', '#c9ab00', '#7eb00a', '#6f5553', '#c14089'],
        tooltip: {
            trigger: 'item',
            formatter: '{b} : {c} ({d}%)'
        },
        legend: {
            x: 'center',
            align: 'auto',
            data: []
        },
        calculable: false,
        series: [{
            name: 'Source',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '60%'],

            center: ['50%', '60%'],
            itemStyle: {
                normal: {
                    label: {
                        position: 'inner',
                        formatter: function(params) {
                            return (params.percent - 0).toFixed(0) + '%'
                        }
                    },
                    labelLine: {
                        show: false
                    }
                }
            },
            data: []
        }]
    };

    constructor() { }

    ngOnInit() {
        // console.log("ngOnInit");
        // console.log(this.dataset);
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['dataset'] && this.dataset && this.dataset.length) {
            // console.log(changes);
            this.chartSettings = this.getChartOptions();
            console.log("new this.chartSettings.series[0].data");
            console.log(this.chartSettings.series[0].data);

            if(this.chartInstance) {
                this.chartInstance.setOption(this.chartSettings);
            } else {
                console.log("instance doesn't exist");
            }
            
        }
    }

    getChartOptions(): any {
        let chartSettings = this.chartOptions;
        chartSettings.series[0].data = this.dataset;
        return chartSettings;
    }

    onChartInit(instance) {
        this.chartInstance = instance;
    }

}
