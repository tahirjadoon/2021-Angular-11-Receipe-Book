import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverListStatus: string = "No server was created";
  serverMsgClass: string = "text-danger";
  serverNameInput: string = "";
  serverNameInputTwoWay: string = "Test Server";
  buttonClicked: boolean = false;
  servers = ['Prod Server','QA Server'];

  constructor() {
    //disable the button after 2 seconds
    setTimeout(() =>{
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.buttonClicked = true;
    if(this.serverNameInputTwoWay === ""){
      this.serverListStatus = "Server not created! Nothing provided";
      this.serverMsgClass = "text-danger";
    }
    else{
      this.serverListStatus = "Server was created! Name is " + this.serverNameInputTwoWay;
      this.serverMsgClass = "text-success";
      this.servers.push(this.serverNameInputTwoWay);
    }
  }

  onUpdateServerName(event: any){
    this.serverNameInput = (<HTMLInputElement>event.target).value;
  }

}
