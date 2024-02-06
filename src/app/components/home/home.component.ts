import { Component, OnInit } from '@angular/core';
import { Menu, MenuService } from 'src/app/service/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images: any;
  menus: Menu[] = [];

  constructor(private menuService: MenuService) {
    // this.images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
   }

  ngOnInit() {
    this.menuService.getMenus().subscribe(r => {
      if(r){
        this.menus = JSON.parse(r);
      }
    });
  }

  toggleMenu(){
    
  }

}
