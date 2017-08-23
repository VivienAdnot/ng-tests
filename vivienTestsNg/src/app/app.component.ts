import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  chartDataset = [];
  data = [
    [320, 332, 301, 334, 390, 330, 320],
    [12, 156, 236, 292, 318, 369, 444],
    [40, 51, 260, 281, 346, 439, 455],
    [31, 141, 275, 292, 322, 361, 414],
    [18, 178, 234, 250, 392, 402, 456]
  ];

  ngOnInit() {
      this.getData()
        .map(interval => this.getRandomNumber())
        .map((index: number) => this.data[index])
        .subscribe((chartData: number[]) => {
            this.chartDataset = chartData;
        });
  }

  getRandomNumber(max = 4): number {
      return Math.round(Math.random()*max);
  }

  getData(): Observable<number> {
      return Observable.interval(1500).take(15);
  }
}
