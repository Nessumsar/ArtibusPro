import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt'; // needs fix
import { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(public jwtHelper: JwtHelperService) {}

  public async isAuthenticated(): Promise<boolean> {
    const token = await this.getIdToken();

    if (token === null) {
      return false;
    } else {
      return !this.jwtHelper.isTokenExpired(token);
    }
  }

  async getIdToken(): Promise<any> {
    return Auth.currentSession().then((tokens: any) => tokens.idToken.jwtToken);
  }

  async logout(): Promise<any> {
    await Auth.signOut();
  }
}
