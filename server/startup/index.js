import Accounts from "./accounts";
import i18n from "./i18n";
import Inventory from "./inventory";
import Jobs from "./jobs";
import Orders from "./orders";
import Packages from "./packages";
import Registry from "./registry";
import Init from "./init";

export default function () {
  Accounts();
  i18n();
  Inventory();
  Jobs();
  Orders();
  Packages();
  Registry();
  Init();
}
