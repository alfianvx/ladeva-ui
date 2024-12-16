type TService = {
  id: number;
  title: string;
  description: string;
  icon_url: string;
};

type TServiceResponse = {
  status: boolean;
  statusCode: number;
  message: string;
  data: TService[];
};
