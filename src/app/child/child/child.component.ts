import { Component, OnInit,Input,Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})




export class ChildComponent implements OnInit {
 
  @Input() hi:any ;

  @Output() 
    notify:EventEmitter<string>= new EventEmitter();

  
  constructor() { }

  ngOnInit(): void {
  }



  sendData(){
    this.notify.emit("data from child")
  }

}
