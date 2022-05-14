export default interface ServicesType {
  id: number;
  name: string;
  title: string;
  desc: string;
  video?: string;
  photo: string;
  longDesc: string;
  images: {
    id: number;
    url: string;
  }[];
}
