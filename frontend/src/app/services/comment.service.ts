import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Comment } from '../models/Comment.model'
import { environment  } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private comments: Comment[] = [];
  private apiUrl = environment.COMMENTS_API_URL;
  private filterAPI_URL =  environment.FILTERS_API_URL

  constructor( private http: HttpClient) { }

  getComments(productId:string): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.apiUrl}/comments/${productId}`);
  }

  createComment(comment: Comment) {
    return this.http.post<Comment>(`${this.apiUrl}/comments`, comment);
  }

 filterComments(productId:string): Observable<Comment[]> {
  return this.http.get<Comment[]>(`${this.filterAPI_URL}/filter/comments/${productId}`);
 }

}
