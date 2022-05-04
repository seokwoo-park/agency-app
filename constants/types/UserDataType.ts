export default interface UserDataType {
  login: {
    uuid: string;
  };
  picture: {
    medium: string;
  };
  name: {
    first: string;
    last: string;
  };
  location: {
    country: string;
  };
}
