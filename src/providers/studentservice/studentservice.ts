import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Students } from '../../model/students.model';
import { CREATE_USER } from '../../endpoints/endpoints';

/*
  Generated class for the StudentserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()//ayuda  ac rear en el constructor
export class StudentserviceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello Studentservicerovider Provider');
  }
  createAccountSudent(account:Students){

    return this.http.post(CREATE_USER,account);
  }

}
