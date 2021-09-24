import { Component, OnInit,Input,Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})




export class ChildComponent implements OnInit {
 
  @Input() userData:any ;

  @Output() 
    notify:EventEmitter<string>= new EventEmitter();

  
  constructor() { }

  ngOnInit(): void {
  }

  showVal:any="";

  show(val:any){
    this.showVal=val;
  }

  sendData(){
    this.notify.emit("data from child")
  }

}
