import { Component } from '@angular/core';
import { TopBarLangMenu, TopBarUserMenu, TopBarMenuItem, MenuItem } from 'cnp-layout';
import { CnpDialogService } from 'cnp-dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';
  userLogged = 'John Wick';
  staticMenuDesktopInactive: boolean;
  staticMenuMobileActive: boolean;
  leftPanelClick: boolean;
  // right menu
  langMenu: TopBarLangMenu = {
    currentLang: 'EN',
    currentImg: `./assets/en.png`,
    langItems: [
      { label: 'VN', img: './assets/vn.png', command: (evt) => this.changeLang(evt.item) },
      { label: 'EN', img: './assets/en.png', command: (evt) => this.changeLang(evt.item) },
    ]
  };
  userMenu: TopBarUserMenu = {
    welcome: 'Hi',
    icon: 'arrow_drop_down',
    menuItems: [
      { label: 'Logout', command: _ => this.doLogout() }
    ]
  };
  // left menu
  isShowMenuButton = true;
  leftMenu: TopBarMenuItem[];
  // features menu
  featuresMenu: MenuItem[] = [
    { label: 'Home', icon: 'home', routerLink: '/', items: undefined },
    {
      label: 'System manager', icon: 'settings', routerLink: '/', items: [
        { label: 'Category', icon: 'list', routerLink: '/category' },
        { label: 'Provicer', icon: 'connect_without_contact', routerLink: '/provicer' }
      ]
    }
  ];

  constructor(private cnpDialog: CnpDialogService) { }

  showDialogNofication(): void {
    this.cnpDialog.nofication({
      btnOk: 'Ok',
      code: '0',
      title: 'Foo',
      message: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Voluptate tempora distinctio vero, aliquid temporibus illo! Maiores ipsa voluptates debitis asperiores,
      aperiam tenetur voluptatem labore quam sapiente non, dolorem quibusdam eaque!`
    });
  }

  showDialogConfirm(): void {
    this.cnpDialog.confirm({
      btnOk: 'Ok',
      code: '1',
      title: 'Foo',
      message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Reprehenderit voluptatum enim recusandae nobis eaque, dolorum sequi dicta neque nulla,
      obcaecati veritatis in illo vel accusantium! Ducimus consequuntur voluptatem magni saepe?`,
      btnCancel: 'Cancel'
    }, result => console.log(result));
  }

  showDialogError(): void {
    this.cnpDialog.error({
      code: '2',
      title: 'Foo',
      message: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Libero sint perspiciatis possimus consequuntur assumenda ratione deleniti architecto, velit ipsam nulla dolorum molestiae.
      Nihil quaerat nostrum quo repudiandae obcaecati! Ab, quae?`,
      btnClose: 'Close'
    });
  }

  doLogin(): void {
    console.log('do login work');
  }

  doLogout(): void {
    console.log('do logout work');
  }

  changeLang(item: TopBarMenuItem): void {
    this.langMenu.currentImg = item.img;
    this.langMenu.currentLang = item.label;
    console.log('change lang work', item);
  }

  onLayoutClick(): void {
    if (!this.leftPanelClick) {
      this.doHideMenuStatic();
    }
    this.leftPanelClick = false;
  }

  doHideMenuStatic(): void {
    if (this.isMobile()) {
      this.staticMenuMobileActive = false;
    }
  }

  onMenuButtonClick(event): void {
    if (this.isDesktop()) {
      this.staticMenuDesktopInactive = !this.staticMenuDesktopInactive;
    } else {
      this.staticMenuMobileActive = !this.staticMenuMobileActive;
    }
    this.leftPanelClick = true;
    event.preventDefault();
  }

  onLeftPanelClick(): void {
    this.leftPanelClick = true;
  }

  isMobile(): boolean {
    return window.innerWidth < 768; // set equal mobileBreakpoint  + 1 in scss
  }

  isDesktop(): boolean {
    return window.innerWidth >= 768; // set equal mobileBreakpoint  + 1 in scss
  }
}
