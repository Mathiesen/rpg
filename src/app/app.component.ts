import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CharacterPanelComponent} from './character-panel/character-panel.component';
import {GameComponent} from './game/game.component';
import {CommandPanelComponent} from './command-panel/command-panel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CharacterPanelComponent, GameComponent, CommandPanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rpg';
}
