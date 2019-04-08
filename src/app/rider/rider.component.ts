import { Component, OnInit } from '@angular/core';
import { Rider } from '../models/rider.model'

@Component({
  selector: 'app-rider',
  templateUrl: './rider.component.html',
  styleUrls: ['./rider.component.scss']
})
export class RiderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  riders : Rider[] = [
    new Rider('Andy', 'Smith', 24, 'Portland'),
    new Rider('Eimer', 'Jay', 27, 'Seattle'),
    new Rider('Cathy', 'Sae', 32, 'San Diego'),
  ]

}
