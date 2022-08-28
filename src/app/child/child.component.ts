import { Component, ContentChild,ContentChildren, OnInit,ElementRef,QueryList } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }

  @ContentChild("contchild") classselector!: ElementRef;
  @ContentChildren("contchildren") contentChildren!: QueryList<ElementRef>
 name:string="heel";
  ngOnInit(): void {
  }

  ButtonEvent(){
   alert(this.classselector.nativeElement.innerHTML);
  }
  ButtonEvent2(){
    this.contentChildren.forEach(item=>{
      alert(item.nativeElement.innerHTML);
    }
      )
  }

}
