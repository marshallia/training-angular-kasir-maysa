import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from '../../auth-service.service';
import {PostService} from '../../post.service';
import {Menu} from '../../menu';
import {Router} from '@angular/router';
import {Order} from '../../order';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  totalPrice = 0;
  filterArg: string;
  menuList: Menu[] = [];
  orderList: Order[] = [];
  constructor(private authService: AuthServiceService, private router: Router, private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPostList().subscribe(data => {
      this.menuList = data;
      console.log(data);
    });
  }

  addCart(id: number) {
    if (this.orderList.length === 0) {
      console.log('still empty' + id.toString());
      this.orderList.push({
            menu_id: id,
            quantity: 1,
            price: this.menuList[id-1].price,
            name: this.menuList[id-1].name
      });
    } else {
      const index = this.orderList.findIndex(data => data.menu_id === id);
      console.log('is not empty'+ id.toString()+index);
      if (index === -1) {
        this.orderList.push({
          menu_id: id,
          quantity: 1,
          price: this.menuList[id-1].price,
          name: this.menuList[id-1].name
        });
      } else {
        this.orderList[index].quantity++;
      }
    }
    this.orderList.forEach((data) => {
      this.totalPrice += data.quantity * data.price;
    });
  }

  remove(id: number) {
    const index = this.orderList.findIndex(data => data.menu_id === id);
    this.orderList.splice(id, 1);
  }

  increase(id: number) {
    const index = this.orderList.findIndex(data => data.menu_id === id);
    this.orderList[index].quantity++;
  }

  decrease(id: number) {
    const index = this.orderList.findIndex(data => data.menu_id === id);
    this.orderList[index].quantity--;
  }

  filter(cat: string): void {
    this.postService.getPostList().subscribe(data => {
    this.menuList = data;
    this.menuList = this.menuList.filter(menu => menu.category === cat);
    console.log(data);
  });
  }

  logout() {
    this.authService.logout();
  }

}
