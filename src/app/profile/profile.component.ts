import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }
  weapons = [
    {name: 'Kar-98'},
    {name: 'Винчестер 1891'}
  ];
  weapon = this.weapons.forEach((i) => {
    return i;
  });
  date = new Date();
  name = 'Artem';
  maxRating = '5400';
  rating = '1220';
  battleClass = 'Медик';

  ngOnInit(): void { }

}
