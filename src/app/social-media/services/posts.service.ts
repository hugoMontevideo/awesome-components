import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post.model';

@Injectable()

export class PostsService {

    constructor(private http: HttpClient) {}

    getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(`${environment.apiUrl}/posts`);
    }
}