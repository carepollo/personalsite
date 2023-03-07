import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-preview-project',
  templateUrl: './preview-project.component.html',
  styleUrls: ['./preview-project.component.scss']
})
export class PreviewProjectComponent {

  @Input() datasource!: Project;

  constructor(private router: Router) {}

  goTo(destiny: string) {
    this.router.navigate(['/projects/' + destiny]); //might be temporary
  }
}
