import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('canvas') ctx!: ElementRef<HTMLCanvasElement>;

  constructor(private contentService: ContentService) {}

  ngAfterViewInit(): void {
    this.ctx.nativeElement.getContext('2d');
  }
}
