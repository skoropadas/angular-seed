import {NgModule} from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import {UserFormRoutingModule} from "./user-form-routing.module";
import {UserFormComponent} from "./user-form.component";
import {UserService} from "../../shared/users/user.service";

import {Config} from "../../shared/config/env.config";
import {AgmCoreModule} from "angular2-google-maps/core/core-module";


@NgModule({
  imports: [
    UserFormRoutingModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: Config.GOOGLE_MAPS_API_KEY
    })
  ],
  declarations: [UserFormComponent],
  exports: [UserFormComponent],
  providers: [UserService]
})
export class UserFormModule {
}
