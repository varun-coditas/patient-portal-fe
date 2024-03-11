import { Component } from '@angular/core';
import { AuthService } from '../../../../common-services/auth/auth.service';
import { PopoverService } from '../../popover/popover.service';

@Component({
  selector: 'app-menu-options',
  standalone: true,
  imports: [],
  templateUrl: './menu-options.component.html',
  styleUrl: './menu-options.component.scss',
})
export class MenuOptionsComponent {
  constructor(
    private authService: AuthService,
    private popoverService: PopoverService
  ) {}
  logout() {
    this.authService.logout();
    this.popoverService.hidePopOver();
  }
}
