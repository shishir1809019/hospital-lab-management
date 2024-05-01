export interface MenuItemTypes {
  key: string;
  label: string;
  isTitle?: boolean;
  icon?: string;
  url?: string;
  badge?: {
    variant: string;
    text: string;
  };
  parentKey?: string;
  target?: string;
  children?: MenuItemTypes[];
}

const MENU_ITEMS: MenuItemTypes[] = [
  {
    key: "dashboards",
    label: "Dashboards",
    isTitle: false,
    icon: "home",
    // badge: { variant: "success", text: "02" },
    url: "/dashboard/ecommerce",
  },
  { key: "apps", label: "Apps", isTitle: true },
  {
    key: "apps-profile",
    label: "Profile",
    isTitle: false,
    icon: "user",
    url: "/dashboard/edit-profile",
  },
  {
    key: "apps-test",
    label: "Tests",
    isTitle: false,
    icon: "thermometer",
    url: "/apps/test",
  },
  {
    key: "apps-culture",
    label: "Culture",
    isTitle: false,
    icon: "wind",
    url: "/apps/culture",
  },
  {
    key: "apps-culture-options",
    label: "Culture Options",
    isTitle: false,
    icon: "wind",
    url: "/apps/culture-option",
  },
  {
    key: "apps-invoice",
    label: "Invoices",
    isTitle: false,
    icon: "file-text",
    url: "/apps/invoice",
  },

  {
    key: "apps-branches",
    label: "Branches",
    isTitle: false,
    icon: "git-branch",
    url: "/apps/branches",
  },
  {
    key: "apps-antiiotics",
    label: "Antibiotics",
    isTitle: false,
    icon: "award",
    url: "/apps/antibiotics",
  },
  // {
  //   key: "widgets",
  //   label: "Widgets",
  //   isTitle: false,
  //   icon: "gift",
  //   url: "/components/widgets",
  // },
];

const HORIZONTAL_MENU_ITEMS: MenuItemTypes[] = [
  {
    key: "dashboards",
    icon: "home",
    label: "Dashboards",
    isTitle: true,
    children: [
      {
        key: "ds-ecommerce",
        label: "Ecommerce",
        url: "/dashboard/ecommerce",
        parentKey: "dashboards",
      },
    ],
  },
  {
    key: "apps",
    icon: "layers",
    label: "Apps",
    isTitle: true,
  },
  {
    key: "components",
    icon: "briefcase",
    label: "Components",
    isTitle: true,
  },
  {
    key: "extra-pages",
    label: "Pages",
    isTitle: false,
    icon: "file-text",
  },
];

const TWO_COl_MENU_ITEMS: MenuItemTypes[] = [
  {
    key: "dashboards",
    label: "Dashboards",
    isTitle: true,
    icon: "home",
    children: [
      {
        key: "ds-ecommerce",
        label: "Ecommerce",
        url: "/dashboard/ecommerce",
        parentKey: "dashboards",
      },
    ],
  },
  {
    key: "apps",
    icon: "grid",
    label: "Apps",
    isTitle: true,
  },
  {
    key: "extra-pages",
    icon: "file-text",
    label: "Pages",
    isTitle: true,
  },
  {
    key: "components",
    icon: "package",
    label: "Components",
    isTitle: true,
  },
  // {
  //   key: "widgets",
  //   label: "Widgets",
  //   isTitle: false,
  //   icon: "gift",
  //   url: "/components/widgets",
  // },
];

export { MENU_ITEMS, TWO_COl_MENU_ITEMS, HORIZONTAL_MENU_ITEMS };
