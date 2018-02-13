import { Component } from '@angular/core';
import { trigger } from '@angular/animations';
import { transition } from '@angular/animations';
import { animate, style } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({opacity: 0}),
        animate(4000, style({opacity: 1}))
      ])
    ]),
    trigger('moving-header', [
      transition('void => *', [
        style({height: 0}),
        animate(500)
      ])
    ])
  ]
})
export class AppComponent {
  title = 'app';
}
