type TPricing = {
  id: number;
  title: string;
  description: string;
  offer: string[];
  is_featured: boolean;
};

type TPricingResponse = {
  status: boolean;
  statusCode: number;
  message: string;
  data: TPricing[];
};
