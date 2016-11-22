import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-clarity',
  templateUrl: './clarity.component.html',
  styleUrls: ['./clarity.component.css']
})
export class ClarityComponent implements OnInit {

  constructor() { }


  users:any[] = [];


  ngOnInit():void{
    for(let i=0; i<20; i++){
      this.users.push({
        id : i,
        name : 'User-'+i
      });
    }
  }

  onTabSelected(): void{
    console.log("Tab selected");
  }

  onTabContentActivated(): void{
    console.log("onTabContentActivated");
  }

  onTabIndexChanged(): void{
    console.log("onTabIndexChanged");
  }

}
