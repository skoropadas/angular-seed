import {Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';
import {User} from "../shared/users/user.model";
import {UserService} from "../shared/users/user.service";
declare var google: any;

@Component({
  moduleId: module.id,
  selector: 'sd-user-form',
  templateUrl: 'user-form.component.html',
  styleUrls: ['user-form.component.css'],
})
export class UserFormComponent implements OnInit, AfterViewInit {
  user: User;
  userMarker: any;
  googleMap: any;
  @ViewChild('googleMap') googleMapRef: ElementRef;


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

  ngAfterViewInit() {
    this.mapInit();
  }


  getUser(id: number) {
    this.userService.get(id).subscribe(
      result => {
        this.user = result;
        this.mapMarkerPosition();
        console.log('user', this.user);
      },
      error => console.error('Error', error)
    )
  }

  onSave() {
    if (this.user.id)
    //save
      this.userService.save(this.user).subscribe(
        result => {
          this.user = result;
          console.log('updated', this.user);
          this.location.back();
        },
        error => console.error('Error', error)
      );
    else
    //create
      this.userService.create(this.user).subscribe(
        result => {
          this.user = result;
          console.log('created', this.user);
          this.location.back();
        },
        error => console.error('Error', error)
      );
  }

  onDelete() {
    this.userService.delete(this.user).subscribe(
      () => {
        console.log('deleted', this.user);
        this.location.back();
      },
      error => console.error('Error', error)
    );
  }

  mapInit() {
    let latLng = new google.maps.LatLng(this.user.address.geo.lat, this.user.address.geo.lng);
    let mapProp = {
      center: latLng,
      zoom: 5,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.googleMap = new google.maps.Map(this.googleMapRef.nativeElement, mapProp);
    this.userMarker = new google.maps.Marker({
      position: latLng
    });
    this.userMarker.setMap(this.googleMap);
  }

  mapMarkerPosition() {
    let latLng = new google.maps.LatLng(this.user.address.geo.lat, this.user.address.geo.lng);
    this.userMarker.setPosition(latLng);
    this.googleMap.setCenter(latLng);
  }

  onCancel() {
    this.location.back();
  }
}
