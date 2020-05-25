import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TenantViewComponent } from './tenant-view/tenant-view.component';
import { AddUserComponent } from './add-user/add-user.component';
import { RemoveWorkGroupComponent } from './remove-work-group/remove-work-group.component';
import { AddUserToGroupComponent } from './add-user-to-group/add-user-to-group.component';
import { RemoveUserFromGroupComponent } from './remove-user-from-group/remove-user-from-group.component';
import { RemoveUserComponent } from './remove-user/remove-user.component';
import { AddWorkGroupComponent } from './add-work-group/add-work-group.component';
import { ListTenantsComponent } from './list-tenants/list-tenants.component';
import { ListWorkGroupsComponent } from './list-work-groups/list-work-groups.component';
import { WorkGroupViewComponent } from './work-group-view/work-group-view.component';
import {RouterModule} from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';

import Amplify from 'aws-amplify';
import awsconfig from 'src/environments/aws-config.js';
import { LoginComponent } from './login/login.component';

/* Configure Amplify resources */
Amplify.configure(awsconfig);


@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    AddWorkGroupComponent,
    AddUserToGroupComponent,
    ListTenantsComponent,
    ListWorkGroupsComponent,
    RemoveWorkGroupComponent,
    RemoveUserFromGroupComponent,
    RemoveUserComponent,
    TenantViewComponent,
    WorkGroupViewComponent,
    NavbarComponent,
    LoginComponent,
  ],
  imports: [
    AmplifyUIAngularModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path : '', component: AppComponent}, // notfoundcomponent lr nåt sånt
      {path : 'tenant/users', component: TenantViewComponent},
      {path : 'add-user', component: AddUserComponent},
      {path : 'remove-user', component: RemoveUserComponent},
      {path : 'add-work-group', component: AddWorkGroupComponent},
      {path : 'remove-work-group', component: RemoveWorkGroupComponent},
      {path : 'tenant/:groupname', component: AppComponent}, //wip
      {path : 'work-group/:groupname', component: AppComponent}, //wip
      {path : 'super', component: ListTenantsComponent},
      {path : 'work-group-list', component: ListWorkGroupsComponent},
      {path : 'login', component: LoginComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
