export const MENUITEMS = [
  {
    menutitle: "MAIN",
    Items: [
      {
        path: `/dashboard`,
        icon: "home",
        type: "link",
        active: true,
        title: "Dashboard",
      },
      {
       
        icon: "database",
        type: "sub",
        active: false,
        title: "Master",
        children: [
          {
            path: `/category`,
            type: "link",
            title: "category",
          },
          {
            path: `/product`,
            type: "link",
            title: "product",
          }
        ],
      },
    ],
  },
];
