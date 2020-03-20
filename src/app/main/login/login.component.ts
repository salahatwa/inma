import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { Config } from '../../shared/classes/config';
import { UtilsService } from '../../shared/services/utils.service';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../../shared/services/auth/user.service';
import { ApiService } from './../../shared/services/api.service';
import { JwtService } from './../../shared/services/auth/jwt.service';


class AuthenticationRequest {
  username: string;
  password: string;
}


@Component({
  selector: 'app-inma-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UserService,ApiService,JwtService]
})
export class LoginComponent {
  hide = true;
  title: String = '';
  errors: [] ;
  isSubmitting = false;
  authForm: FormGroup;
  selectedLang:string='en';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder,
    private utilService:UtilsService
  ) {
    this.utilService.setDocTitle('form.button.login',true);
    this.selectedLang=this.utilService.getCurrentLang();
  }

  ngOnInit() {
    this.authForm = this.fb.group({
      'usernameOrEmail': ['', Validators.required],
      'password': ['', Validators.required]
     });
  }

  submitForm() {
    // this.isSubmitting = true;

    // const credentials = this.authForm.value;
    // this.userService
    // .attemptAuth(this.authType, credentials)
    // .subscribe(
    //   data => this.router.navigateByUrl('/dashboard'),
    //   err => {
    //     this.errors = err.errors;
    //     this.isSubmitting = false;
    //   }
    // );
    console.log('>>>>>');
    this.router.navigateByUrl('/dashboard');
    this.utilService.setDocTitle('dashboard.title',false);
  }

  useLanguage(language: string) {
    this.utilService.setLang(language);
  }

}
