import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  heros:any = [];
  constructor(public _shared: SharedService) {}

  ngOnInit(): void {
    this._shared.getAllHeros().subscribe(
      (data) => {
        this.heros = data;
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  delete(id:any){
    this._shared.deleteHero(id).subscribe(
      (data) => {
        console.log(data);
        this.ngOnInit();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
