import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Config} from "../config/env.config";
import {User} from "./user.model";

@Injectable()
export class UserService {
  private host: string = Config.API;

  constructor(private http: Http) {
  }

  getAll(): Observable<User[]> {
    return this.http.get(`${this.host}/users`)
      .map((res: Response) => {
        return res.json().map((record: any) => {
          return new User().serialize(record);
        })
      })
      .catch(this.handleError);
  }

  get(id: number): Observable<User> {
    return this.http.get(`${this.host}/users/${id}`)
      .map((res: Response) => new User().serialize(res.json()))
      .catch(this.handleError);
  }

  save(record: User): Observable<User> {
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers});
    let body = JSON.stringify(record);

    let url = `${this.host}/users/${record.id}`;
    return this.http.put(url, body, options)
      .map((res: Response) => new User().serialize(res.json()))
      .catch(this.handleError)
  }

  create(record: User): Observable<User> {
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers});
    let body = JSON.stringify(record);

    return this.http.post(`${this.host}/users`, body, options)
      .map((res: Response) => new User().serialize(res.json()))
      .catch(this.handleError)
  }

  delete(record: User) {
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers});

    let url = `${this.host}/users/${record.id}`;
    return this.http.delete(url, options)
      .catch(this.handleError)
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}

