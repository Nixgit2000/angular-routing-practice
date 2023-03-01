import { Component } from '@angular/core'

@Component({

    selector: 'app-home',
    template: '<h2>{{text}}<h2>',
    styles: [`h2 {font-family: arial;}`]
})

export class HomeComponent {
    text = "This home component is coming from the default route. There is an /about page and a Page not found page if you visit anything besides the home or about pages."
}