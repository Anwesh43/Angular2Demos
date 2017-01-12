import {Directive,ElementRef,Renderer,HostListener} from '@angular/core'
@Directive({
  selector:'[cardify]'
})
export class Cardify {
    background = false
    constructor(public el:ElementRef,public renderer:Renderer) {
        renderer.setElementStyle(el.nativeElement,'border','1px dotted black')
        renderer.setElementStyle(el.nativeElement,'width','100px')
        renderer.setElementStyle(el.nativeElement,'height','100px')
        renderer.setElementStyle(el.nativeElement,'margin-top','20px')
    }
    @HostListener("mousedown")
    onmousedown() {
        if(!this.background) {
            this.renderer.setElementStyle(this.el.nativeElement,'background-color','yellowgreen')
        }
        else {
            this.renderer.setElementStyle(this.el.nativeElement,'background-color','white')
        }
        this.background = !this.background
    }
}
