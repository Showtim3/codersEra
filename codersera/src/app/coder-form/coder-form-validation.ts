export default class CoderFormValidation {

 static shouldHaveAtleastFourTech(str : string) {
    return str.split(',').length >= 4;
  }
  static isValidUrl(str : string){
   let regex = "^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&'\\(\\)\\*\\+,;=.]+$";

   return str.match(regex);
  }
}
//https://www.regextester.com/94502
