import { Component } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-user-settings',
  standalone: true,
  imports: [FormsModule, NzInputModule, ReactiveFormsModule],
  templateUrl: './user-settings.component.html',
  styleUrl: './user-settings.component.scss'
})
export class UserSettingsComponent {
  settingsForm: FormGroup;

  constructor (formBuilder: FormBuilder) {
    this.settingsForm = formBuilder.group({
      name: ['', Validators.required, Validators.maxLength(30), Validators.minLength(2)],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required, Validators.minLength(8), Validators.maxLength(20)],
      confirmPassword: ['', Validators.required],
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value 
      ? null : { 'mismatch': true };
  }

  handleSubmit () {
    console.log(this.settingsForm.value);
  }
}
