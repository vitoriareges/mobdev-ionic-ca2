import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.page.html',
  styleUrls: ['./episode-details.page.scss'],
})
export class EpisodeDetailsPage  implements OnInit {
  episodes: any;
  episodeId = null;
  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) { }
  ngOnInit() {
    this.episodeId = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getCharacter(this.episodeId).subscribe(res => {
      this.episodes = res[0];
      console.log(JSON.stringify(this.episodes.char_id));
    });
  }
}

