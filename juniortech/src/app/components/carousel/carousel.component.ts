import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  constructor(private router:Router){}
  
  ngOnInit(){
    
  }
  chatbot(){
    this.router.navigate(['/chatbot']);
  }
}
