import { LuUserRound, LuShoppingBag, LuSettings, LuLink } from "react-icons/lu";

export const navigation = [
  {
    label: "حسابي",
    href: "/account",
    icon: LuUserRound,
  },
  {
    label: "طلباتي",
    href: "/account/orders",
    icon: LuShoppingBag,
  },
  {
    label: "الإعدادات",
    href: "/account/settings",
    icon: LuSettings,
  },
  {
    label: "الحسابات المرتبطة",
    href: "/account/linked-accounts",
    icon: LuLink,
  },
];

export const accountCards = [
  {
    name: "account.accountDetails",
    desc: "account.accountDetailsDesc",
    path: "",
    icon: LuUserRound,
  },
  {
    name: "account.accountOrders",
    desc: "account.accountOrdersDesc",
    path: "",
    icon: LuShoppingBag,
  },
  {
    name: "account.accountSetting",
    desc: "account.accountSettingDesc",
    path: "",
    icon: LuSettings,
  },
];
