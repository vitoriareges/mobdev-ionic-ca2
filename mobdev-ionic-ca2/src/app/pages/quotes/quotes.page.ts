import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';


@Component({
    selector: 'app-quotes',
    templateUrl: './quotes.page.html',
    styleUrls: ['./quotes.page.scss'],
})

export class QuotesPage implements OnInit {

    
    quotes: Observable<any>;
     quote = [];
  numTimesLeft = 5;

    constructor(private router: Router, private api: ApiService) {
        this.ngOnInit();
     }

     
 loadData(event) {
    setTimeout(() => {
      console.log('Done');
      this.ngOnInit();
      this.numTimesLeft -= 1;
      event.target.complete();
    }, 2000);
  }

  

    ngOnInit() {
        for (let i=0; i<10; i++){
        this.quote.push(i);}
        this.quotes = this.api.getQuotes();
        this.quotes.subscribe(data => {
        console.log('my data: ', data);
        });
    }


    openDetails(quotes) {
        
        this.router.navigateByUrl('/tabs/quotes/${id}');
    }

    
}

 

  
