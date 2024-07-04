import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.css'
})
export class ContactformComponent implements OnInit{
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],      
      contactNumber: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],    
      why: ['', Validators.required],     
      
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Formulario enviado', this.contactForm.value);
      
    } else {
      console.log('Formulario no válido');
    }
  }
}
