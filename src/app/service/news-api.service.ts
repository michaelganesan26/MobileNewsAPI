import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  API_KEY = '4c3bd942b0b64ced96ac036d156c98a9';

  constructor(private http: HttpClient) {}

  initSources(): Observable<any> {

    return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey=' + this.API_KEY);

  }

  initArticles(): Observable<any> {

    return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=' + this.API_KEY);

  }

  getArticlesByID(source: string): Observable<any> {

    return this.http.get('https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=' + this.API_KEY);

  }


}
