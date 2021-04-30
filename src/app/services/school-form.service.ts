import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchoolFormService {
  private url = 'http://localhost:8000/api/student';

  constructor(private http: HttpClient) {
  }

  sendFormData(data: string): Observable<any> {
    return this.http.post(this.url, data);
  }
}
