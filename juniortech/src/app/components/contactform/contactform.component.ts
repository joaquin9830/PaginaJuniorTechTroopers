import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

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
      why: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.contactForm.valid) {
      const templateParams = {
        name: this.contactForm.get('name')?.value,
        email: this.contactForm.get('email')?.value,
        contactNumber: this.contactForm.get('contactNumber')?.value,
        why: this.contactForm.get('why')?.value
      };

      emailjs.send('YOUR_SERVICE_ID', 'template_5ucuhgp', templateParams, 'YOUR_USER_ID')
        .then((response: EmailJSResponseStatus) => {
          console.log('Email enviado', response.status, response.text);
          alert('Email enviado con éxito.');
        }, (error) => {
          console.error('Error al enviar el email', error);
          alert('Hubo un error al enviar el email.');
        });
    } else {
      console.log('Formulario no válido');
    }
  }
}
