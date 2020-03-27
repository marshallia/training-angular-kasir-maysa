import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, retry} from 'rxjs/operators';
import {of} from 'rxjs';
import {Menu} from './menu';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getPostList() {
    const url = this.baseUrl + 'menu';
    return this.http.get<Menu>(url).pipe(
        catchError(error => of(error.message)),
        retry(3)
    );
  }
  getFilter() {
    const url = this.baseUrl + 'menu';
    return this.http.get<Menu>(url).pipe(
        catchError(error => of(error.message)),
        retry(3)
    );
  }
}
