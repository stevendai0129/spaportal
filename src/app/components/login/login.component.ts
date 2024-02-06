import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';


export interface LoginRes{
  status: string,
  msg: string
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  // name: any
  // password: any
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  



  constructor(private loginService: LoginService,private router: Router) {
      
   }


   
  ngOnInit() {
  }



  login(){
    console.log(this.loginForm.value)
    this.loginService.login(this.loginForm.value).subscribe((res: LoginRes) =>{
        if(res && res.status === 'ok'){
          window.sessionStorage.setItem("valid","true");
          this.router.navigate(['home'])
        }else{
          alert('用户名或密码不正确')
        }
    });
  }

}
