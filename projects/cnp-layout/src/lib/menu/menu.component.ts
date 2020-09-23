import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { MenuItem } from '../model/menu-item';

@Component({
  selector: '[cnp-menu]',
  templateUrl: './menu.component.html',
  styles: [],
  animations: [
    trigger('children', [
      state('hiddenAnimated', style({
        height: '0px'
      })),
      state('visibleAnimated', style({
        height: '*'
      })),
      state('visible', style({
        height: '*',
        'z-index': 100
      })),
      state('hidden', style({
        height: '0px',
        'z-index': '*'
      })),
      transition('visibleAnimated => hiddenAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
      transition('hiddenAnimated => visibleAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {

  @Input() item: any;
  @Input() root: boolean;
  @Input() visible: boolean;
  @Output() hideMenu: EventEmitter<any> = new EventEmitter();
  isParentActive: boolean;
  activeIndex: number;

  constructor() {}

  itemClick(event: Event, item: MenuItem, index: number): void {
    if (item.disabled) {
      event.preventDefault();
      return;
    }
    // activate current item and deactivate active sibling if any
    this.activeIndex = (this.activeIndex === index) ? null : index;
    // execute command
    if (item.command) {
      item.command({ originalEvent: event, item });
    }
    // prevent hash change
    if (item.items || (!item.url && !item.routerLink)) {
      event.preventDefault();
    }
    // hide menu
    if (!item.items) {
      this.hideMenu.emit();
    }
  }

  isActive(index: number): boolean {
    return this.activeIndex === index;
  }

  @Input() get parentActive(): boolean {
    return this.isParentActive;
  }

  set parentActive(val: boolean) {
    this.isParentActive = val;

    if (!this.isParentActive) {
      this.activeIndex = null;
    }
  }

}
