import API from "./../config/API";

export default class FixUtils {
  static fixImageURL(filePath) {
    return `${API.serverImagesURL}${filePath}`;
  }
}
