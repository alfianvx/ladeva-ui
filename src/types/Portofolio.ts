type TPortofolio = {
  id: number;
  name: string;
  slug: string;
  short_description: string;
  description: string;
  logo_url: string;
  thumbnail_url: string;
};

type TPortofolioResponse = {
  status: boolean;
  statusCode: number;
  message: string;
  data: TProduct[];
};
