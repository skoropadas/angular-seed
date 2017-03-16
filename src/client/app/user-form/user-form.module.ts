import {NgModule} from '@angular/core';
import {UserFormRoutingModule} from "./user-form-routing.module";
import {UserFormComponent} from "./user-form.component";
import {UserService} from "../shared/users/user.service";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  imports: [
    UserFormRoutingModule,
    SharedModule
  ],
  declarations: [UserFormComponent],
  exports: [UserFormComponent],
  providers: [UserService]
})
export class UserFormModule {

}
