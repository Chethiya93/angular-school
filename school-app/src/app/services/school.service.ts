import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISchool } from '../school-details/school';


@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  getUrl: string = "http://localhost:8080/smscloud/school";
  // postUrl: string = "http://localhost:8080/smscloud/school"

  constructor(private http: HttpClient) { }

  getSchools(): Observable<ISchool[]> {
    return this.http.get<ISchool[]>(this.getUrl);
  }

  // saveSchool(school: ISchool): Observable<ISchool> {
  //   return this.http.post<ISchool>(this.postUrl,school);
  // }
}
