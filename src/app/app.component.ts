import {Component} from '@angular/core';
import {FetchData} from "./fetch-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'platform-commons-assignment';
  parent_data!: any;
  public parent_id!: number;
  constructor(private json: FetchData) {
    json.getData("./assets/parent.json").subscribe(result => {
      this.parent_data = result
    });
  }

  // valuechange(){
  //   console.log(this.parent_id)
  // }
}
