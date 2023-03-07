import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/models/project';
import { repos } from 'src/app/utilities/constants';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {

  @Input() project!: Project

  constructor(private route: ActivatedRoute) {
    const { id } = this.route.snapshot.params;
    this.project = repos[id];
  }

}
