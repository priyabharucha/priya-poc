import { Component, OnInit } from '@angular/core';
import { AboutUsService } from 'src/app/service/about-us.service';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  tableData: User[];

  constructor(private aboutUsService: AboutUsService) { }

  ngOnInit() {
    this.aboutUsService.getAboutUsData().subscribe(data => {
      if(data){
        this.tableData = data;
      }
    })
  }

}
