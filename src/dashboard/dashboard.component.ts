import { Component } from '@angular/core';
import {CharacterPanelComponent} from '../app/character-panel/character-panel.component';
import {GameComponent} from '../app/game/game.component';
import {CommandPanelComponent} from '../app/command-panel/command-panel.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CharacterPanelComponent,
    GameComponent,
    CommandPanelComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
