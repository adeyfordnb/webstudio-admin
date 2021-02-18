import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./shared/auth.service";

import {AdminLayoutComponent} from "../shared/mainlayouts/admin-layout/admin-layout.component";
import {LoginPageComponent} from './components/login-page/login-page.component';
import { SliderComponent } from './components/slider/slider.component';
import { PostsComponent } from './components/posts/posts.component';
import {SharedModule} from "../shared/shared.module";
import {AuthGuard} from "./shared/auth.guard";

@NgModule ({
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent,
    SliderComponent,
    PostsComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '', component: AdminLayoutComponent, children: [
          {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
          {path: 'login', component: LoginPageComponent},
          {path: 'posts', component: PostsComponent, canActivate: [AuthGuard]},
          {path: 'slider', component: SliderComponent, canActivate: [AuthGuard]}
        ]
      }
    ])
  ],
  exports: [RouterModule],
  providers: [
    AuthService,
    AuthGuard
  ]
})

export class AdminModule {
}
