import {Component, OnInit} from '@angular/core';
import {CharacterService} from '../character.service';

@Component({
  selector: 'app-character-panel',
  standalone: true,
  imports: [],
  templateUrl: './character-panel.component.html',
  styleUrl: './character-panel.component.css'
})
export class CharacterPanelComponent implements OnInit{

  name: string = "";
  stamina: number = 0;

  public constructor(private service: CharacterService) {
  }

  ngOnInit(): void {
        this.service.getCharacter("3d3aedbf-ca4a-497e-9334-273a54c82fbe")
          .subscribe(data => {
            this.name = data.name;
            this.stamina = data.stamina;
            console.log(data.stamina);
          });
    }


}
