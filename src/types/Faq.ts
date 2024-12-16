type TFaq = {
  id: number;
  question: string;
  answer: string;
};

type TFaqResponse = {
  status: boolean;
  statusCode: number;
  message: string;
  data: TFaq[];
};
