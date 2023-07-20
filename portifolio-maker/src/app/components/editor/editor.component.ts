/*import { Component } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent {

}*/

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

import { PortifolioGeneratorService } from 'src/app/services/portifolio-generator.service';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent {
  portfolioForm:any = this.formBuilder.group({
    name: ['Your Name'],
    aboutTitle: ['About Me'],
    aboutText: ['Your introduction and description go here.'],
    projectsTitle: ['Projects'],
    projects: this.formBuilder.array([
      this.formBuilder.group({name: ['Project 1'], description: ['Brief description of Project 1.']}),
      this.formBuilder.group({name: ['Project 2'], description: ['Brief description of Project 2.']}),
      this.formBuilder.group({name: ['Project 3'], description: ['Brief description of Project 3.']}),
      this.formBuilder.group({name: ['Project 4'], description: ['Brief description of Project 4.']})
    ]),
    contactTitle: ['Contact'],
    contactText: ['Contact information goes here.']
  });
  currentYear: number = new Date().getFullYear();

  portifolio:string = "";
  constructor(private formBuilder: FormBuilder, private portifolioGeneratorService: PortifolioGeneratorService) {}

  get projects(): FormArray {
    return this.portfolioForm.get('projects') as FormArray;
  }

  createProjectFormGroup(title: string, description: string): FormGroup {
    return this.formBuilder.group({
      title: [title],
      description: [description]
    });
  }

  submitForm() {
    // Handle form submission here
    //console.log(this.portfolioForm.controls.projects)
    this.portifolio = this.portifolioGeneratorService.generatePortifolio(this.portfolioForm.controls.name.value, 
      this.portfolioForm.controls.aboutText.value,
      this.portfolioForm.controls.projects.controls,
      this.portfolioForm.controls.contactText.value)
  }
}