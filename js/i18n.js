(function () {
  const supportedLanguages = ["en", "hy", "ru"];
  const storageKey = "apritouch.language";
  let currentLanguage = detectLanguage();
  const defaultSiteConfig = {
    brandName: "ApriTouch",
    legalName: {
      en: "",
      hy: "",
      ru: ""
    },
    legalForm: "ԱՁ",
    supportEmail: ""
  };

  function getSiteConfig() {
    return Object.assign({}, defaultSiteConfig, window.ApriTouchConfig || {});
  }

  function getLocalizedConfigValue(value, language) {
    if (value && typeof value === "object") {
      return value[language] || value.en || value.hy || value.ru || "";
    }

    return value || "";
  }

  function getTemplateVars(vars) {
    const config = getSiteConfig();
    const legalForm = config.legalForm || "";
    const supportEmail = config.supportEmail || "";
    const legalNameEn = getLocalizedConfigValue(config.legalName, "en");
    const legalNameHy = getLocalizedConfigValue(config.legalName, "hy");
    const legalNameRu = getLocalizedConfigValue(config.legalName, "ru");
    const legalName = getLocalizedConfigValue(config.legalName, currentLanguage);
    const legalFormValue = [legalForm, legalNameHy].filter(Boolean).join(" ");
    const baseVars = {
      brandName: config.brandName || "ApriTouch",
      legalName,
      legalForm,
      legalNameEn,
      legalNameHy,
      legalNameRu,
      supportEmail,
      legalEntityEn: legalNameEn ? `Individual Entrepreneur ${legalNameEn}` : "Individual Entrepreneur",
      legalEntityHy: legalFormValue,
      legalEntityRu: legalNameRu ? `индивидуальный предприниматель ${legalNameRu}` : "индивидуальный предприниматель",
      legalFormValue
    };

    return Object.assign(baseVars, vars || {});
  }

  function formatTemplate(value, vars) {
    const templateVars = getTemplateVars(vars);
    return String(value).replace(/\{(\w+)\}/g, (_, key) => {
      return Object.prototype.hasOwnProperty.call(templateVars, key) ? templateVars[key] : "";
    });
  }

  const translations = {
    en: {
      meta: {
        index: {
          title: "ApriTouch Games - Simple Mobile Games",
          description: "ApriTouch Games creates simple, fun and accessible mobile games for quick and enjoyable play sessions."
        },
        support: {
          title: "Support - ApriTouch Games",
          description: "Contact ApriTouch Games support for questions, suggestions, bug reports, and privacy-related requests."
        },
        privacy: {
          title: "Privacy Policy - ApriTouch Games",
          description: "Privacy Policy for mobile games published under the ApriTouch brand."
        },
        terms: {
          title: "Terms and Conditions - ApriTouch Games",
          description: "Terms and Conditions for mobile games published under the ApriTouch brand."
        },
        synco: {
          title: "Synco - ApriTouch",
          description: "Synco is a fun mind-matching word game published under the ApriTouch brand."
        },
        xachbar: {
          title: "Xachbar - Armenian Crossword Game | ApriTouch",
          description: "Solve Armenian crossword puzzles, discover new words, use hints and track your daily progress in Xachbar."
        }
      },
      common: {
        languageSwitcher: "Language",
        openMenu: "Open menu",
        closeMenu: "Close menu",
        navGames: "Games",
        navSupport: "Support",
        navPrivacy: "Privacy",
        navTerms: "Terms",
        navContact: "Contact",
        footerTagline: "Simple, fun and accessible mobile games for everyone.",
        footerLegal: "ApriTouch is a brand operated by {legalEntityEn}.",
        footerCopyright: "© 2026 ApriTouch. All rights reserved.",
        footerBrand: "Brand: ApriTouch",
        supportEmailAddress: "{supportEmail}",
        supportEmailHref: "mailto:{supportEmail}",
        privacyPolicy: "Privacy Policy",
        termsAndConditions: "Terms and Conditions",
        supportEmail: "Support",
        privacyEmail: "Privacy",
        googlePlay: "Google Play",
        appStore: "App Store",
        learnMore: "Learn More",
        learnMoreAbout: "Learn more about {name}",
        available: "available",
        brandLabel: "Brand",
        developerLabel: "Developer",
        legalFormLabel: "Armenian legal form",
        countryLabel: "Country",
        supportEmailLabel: "Support email",
        privacyEmailLabel: "Privacy email",
        developerValue: "{legalEntityEn}",
        legalFormValue: "{legalFormValue}",
        countryValue: "Armenia"
      },
      index: {
        eyebrow: "Mobile games brand",
        heroTitle: "ApriTouch Games",
        heroSubtitle: "Simple, fun and accessible mobile games for everyone.",
        heroText: "We create lightweight mobile games designed for quick, enjoyable and easy-to-understand gameplay.",
        heroCardCrossword: "Crossword",
        viewGames: "View Games",
        gamesTitle: "Our Games",
        gamesLead: "A growing collection of simple and fun mobile games by ApriTouch.",
        aboutEyebrow: "About",
        aboutTitle: "About ApriTouch",
        aboutText: "ApriTouch is a mobile games brand operated by {legalEntityEn}. We create mobile games focused on simple mechanics, clean design and enjoyable gameplay.",
        contactTitle: "Contact",
        contactText: "For support, questions, bug reports or privacy-related requests, contact us by email."
      },
      support: {
        eyebrow: "Help",
        title: "Support",
        text: "If you have questions, suggestions, or want to report a bug, you can contact us by email.",
        gamesCovered: "Games covered",
        policies: "Policies",
        footerText: "Support for games published under the ApriTouch brand."
      },
      synco: {
        eyebrow: "ApriTouch game",
        aboutTitle: "About the game",
        aboutText: "Synco is a mind-matching word game: one player creates noun + adjective pairs, and the others try to guess them.",
        featureQuickTitle: "Match minds",
        featureQuickText: "Think like the player who made the pairs.",
        featureSimpleTitle: "Guess pairs",
        featureSimpleText: "Find noun + adjective matches before the round ends.",
        featureCleanTitle: "Score together",
        featureCleanText: "Each guessed pair gives 1 point.",
        rulesTitle: "Game Rules",
        rulesIntro: "Synco is a mind-matching game. One player creates word pairs: noun + adjective. The others try to guess those pairs.",
        rulesPointNote: "Each guessed pair gives 1 point.",
        circleTitle: "Circle",
        circleSubtitle: "Players work together against the game.",
        circleStepOne: "A player takes the phone and makes pairs.",
        circleStepTwo: "The other players do not look.",
        circleStepThree: "Then the others try to guess their pairs.",
        circleStepFour: "Each guessed pair adds points to the shared score.",
        circleStepFive: "After the round, the turn passes to the next player.",
        circleStepSix: "You win when the shared score reaches the goal.",
        circleExampleTitle: "Example",
        circleExampleText: "Player 1 made 5 pairs.\nThe others guessed 3 pairs.\nShared score: +3 points.\nNext turn — Player 2.",
        teamsTitle: "Teams",
        teamsSubtitle: "Teams compete against each other.",
        teamsStepOne: "The team chooses a player who will make pairs.",
        teamsStepTwo: "The others do not look.",
        teamsStepThree: "Then players from the same team try to guess their pairs.",
        teamsStepFour: "The team gets points for guessed pairs.",
        teamsStepFive: "After the round, the turn passes to the next team.",
        teamsStepSix: "The first team to reach the target score wins.",
        teamsExampleTitle: "Example",
        teamsExampleText: "Team 1 made 5 pairs.\nTeam 1 guessed 3 pairs.\nTeam 1 gets +3 points.\nNext turn — Team 2.",
        victoryNote: "Victory comes when the point goal is reached.",
        screenshotsTitle: "Screenshots",
        screenshotsLead: "A preview of Synco gameplay on mobile.",
        screenshotOne: "Screenshot 1",
        screenshotTwo: "Screenshot 2",
        screenshotThree: "Screenshot 3",
        downloadTitle: "Download Synco",
        downloadEyebrow: "Download",
        downloadLead: "Synco is free to play and may display advertisements.",
        supportTitle: "Support",
        supportText: "For questions, suggestions, bug reports or privacy-related requests, use the ApriTouch support and legal pages.",
        footerText: "Synco is a mind-matching word game published under the ApriTouch brand."
      },
      xachbar: {
        eyebrow: "ApriTouch game",
        aboutTitle: "About the game",
        aboutText: "Xachbar is a simple and fun Armenian crossword puzzle game. Solve levels, discover new words and enjoy a relaxing challenge for your mind.",
        featureWordsTitle: "Discover words",
        featureWordsText: "Grow your Armenian vocabulary as you solve each crossword.",
        featureHintsTitle: "Use helpful hints",
        featureHintsText: "Get a little help when a difficult word slows you down.",
        featureProgressTitle: "Keep your progress",
        featureProgressText: "Complete levels, earn stars and follow your daily progress.",
        guideTitle: "How to play",
        guideIntro: "Choose a crossword, solve its Armenian words and continue through the map at your own pace.",
        guideNote: "Every completed crossword moves your progress forward.",
        solveTitle: "Solve a crossword",
        solveSubtitle: "Fill the grid one Armenian word at a time.",
        solveStepOne: "Choose an available level on the map.",
        solveStepTwo: "Read the clues and inspect the crossword grid.",
        solveStepThree: "Enter the Armenian words that match the clues.",
        solveStepFour: "Use a hint if you need help with a difficult answer.",
        solveStepFive: "Complete the grid and continue to the next challenge.",
        progressTitle: "Build your progress",
        progressSubtitle: "Return every day and keep discovering words.",
        progressStepOne: "Earn stars by completing crossword levels.",
        progressStepTwo: "Open new challenges as you move through the map.",
        progressStepThree: "Collect coins and spend them on helpful hints.",
        progressStepFour: "Track your results and daily activity.",
        progressStepFive: "Play at your own pace and improve your vocabulary.",
        screenshotsTitle: "Screenshots",
        screenshotsLead: "A preview of Xachbar gameplay on iPhone.",
        screenshotOne: "Home screen",
        screenshotTwo: "Crossword map",
        screenshotThree: "Profile and characters",
        downloadEyebrow: "Download",
        downloadTitle: "Download Xachbar",
        downloadLead: "Xachbar is available on the App Store. The game is free to play and may display advertisements or offer optional in-app purchases.",
        supportTitle: "Support",
        supportText: "For questions, suggestions, bug reports or privacy-related requests, use the ApriTouch support and legal pages."
      },
      privacy: {
        title: "Privacy Policy",
        eyebrow: "Legal",
        lastUpdated: "Last updated: 16 August 2026",
        footerText: "Privacy information for games published under the ApriTouch brand.",
        sections: [
          {
            heading: "1. Who we are",
            paragraphs: [
              "This Privacy Policy applies to mobile games published under the ApriTouch brand.",
              "Brand: ApriTouch\nDeveloper: {legalEntityEn}\nArmenian legal form: {legalFormValue}\nCountry: Armenia\nContact: {supportEmail}"
            ]
          },
          {
            heading: "2. Games covered by this policy",
            paragraphs: ["This policy applies to our mobile games, including:"],
            gamesList: true,
            after: "This list may be updated when new games are published under the ApriTouch brand."
          },
          {
            heading: "3. Data we do not directly collect",
            paragraphs: ["Our games do not require users to create an account. We do not directly collect names, email addresses, phone numbers, passwords, payment card information or precise location data inside our games."]
          },
          {
            heading: "4. Advertising and third-party SDKs",
            paragraphs: [
              "Our games are free to play and may display advertisements. Advertisements may be provided by third-party advertising partners.",
              "These partners may collect or receive certain technical data, such as:"
            ],
            list: ["device information;", "advertising identifiers;", "IP address;", "approximate location derived from IP address;", "app interactions;", "ad views and clicks;", "diagnostic and technical information."]
          },
          {
            heading: "5. How data may be used",
            paragraphs: ["This data may be used to:"],
            list: ["show advertisements;", "measure ad performance;", "prevent fraud and invalid traffic;", "limit ad frequency;", "improve technical stability;", "maintain and improve our games."]
          },
          {
            heading: "6. Third-party services",
            paragraphs: ["Our games may use third-party services such as:"],
            list: ["Unity Ads, if enabled", "Google AdMob, if enabled", "Firebase / Crashlytics, if enabled", "Google Play Services, if enabled", "Apple services, if published on the App Store"],
            todo: "TODO: Remove services that are not used before publishing.",
            after: "Each third-party service processes data according to its own privacy policy."
          },
          {
            heading: "7. In-app purchases",
            paragraphs: ["Some of our games may offer optional in-app purchases or subscriptions. Payments are processed by the applicable platform provider, such as the Apple App Store or Google Play. We do not receive or store full payment card information."]
          },
          {
            heading: "8. Children's privacy",
            paragraphs: ["Our games are intended for a general audience. We do not knowingly collect personal information from children. If a parent or guardian believes that a child has provided personal information, they may contact us at {supportEmail}."]
          },
          {
            heading: "9. Data retention and deletion",
            paragraphs: ["We do not directly maintain user accounts. Users may contact us at {supportEmail} to ask privacy-related questions or request deletion of data where applicable."]
          },
          {
            heading: "10. Data sharing",
            paragraphs: ["We do not sell personal data. Technical data may be processed by advertising and analytics partners as described in this policy."]
          },
          {
            heading: "11. Security",
            paragraphs: ["We take reasonable measures to protect information related to our games and website. However, no method of transmission or storage is completely secure."]
          },
          {
            heading: "12. Changes to this policy",
            paragraphs: ["We may update this Privacy Policy from time to time. The updated version will be posted on this page with a new Last updated date."]
          },
          {
            heading: "13. Contact",
            paragraphs: ["For privacy-related questions, contact us at: {supportEmail}"]
          }
        ]
      },
      terms: {
        title: "Terms and Conditions",
        eyebrow: "Legal",
        lastUpdated: "Last updated: 16 August 2026",
        footerText: "Terms for games published under the ApriTouch brand.",
        sections: [
          {
            heading: "1. Introduction",
            paragraphs: ["These Terms and Conditions apply to mobile games published under the ApriTouch brand.", "ApriTouch is a brand operated by {legalEntityEn}.", "By downloading, accessing or using our games, you agree to these Terms."]
          },
          {
            heading: "2. Games covered",
            paragraphs: ["These Terms apply to our mobile games, including:"],
            gamesList: true,
            after: "This list may be updated when new games are published."
          },
          {
            heading: "3. Use of our games",
            paragraphs: ["Our games are provided for personal, non-commercial entertainment use.", "You may not:"],
            list: ["copy, modify or resell our games;", "reverse engineer or attempt to extract source code;", "hack, cheat, exploit or interfere with the games;", "use the games for unlawful purposes;", "misuse advertisements, SDKs or platform services."]
          },
          {
            heading: "4. Free games and ads",
            paragraphs: ["Our games are free to play and may display advertisements. Advertisements may be provided by third-party advertising partners."]
          },
          {
            heading: "5. In-app purchases",
            paragraphs: ["Some games may offer optional in-app purchases or subscriptions. Prices are shown in the relevant platform store before purchase. Payments, refunds and purchase management are handled under the rules of the Apple App Store, Google Play or another applicable platform provider."]
          },
          {
            heading: "6. Third-party services",
            paragraphs: ["Our games may use third-party services, including advertising, analytics, crash reporting, Google Play services or Apple services. These services may have their own terms and policies."]
          },
          {
            heading: "7. Availability and updates",
            paragraphs: ["We may update, change, suspend or discontinue any game or feature at any time."]
          },
          {
            heading: "8. Disclaimer",
            paragraphs: ["Our games are provided as is without warranties of any kind. We do our best to provide a stable and enjoyable experience, but we do not guarantee that the games will always be available, error-free or compatible with every device."]
          },
          {
            heading: "9. Limitation of liability",
            paragraphs: ["To the maximum extent permitted by applicable law, ApriTouch and the individual entrepreneur operating the ApriTouch brand are not responsible for indirect, incidental or consequential damages arising from the use of our games."]
          },
          {
            heading: "10. Contact",
            paragraphs: ["For questions about these Terms, contact us at: {supportEmail}"]
          }
        ]
      }
    },
    hy: {
      meta: {
        index: {
          title: "ApriTouch խաղեր - պարզ բջջային խաղեր",
          description: "ApriTouch խաղերը պարզ, զվարճալի և հասանելի բջջային խաղեր են արագ ու հաճելի խաղային պահերի համար:"
        },
        support: {
          title: "Աջակցություն - ApriTouch խաղեր",
          description: "Կապվեք ApriTouch խաղերի աջակցության հետ հարցերի, առաջարկների, սխալների և գաղտնիության հարցումների համար:"
        },
        privacy: {
          title: "Գաղտնիության քաղաքականություն - ApriTouch խաղեր",
          description: "Գաղտնիության քաղաքականություն ApriTouch բրենդի ներքո հրապարակվող բջջային խաղերի համար:"
        },
        terms: {
          title: "Պայմաններ - ApriTouch խաղեր",
          description: "Պայմաններ ApriTouch բրենդի ներքո հրապարակվող բջջային խաղերի համար:"
        },
        synco: {
          title: "Synco - ApriTouch",
          description: "Synco-ն զվարճալի մտքերի համընկնման բառախաղ է ApriTouch բրենդի ներքո:"
        },
        xachbar: {
          title: "Xachbar - հայկական խաչբառերի խաղ | ApriTouch",
          description: "Լուծեք հայկական խաչբառեր, բացահայտեք նոր բառեր, օգտվեք հուշումներից և հետևեք ձեր ամենօրյա առաջընթացին Xachbar-ում:"
        }
      },
      common: {
        languageSwitcher: "Լեզու",
        openMenu: "Բացել մենյուն",
        closeMenu: "Փակել մենյուն",
        navGames: "Խաղեր",
        navSupport: "Աջակցություն",
        navPrivacy: "Գաղտնիություն",
        navTerms: "Պայմաններ",
        navContact: "Կապ",
        footerTagline: "Պարզ, զվարճալի և հասանելի բջջային խաղեր բոլորի համար:",
        footerLegal: "ApriTouch-ը բրենդ է, որը գործում է {legalEntityHy}-ի կողմից:",
        footerCopyright: "© 2026 ApriTouch. Բոլոր իրավունքները պաշտպանված են:",
        footerBrand: "Բրենդ՝ ApriTouch",
        supportEmailAddress: "{supportEmail}",
        supportEmailHref: "mailto:{supportEmail}",
        privacyPolicy: "Գաղտնիության քաղաքականություն",
        termsAndConditions: "Պայմաններ",
        supportEmail: "Աջակցություն",
        privacyEmail: "Գաղտնիություն",
        googlePlay: "Google Play",
        appStore: "App Store",
        learnMore: "Իմանալ ավելին",
        learnMoreAbout: "Իմանալ ավելին {name}-ի մասին",
        available: "հասանելի",
        brandLabel: "Բրենդ",
        developerLabel: "Մշակող",
        legalFormLabel: "Հայաստանյան իրավական ձև",
        countryLabel: "Երկիր",
        supportEmailLabel: "Աջակցության էլ. փոստ",
        privacyEmailLabel: "Գաղտնիության էլ. փոստ",
        developerValue: "{legalEntityHy}",
        legalFormValue: "{legalFormValue}",
        countryValue: "Հայաստան"
      },
      index: {
        eyebrow: "Բջջային խաղերի բրենդ",
        heroTitle: "ApriTouch խաղեր",
        heroSubtitle: "Պարզ, զվարճալի և հասանելի բջջային խաղեր բոլորի համար:",
        heroText: "Մենք ստեղծում ենք թեթև բջջային խաղեր՝ նախատեսված արագ, հաճելի և հեշտ հասկանալի խաղային փորձի համար:",
        heroCardCrossword: "Խաչբառ",
        viewGames: "Դիտել խաղերը",
        gamesTitle: "Մեր խաղերը",
        gamesLead: "ApriTouch-ի պարզ և զվարճալի բջջային խաղերի աճող հավաքածու:",
        aboutEyebrow: "Մասին",
        aboutTitle: "ApriTouch-ի մասին",
        aboutText: "ApriTouch-ը բջջային խաղերի բրենդ է, որը գործում է {legalEntityHy}-ի կողմից: Մենք ստեղծում ենք խաղեր՝ կենտրոնանալով պարզ մեխանիկայի, մաքուր դիզայնի և հաճելի խաղային փորձի վրա:",
        contactTitle: "Կապ",
        contactText: "Աջակցության, հարցերի, սխալների կամ գաղտնիության հետ կապված հարցումների համար կապվեք մեզ հետ էլ. փոստով:"
      },
      support: {
        eyebrow: "Օգնություն",
        title: "Աջակցություն",
        text: "Եթե ունեք հարցեր, առաջարկներ կամ ցանկանում եք հայտնել սխալի մասին, կարող եք կապվել մեզ հետ էլ. փոստով:",
        gamesCovered: "Խաղեր, որոնց վերաբերում է էջը",
        policies: "Քաղաքականություններ",
        footerText: "Աջակցություն ApriTouch բրենդի ներքո հրապարակվող խաղերի համար:"
      },
      synco: {
        eyebrow: "ApriTouch խաղ",
        aboutTitle: "Խաղի մասին",
        aboutText: "Synco-ն մտքերի համընկնման բառախաղ է. մեկ խաղացողը կազմում է գոյական + ածական զույգեր, իսկ մյուսները փորձում են գուշակել դրանք:",
        featureQuickTitle: "Համընկնեցրու մտքերը",
        featureQuickText: "Մտածիր այնպես, ինչպես զույգերը կազմող խաղացողը:",
        featureSimpleTitle: "Գուշակիր զույգերը",
        featureSimpleText: "Գտիր գոյական + ածական համընկնումները մինչ ռաունդի ավարտը:",
        featureCleanTitle: "Վաստակիր միավորներ",
        featureCleanText: "Յուրաքանչյուր գուշակված զույգը տալիս է 1 միավոր:",
        rulesTitle: "Խաղի կանոններ",
        rulesIntro: "Synco-ն մտքերի համընկնման խաղ է։ Մեկ խաղացողը կազմում է բառերի զույգեր՝ գոյական + ածական։ Մյուսները փորձում են գուշակել այդ զույգերը։",
        rulesPointNote: "Յուրաքանչյուր գուշակված զույգը տալիս է 1 միավոր։",
        circleTitle: "Շրջանով",
        circleSubtitle: "Խաղացողները միասին խաղում են խաղի դեմ։",
        circleStepOne: "Խաղացողը վերցնում է հեռախոսը և կազմում զույգեր։",
        circleStepTwo: "Մյուս խաղացողները չեն նայում։",
        circleStepThree: "Հետո մյուսները փորձում են գուշակել նրա զույգերը։",
        circleStepFour: "Յուրաքանչյուր գուշակված զույգ միավորներ է ավելացնում ընդհանուր հաշվին։",
        circleStepFive: "Ռաունդից հետո հերթը անցնում է հաջորդ խաղացողին։",
        circleStepSix: "Հաղթում եք, երբ ընդհանուր հաշիվը հասնում է նպատակին։",
        circleExampleTitle: "Օրինակ",
        circleExampleText: "Խաղացող 1-ը կազմեց 5 զույգ։\nՄյուսները գուշակեցին 3 զույգ։\nԸնդհանուր հաշիվ՝ +3 միավոր։\nՀաջորդ հերթը՝ խաղացող 2։",
        teamsTitle: "Թիմեր",
        teamsSubtitle: "Թիմերը մրցում են միմյանց դեմ։",
        teamsStepOne: "Թիմը ընտրում է մասնակցի, որը կկազմի զույգերը։",
        teamsStepTwo: "Մյուսները չեն նայում։",
        teamsStepThree: "Հետո նույն թիմի խաղացողները փորձում են գուշակել նրա զույգերը։",
        teamsStepFour: "Թիմը միավորներ է ստանում գուշակված զույգերի համար։",
        teamsStepFive: "Ռաունդից հետո հերթը անցնում է հաջորդ թիմին։",
        teamsStepSix: "Հաղթում է այն թիմը, որն առաջինը հավաքում է անհրաժեշտ միավորները։",
        teamsExampleTitle: "Օրինակ",
        teamsExampleText: "Թիմ 1-ը կազմեց 5 զույգ։\nԹիմ 1-ը գուշակեց 3 զույգ։\nԹիմ 1-ը ստանում է +3 միավոր։\nՀաջորդ հերթը՝ թիմ 2։",
        victoryNote: "Հաղթանակը գալիս է, երբ միավորների նպատակը հասնում է։",
        screenshotsTitle: "Սքրինշոթներ",
        screenshotsLead: "Synco-ի բջջային խաղային ընթացքի նախադիտում:",
        screenshotOne: "Սքրինշոթ 1",
        screenshotTwo: "Սքրինշոթ 2",
        screenshotThree: "Սքրինշոթ 3",
        downloadTitle: "Ներբեռնել Synco",
        downloadEyebrow: "Ներբեռնել",
        downloadLead: "Synco-ն անվճար խաղ է և կարող է ցուցադրել գովազդ:",
        supportTitle: "Աջակցություն",
        supportText: "Հարցերի, առաջարկների, սխալների կամ գաղտնիության հարցումների համար օգտագործեք ApriTouch-ի աջակցության և իրավական էջերը:",
        footerText: "Synco-ն մտքերի համընկնման բառախաղ է ApriTouch բրենդի ներքո:"
      },
      xachbar: {
        eyebrow: "ApriTouch խաղ",
        aboutTitle: "Խաղի մասին",
        aboutText: "Xachbar-ը պարզ ու զվարճալի հայկական խաչբառերի խաղ է։ Լուծեք մակարդակները, բացահայտեք նոր բառեր և վայելեք հանգիստ մտավոր մարտահրավեր։",
        featureWordsTitle: "Բացահայտեք նոր բառեր",
        featureWordsText: "Հարստացրեք ձեր հայերեն բառապաշարը՝ լուծելով յուրաքանչյուր խաչբառը։",
        featureHintsTitle: "Օգտվեք հուշումներից",
        featureHintsText: "Ստացեք փոքր օգնություն, երբ դժվար բառը խանգարում է առաջ շարժվել։",
        featureProgressTitle: "Պահպանեք առաջընթացը",
        featureProgressText: "Ավարտեք մակարդակները, վաստակեք աստղեր և հետևեք ամենօրյա առաջընթացին։",
        guideTitle: "Ինչպես խաղալ",
        guideIntro: "Ընտրեք խաչբառը, լուծեք հայկական բառերը և ձեր տեմպով առաջ շարժվեք քարտեզով։",
        guideNote: "Յուրաքանչյուր ավարտված խաչբառ առաջ է տանում ձեր առաջընթացը։",
        solveTitle: "Լուծեք խաչբառը",
        solveSubtitle: "Լրացրեք ցանցը՝ մեկական հայկական բառով։",
        solveStepOne: "Քարտեզից ընտրեք հասանելի մակարդակը։",
        solveStepTwo: "Կարդացեք հարցերը և ուսումնասիրեք խաչբառի ցանցը։",
        solveStepThree: "Մուտքագրեք հարցերին համապատասխանող հայկական բառերը։",
        solveStepFour: "Օգտվեք հուշումից, եթե դժվար պատասխանի համար օգնություն է պետք։",
        solveStepFive: "Լրացրեք ամբողջ ցանցը և անցեք հաջորդ մարտահրավերին։",
        progressTitle: "Առաջ շարժվեք",
        progressSubtitle: "Վերադարձեք ամեն օր և շարունակեք նոր բառեր բացահայտել։",
        progressStepOne: "Խաչբառերի մակարդակներն ավարտելով՝ վաստակեք աստղեր։",
        progressStepTwo: "Քարտեզով առաջ շարժվելիս բացեք նոր մարտահրավերներ։",
        progressStepThree: "Հավաքեք մետաղադրամներ և դրանք օգտագործեք օգտակար հուշումների համար։",
        progressStepFour: "Հետևեք ձեր արդյունքներին և ամենօրյա ակտիվությանը։",
        progressStepFive: "Խաղացեք ձեր տեմպով և հարստացրեք բառապաշարը։",
        screenshotsTitle: "Սքրինշոթներ",
        screenshotsLead: "Xachbar-ի խաղային ընթացքի նախադիտում iPhone-ում։",
        screenshotOne: "Գլխավոր էկրան",
        screenshotTwo: "Խաչբառերի քարտեզ",
        screenshotThree: "Պրոֆիլ և կերպարներ",
        downloadEyebrow: "Ներբեռնել",
        downloadTitle: "Ներբեռնել Xachbar",
        downloadLead: "Xachbar-ը հասանելի է App Store-ում։ Խաղն անվճար է և կարող է ցուցադրել գովազդ կամ առաջարկել կամընտիր ներծրագրային գնումներ։",
        supportTitle: "Աջակցություն",
        supportText: "Հարցերի, առաջարկների, սխալների կամ գաղտնիության հարցումների համար օգտագործեք ApriTouch-ի աջակցության և իրավական էջերը։"
      },
      privacy: {
        title: "Գաղտնիության քաղաքականություն",
        eyebrow: "Իրավական",
        lastUpdated: "Վերջին թարմացումը՝ 16 օգոստոսի 2026",
        footerText: "Գաղտնիության տեղեկություններ ApriTouch բրենդի ներքո հրապարակվող խաղերի համար:",
        sections: [
          {
            heading: "1. Ով ենք մենք",
            paragraphs: ["Այս Գաղտնիության քաղաքականությունը վերաբերում է ApriTouch բրենդի ներքո հրապարակվող բջջային խաղերին:", "Բրենդ՝ ApriTouch\nՄշակող՝ {legalEntityHy}\nՀայաստանյան իրավական ձև՝ {legalFormValue}\nԵրկիր՝ Հայաստան\nԿապ՝ {supportEmail}"]
          },
          {
            heading: "2. Խաղեր, որոնց վերաբերում է այս քաղաքականությունը",
            paragraphs: ["Այս քաղաքականությունը վերաբերում է մեր բջջային խաղերին, այդ թվում՝"],
            gamesList: true,
            after: "Ցանկը կարող է թարմացվել, երբ ApriTouch բրենդի ներքո հրապարակվեն նոր խաղեր:"
          },
          {
            heading: "3. Տվյալներ, որոնք մենք ուղղակիորեն չենք հավաքում",
            paragraphs: ["Մեր խաղերը չեն պահանջում հաշիվ ստեղծել: Մենք խաղերի ներսում ուղղակիորեն չենք հավաքում անուններ, էլ. փոստի հասցեներ, հեռախոսահամարներ, գաղտնաբառեր, վճարային քարտերի տվյալներ կամ ճշգրիտ գտնվելու վայրի տվյալներ:"]
          },
          {
            heading: "4. Գովազդ և երրորդ կողմի SDK-ներ",
            paragraphs: ["Մեր խաղերը անվճար են և կարող են ցուցադրել գովազդ: Գովազդը կարող է տրամադրվել երրորդ կողմի գովազդային գործընկերների կողմից:", "Այս գործընկերները կարող են հավաքել կամ ստանալ որոշ տեխնիկական տվյալներ, օրինակ՝"],
            list: ["սարքի տվյալներ;", "գովազդային նույնացուցիչներ;", "IP հասցե;", "IP հասցեից ստացված մոտավոր տեղադրություն;", "հավելվածի հետ փոխազդեցություններ;", "գովազդի դիտումներ և սեղմումներ;", "ախտորոշիչ և տեխնիկական տեղեկություններ:"]
          },
          {
            heading: "5. Ինչպես կարող են օգտագործվել տվյալները",
            paragraphs: ["Այս տվյալները կարող են օգտագործվել՝"],
            list: ["գովազդ ցուցադրելու համար;", "գովազդի արդյունավետությունը չափելու համար;", "խարդախությունը և անվավեր տրաֆիկը կանխելու համար;", "գովազդի հաճախականությունը սահմանափակելու համար;", "տեխնիկական կայունությունը բարելավելու համար;", "մեր խաղերը պահպանելու և բարելավելու համար:"]
          },
          {
            heading: "6. Երրորդ կողմի ծառայություններ",
            paragraphs: ["Մեր խաղերը կարող են օգտագործել երրորդ կողմի ծառայություններ, օրինակ՝"],
            list: ["Unity Ads, եթե միացված է", "Google AdMob, եթե միացված է", "Firebase / Crashlytics, եթե միացված է", "Google Play Services, եթե միացված է", "Apple services, եթե խաղը հրապարակված է App Store-ում"],
            todo: "TODO: Remove services that are not used before publishing.",
            after: "Յուրաքանչյուր երրորդ կողմի ծառայություն տվյալները մշակում է իր գաղտնիության քաղաքականության համաձայն:"
          },
          {
            heading: "7. Ներծրագրային գնումներ",
            paragraphs: ["Մեր որոշ խաղեր կարող են առաջարկել կամընտիր ներծրագրային գնումներ կամ բաժանորդագրություններ։ Վճարումները մշակում է համապատասխան հարթակը, օրինակ՝ Apple App Store-ը կամ Google Play-ը։ Մենք չենք ստանում և չենք պահպանում վճարային քարտերի ամբողջական տվյալները։"]
          },
          {
            heading: "8. Երեխաների գաղտնիություն",
            paragraphs: ["Մեր խաղերը նախատեսված են ընդհանուր լսարանի համար: Մենք գիտակցաբար չենք հավաքում երեխաների անձնական տեղեկություններ: Եթե ծնողը կամ խնամակալը կարծում է, որ երեխան տրամադրել է անձնական տեղեկություններ, կարող է կապվել մեզ հետ {supportEmail} հասցեով:"]
          },
          {
            heading: "9. Տվյալների պահպանում և ջնջում",
            paragraphs: ["Մենք ուղղակիորեն չենք պահպանում օգտատերերի հաշիվներ: Օգտատերերը կարող են կապվել մեզ հետ {supportEmail} հասցեով՝ գաղտնիության հարցերի կամ կիրառելի դեպքերում տվյալների ջնջման խնդրանքների համար:"]
          },
          {
            heading: "10. Տվյալների փոխանցում",
            paragraphs: ["Մենք չենք վաճառում անձնական տվյալներ: Տեխնիկական տվյալները կարող են մշակվել գովազդային և վերլուծական գործընկերների կողմից, ինչպես նկարագրված է այս քաղաքականությունում:"]
          },
          {
            heading: "11. Անվտանգություն",
            paragraphs: ["Մենք ձեռնարկում ենք ողջամիտ միջոցներ մեր խաղերին և կայքին վերաբերող տեղեկությունները պաշտպանելու համար: Սակայն փոխանցման կամ պահպանման ոչ մի մեթոդ լիովին անվտանգ չէ:"]
          },
          {
            heading: "12. Քաղաքականության փոփոխություններ",
            paragraphs: ["Մենք կարող ենք ժամանակ առ ժամանակ թարմացնել այս Գաղտնիության քաղաքականությունը: Թարմացված տարբերակը կհրապարակվի այս էջում՝ նոր թարմացման ամսաթվով:"]
          },
          {
            heading: "13. Կապ",
            paragraphs: ["Գաղտնիության հարցերի համար կապվեք մեզ հետ՝ {supportEmail}"]
          }
        ]
      },
      terms: {
        title: "Պայմաններ",
        eyebrow: "Իրավական",
        lastUpdated: "Վերջին թարմացումը՝ 16 օգոստոսի 2026",
        footerText: "Պայմաններ ApriTouch բրենդի ներքո հրապարակվող խաղերի համար:",
        sections: [
          {
            heading: "1. Ներածություն",
            paragraphs: ["Այս Պայմանները վերաբերում են ApriTouch բրենդի ներքո հրապարակվող բջջային խաղերին:", "ApriTouch-ը բրենդ է, որը գործում է {legalEntityHy}-ի կողմից:", "Ներբեռնելով, մուտք գործելով կամ օգտագործելով մեր խաղերը՝ դուք համաձայնում եք այս Պայմաններին:"]
          },
          {
            heading: "2. Խաղեր",
            paragraphs: ["Այս Պայմանները վերաբերում են մեր բջջային խաղերին, այդ թվում՝"],
            gamesList: true,
            after: "Ցանկը կարող է թարմացվել, երբ հրապարակվեն նոր խաղեր:"
          },
          {
            heading: "3. Խաղերի օգտագործում",
            paragraphs: ["Մեր խաղերը տրամադրվում են անձնական, ոչ առևտրային ժամանցային օգտագործման համար:", "Դուք չեք կարող՝"],
            list: ["պատճենել, փոփոխել կամ վերավաճառել մեր խաղերը;", "հակադարձ ինժեներական վերլուծություն կատարել կամ փորձել ստանալ սկզբնական կոդը;", "կոտրել, խաբել, շահագործել կամ խանգարել խաղերի աշխատանքին;", "օգտագործել խաղերը անօրինական նպատակներով;", "չարաշահել գովազդը, SDK-ները կամ հարթակների ծառայությունները:"]
          },
          {
            heading: "4. Անվճար խաղեր և գովազդ",
            paragraphs: ["Մեր խաղերը անվճար են և կարող են ցուցադրել գովազդ: Գովազդը կարող է տրամադրվել երրորդ կողմի գովազդային գործընկերների կողմից:"]
          },
          {
            heading: "5. Ներծրագրային գնումներ",
            paragraphs: ["Որոշ խաղեր կարող են առաջարկել կամընտիր ներծրագրային գնումներ կամ բաժանորդագրություններ։ Գները ցուցադրվում են համապատասխան հարթակի խանութում՝ գնումից առաջ։ Վճարումները, վերադարձները և գնումների կառավարումը կատարվում են Apple App Store-ի, Google Play-ի կամ համապատասխան այլ հարթակի կանոններով։"]
          },
          {
            heading: "6. Երրորդ կողմի ծառայություններ",
            paragraphs: ["Մեր խաղերը կարող են օգտագործել երրորդ կողմի ծառայություններ, այդ թվում՝ գովազդ, վերլուծություն, խափանումների հաշվետվություններ, Google Play ծառայություններ կամ Apple ծառայություններ: Այս ծառայությունները կարող են ունենալ իրենց պայմաններն ու քաղաքականությունները:"]
          },
          {
            heading: "7. Հասանելիություն և թարմացումներ",
            paragraphs: ["Մենք կարող ենք ցանկացած պահի թարմացնել, փոխել, կասեցնել կամ դադարեցնել ցանկացած խաղ կամ գործառույթ:"]
          },
          {
            heading: "8. Երաշխիքներից հրաժարում",
            paragraphs: ["Մեր խաղերը տրամադրվում են ինչպես կան՝ առանց որևէ երաշխիքի: Մենք ձգտում ենք ապահովել կայուն և հաճելի փորձ, բայց չենք երաշխավորում, որ խաղերը միշտ հասանելի, անսխալ կամ համատեղելի կլինեն բոլոր սարքերի հետ:"]
          },
          {
            heading: "9. Պատասխանատվության սահմանափակում",
            paragraphs: ["Կիրառելի օրենքով թույլատրված առավելագույն չափով ApriTouch-ը և ApriTouch բրենդը վարող անհատ ձեռնարկատերը պատասխանատվություն չեն կրում մեր խաղերի օգտագործումից առաջացող անուղղակի, պատահական կամ հետևանքային վնասների համար:"]
          },
          {
            heading: "10. Կապ",
            paragraphs: ["Այս Պայմանների վերաբերյալ հարցերի համար կապվեք մեզ հետ՝ {supportEmail}"]
          }
        ]
      }
    },
    ru: {
      meta: {
        index: {
          title: "Игры ApriTouch - простые мобильные игры",
          description: "ApriTouch Games создает простые, веселые и доступные мобильные игры для быстрых и приятных игровых сессий."
        },
        support: {
          title: "Поддержка - Игры ApriTouch",
          description: "Свяжитесь с поддержкой ApriTouch по вопросам, предложениям, ошибкам и запросам, связанным с конфиденциальностью."
        },
        privacy: {
          title: "Политика конфиденциальности - Игры ApriTouch",
          description: "Политика конфиденциальности для мобильных игр, опубликованных под брендом ApriTouch."
        },
        terms: {
          title: "Условия использования - Игры ApriTouch",
          description: "Условия использования для мобильных игр, опубликованных под брендом ApriTouch."
        },
        synco: {
          title: "Synco - ApriTouch",
          description: "Synco - весёлая игра на совпадение мыслей под брендом ApriTouch."
        },
        xachbar: {
          title: "Xachbar - армянские кроссворды | ApriTouch",
          description: "Решайте армянские кроссворды, открывайте новые слова, используйте подсказки и следите за ежедневным прогрессом в Xachbar."
        }
      },
      common: {
        languageSwitcher: "Язык",
        openMenu: "Открыть меню",
        closeMenu: "Закрыть меню",
        navGames: "Игры",
        navSupport: "Поддержка",
        navPrivacy: "Конфиденциальность",
        navTerms: "Условия",
        navContact: "Контакты",
        footerTagline: "Простые, веселые и доступные мобильные игры для всех.",
        footerLegal: "ApriTouch - бренд, которым управляет {legalEntityRu}.",
        footerCopyright: "© 2026 ApriTouch. Все права защищены.",
        footerBrand: "Бренд: ApriTouch",
        supportEmailAddress: "{supportEmail}",
        supportEmailHref: "mailto:{supportEmail}",
        privacyPolicy: "Политика конфиденциальности",
        termsAndConditions: "Условия использования",
        supportEmail: "Поддержка",
        privacyEmail: "Конфиденциальность",
        googlePlay: "Google Play",
        appStore: "App Store",
        learnMore: "Подробнее",
        learnMoreAbout: "Подробнее о {name}",
        available: "доступно",
        brandLabel: "Бренд",
        developerLabel: "Разработчик",
        legalFormLabel: "Армянская правовая форма",
        countryLabel: "Страна",
        supportEmailLabel: "Email поддержки",
        privacyEmailLabel: "Email по конфиденциальности",
        developerValue: "{legalEntityRu}",
        legalFormValue: "{legalFormValue}",
        countryValue: "Армения"
      },
      index: {
        eyebrow: "Бренд мобильных игр",
        heroTitle: "Игры ApriTouch",
        heroSubtitle: "Простые, веселые и доступные мобильные игры для всех.",
        heroText: "Мы создаем легкие мобильные игры для быстрых, приятных и понятных игровых сессий.",
        heroCardCrossword: "Кроссворд",
        viewGames: "Посмотреть игры",
        gamesTitle: "Наши игры",
        gamesLead: "Растущая коллекция простых и веселых мобильных игр от ApriTouch.",
        aboutEyebrow: "О бренде",
        aboutTitle: "Об ApriTouch",
        aboutText: "ApriTouch - это бренд мобильных игр, которым управляет {legalEntityRu}. Мы создаем игры с простыми механиками, чистым дизайном и приятным игровым процессом.",
        contactTitle: "Контакты",
        contactText: "По вопросам поддержки, ошибкам, предложениям или вопросам конфиденциальности свяжитесь с нами по email."
      },
      support: {
        eyebrow: "Помощь",
        title: "Поддержка",
        text: "Если у вас есть вопросы, предложения или вы хотите сообщить об ошибке, свяжитесь с нами по email.",
        gamesCovered: "Игры, к которым относится страница",
        policies: "Правовые страницы",
        footerText: "Поддержка игр, опубликованных под брендом ApriTouch."
      },
      synco: {
        eyebrow: "Игра ApriTouch",
        aboutTitle: "Об игре",
        aboutText: "Synco - игра на совпадение мыслей: один игрок составляет пары существительное + прилагательное, а остальные пытаются их угадать.",
        featureQuickTitle: "Совпадайте мыслями",
        featureQuickText: "Думайте так же, как игрок, который составил пары.",
        featureSimpleTitle: "Угадывайте пары",
        featureSimpleText: "Находите сочетания существительное + прилагательное до конца раунда.",
        featureCleanTitle: "Набирайте очки",
        featureCleanText: "Каждая угаданная пара даёт 1 очко.",
        rulesTitle: "Правила игры",
        rulesIntro: "Synco — игра на совпадение мыслей. Один игрок составляет пары слов: существительное + прилагательное. Остальные пытаются угадать эти пары.",
        rulesPointNote: "За каждую угаданную пару начисляется 1 очко.",
        circleTitle: "По кругу",
        circleSubtitle: "Игроки играют вместе против игры.",
        circleStepOne: "Игрок получает телефон и составляет пары.",
        circleStepTwo: "Остальные игроки не смотрят.",
        circleStepThree: "Затем остальные пытаются угадать его пары.",
        circleStepFour: "За каждую угаданную пару все получают очки в общий счёт.",
        circleStepFive: "После раунда ход переходит следующему игроку.",
        circleStepSix: "Победа — когда общий счёт достигнет цели.",
        circleExampleTitle: "Пример",
        circleExampleText: "Игрок 1 составил 5 пар.\nОстальные угадали 3 пары.\nОбщий счёт: +3 очка.\nСледующий ход — Игрок 2.",
        teamsTitle: "Команды",
        teamsSubtitle: "Команды соревнуются друг с другом.",
        teamsStepOne: "Команда выбирает участника, который составит пары.",
        teamsStepTwo: "Остальные не смотрят.",
        teamsStepThree: "Затем участники этой же команды пытаются угадать его пары.",
        teamsStepFour: "Команда получает очки за угаданные пары.",
        teamsStepFive: "После раунда ход переходит следующей команде.",
        teamsStepSix: "Побеждает команда, которая первой набрала нужное количество очков.",
        teamsExampleTitle: "Пример",
        teamsExampleText: "Команда 1 составила 5 пар.\nКоманда 1 угадала 3 пары.\nКоманда 1 получает +3 очка.\nСледующий ход — Команда 2.",
        victoryNote: "Победа наступает, когда достигнута цель по очкам.",
        screenshotsTitle: "Скриншоты",
        screenshotsLead: "Превью игрового процесса Synco на мобильном.",
        screenshotOne: "Скриншот 1",
        screenshotTwo: "Скриншот 2",
        screenshotThree: "Скриншот 3",
        downloadTitle: "Скачать Synco",
        downloadEyebrow: "Скачать",
        downloadLead: "Synco бесплатна и может показывать рекламу.",
        supportTitle: "Поддержка",
        supportText: "По вопросам, предложениям, ошибкам или запросам конфиденциальности используйте страницы поддержки и правовые страницы ApriTouch.",
        footerText: "Synco - игра на совпадение мыслей, опубликованная под брендом ApriTouch."
      },
      xachbar: {
        eyebrow: "Игра ApriTouch",
        aboutTitle: "Об игре",
        aboutText: "Xachbar — простая и увлекательная игра с армянскими кроссвордами. Решайте уровни, открывайте новые слова и наслаждайтесь спокойной тренировкой для ума.",
        featureWordsTitle: "Открывайте новые слова",
        featureWordsText: "Расширяйте армянский словарный запас, решая каждый кроссворд.",
        featureHintsTitle: "Используйте подсказки",
        featureHintsText: "Получите небольшую помощь, если сложное слово мешает двигаться дальше.",
        featureProgressTitle: "Сохраняйте прогресс",
        featureProgressText: "Проходите уровни, получайте звёзды и следите за ежедневным прогрессом.",
        guideTitle: "Как играть",
        guideIntro: "Выберите кроссворд, разгадайте армянские слова и двигайтесь по карте в своём темпе.",
        guideNote: "Каждый завершённый кроссворд продвигает ваш прогресс вперёд.",
        solveTitle: "Решите кроссворд",
        solveSubtitle: "Заполняйте сетку по одному армянскому слову.",
        solveStepOne: "Выберите доступный уровень на карте.",
        solveStepTwo: "Прочитайте вопросы и изучите сетку кроссворда.",
        solveStepThree: "Введите армянские слова, соответствующие вопросам.",
        solveStepFour: "Используйте подсказку, если нужен ответ на сложное слово.",
        solveStepFive: "Заполните сетку и переходите к следующему заданию.",
        progressTitle: "Развивайте свой прогресс",
        progressSubtitle: "Возвращайтесь каждый день и продолжайте открывать новые слова.",
        progressStepOne: "Получайте звёзды за завершённые уровни.",
        progressStepTwo: "Открывайте новые задания, продвигаясь по карте.",
        progressStepThree: "Собирайте монеты и тратьте их на полезные подсказки.",
        progressStepFour: "Следите за результатами и ежедневной активностью.",
        progressStepFive: "Играйте в своём темпе и улучшайте словарный запас.",
        screenshotsTitle: "Скриншоты",
        screenshotsLead: "Предпросмотр игрового процесса Xachbar на iPhone.",
        screenshotOne: "Главный экран",
        screenshotTwo: "Карта кроссвордов",
        screenshotThree: "Профиль и персонажи",
        downloadEyebrow: "Скачать",
        downloadTitle: "Скачать Xachbar",
        downloadLead: "Xachbar доступна в App Store. Игра бесплатна и может показывать рекламу или предлагать необязательные встроенные покупки.",
        supportTitle: "Поддержка",
        supportText: "По вопросам, предложениям, ошибкам или запросам конфиденциальности используйте страницы поддержки и правовые страницы ApriTouch."
      },
      privacy: {
        title: "Политика конфиденциальности",
        eyebrow: "Правовая информация",
        lastUpdated: "Последнее обновление: 16 августа 2026",
        footerText: "Информация о конфиденциальности для игр, опубликованных под брендом ApriTouch.",
        sections: [
          {
            heading: "1. Кто мы",
            paragraphs: ["Эта Политика конфиденциальности применяется к мобильным играм, опубликованным под брендом ApriTouch.", "Бренд: ApriTouch\nРазработчик: {legalEntityRu}\nАрмянская правовая форма: {legalFormValue}\nСтрана: Армения\nКонтакт: {supportEmail}"]
          },
          {
            heading: "2. Игры, к которым применяется эта политика",
            paragraphs: ["Эта политика применяется к нашим мобильным играм, включая:"],
            gamesList: true,
            after: "Этот список может обновляться при публикации новых игр под брендом ApriTouch."
          },
          {
            heading: "3. Данные, которые мы напрямую не собираем",
            paragraphs: ["Наши игры не требуют создания аккаунта. Внутри игр мы напрямую не собираем имена, адреса электронной почты, номера телефонов, пароли, данные платежных карт или точные данные о местоположении."]
          },
          {
            heading: "4. Реклама и сторонние SDK",
            paragraphs: ["Наши игры бесплатны и могут показывать рекламу. Реклама может предоставляться сторонними рекламными партнерами.", "Эти партнеры могут собирать или получать некоторые технические данные, например:"],
            list: ["информацию об устройстве;", "рекламные идентификаторы;", "IP-адрес;", "примерное местоположение на основе IP-адреса;", "взаимодействия с приложением;", "просмотры и клики по рекламе;", "диагностическую и техническую информацию."]
          },
          {
            heading: "5. Как могут использоваться данные",
            paragraphs: ["Эти данные могут использоваться для того, чтобы:"],
            list: ["показывать рекламу;", "измерять эффективность рекламы;", "предотвращать мошенничество и недействительный трафик;", "ограничивать частоту показа рекламы;", "улучшать техническую стабильность;", "поддерживать и улучшать наши игры."]
          },
          {
            heading: "6. Сторонние сервисы",
            paragraphs: ["Наши игры могут использовать сторонние сервисы, например:"],
            list: ["Unity Ads, если включено", "Google AdMob, если включено", "Firebase / Crashlytics, если включено", "Google Play Services, если включено", "Apple services, если игра опубликована в App Store"],
            todo: "TODO: Remove services that are not used before publishing.",
            after: "Каждый сторонний сервис обрабатывает данные согласно своей политике конфиденциальности."
          },
          {
            heading: "7. Встроенные покупки",
            paragraphs: ["Некоторые наши игры могут предлагать необязательные встроенные покупки или подписки. Платежи обрабатываются соответствующей платформой, например Apple App Store или Google Play. Мы не получаем и не храним полные данные платежных карт."]
          },
          {
            heading: "8. Конфиденциальность детей",
            paragraphs: ["Наши игры предназначены для общей аудитории. Мы сознательно не собираем личную информацию детей. Если родитель или опекун считает, что ребенок предоставил личную информацию, он может связаться с нами по адресу {supportEmail}."]
          },
          {
            heading: "9. Хранение и удаление данных",
            paragraphs: ["Мы напрямую не ведем пользовательские аккаунты. Пользователи могут написать нам на {supportEmail} по вопросам конфиденциальности или запросить удаление данных, если это применимо."]
          },
          {
            heading: "10. Передача данных",
            paragraphs: ["Мы не продаем персональные данные. Технические данные могут обрабатываться рекламными и аналитическими партнерами, как описано в этой политике."]
          },
          {
            heading: "11. Безопасность",
            paragraphs: ["Мы принимаем разумные меры для защиты информации, связанной с нашими играми и сайтом. Однако ни один способ передачи или хранения данных не является полностью безопасным."]
          },
          {
            heading: "12. Изменения политики",
            paragraphs: ["Мы можем время от времени обновлять эту Политику конфиденциальности. Обновленная версия будет опубликована на этой странице с новой датой обновления."]
          },
          {
            heading: "13. Контакты",
            paragraphs: ["По вопросам конфиденциальности свяжитесь с нами: {supportEmail}"]
          }
        ]
      },
      terms: {
        title: "Условия использования",
        eyebrow: "Правовая информация",
        lastUpdated: "Последнее обновление: 16 августа 2026",
        footerText: "Условия для игр, опубликованных под брендом ApriTouch.",
        sections: [
          {
            heading: "1. Введение",
            paragraphs: ["Эти Условия использования применяются к мобильным играм, опубликованным под брендом ApriTouch.", "ApriTouch - бренд, которым управляет {legalEntityRu}.", "Загружая, открывая или используя наши игры, вы соглашаетесь с этими Условиями."]
          },
          {
            heading: "2. Игры",
            paragraphs: ["Эти Условия применяются к нашим мобильным играм, включая:"],
            gamesList: true,
            after: "Этот список может обновляться при публикации новых игр."
          },
          {
            heading: "3. Использование игр",
            paragraphs: ["Наши игры предоставляются для личного некоммерческого развлекательного использования.", "Вы не можете:"],
            list: ["копировать, изменять или перепродавать наши игры;", "выполнять обратную разработку или пытаться извлечь исходный код;", "взламывать, использовать читы, эксплойты или мешать работе игр;", "использовать игры в незаконных целях;", "злоупотреблять рекламой, SDK или сервисами платформ."]
          },
          {
            heading: "4. Бесплатные игры и реклама",
            paragraphs: ["Наши игры бесплатны и могут показывать рекламу. Реклама может предоставляться сторонними рекламными партнерами."]
          },
          {
            heading: "5. Встроенные покупки",
            paragraphs: ["Некоторые игры могут предлагать необязательные встроенные покупки или подписки. Цены показываются в магазине соответствующей платформы до покупки. Платежи, возвраты и управление покупками осуществляются по правилам Apple App Store, Google Play или другого применимого поставщика платформы."]
          },
          {
            heading: "6. Сторонние сервисы",
            paragraphs: ["Наши игры могут использовать сторонние сервисы, включая рекламу, аналитику, отчеты о сбоях, сервисы Google Play или сервисы Apple. У этих сервисов могут быть собственные условия и политики."]
          },
          {
            heading: "7. Доступность и обновления",
            paragraphs: ["Мы можем в любое время обновить, изменить, приостановить или прекратить поддержку любой игры или функции."]
          },
          {
            heading: "8. Отказ от гарантий",
            paragraphs: ["Наши игры предоставляются как есть, без каких-либо гарантий. Мы стараемся обеспечить стабильный и приятный опыт, но не гарантируем, что игры всегда будут доступны, безошибочны или совместимы с каждым устройством."]
          },
          {
            heading: "9. Ограничение ответственности",
            paragraphs: ["В максимальной степени, разрешенной применимым законодательством, ApriTouch и индивидуальный предприниматель, управляющий брендом ApriTouch, не несут ответственности за косвенные, случайные или последующие убытки, возникающие из использования наших игр."]
          },
          {
            heading: "10. Контакты",
            paragraphs: ["По вопросам об этих Условиях свяжитесь с нами: {supportEmail}"]
          }
        ]
      }
    }
  };

  Object.assign(translations.en.index, {
    heroSubtitle: "Small games. Simple fun.",
    heroText: "Discover lightweight mobile games made for quick, enjoyable and easy-to-understand play sessions.",
    exploreGames: "Explore Games",
    getSupport: "Get Support",
    gamesLead: "A growing collection of simple and fun mobile games by ApriTouch.",
    heroCardPuzzle: "Puzzle",
    heroCardArcade: "Arcade",
    heroCardCasual: "Casual",
    heroCardSoon: "Coming Soon",
    comingSoon: "Coming Soon",
    moreGamesSoon: "More games are coming soon.",
    aboutTitle: "Built for simple fun",
    valueLightweight: "Lightweight gameplay",
    valueClean: "Clean design",
    valueEasy: "Easy to start",
    valueFree: "Free to play",
    contactEyebrow: "Support",
    contactTitle: "Need help?",
    contactText: "For support, bug reports or privacy-related requests, contact us by email."
  });

  Object.assign(translations.hy.index, {
    heroSubtitle: "Փոքր խաղեր։ Պարզ զվարճանք։",
    heroText: "Բացահայտեք թեթև բջջային խաղեր՝ ստեղծված արագ, հաճելի և հեշտ հասկանալի խաղային պահերի համար:",
    exploreGames: "Ուսումնասիրել խաղերը",
    getSupport: "Ստանալ աջակցություն",
    gamesLead: "ApriTouch-ի պարզ և զվարճալի բջջային խաղերի աճող հավաքածու:",
    heroCardPuzzle: "Գլուխկոտրուկ",
    heroCardArcade: "Արկադա",
    heroCardCasual: "Casual",
    heroCardSoon: "Շուտով",
    comingSoon: "Շուտով",
    moreGamesSoon: "Շուտով կլինեն ավելի շատ խաղեր:",
    aboutTitle: "Ստեղծված պարզ զվարճանքի համար",
    valueLightweight: "Թեթև խաղային ընթացք",
    valueClean: "Մաքուր դիզայն",
    valueEasy: "Հեշտ է սկսել",
    valueFree: "Անվճար խաղ",
    contactEyebrow: "Աջակցություն",
    contactTitle: "Օգնության կարիք ունե՞ք",
    contactText: "Աջակցության, սխալների կամ գաղտնիության հարցումների համար կապվեք մեզ հետ էլ. փոստով:"
  });

  Object.assign(translations.ru.index, {
    heroSubtitle: "Небольшие игры. Простое веселье.",
    heroText: "Откройте для себя легкие мобильные игры для быстрых, приятных и понятных игровых сессий.",
    exploreGames: "Смотреть игры",
    getSupport: "Поддержка",
    gamesLead: "Растущая коллекция простых и веселых мобильных игр от ApriTouch.",
    heroCardPuzzle: "Головоломка",
    heroCardArcade: "Аркада",
    heroCardCasual: "Казуальная",
    heroCardSoon: "Скоро",
    comingSoon: "Скоро",
    moreGamesSoon: "Скоро появятся новые игры.",
    aboutTitle: "Создано для простого веселья",
    valueLightweight: "Легкий геймплей",
    valueClean: "Чистый дизайн",
    valueEasy: "Легко начать",
    valueFree: "Бесплатно",
    contactEyebrow: "Поддержка",
    contactTitle: "Нужна помощь?",
    contactText: "По вопросам поддержки, ошибкам или запросам конфиденциальности свяжитесь с нами по email."
  });

  function detectLanguage() {
    const params = new URLSearchParams(window.location.search);
    const queryLanguage = normalizeLanguage(params.get("lang"));
    if (queryLanguage) return queryLanguage;

    const hashMatch = window.location.hash.match(/(?:^#|&)lang=(en|hy|ru)\b/i);
    const hashLanguage = normalizeLanguage(hashMatch ? hashMatch[1] : "");
    if (hashLanguage) return hashLanguage;

    return "en";
  }

  function normalizeLanguage(language) {
    const normalized = String(language || "").toLowerCase();
    return supportedLanguages.includes(normalized) ? normalized : "";
  }

  function getPathValue(source, path) {
    return String(path || "").split(".").reduce((value, key) => {
      if (value && Object.prototype.hasOwnProperty.call(value, key)) return value[key];
      return undefined;
    }, source);
  }

  function t(path, vars) {
    const value = getPathValue(translations[currentLanguage], path) ?? getPathValue(translations.en, path) ?? path;
    if (typeof value !== "string") return value;
    return formatTemplate(value, vars);
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function paragraphsToHtml(paragraphs) {
    return (paragraphs || []).map((paragraph) => {
      return `<p>${escapeHtml(formatTemplate(paragraph)).replace(/\n/g, "<br>")}</p>`;
    }).join("");
  }

  function listToHtml(list) {
    if (!list || !list.length) return "";
    return `<ul>${list.map((item) => `<li>${escapeHtml(formatTemplate(item))}</li>`).join("")}</ul>`;
  }

  function renderPolicyContent() {
    document.querySelectorAll("[data-policy-content]").forEach((container) => {
      const key = container.dataset.policyContent;
      const page = translations[currentLanguage][key] || translations.en[key];
      if (!page || !page.sections) return;

      container.innerHTML = page.sections.map((section) => {
        const gamesList = section.gamesList ? '<ul class="game-list" data-games-list></ul>' : "";
        const todo = section.todo ? `\n<!-- ${section.todo} -->` : "";
        const after = section.after ? `<p>${escapeHtml(formatTemplate(section.after))}</p>` : "";
        return `
          <section class="legal-section">
            <h2>${escapeHtml(formatTemplate(section.heading))}</h2>
            ${paragraphsToHtml(section.paragraphs)}
            ${gamesList}
            ${listToHtml(section.list)}
            ${todo}
            ${after}
          </section>
        `;
      }).join("");
    });
  }

  function renderLanguageSwitchers() {
    document.querySelectorAll("[data-language-switcher]").forEach((switcher) => {
      switcher.setAttribute("aria-label", t("common.languageSwitcher"));
      switcher.innerHTML = supportedLanguages.map((language, index) => {
        const separator = index < supportedLanguages.length - 1 ? '<span aria-hidden="true">|</span>' : "";
        const activeClass = language === currentLanguage ? " active" : "";
        const label = language.toUpperCase();
        return `<button class="language-option${activeClass}" type="button" data-lang-option="${language}" aria-pressed="${language === currentLanguage}">${label}</button>${separator}`;
      }).join("");
    });

    document.querySelectorAll("[data-lang-option]").forEach((button) => {
      button.addEventListener("click", () => setLanguage(button.dataset.langOption));
    });
  }

  function updateTextNodes() {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      element.textContent = t(element.dataset.i18n);
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
      element.dataset.i18nAttr.split(";").forEach((pair) => {
        const [attribute, key] = pair.split(":").map((part) => part && part.trim());
        if (attribute && key) element.setAttribute(attribute, t(key));
      });
    });
  }

  function updateMeta() {
    const pageKey = document.body ? document.body.dataset.page : "";
    const meta = pageKey ? t(`meta.${pageKey}`) : null;
    if (!meta || typeof meta !== "object") return;

    document.title = meta.title;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", meta.description);
  }

  function localizeUrl(url, language) {
    if (!url || url === "#" || /^(https?:|mailto:|tel:|#)/i.test(url)) return url;

    const [withoutHash, hash = ""] = url.split("#");
    const [path, query = ""] = withoutHash.split("?");
    const params = new URLSearchParams(query);
    params.set("lang", language || currentLanguage);
    const queryString = params.toString();
    return `${path}${queryString ? `?${queryString}` : ""}${hash ? `#${hash}` : ""}`;
  }

  function updateLocalizedLinks() {
    document.querySelectorAll("a[data-keep-lang]").forEach((link) => {
      if (!link.dataset.baseHref) link.dataset.baseHref = link.getAttribute("href") || "";
      link.setAttribute("href", localizeUrl(link.dataset.baseHref, currentLanguage));
    });
  }

  function setLanguage(language) {
    const normalized = normalizeLanguage(language) || "en";
    currentLanguage = normalized;
    localStorage.setItem(storageKey, normalized);

    const url = new URL(window.location.href);
    url.searchParams.set("lang", normalized);
    window.history.replaceState({}, "", url.toString());

    applyTranslations();
    window.dispatchEvent(new CustomEvent("apritouch:languagechange", { detail: { language: normalized } }));
  }

  function applyTranslations() {
    document.documentElement.lang = currentLanguage;
    localStorage.setItem(storageKey, currentLanguage);
    updateMeta();
    updateTextNodes();
    renderPolicyContent();
    renderLanguageSwitchers();
    updateLocalizedLinks();
  }

  window.ApriTouchI18n = {
    translations,
    supportedLanguages,
    getLanguage: () => currentLanguage,
    setLanguage,
    t,
    localizeUrl,
    applyTranslations,
    escapeHtml
  };

  document.addEventListener("DOMContentLoaded", applyTranslations);
})();
