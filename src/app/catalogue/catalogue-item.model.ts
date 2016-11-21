export class CatalogueItem {
    catalogueNo: string;
    type: ItemType;
    name: string;
    short: string;
    releaseDate: Date;
    callToAction: any;
}

export enum ItemType {
    ALBUM,
    CD,
    VIDEO
}

export enum ItemCallToAction {
    LISTEN,
    DOWNLOAD,
    BUY,
    WATCH
}