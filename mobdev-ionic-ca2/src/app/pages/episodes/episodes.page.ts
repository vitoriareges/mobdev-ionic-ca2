import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
// base info get from mobdev slides
@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.page.html',
  styleUrls: ['./episodes.page.scss'],
  
})
export class EpisodesPage implements OnInit {
  episodes: Observable<any>;
   items = [];
  numTimesLeft = 5;
 
  

  constructor(private router: Router, private api: ApiService) { 
      
   }
  
  ngOnInit() {
   
    this.episodes = this.api.getEpisodes();
      this.episodes.subscribe(data => {console.log('my data; ', data)});
    
  }

  openDetails(episode){
let episodeId = episode.episode_id;
this.router.navigateByUrl(`/tabs/episodes/${episodeId}`);
}

 loadData(episode) { // code from https://blog.jamibot.com/ionic-4-infinite-scroll
    setTimeout(() => {
      console.log('Done');
      this.addMoreItems();
      this.numTimesLeft -= 1;
      episode.target.complete();
    }, 2000);
  }

  addMoreItems() {
    for (let i=0; i<10; i++)
      this.items.push(i);
  }

 
}

  