import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  constructor(private http: HttpClient) { }

  getDefinition(word: string): Observable<any> {
    return this.http.post('https://localhost:3000/api/dictionary', { word: word })
  }
}
