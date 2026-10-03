const games = [
  {
    id: "synco",
    name: "Synco",
    logo: "images/games/synco/logo.png",
    icon: "images/games/synco/logo_icon.png",
    // TODO: Replace with real Google Play URL
    googlePlayUrl: "#",
    appStoreUrl: "https://apps.apple.com/us/app/synco-party/id6798563422",
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
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.apritouch.xachbar",
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
  },
  {
    id: "citatner",
    name: "Citatner",
    logo: "images/games/citatner/logo.png",
    icon: "images/games/citatner/logo.png",
    googlePlayUrl: "#",
    appStoreUrl: "#",
    pageUrl: "games/citatner.html",
    status: "new",
    i18n: {
      en: {
        tagline: "Solve words. Reveal letters. Discover the quote.",
        description: "A relaxing word puzzle game where every solved clue helps reveal a hidden quotation.",
        pageDescription: "Solve clue words, reveal matching numbered letters and uncover hidden quotes across more than 2,700 puzzles."
      },
      hy: {
        tagline: "Գուշակեք բառերը։ Բացահայտեք տառերը։ Վերականգնեք ցիտատը։",
        description: "Հանգիստ բառախաղ, որտեղ յուրաքանչյուր գուշակված բառ օգնում է բացահայտել թաքնված ցիտատը։",
        pageDescription: "Գուշակեք հուշումներով բառերը, բացեք համարներով կապված տառերը և վերականգնեք թաքնված ցիտատները՝ ավելի քան 2700 հանելուկներում։"
      },
      ru: {
        tagline: "Разгадайте слова. Откройте буквы. Восстановите цитату.",
        description: "Спокойная словесная головоломка, где каждое разгаданное слово помогает восстановить скрытую цитату.",
        pageDescription: "Разгадывайте слова по подсказкам, открывайте связанные по номерам буквы и восстанавливайте скрытые цитаты в более чем 2700 головоломках."
      }
    }
  }
];

window.games = games;
window.ApriTouchGames = games;
