import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';





@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {


  contactForm = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.maxLength(10)]),
    age: new FormControl('',[Validators.min(20),Validators.max(40)]),
    email: new FormControl('',[Validators.email]),
    message: new FormControl(''),

  });



  saveForm(){
    
    console.log(this.contactForm);
  }


}
