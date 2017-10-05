import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app works!';

    private filterLimits = [10, 20, 30, 40, 50];

    currentLimit = 0;

    rows = [];

    async ngOnInit() {
        this.currentLimit = this.filterLimits.shift();
        
        this.log("ngOnInit before init");
        
        await this.init();

        this.log("ngOnInit after init");

        Observable.fromEvent(window, 'scroll')
            .filter(() => this.filterLimits.length > 0)
            .filter(() => this.getCurrentScrollHeight() >= this.getTotalWindowHeight())
            .throttleTime(4000)
            .subscribe(async (event) => {
                this.log("scroll start");
                await this.onScrollBottom();
                this.log("scroll end");
            });
    }

    log(title: string) {
        console.table({
            title: title,
            scrollHeight: this.getCurrentScrollHeight(),
            totalHeight: this.getTotalWindowHeight(),
            rows: this.rows.length
        });
    }

    ngAfterViewInit() {
        this.log("ngAfterViewInit");
    }

    private getCurrentScrollHeight() {
        return Math.round(document.documentElement.scrollTop + window.innerHeight) + 1;
    }

    private getTotalWindowHeight() {
        return document.body.scrollHeight;
    }

    async onScrollBottom() {
        let newLimit = this.filterLimits.shift();
        if (newLimit) {
            this.currentLimit = newLimit;
            await this.init();
        }
    }

    async init() {
        await this.refresh();
    }

    async refresh() {
        this.rows = await this.getCompaniesScoringTyped(this.currentLimit);
    }

    getCompaniesScoringTyped(limit: number) {
        let rows = [];

        for(let i = 0; i < limit; i++) {
            rows.push(i);
        }

        return new Promise<any[]>((resolve, reject) => {
            setTimeout(() => {
                resolve(rows);
            }, 2000);
        })
    }
}
