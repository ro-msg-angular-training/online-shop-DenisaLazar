import {HttpHeaders} from '@angular/common/http';

export class AppConfig {
  public static API_ENDPOINT = 'http://localhost:3000';

  public static BODY = {headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })};
}
