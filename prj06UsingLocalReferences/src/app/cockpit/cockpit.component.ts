import { Component, OnInit, EventEmitter, Output, ViewEncapsulation } from '@angular/core';

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
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({serverName: nameInput.value, serverContent: this.newServerContent});
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({serverName: nameInput.value, serverContent: this.newServerContent});
  }

}
