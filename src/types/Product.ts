type TProduct = {
  id: number;
  name: string;
  slug: string;
  short_description: string;
  description: string;
  logo_url: string;
  thumbnail_url: string;
};

type TProductResponse = {
  status: boolean;
  statusCode: number;
  message: string;
  data: TProduct[];
};
