import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FetchData} from "../fetch-data.service";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements OnChanges, OnInit {

  @Input() parent_id!: number;

  child: any;
  child_age: any;
  data_present!: boolean;
  constructor(private json: FetchData) {
    json.getData("../assets/child.json").subscribe(result => {
      console.log(result)
      this.child = result
    });
  }

  ngOnInit() {
  }


  ngOnChanges(changes: SimpleChanges): void {
    for (let i = 0; i < this.child.length; i++) {
      if (this.parent_id == this.child[i]["Id"]) {
        this.data_present = true
        this.child_age = this.child[i]["age"]
        return
      }
    }
    this.data_present = false
  }



}
