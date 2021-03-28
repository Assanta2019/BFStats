import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }
  battleClasses = [
    {name: 'Штурмовик', class: 'trooper', percent: 20},
    {name: 'Медик', class: 'medic', percent: 38},
    {name: 'Поддержка', class: 'support', percent: 67}
  ];

  weaponsClasses = [
    {name: 'Пулемет', class: 'gun', percent: 13},
    {name: 'Винтовка', class: 'rifle', percent: 48},
    {name: 'Пистолет', class: 'pistol', percent: 61}
  ];

  date = new Date();
  name = 'Artem';
  maxRating = '5400';
  rating = '1220';
  battleClass = 'Медик';

  ngOnInit(): void { }

}
