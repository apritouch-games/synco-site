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
  },
  {
    id: "xachbar",
    name: "Xachbar",
    logo: "images/games/xachbar/logo.png",
    icon: "images/games/xachbar/logo_icon.png",
    googlePlayUrl: "#",
    appStoreUrl: "https://apps.apple.com/us/app/xachbar/id6755462430",
    pageUrl: "games/xachbar.html",
    status: "available",
    i18n: {
      en: {
        tagline: "Solve Armenian crosswords. Discover new words.",
        description: "A simple and fun Armenian crossword puzzle game with relaxing levels, helpful hints and daily progress.",
        pageDescription: "Xachbar is a simple and fun Armenian crossword puzzle game. Solve levels, discover new words, use helpful hints and enjoy a relaxing brain challenge with daily progress."
      },
      hy: {
        tagline: "Լուծիր հայկական խաչբառեր։ Բացահայտիր նոր բառեր։",
        description: "Պարզ ու զվարճալի հայկական խաչբառերի խաղ՝ հանգիստ մակարդակներով, օգտակար հուշումներով և ամենօրյա առաջընթացով։",
        pageDescription: "Xachbar-ը պարզ ու զվարճալի հայկական խաչբառերի խաղ է։ Լուծեք մակարդակները, բացահայտեք նոր բառեր, օգտվեք հուշումներից և վայելեք հանգիստ մտավոր մարտահրավեր՝ ամենօրյա առաջընթացով։"
      },
      ru: {
        tagline: "Решайте армянские кроссворды. Открывайте новые слова.",
        description: "Простая и увлекательная игра с армянскими кроссвордами, подсказками и ежедневным прогрессом.",
        pageDescription: "Xachbar — простая и увлекательная игра с армянскими кроссвордами. Решайте уровни, открывайте новые слова, используйте подсказки и наслаждайтесь спокойной тренировкой для ума с ежедневным прогрессом."
      }
    }
  }
];

window.games = games;
window.ApriTouchGames = games;
