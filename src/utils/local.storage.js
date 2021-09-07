const SELECTED_CAPITAL = "selected_capital";

class LocalStorageUtils {
  /**
   * Get last selected capital
   * @returns String
   */
  static getSelectedCapital = () => {
    return window.localStorage.getItem(SELECTED_CAPITAL);
  };
  /**
   * returns null
   * @param {String} val selected capital`
   */
  static setSelectedCapital = (val) => {
    window.localStorage.setItem(SELECTED_CAPITAL, `${val}`);
  };
}
export default LocalStorageUtils;
