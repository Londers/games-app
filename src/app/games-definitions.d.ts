interface DataInterface {
  categories: [Category];
  games: [Game];
  merchants: {
    [id: number]: Merchant;
  };
}

interface Name {
  en: string;
}

interface Merchant {
  ID: string;
  Name: string;
}

interface Category {
  ID: string;
  Name: Name;
}

interface Game {
  ID: string;
  Name: Name;
  ImageFullPath: string;
  MerchantID: string;
  CategoryID: string[];
}
