import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  count = 0;

  constructor(){

  }

  ngOnInit(){
    let interval = setInterval(() => {
      this.count++;
      
      if(this.count === 10){
        clearInterval(interval);
      }

    }, 1000)
  }

}
