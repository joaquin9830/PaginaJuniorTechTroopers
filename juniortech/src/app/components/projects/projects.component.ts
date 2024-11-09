import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  isModalOpen: boolean = false;

  // Datos del modal inicializados como un objeto vacío
  modalData = {
    title: '',
    description: '',
    tags: [] as string[],
    githubUrl: '',
    webUrl: '',
    youtubeUrl: '',
    imgUrl: ''
  };

  openModal(title: string, description: string, tags: string, githubUrl: string, webUrl: string, youtubeUrl: string, imgUrl: string) {
    this.modalData = {
      title,
      description,
      tags: tags.split(' '), // para convertir el string de tags en un array
      githubUrl,
      webUrl,
      youtubeUrl,
      imgUrl
    };
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;  // Oculta el modal
  }
}
