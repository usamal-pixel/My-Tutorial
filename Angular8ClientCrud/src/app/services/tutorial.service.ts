import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const baseUrl ='http://localhost:7003/saatvik';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http:HttpClient) { }

  getAll() {
    console.log('inside service.....');
    return this.http.get(baseUrl);
  }

  get(id) {
    console.log('TutorialService.........getby id method.....');
    console.log(baseUrl);
    return this.http.get(`${baseUrl}/${id}`);
  }
  findByTitle(title) {
    return this.http.get(`${baseUrl}?title=${title}`);
  }
  deleteAll() {
    return this.http.delete(baseUrl);
  }
  create(data) {
    console.log('Inside the serviceclass : ${data} ');
    return this.http.post(baseUrl, data);
  }
  update(id, data) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
delete(id){

return this.http.delete(`${baseUrl}/${id}`);
}

}
