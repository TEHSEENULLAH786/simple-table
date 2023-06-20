import { Component, OnInit } from '@angular/core';
import { tableService } from '../table.service';

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.css'],
})
export class SimpleTableComponent implements OnInit {
  users: any[];
  sortedColumn: string;
  sortDirection: string;

  constructor(private tableService: tableService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.tableService.getUsers().subscribe(
      (users: any[]) => {
        this.users = users;
      },
      (error) => {
        console.log('Error fetching users:', error);
      }
    );
  }

  sort(column: string) {
    if (column === this.sortedColumn) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortedColumn = column;
      this.sortDirection = 'asc';
    }

    this.users.sort((a, b) => {
      const valA = this.getNestedValue(a, column);
      const valB = this.getNestedValue(b, column);

      if (valA < valB) {
        return this.sortDirection === 'asc' ? -1 : 1;
      } else if (valA > valB) {
        return this.sortDirection === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }

  getNestedValue(obj: any, path: string) {
    const parts = path.split('.');
    let value = obj;

    for (const part of parts) {
      if (value[part] === undefined) {
        return null;
      }
      value = value[part];
    }

    return value;
  }
}
