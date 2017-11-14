import {Component} from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl:'./server.component.html',
    styleUrls: ['./server.component.css'],
    inputs:['serverId' , 'serverName']
})
export class ServerComponent
{
    serverId : number;
    serverName : string;
    serverStatus : string;

    constructor()
    {        
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
        setInterval(()=>{this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';}, 5000);
    }

    getServerStatus() : string{
        return this.serverStatus;
    }
}