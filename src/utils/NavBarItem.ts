export interface NavBarItem {
    title?: string;
    path: string;
    icon: any;
    iconOpened?: any;
    iconClosed?: any;
    cName: string;
    subnav?: NavBarItem[];
}
