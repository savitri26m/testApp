import { Component, OnInit } from '@angular/core';
import { Dashboard } from 'src/app/models/dashboard.model';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {

  dataList: Dashboard[] = [
    {
      "fileName": 1,
      "first_name": "Marc",
      "last_name": "Bearham",
      "email": "mbearham0@berkeley.edu",
      "gender": "Male",
      "ip_address": "34.61.193.223"
    }, {
      "fileName": 2,
      "first_name": "Floria",
      "last_name": "Cope",
      "email": "fcope1@reference.com",
      "gender": "Female",
      "ip_address": "71.83.69.194"
    }, {
      "fileName": 3,
      "first_name": "Rockwell",
      "last_name": "Hassard",
      "email": "rhassard2@vkontakte.ru",
      "gender": "Male",
      "ip_address": "255.102.233.154"
    }, {
      "fileName": 4,
      "first_name": "Tammi",
      "last_name": "Oakenfield",
      "email": "toakenfield3@theglobeandmail.com",
      "gender": "Female",
      "ip_address": "34.108.61.235"
    }, {
      "fileName": 5,
      "first_name": "Dorie",
      "last_name": "Darnody",
      "email": "ddarnody4@blog.com",
      "gender": "Male",
      "ip_address": "50.179.74.25"
    }, {
      "fileName": 6,
      "first_name": "Nessy",
      "last_name": "Abrami",
      "email": "nabrami5@gizmodo.com",
      "gender": "Female",
      "ip_address": "96.227.62.171"
    }, {
      "fileName": 7,
      "first_name": "Lockwood",
      "last_name": "Rouchy",
      "email": "lrouchy6@flavors.me",
      "gender": "Male",
      "ip_address": "101.223.123.189"
    }, {
      "fileName": 8,
      "first_name": "Maegan",
      "last_name": "Buttwell",
      "email": "mbuttwell7@fema.gov",
      "gender": "Female",
      "ip_address": "230.90.85.29"
    }, {
      "fileName": 9,
      "first_name": "Darin",
      "last_name": "Oldnall",
      "email": "doldnall8@rakuten.co.jp",
      "gender": "Male",
      "ip_address": "204.197.10.108"
    }, {
      "fileName": 10,
      "first_name": "Gay",
      "last_name": "Dow",
      "email": "gdow9@joomla.org",
      "gender": "Female",
      "ip_address": "56.139.62.152"
    }
    
  ];

  order: string = 'name';

  constructor() { }

  ngOnInit() {
  }

}
