import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css'],
})
export class AjoutComponent implements OnInit {
  hero = {
    name: '',
    power: '0',
  };

  image: any;
  imageAdded(event: any) {
    this.image= event.target.files[0];
    console.log(this.image);
  }

  addHero() {


    let formDate = new FormData();
    formDate.append('name', this.hero.name);
    formDate.append('power', this.hero.power.toString());
    formDate.append('image', this.image);


    this._shared.createNewHero(formDate).subscribe(
      (result) => {
        this.hero = {
          name: '',
          power: '0',
        };
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  constructor(public _shared: SharedService) {}
  ngOnInit(): void {}
}
