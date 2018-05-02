import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sidebar-list',
  templateUrl: './sidebar-list.component.html',
  styleUrls: ['./sidebar-list.component.scss']
})
export class SidebarListComponent implements OnInit {
  @Output() toogledSidebar = new EventEmitter<any>();

  logoSrc = 'assets/img/shared/logo.png';
  defaultAltImage = "Sonja Baby's | A beleza está nos detalhes";
  isLoggedIn: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { 
    this.isLoggedIn = false;
  }

  ngOnInit() { 
    this.authService.getAuth().subscribe(auth => {
      if (auth) return this.isLoggedIn = true;
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  toogleSidebar($event) {
    this.toogledSidebar.emit("toogle");
  }
}
