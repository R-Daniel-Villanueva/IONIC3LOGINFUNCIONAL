import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { AboutPage } from '../about/about';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user:string;
  group:string;
  cursos:string[]=[
    'Ionic',
    'Docker',
    'Java'
  ];
  cost:number;
  loginForm:FormGroup;
  
  constructor(public navCtrl: NavController,
    private fb:FormBuilder) {
      this.loginForm=this.fb.group({
        user:['',Validators.required],
        pwd:['',Validators.required]
      });
    
  }

  goAbout(){
    let data={
      user:this.user,
      group:this.group,
      courses:this.cursos,
      date:new Date(),
      cost:this.cost};
    //console.log(data);
    this.navCtrl.push(AboutPage,data);
  }     
  login(){
    
  }
    
}
