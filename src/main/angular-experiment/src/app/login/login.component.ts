import {Component, Input, OnInit} from '@angular/core';
import { FormFieldTypes } from '@aws-amplify/ui-components';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  formFields: FormFieldTypes;
  constructor() {
    this.formFields = [
      {
        type: 'email',
        label: '',
        placeholder: 'E-mail',
        required: true,
      },
      {
        type: 'password',
        label: '',
        placeholder: 'Lösenord',
        required: true,
      }
    ];
  }
  ngOnInit(): void {
  }

}
