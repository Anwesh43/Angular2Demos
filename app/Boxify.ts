import {Directive,ElementRef,Renderer} from '@angular/core'
@Directive({selector:'[boxify]'})
export class Boxify {
    constructor(el:ElementRef,renderer:Renderer) {
        renderer.setElementStyle(el.nativeElement,'border','1px solid black')
        renderer.setElementStyle(el.nativeElement,'width','100px')
        renderer.setElementStyle(el.nativeElement,'height','100px')
    }
}
