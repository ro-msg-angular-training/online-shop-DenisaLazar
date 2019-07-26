import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {AppConfig} from "../app.config";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userLoginUrl = AppConfig.API_ENDPOINT + '/login';

  constructor(private httpClient: HttpClient) {
  }


}
