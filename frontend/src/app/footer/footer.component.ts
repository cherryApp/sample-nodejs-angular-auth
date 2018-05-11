import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  copyRight = '&copy; 2018 cherryApp';
  sticky : boolean = true;
  constructor() {
    this.sticky = false;
  }

  ngOnInit() {
  }

}
