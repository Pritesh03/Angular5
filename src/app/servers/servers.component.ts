import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverName: string = '';
  servers : Server[] = [];

  constructor() {
    setTimeout(() => { this.allowNewServer = true; }, 2000);    
  }

  ngOnInit() {
  }

  onCreateServer(event): void {   
    let server = new Server();
    server.id = Math.floor(Math.random()*10000);
    server.name = this.serverName.charAt(0).toUpperCase() + this.serverName.slice(1).toLowerCase() ;
    this.servers.push(server);
    this.serverName='';
  }
}

class Server
{
  id : number;
  name : string;
}
