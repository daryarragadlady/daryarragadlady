import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { TestDirective } from './test.directive';

@Component({
  selector: 'app-ngtemplateex',
  templateUrl: './ngtemplateex.component.html',
  styleUrls: ['./ngtemplateex.component.scss']
})
export class NgtemplateexComponent implements OnInit {

  showPrimary:boolean = true;
  @ViewChild('placeholder',{read:ViewContainerRef})
   public getcontainerref!:ViewContainerRef;



   @ViewChild('usingdirective',{read:ViewContainerRef})
   public getcontainerfordirectiveref!:ViewContainerRef;


   

   @ViewChild('primary')
   public primary!:TemplateRef<any>;


   @ViewChild(TestDirective,{static:true})
   public secondary!:TestDirective



  constructor() { }

  ngOnInit(): void {

    setInterval(()=>{
      this.showPrimary=!this.showPrimary;
    },3000);
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.getcontainerref.createEmbeddedView(this.primary);
    
    this.getcontainerfordirectiveref.createEmbeddedView(this.secondary.templateRef);
  }

}
