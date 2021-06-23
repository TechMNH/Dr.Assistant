import { Component, OnInit } from '@angular/core';
import { AdminProfile } from 'src/app/models/admin.model';
import { GuestProfile } from 'src/app/models/guest.model';
import { DataService } from 'src/app/utility/services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public adminProfile: AdminProfile = null;
  public guestProfile: GuestProfile = null;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.anyProfile.subscribe(data => {
      this.adminProfile = data as AdminProfile
    })
  }
}
