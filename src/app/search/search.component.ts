import { Component, Output, EventEmitter, OnInit } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  username: string = '';

  @Output() searchUser = new EventEmitter<string>();

  ngOnInit(): void {
    this.onSubmit();
  }

  onSubmit() {
    this.searchUser.emit(this.username);
  }
}
