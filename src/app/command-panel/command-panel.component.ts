import {Component, Input} from '@angular/core';
import {CommandService} from '../command.service';
import {CharacterService} from '../character.service';

@Component({
  selector: 'app-command-panel',
  standalone: true,
  imports: [],
  templateUrl: './command-panel.component.html',
  styleUrl: './command-panel.component.css'
})
export class CommandPanelComponent {

  constructor(private service: CommandService, private service2: CharacterService) {
  }

  attack(id: string) {
    this.service2.getCharacter(id).subscribe({
      next: (data) => {
        this.service.attack(id, data.stamina - 10);
      }, error: err => {
        console.log(err);
      }
    });
  }
}
