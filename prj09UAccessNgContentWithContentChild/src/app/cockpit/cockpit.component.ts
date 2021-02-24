import { Component, OnInit, EventEmitter, Output, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CockpitComponent implements OnInit {
  //properties for custom event binding, make it listable from outside
  @Output('serverCreatedEvent') serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('blueprintCreatedEvent') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  //newServerName = "";
  //newServerContent = '';

  //since we'll use it in ngOnInt, pass static:true
  @ViewChild('serverContentInput', {static: true}) serverContent: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({serverName: nameInput.value, serverContent: this.serverContent.nativeElement.value});
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({serverName: nameInput.value, serverContent: this.serverContent.nativeElement.value});
  }

}
