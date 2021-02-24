import { AfterContentInit, Component, ContentChild, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, AfterContentInit {
  //property exposed with name element
  //@Input() element: {type: string, name: string, content: string};
  //property exposed with an alias
  @Input('elementInfo') element: {type: string, name: string, content: string};

  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(){
    console.log(`ParagraphContent:${this.paragraph.nativeElement.textContent}`);
  }

}
