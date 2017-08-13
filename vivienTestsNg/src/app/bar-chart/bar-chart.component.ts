import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit, OnChanges {
  @Input() dataset: number[];

  chartOptions = {
    title: {
      text: 'Vivien test echarts title'
    },
    xAxis : [
      {
        data : ['A','B','C','D','E','F','G']
      }
    ],
    yAxis : [
      {
        type : 'value'
      }
    ],
    series : [
      {
        type:'bar',
        data:[]
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  getChartOptions(): any {
    if (!this.dataset || this.dataset.length == 0) return;

    console.log("received dataset");
    this.chartOptions.series[0].data = this.dataset;
    return this.chartOptions;
  }

}
