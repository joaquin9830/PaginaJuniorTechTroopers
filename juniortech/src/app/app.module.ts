import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HomeComponent } from './components/home/home.component';
import { ChatBotComponent } from './components/chat-bot/chat-bot.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactformComponent } from './components/contactform/contactform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    CarouselComponent,
    HomeComponent,
    ChatBotComponent,
    PresentationComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent,
    ContactformComponent,
    LoadingScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
