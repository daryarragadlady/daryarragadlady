import { Directive ,TemplateRef} from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {

  constructor(public templateRef:TemplateRef<any>) { }


}
