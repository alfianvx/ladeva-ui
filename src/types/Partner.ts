type TPartner = {
  id: number;
  name: string;
  logo_url: string;
};

type TPartnerResponse = {
  status: boolean;
  statusCode: number;
  message: string;
  data: TPartner[];
};
