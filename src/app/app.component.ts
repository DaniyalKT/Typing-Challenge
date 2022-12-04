import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  randomText: string = faker.lorem.sentences()
  inputText: string = ''

  onChangeInput(text: any){
    const result = (text.target as HTMLInputElement).value
     this.inputText = result
  }

  compare(letterRandom: string , latterEnter: string)
  {
      if(!latterEnter){
        return 'peding'
      }
      return latterEnter === letterRandom ? 'correct' : 'inCorrect'
  }
}
