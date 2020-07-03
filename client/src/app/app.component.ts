import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'recreateapp';

  constructor(private httpService: HttpClient) {
  }

  ngOnInit(): void {
    console.log('calling service');
    this.httpService.get('/api/users').subscribe(res => {
      console.log('got a response from server', res);
    });
  }

}
