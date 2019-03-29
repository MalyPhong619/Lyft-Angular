import { Component, OnInit } from '@angular/core';
import { Driver } from '../models/driver.model';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  drivers : Driver[] = [
    new Driver('Maly', 'Phong', 28, 'Female'),
    new Driver('Andrea', 'Nicole', 27, 'Female'),
    new Driver('Sunny', 'Lakang', 34, 'Male'),
  ]

}
