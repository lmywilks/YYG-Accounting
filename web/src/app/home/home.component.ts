import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { Add, Fetch } from '../store/tags';
import { getAddSuccess, getTags } from '../store/tags/tags.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  new_tag_name: string;
  isAddNew: boolean = false;

  tags = this.store.select(getTags);

  constructor(
    private store: Store<AppState>
  ) { 
    this.store.dispatch(new Fetch());
  }

  ngOnInit(): void {
  }

  addNewTag(): void {
    this.new_tag_name = '';
    this.isAddNew = true;
  }

  saveNewTag(): void {
    let newTag = {
        name: this.new_tag_name
    };

    this.store.dispatch(new Add(newTag));

    this.cancelNewTag();
  }

  cancelNewTag(): void {
    this.new_tag_name = '';
    this.isAddNew = false;
  }

}
