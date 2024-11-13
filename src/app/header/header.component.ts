import { Component,OnInit, Renderer2, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private renderer:Renderer2) { }

  // @ViewChild('sidenav', { read: TemplateRef }) sidenav!:TemplateRef<any>;
  @ViewChild('sidenav', { static: false }) sidenav!: ElementRef;
  posVar:boolean= false;
  
  ngOnInit(): void {
    
  }
  toggleFnc(){
   this.posVar = false;
   console.log(this.posVar);
  }
  // ngAfterViewInit(){
  //   this.vref.createEmbeddedView(this.sayHelloTemplate);
  // }
  

}
