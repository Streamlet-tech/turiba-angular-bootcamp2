import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStatusColor]'
})
export class StatusColorDirective {

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
  
    if (this.el.nativeElement.innerHTML==="Free") {
      this.el.nativeElement.style.color = 'green';
    }
    else if(this.el.nativeElement.innerHTML==="Reserved"){
      this.el.nativeElement.style.color = 'orange';
    }
    else if(this.el.nativeElement.innerHTML==="Busy"){
      this.el.nativeElement.style.color = 'red';
    }
 }


}
