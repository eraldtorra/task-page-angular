import { Injectable, signal } from '@angular/core';

interface Info {
  time: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  terms: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  infoPersonal = signal<Info>({
    time: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    terms: false
  });

  setTime(time: string){
    this.infoPersonal.update((info) => ({...info, time}));
  }

  setOtherInfo(firstName: string, lastName: string, email: string, phone: string, terms: boolean){
    this.infoPersonal.update((info) => ({...info, firstName, lastName, email, phone}));
  }

  get info(){
    return this.infoPersonal();
  }

}
