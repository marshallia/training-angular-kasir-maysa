import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationStart, Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';
import {Order} from '../../order';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  private state$: Observable<object>;
  orderList: any;
  totalPrice = 0;
  help: any[];
  constructor(public activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.orderList = data ;
      this.totalPrice += data.price * data.quantity;
    });
  }

  print() {
    this.router.navigate(['/menu']);
  }
}
