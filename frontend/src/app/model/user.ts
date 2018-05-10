export class User {
  username: String;
  password: String;
  email: String;
  address: String;

  constructor( userData: {} = {} ) {
    if (userData) {
      for (const k of Object.keys(userData)) {
        this[k] = userData[k];
      }
    }
  }
}
