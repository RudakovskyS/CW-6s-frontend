import { Component } from '@angular/core';
import { DictionaryService } from '../services/dictionary.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent {

  constructor(private dictionaryService: DictionaryService, private router: Router) { }

  sendWord(word: string) {
    this.dictionaryService.getDefinition(word).subscribe((data: any) => {
      this.definitions = data.definitions.map((str: string) => {
        return str.replace('&rsquo;', '\'');
      });
    })
  }

  redirectToHomePage() {
    this.router.navigate([``]);
  }

  definitions!: string[]
  word!: string
}
