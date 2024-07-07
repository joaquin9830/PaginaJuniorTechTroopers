import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatBotComponent } from './components/chat-bot/chat-bot.component';
import { ContactformComponent } from './components/contactform/contactform.component';
import { HomeComponent } from './components/home/home.component';


// Importamos los componentes que vamos a utilizar
const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component:HomeComponent},
  {path: 'chatbot', component: ChatBotComponent },
  {path:'contact', component:ContactformComponent},
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', // Restores the scroll position on navigation
    anchorScrolling: 'enabled'            // Scrolls to the anchor element if present
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
