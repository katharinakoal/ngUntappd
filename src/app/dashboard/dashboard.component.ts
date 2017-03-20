import { Component, OnInit } from '@angular/core';
import { DashboardDataService } from './dashboard-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor( private _dataService: DashboardDataService ) { }

  ngOnInit() {

      console.log('asd');

  }

}
