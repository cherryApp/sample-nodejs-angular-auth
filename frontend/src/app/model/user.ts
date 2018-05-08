export class User {
  username: String;
  password: String;
  email: String;
  address: String;

  constructor( userData: {} = {} ) {
    for (let k in userData) {
      this[k] = userData[k];
    }
  }
}
