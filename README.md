import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mainForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.mainForm = this.fb.group({
      group1: this.fb.group({
        field: []
      }),
      group2: this.fb.group({
        field: [null, [this.matchValidator.bind(this)]]
      })
    });

  }

  matchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const fromValue = control.value;
    if(this.mainForm) {
      const toValue = (<FormGroup>this.mainForm.get('group1')).get('field').value;
      if (fromValue && toValue && fromValue === toValue) {
        console.log('Control: ', control);
        return { 'fieldMatch' : true };
      }
      console.log('Control: ', control);
      return null;
    }
  }

  get group2Field() {
    return (<FormGroup>this.mainForm.get('group2')).get('field');
  }
}
