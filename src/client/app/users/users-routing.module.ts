import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {UsersComponent} from "./users.components";

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'users', component: UsersComponent}
    ])
  ],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
