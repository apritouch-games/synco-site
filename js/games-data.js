const games = [
  {
    id: "synco",
    name: "Synco",
    logo: "images/games/synco/logo.png",
    icon: "images/games/synco/logo_icon.png",
    // TODO: Replace with real Google Play URL
    googlePlayUrl: "#",
    // TODO: Replace with real App Store URL
    appStoreUrl: "#",
    pageUrl: "games/synco.html",
    status: "available",
    i18n: {
      en: {
        tagline: "Match minds. Guess pairs. Score together.",
        description: "A fun mind-matching word game where one player creates word pairs and others try to guess them.",
        pageDescription: "A fun mind-matching word game where one player creates word pairs and others try to guess them."
      },
      hy: {
        tagline: "Համընկնեցրու մտքերը։ Գուշակիր զույգերը։ Վաստակիր միավորներ։",
        description: "Զվարճալի մտքերի համընկնման բառախաղ, որտեղ մեկ խաղացողը կազմում է բառերի զույգեր, իսկ մյուսները փորձում են գուշակել դրանք։",
        pageDescription: "Զվարճալի մտքերի համընկնման բառախաղ, որտեղ մեկ խաղացողը կազմում է բառերի զույգեր, իսկ մյուսները փորձում են գուշակել դրանք։"
      },
      ru: {
        tagline: "Совпадайте мыслями. Угадывайте пары. Набирайте очки.",
        description: "Весёлая игра на совпадение мыслей, где один игрок составляет пары слов, а остальные пытаются их угадать.",
        pageDescription: "Весёлая игра на совпадение мыслей, где один игрок составляет пары слов, а остальные пытаются их угадать."
      }
    }
  }
];

window.games = games;
window.ApriTouchGames = games;
