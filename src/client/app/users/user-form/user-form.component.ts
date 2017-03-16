import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {UserService} from "../../shared/users/user.service";
import {User} from "../../shared/users/user.model";
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';
declare var google: any;

@Component({
  moduleId: module.id,
  selector: 'sd-user-form',
  templateUrl: 'user-form.component.html',
  styleUrls: ['user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  user: User;
  @ViewChild('googleMap') googleMap: ElementRef;
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private userService: UserService) {
    this.user = new User();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id'] != 'new')
        this.getUser(params['id'])
    });
  }

  getUser(id: number) {
    this.userService.get(id).subscribe(
      result => {
        this.user = result;
        console.log(this.user);
        console.log(this.googleMap)
      },
      error => console.error('Error', error)
    )
  }

  onSave() {
    if (this.user.id)
      this.userService.save(this.user).subscribe(
        result => {
          this.user = result;
          console.log('updated', this.user);
          this.location.back();
        },
        error => console.error('Error', error)
      );
    else
      this.userService.create(this.user).subscribe(
        result => {
          this.user = result;
          console.log('created', this.user);
          this.location.back();
        },
        error => console.error('Error', error)
      );
  }

  test() {
    this.lng = this.user.address.geo.lng;
    this.lat = this.user.address.geo.lat;
    console.log(google)
    console.log(this.googleMap);
  }

  onCancel() {
    this.location.back();
  }
}
