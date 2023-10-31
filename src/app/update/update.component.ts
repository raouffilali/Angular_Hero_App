import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  hero: any;
  id: any;

  constructor(private act: ActivatedRoute, private _shared: SharedService, private router:Router) {}

  editHero() {
    this._shared.updateHero(this.id, this.hero).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/list']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  ngOnInit(): void {
    this.id = this.act.snapshot.paramMap.get('id');
    console.log(this.id);
    this._shared.getHeroById(this.id).subscribe(
      (data) => {
        this.hero = data;
        console.log(this.hero);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
