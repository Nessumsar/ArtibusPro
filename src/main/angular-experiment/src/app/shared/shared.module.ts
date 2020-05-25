import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuardService } from './auth-services/auth-guard.service';
import { AuthService } from './auth-services/auth.service';
import { HttpService } from './http.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [AuthService, AuthGuardService, HttpService]
})
export class SharedModule {}
