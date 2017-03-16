import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {UsersRoutingModule} from "./users-routing.module";
import {UsersComponent} from "./users.components";
import {UserService} from "../shared/users/user.service";

@NgModule({
  imports: [UsersRoutingModule, SharedModule],
  declarations: [UsersComponent],
  exports: [UsersComponent],
  providers: [UserService]
})
export class UsersModule {
}
