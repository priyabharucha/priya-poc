import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model'

@Injectable()
export class AboutUsService {

    constructor(private http: HttpClient){

    }

    getAboutUsData(): Observable<User[]> {
        return this.http.get<User[]>("./../../assets/json/about-us.json");
    }

}