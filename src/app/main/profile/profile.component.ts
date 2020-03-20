import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

constructor(private utilService:UtilsService)
{
  this.utilService.setDocTitle('profile.title',true);
}

  ngOnInit(): void {
  }

}
