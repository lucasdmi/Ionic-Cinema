import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cinema } from '../cinemas/cinemas';


@Injectable()
export class FilmesProvider {
  
    apiUrl = 'http://localhost:8080/api/filme/';
    filmes: any;
  
    constructor(public http: HttpClient) {
      console.log('Hello FilmesProvider Provider');
    }
    
    findAll() {
      return new Promise(resolve => {
        this.http.get(this.apiUrl+"")
        .subscribe(data => {
          resolve(data);
          console.log('The result is:');
          console.log(data);
        }, err => {
          console.log(err);
        });
      });
    }
  
    findById(id) {
      return new Promise(resolve => {
        this.http.get(this.apiUrl+id)
        .subscribe(data => {
          resolve(data);
          console.log('The result is:');
          console.log(data);
        }, err => {
          console.log(err);
        });
      });
    }
  
    deleteById(id) {
      return new Promise(resolve => {
        this.http.delete(this.apiUrl+id)
        .subscribe(data => {
          resolve(data);
          console.log('The result is:');
          console.log(data);
        }, err => {
          console.log(err);
        });
      });
  
    }
  
    save(filme) {
      let data = JSON.stringify(filme);
      return new Promise((resolve, reject) => {
        this.http.post(this.apiUrl, data, { headers: { 'Content-Type': 'application/json' }})
        .subscribe(res => {
          resolve(res);
          console.log('The result is:'+res);
          console.log(filme);
        }, (err) => {
          reject(err);
          console.log(err);
        });
      });
    }
  
  }

export class Filme {
  id: number;
  nome: string;
  data:string;
  cinema: Cinema;
}
