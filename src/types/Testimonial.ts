type TTestimonial = {
  id: number;
  name: string;
  profession: string;
  avatar_url: string;
  message: string;
  is_featured: boolean;
};

type TTestimonialResponse = {
  status: boolean;
  statusCode: number;
  message: string;
  data: TTestimonial[];
};
