export interface Club {
  name: string;
  blurbs: string[];
  address: string;
  mapUrl: string;
  meetings: Meeting[];
  fthSubdomain: string;
}

export interface Meeting {
  date: string;
}
