import { Injectable } from '@angular/core';
import { projects, technologies } from '../utilities/constants';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

  getTechnologies(): string[] {
    const result = new Array<string>();
    const values = Object.values(technologies);
    values.map(x => result.push(x.name));
    return result;
  }

  getUsage(ref: string[]): number[] {
    const result = new Array<number>();
    
    for (let i = 0; i < ref.length; i++) {
      for (const project of projects) {
        project.technologies.map(x => {
          if (!result[i]) {
            result[i] = 0;
          }
          if (x.name == ref[i]) {
            result[i]++
          }
        });

        if (project.language.name == ref[i]) {
          result[i]++
        }
      }
    }
    
    return result;
  }
}
