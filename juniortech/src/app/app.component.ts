import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'juniortech';
  //Variable para reproducir el audio
  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;
  isPlaying = false;
 
  //Función para reproducir o pausar el audio
  toggleAudio() {
    if (this.isPlaying) {
      this.audioPlayer.nativeElement.pause();
    } else {
      this.audioPlayer.nativeElement.play();
    }
    this.isPlaying = !this.isPlaying;
  }
  
  //Función de inicialización de la librería AOS
  ngOnInit() {
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }
 
}
