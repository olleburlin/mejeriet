export const MenuSe = {
  name: "Huvudmeny",
  items: [
    {
      title: "Tjänster",
      route: null,
      subMenu: [
        {
          subMenuGroup: {
            name: "Producent och Investerare",
            children: [
              {
                title: "Intäktsförvaltning",
                route: "/tjanster/intaktsforvaltning/",
              },
              { title: "PPA", route: "/tjanster/ppa/" },
              {
                title: "Investeringsrådgivning",
                route: "/tjanster/radgivning/",
              },
            ],
          },
        },
        {
          subMenuGroup: {
            name: "Industri och elkonsument",
            children: [
              {
                title: "100% Förnybar El",
                route: "/tjanster/100-fornybar-el/",
              },
              {
                title: "Corporate PPA",
                route: "/tjanster/corporate-ppa/",
              },
            ],
          },
        },
        {
          subMenuGroup: {
            name: "För bolag med exponering mot EU ETS",
            children: [
              {
                title: "Bodecker Carbon",
                route: "https://www.bodeckercarbon.com",
              },
            ],
          },
        },
      ],
    },
    {
      title: "Rapporter",
      route: "/rapporter/",
      subMenu: null,
    },
    {
      title: "Nyheter",
      route: "https://nyheter.bodeckerpartners.com/",
      subMenu: null,
    },
    {
      title: "Om oss",
      route: "/om-oss",
      subMenu: null,
    },
  ],
}
