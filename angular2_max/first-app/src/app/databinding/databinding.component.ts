import { Component} from '@angular/core';

@Component({
  selector: 'fa-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

  stringInterpolation:string = "This is string interpolation";
  numberInterpolation:number = 2;

  pClass:string = "badge warning";

  constructor() { }


}
