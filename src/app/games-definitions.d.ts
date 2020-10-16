interface DataInterface {
  // categories: [];
  games: [Game];
}

interface Name {
  en: string;
}

// export interface SortPerCategory {
//   16: number;
// }

interface Game {
  ID: string;
  Image: string;
  Url: string;
  Name: Name;
  Description: string[];
  MobileUrl: string;
  Branded: number;
  SuperBranded: number;
  hasDemo: number;
  CategoryID: string[];
  // SortPerCategory: SortPerCategory;
  MerchantID: string;
  SubMerchantID?: string;
  AR: string;
  IDCountryRestriction: string;
  Sort: string;
  PageCode: string;
  MobilePageCode: string;
  MobileAndroidPageCode?: string;
  MobileWindowsPageCode?: string;
  ExternalCode?: string;
  MobileExternalCode?: string;
  ImageFullPath: string;
  WorkingHours?: string;
  IsVirtual: string;
  TableID: string;
  Freeround: string;
  LaunchCode: string;
  isRestricted: boolean;
}
