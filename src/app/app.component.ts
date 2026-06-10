import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('studentForm') studentForm !: NgForm;

  onSubmit(){
    if(this.studentForm.invalid){
      return this.studentForm.control.markAllAsTouched()
    }
    this.studentForm.resetForm();
  }
}
