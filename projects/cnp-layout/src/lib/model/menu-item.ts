export interface MenuItem {
    label?: string;
    icon?: string;
    command?: (event?: any) => void;
    url?: string;
    routerLink?: any;
    items?: MenuItem[] | MenuItem[][];
    disabled?: boolean;
    target?: string;
    badge?: string;
    styleClass?: string;
    title?: string;
    id?: string;
    tabindex?: string;
}

export class TopBarMenuItem {
    label?: string;
    routerLink?: any;
    command?: (event?: any) => void;
    img?: string;
}

export class TopBarLangMenu {
    currentLang?: string;
    currentImg?: string;
    langItems: TopBarMenuItem[];
}

export class TopBarUserMenu {
    welcome: string;
    icon?: string;
    menuItems: TopBarMenuItem[];
}
