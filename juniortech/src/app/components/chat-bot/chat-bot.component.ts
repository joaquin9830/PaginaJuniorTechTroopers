import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrl: './chat-bot.component.css'
})
export class ChatBotComponent {
  ngOnInit(): void {
    const script = document.createElement('script');
    script.src = "https://unpkg.com/react-stackai@latest/dist/vanilla/vanilla-stackai.js";
    script.setAttribute('data-project-url', 'https://www.stack-ai.com/embed/456ae3ba-4104-4411-a603-d41bf5085d9b/25c81c74-416f-46f5-800e-11d86cecd895/6684d03d7fdb71b8e45c0cc2');
    document.getElementById('chat-bot-container')?.appendChild(script);
  }
}
