import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {

  constructor(private cookie: CookieService, private router: Router) { }

  login(username: string, password: string) {
    if (username === 'maysa' && password === 'secret') {
      this.cookie.set('token', 'logged');
      this.router.navigate(['/menu']);
    }
  }

  logout() {
    this.cookie.delete('token');
    this.router.navigate(['']);
  }

  isLogin(): boolean{
    return !!this.cookie.get('token');
  }
}
