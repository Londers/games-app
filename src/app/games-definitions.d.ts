interface DataInterface {
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

interface Game {
  ID: string;
  Name: Name;
  ImageFullPath: string;
  MerchantID: string;
}
