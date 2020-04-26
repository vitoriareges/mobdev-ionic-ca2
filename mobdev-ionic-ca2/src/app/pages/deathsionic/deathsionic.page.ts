import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
    selector: 'app-deathsionic',
    templateUrl: './deathsionic.page.html',
    styleUrls: ['./deathsionic.page.scss'],
})
export class DeathsionicPage implements OnInit {
    deaths: Observable<any>;
    search: any="";
    constructor(private router: Router, private api: ApiService) { }
   
    ngOnInit() {
       this.deaths = this.api.getDeaths();
         this.router.navigateByUrl(`/tabs/deaths}`);
    
  }
  filter(death){
    // console.log(death.author);
    return death.responsible.toLowerCase().indexOf(this.search.toLowerCase()) != -1;
  }
}