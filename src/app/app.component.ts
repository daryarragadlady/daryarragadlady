import { createViewChild } from '@angular/compiler/src/core';
import { Component,ViewChild,ElementRef } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularElements';
  viewchildtext!:string;
  childList=['child1','child2','child3']

  @ViewChild('mychild') mychild!:ChildComponent

   ngAfterViewInit(): void {
    this.viewchildtext=this.mychild.classselector.nativeElement.innerHTML;
   }
  


}
