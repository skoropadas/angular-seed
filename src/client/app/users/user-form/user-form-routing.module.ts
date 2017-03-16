import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {UserFormComponent} from "./user-form.component";


@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'users/:id', component: UserFormComponent}
    ])
  ],
  exports: [RouterModule]
})
export class UserFormRoutingModule {
}
