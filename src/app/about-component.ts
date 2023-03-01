import { Component } from '@angular/core'

@Component({

    selector: 'app-about',
    template: '<h2>{{text}}<h2>',
    styles: [`h2 {font-family: arial;}`]
})

export class AboutComponent {
    text = "This about component is coming from the second route."
}