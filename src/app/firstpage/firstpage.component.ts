import { CommonService } from '../common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent implements OnInit {
  tableDataTitle: string;
  tableDataAuthor: string;
  constructor(private commonService: CommonService) { }

  ngOnInit() {
  }
  
  callService(){
    this.commonService.apiCall()
      .subscribe(
        (data) => console.log(data),
        (error) => console.log(error)
      );
  }
  
  callGetService(){
    this.commonService.apiGetCall()
      .subscribe(
        (data: any) => {
          console.log(data);
          for(var i=0;i < Object.keys(data).length;i++)
              {
                  this.tableDataTitle = data[i].title;
            this.tableDataAuthor = data[i].author;
              }
        },
        (error) => console.log(error)
      );
  }

}
