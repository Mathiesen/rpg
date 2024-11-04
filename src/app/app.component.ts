import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CharacterPanelComponent} from './character-panel/character-panel.component';
import {GameComponent} from './game/game.component';
import {CommandPanelComponent} from './command-panel/command-panel.component';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CharacterPanelComponent, GameComponent, CommandPanelComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rpg';
}
