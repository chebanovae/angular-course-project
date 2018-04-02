import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { BackendService } from '../../shared/backend.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private bService: BackendService,
              private authService: AuthService) {}

  onSaveData() {
    this.bService.storeRecipes()
      .subscribe((response: Response) => console.log(response),
        (error) => console.log(error));
  }

  onFetchData() {
    this.bService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
