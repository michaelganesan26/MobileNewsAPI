import { Component, OnInit } from '@angular/core';
import { NewsApiService } from './service/news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
    mArticles: Array<any>;
    mSource: Array<any>;

   constructor(private newsapi: NewsApiService) {

     console.log('News API constructor called');
   }

   ngOnInit(): void {

        // load articles
        this.newsapi.initArticles().subscribe((results) => { this.mArticles = results['articles']; });

        // load the new sources
        this.newsapi.initSources().subscribe((results) => { this.mSource = results['sources']; });

   }

   searchArticles(source:any) {

       console.log(`selected source is ${source}`);

       this.newsapi.getArticlesByID(source).subscribe((results) => { this.mArticles = results['articles']; });


   }



}
