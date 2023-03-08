import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  private readonly labels = this.contentService.getTechnologies();

  private readonly values = this.contentService.getUsage(this.labels);

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: this.labels,
    datasets: [
      {data: this.values},
    ],
  };

  constructor(private contentService: ContentService) {}

}
