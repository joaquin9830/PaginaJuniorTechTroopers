import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatBotComponent } from './components/chat-bot/chat-bot.component';
import { ContactformComponent } from './components/contactform/contactform.component';
import { HomeComponent } from './components/home/home.component';


// Importamos los componentes que vamos a utilizar
const routes: Routes = [
  {path:'', component:HomeComponent},
  { path: 'chatbot', component: ChatBotComponent },
  {path:'contact', component:ContactformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
