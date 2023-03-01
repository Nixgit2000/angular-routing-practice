import { Component } from '@angular/core'

@Component({

    selector: 'app-not-found',
    template: '<h2>{{text}}<h2>',
    styles: [`h2 {font-family: arial;}`]
})

export class NotFoundComponent {
    text = "Page not found."
}