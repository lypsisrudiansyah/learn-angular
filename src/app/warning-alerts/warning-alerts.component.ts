import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alerts',
  // templateUrl: './warning-alerts.component.html',
  template: `
  <p>This is a Warning, You are in danger </p>
  `,
  // styleUrls: ['./warning-alerts.component.css']
  styles: [`
    p {
      padding: 20px;
      background-color: mistyrose;
      border: 1px solid red;
    }
  `]
})
export class WarningAlertsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
