import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  chartDataset = [];
  data = [320, 332, 301, 334, 390, 330, 320];

  ngOnInit() {
    this.getChartData().then((asyncdata) => {
        console.log("AppComponent ngOnInit ok");
        this.chartDataset = asyncdata;
    });
  }

  async getChartData(): Promise<number[]> {
    const chartData = await this.getChartDataAsync();
    return chartData;
  }

  getChartDataAsync(): Promise<number[]> {
      return new Promise<number[]>((resolve) => {
          setTimeout(() => {
              resolve(this.data);
          }, 5000);
      });
  }
}
