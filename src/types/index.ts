export interface Service {
  title: string;
  price: string;
  features: string[];
  description: string;
}

export interface Template {
  id: number;
  name: string;
  colorScheme: string;
  gradient: string;
}

export interface BlogPost {
  id: number;
  title: string;
  source: string;
  date: string;
  excerpt: string;
}
