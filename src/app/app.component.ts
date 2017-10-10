import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  title = 'Angular Life Cycle';
  username = 'Praba';

  constructor() {
    console.log('Constructor called');
  }

  ngOnInit() {
    console.log('Init called');
  }

  ngOnChanges() {
    console.log('On Changes called');
  }

  ngDoCheck() {
    console.log('Do Check called');
  }

  ngAfterContentInit() {
    console.log('After Content Init called');
  }

  ngAfterContentChecked() {
    console.log('After Content Checked called');
  }

  ngAfterViewInit() {
    console.log('After View Init called');
  }

  ngAfterViewChecked() {
    console.log('After View Checked called');
  }

  ngOnDestroy() {
    console.log('Destroy called');
  }

  update() {
    this.username = 'Karan';
  }
}
