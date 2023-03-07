import { Component } from '@angular/core';
import { Project } from 'src/app/models/project';
import { projects } from 'src/app/utilities/constants';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = projects;
}
