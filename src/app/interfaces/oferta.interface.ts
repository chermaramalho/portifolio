export interface Oferta{
  id?: number;
  title: string;
  description: string;
  price: number;
  market_price: number;
  img: Imagem;
}

export interface  Imagem {
  url: string;
}

export interface OfertaDescricao{
  id?: number;
  title: string;
  description: string;
  price: number;
  market_price: number;
  img: Imagem;
  category: string;
  images: any[];
}
