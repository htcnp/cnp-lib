import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { TopBarMenuItem, TopBarLangMenu, TopBarUserMenu } from '../model/menu-item';

@Component({
  selector: 'cnp-topbar',
  templateUrl: './topbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopbarComponent {

  @Input() leftMenu: TopBarMenuItem[] = [];
  @Input() langMenu: TopBarLangMenu;
  @Input() userMenu: TopBarUserMenu;
  @Input() username = '';
  @Output() doToggleMenu: EventEmitter<any> = new EventEmitter();

  onMenuButtonClick(evt) {
    this.doToggleMenu.emit(evt);
  }

  rightMenuClick(event: Event, item: TopBarMenuItem) {
    if (item.command) {
      item.command({ originalEvent: event, item });
    }
  }

  leftMenuClick(event: Event, item: TopBarMenuItem) {
    if (item.command) {
      item.command({ originalEvent: event, item });
    }
    if (!item.routerLink) {
      event.preventDefault();
    }
  }

}
