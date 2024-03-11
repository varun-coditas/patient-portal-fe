import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  ButtonComponent,
  PopoverCaretComponent,
  PopoverComponent,
  PopoverContentComponent,
  PopoverDirective,
  PopoverTitleComponent,
} from '@coditashq/ng-ada-components';
import { AuthService } from '../../../common-services/auth/auth.service';
import { GetOriginDirective } from '../../directives/get-origin.directive';
import { PopoverService } from '../popover/popover.service';
import { MenuOptionsComponent } from './menu-options/menu-options.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    PopoverComponent,
    PopoverCaretComponent,
    PopoverContentComponent,
    PopoverDirective,
    ButtonComponent,
    PopoverTitleComponent,
    GetOriginDirective,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  name: string = '';
  renderName: string = '';
  initialsOfName: string = '';
  constructor(
    private cdRef: ChangeDetectorRef,
    private popoverService: PopoverService,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    this.authService.getUserApi().subscribe({
      next: (response) => {
        this.name = response.name;
        this.convertName();
        this.getInitials();
        this.authService.setUser(response);
      },
    });
  }
  convertName() {
    if (this.name.length > 10) {
      this.renderName = this.name.slice(0, 10) + '...';
    } else {
      this.renderName = this.name;
    }
    this.cdRef.detectChanges();
  }

  getInitials() {
    const splitName = this.name.split(' ');
    this.initialsOfName = `${splitName[0].charAt(0)}${
      splitName[1] ? splitName[1].charAt(0) : ''
    }`;
    this.cdRef.detectChanges();
  }

  openPopover(event: HTMLElement) {
    this.popoverService.showPopover(event, MenuOptionsComponent, {
      originX: 'end',
      overlayX: 'end',
      offsetY: 16,
    });
  }
}
