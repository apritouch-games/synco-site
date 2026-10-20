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
        googlePlay: "Download on the Google Play",
        appStore: "Download on the App Store",
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
        googlePlay: "Ներբեռնել Google Play-ից",
        appStore: "Ներբեռնել App Store-ից",
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
        googlePlay: "Скачать из Google Play",
        appStore: "Скачать из App Store",
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

  Object.assign(translations.en.meta, {
    citatner: {
      title: "Citatner - Quotes and Word Puzzles | ApriTouch",
      description: "Solve clue words, reveal matching letters and uncover hidden quotes across more than 2,700 puzzles in Citatner."
    }
  });

  Object.assign(translations.en.common, {
    new: "new"
  });

  Object.assign(translations.en.index, {
    heroCardQuotes: "Quotes & puzzles"
  });

  translations.en.citatner = {
    eyebrow: "ApriTouch game",
    aboutTitle: "Quotes hidden inside word puzzles",
    aboutText: "Each level contains a hidden quotation and a set of clue-based words. Solve the clues, enter the answers and watch matching numbered letters appear throughout the puzzle.",
    featurePuzzlesTitle: "2,700+ puzzles",
    featurePuzzlesText: "Explore a large collection of increasingly challenging word puzzles.",
    featureQuotesTitle: "Reveal hidden quotes",
    featureQuotesText: "Every solved word uncovers linked letters in the quotation.",
    featureCategoriesTitle: "Many categories",
    featureCategoriesText: "Play Aphorisms, Armenia, Books, History, Science, Space, Cinema, Music and more.",
    featureDailyTitle: "Daily challenges",
    featureDailyText: "Return each day for a fresh puzzle and steady progress.",
    featureHintsTitle: "Helpful hints",
    featureHintsText: "Use hints when a difficult clue slows you down.",
    featureLanguagesTitle: "Multiple languages",
    featureLanguagesText: "Choose a language and enjoy puzzles made for it.",
    guideTitle: "How to play",
    guideIntro: "Use vocabulary, logic, memory and general knowledge to restore the quotation one answer at a time.",
    guideNote: "The more words you solve, the more of the hidden quote is revealed.",
    solveTitle: "Solve the clue words",
    solveSubtitle: "Find the answer that matches each definition.",
    solveStepOne: "Choose a category and open a puzzle.",
    solveStepTwo: "Read a clue and enter the correct word.",
    solveStepThree: "Use a hint if you get stuck.",
    revealTitle: "Reveal the quotation",
    revealSubtitle: "Matching numbers connect answers with the hidden quote.",
    revealStepOne: "Correct letters appear everywhere the same number is shown.",
    revealStepTwo: "Use the revealed pattern to solve the remaining words.",
    revealStepThree: "Complete the level by restoring the full quotation.",
    screenshotsTitle: "Screenshots",
    screenshotsLead: "A look at Citatner's puzzles, categories and daily challenges on iPhone.",
    screenshotOne: "Language selection",
    screenshotTwo: "Main menu",
    screenshotThree: "Coins and hints",
    screenshotFour: "Puzzle categories",
    screenshotFive: "Books category",
    screenshotSix: "Unlock a category",
    screenshotSeven: "Quote puzzle",
    screenshotEight: "Puzzle settings",
    screenshotNine: "Daily challenge",
    screenshotTen: "Ad-free option",
    releaseEyebrow: "Download",
    releaseTitle: "Store links are coming soon",
    releaseLead: "Store links will be added here as soon as they are available.",
    storeNote: "App Store and Google Play links are coming soon.",
    supportTitle: "Support",
    supportText: "For questions, suggestions, bug reports or privacy-related requests, use the ApriTouch support and legal pages."
  };

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

  Object.assign(translations.hy.meta, {
    citatner: {
      title: "Ցիտատներ — բառախաղ | ApriTouch",
      description: "Գուշակեք բառերը, բացահայտեք կապված տառերը և վերականգնեք թաքնված ցիտատները ավելի քան 2700 հանելուկներում։"
    }
  });

  Object.assign(translations.hy.common, {
    new: "նոր"
  });

  Object.assign(translations.hy.index, {
    heroCardQuotes: "Ցիտատներ և հանելուկներ"
  });

  translations.hy.citatner = {
    eyebrow: "ApriTouch խաղ",
    aboutTitle: "Բառախաղեր՝ թաքնված ցիտատներով",
    aboutText: "Յուրաքանչյուր մակարդակում ձեզ սպասում է թաքնված ցիտատ և մի քանի բառային հուշում։ Կարդացեք հուշումները, գտեք ճիշտ բառերը և հետևեք, թե ինչպես են համարներով կապված տառերը բացվում ամբողջ հանելուկում։",
    featurePuzzlesTitle: "Ավելի քան 2700 հանելուկ",
    featurePuzzlesText: "Բացահայտեք աստիճանաբար բարդացող բառախաղերի մեծ հավաքածու։",
    featureQuotesTitle: "Թաքնված ցիտատներ",
    featureQuotesText: "Յուրաքանչյուր գուշակված բառ բացահայտում է ցիտատի կապված տառերը։",
    featureCategoriesTitle: "Տարբեր թեմաներ",
    featureCategoriesText: "Խաղացեք Աֆորիզմներ, Հայաստան, Գրքեր, Պատմություն, Գիտություն, Տիեզերք, Կինո, Երաժշտություն և այլ բաժիններում։",
    featureDailyTitle: "Ամենօրյա առաջադրանքներ",
    featureDailyText: "Վերադարձեք ամեն օր նոր հանելուկի և շարունակական առաջընթացի համար։",
    featureHintsTitle: "Օգտակար հուշումներ",
    featureHintsText: "Օգտվեք հուշումներից, երբ դժվար հարցը խանգարում է առաջ շարժվել։",
    featureLanguagesTitle: "Մի քանի լեզու",
    featureLanguagesText: "Ընտրեք լեզուն և վայելեք դրա համար ստեղծված հանելուկները։",
    guideTitle: "Ինչպես խաղալ",
    guideIntro: "Օգտագործեք բառապաշարը, տրամաբանությունը, հիշողությունն ու գիտելիքները՝ քայլ առ քայլ վերականգնելու ամբողջ ցիտատը։",
    guideNote: "Որքան շատ բառեր գուշակեք, այնքան ավելի շատ մաս կբացվի թաքնված ցիտատից։",
    solveTitle: "Գուշակեք բառերը",
    solveSubtitle: "Գտեք յուրաքանչյուր բացատրությանը համապատասխան պատասխանը։",
    solveStepOne: "Ընտրեք թեմատիկ բաժինը և բացեք հանելուկը։",
    solveStepTwo: "Կարդացեք հուշումը և մուտքագրեք ճիշտ բառը։",
    solveStepThree: "Եթե դժվարանում եք, օգտվեք հուշումից։",
    revealTitle: "Բացահայտեք ցիտատը",
    revealSubtitle: "Նույն համարները կապում են պատասխանները թաքնված ցիտատի հետ։",
    revealStepOne: "Ճիշտ տառերը բացվում են նույն համարով նշված բոլոր տեղերում։",
    revealStepTwo: "Բացված տառերով գուշակեք մնացած բառերը։",
    revealStepThree: "Ավարտեք մակարդակը՝ ամբողջությամբ վերականգնելով ցիտատը։",
    screenshotsTitle: "Սքրինշոթներ",
    screenshotsLead: "Citatner-ի հանելուկների, բաժինների և ամենօրյա առաջադրանքների նախադիտում iPhone-ում։",
    screenshotOne: "Լեզվի ընտրություն",
    screenshotTwo: "Գլխավոր մենյու",
    screenshotThree: "Մետաղադրամներ և հուշումներ",
    screenshotFour: "Հանելուկների բաժիններ",
    screenshotFive: "Գրքեր բաժին",
    screenshotSix: "Բաժնի բացում",
    screenshotSeven: "Ցիտատի հանելուկ",
    screenshotEight: "Հանելուկի կարգավորումներ",
    screenshotNine: "Ամենօրյա առաջադրանք",
    screenshotTen: "Առանց պարտադիր գովազդի",
    releaseEyebrow: "Ներբեռնել",
    releaseTitle: "Խանութների հղումները շուտով կավելացվեն",
    releaseLead: "Խանութների հղումները կավելացվեն այստեղ, հենց որ հասանելի լինեն։",
    storeNote: "App Store-ի և Google Play-ի հղումները շուտով կավելացվեն։",
    supportTitle: "Աջակցություն",
    supportText: "Հարցերի, առաջարկների, սխալների կամ գաղտնիության հարցումների համար օգտագործեք ApriTouch-ի աջակցության և իրավական էջերը։"
  };

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

  Object.assign(translations.ru.meta, {
    citatner: {
      title: "Citatner — цитаты и загадки | ApriTouch",
      description: "Разгадывайте слова, открывайте связанные буквы и восстанавливайте скрытые цитаты в более чем 2700 головоломках."
    }
  });

  Object.assign(translations.ru.common, {
    new: "новинка"
  });

  Object.assign(translations.ru.index, {
    heroCardQuotes: "Цитаты и загадки"
  });

  translations.ru.citatner = {
    eyebrow: "Игра ApriTouch",
    aboutTitle: "Словесные головоломки со скрытыми цитатами",
    aboutText: "На каждом уровне вас ждёт цитата с пропущенными буквами и несколько слов с определениями. Разгадывайте подсказки, вводите ответы и открывайте связанные по номерам буквы во всей головоломке.",
    featurePuzzlesTitle: "Более 2700 головоломок",
    featurePuzzlesText: "Проходите большую коллекцию заданий с постепенно растущей сложностью.",
    featureQuotesTitle: "Скрытые цитаты",
    featureQuotesText: "Каждое разгаданное слово открывает связанные буквы в цитате.",
    featureCategoriesTitle: "Разные категории",
    featureCategoriesText: "Играйте в разделах Афоризмы, Армения, Книги, История, Наука, Космос, Кино, Музыка и других.",
    featureDailyTitle: "Ежедневные задания",
    featureDailyText: "Возвращайтесь каждый день за новой головоломкой и продолжайте прогресс.",
    featureHintsTitle: "Полезные подсказки",
    featureHintsText: "Используйте подсказки, если сложный вопрос мешает двигаться дальше.",
    featureLanguagesTitle: "Несколько языков",
    featureLanguagesText: "Выберите язык и решайте созданные для него головоломки.",
    guideTitle: "Как играть",
    guideIntro: "Используйте словарный запас, логику, память и эрудицию, чтобы шаг за шагом восстановить высказывание.",
    guideNote: "Чем больше слов вы разгадаете, тем больше букв появится в скрытой цитате.",
    solveTitle: "Разгадайте слова",
    solveSubtitle: "Найдите ответ, который подходит к каждому определению.",
    solveStepOne: "Выберите категорию и откройте головоломку.",
    solveStepTwo: "Прочитайте подсказку и введите правильное слово.",
    solveStepThree: "Если застряли, воспользуйтесь подсказкой.",
    revealTitle: "Восстановите цитату",
    revealSubtitle: "Одинаковые номера связывают ответы со скрытой цитатой.",
    revealStepOne: "Правильные буквы появляются во всех местах с тем же номером.",
    revealStepTwo: "Используйте открывшийся рисунок букв, чтобы разгадать остальные слова.",
    revealStepThree: "Завершите уровень, полностью восстановив цитату.",
    screenshotsTitle: "Скриншоты",
    screenshotsLead: "Головоломки, категории и ежедневные задания Citatner на iPhone.",
    screenshotOne: "Выбор языка",
    screenshotTwo: "Главное меню",
    screenshotThree: "Монеты и подсказки",
    screenshotFour: "Категории головоломок",
    screenshotFive: "Категория «Книги»",
    screenshotSix: "Открытие категории",
    screenshotSeven: "Головоломка с цитатой",
    screenshotEight: "Настройки головоломки",
    screenshotNine: "Ежедневное задание",
    screenshotTen: "Отключение обязательной рекламы",
    releaseEyebrow: "Скачать",
    releaseTitle: "Ссылки на магазины скоро появятся",
    releaseLead: "Ссылки на магазины будут добавлены сюда, как только станут доступны.",
    storeNote: "Ссылки на App Store и Google Play скоро появятся.",
    supportTitle: "Поддержка",
    supportText: "По вопросам, предложениям, ошибкам или запросам конфиденциальности используйте страницы поддержки и правовые страницы ApriTouch."
  };


  // Dice Block Puzzle
  translations.en.diceBlockPuzzle = {
    "name": "Dice Block Puzzle",
    "tagline": "Roll Dice. Fit Shapes. Think.",
    "description": "Roll two dice, choose your block shape, and find the perfect spot on a 10×10 grid.",
    "intro": "Two dice. One hundred cells. Every move matters!",
    "aboutTitle": "Dice, blocks and clever decisions",
    "aboutText": "Dice Block Puzzle brings together the excitement of rolling dice and the strategy of solving block puzzles. Roll two dice, choose your block shape, and find the perfect spot on a 10×10 grid.",
    "aboutMore": "Easy to learn, challenging to master. Every roll creates a new opportunity — and every decision counts.",
    "guideTitle": "How to play",
    "exampleTitle": "Same area. Different shapes.",
    "exampleText": "Roll 2 and 4 to get an area of 8 cells. Choose a 1×8, 8×1, 2×4 or 4×2 rectangle to fit the space on your board.",
    "universeTitle": "Explore Puzzle Universe",
    "universeText": "Journey through 10 beautiful constellations and 67 exciting puzzle levels.",
    "universeMore": "Collect cosmic crystals, complete challenges, and restore the stars to bring the night sky back to life.",
    "featuresTitle": "Game features",
    "closingText": "Every roll is unpredictable. Every placement is your choice.",
    "challenge": "Can you master all 100 cells and restore the constellations?",
    "motto": "Luck rolls. You decide!",
    "screenshotsTitle": "Screenshots",
    "screenshotsLead": "Explore Classic mode, block shapes and the constellations of Puzzle Universe.",
    "screenshotsLabel": "Dice Block Puzzle screenshots",
    "logoAlt": "Dice Block Puzzle logo with dice and colourful blocks",
    "iconAlt": "Dice Block Puzzle app icon",
    "bannerAlt": "Dice Block Puzzle 10×10 in a cosmic landscape",
    "heroCard": "Dice & blocks",
    "step1": "Roll two realistic 3D dice.",
    "step2": "Multiply the dice values to determine your block's area.",
    "step3": "Choose a rectangular shape that fits.",
    "step4": "Place your block strategically on the board.",
    "step5": "Plan your next moves and make every cell count!",
    "feature1Title": "Dice-based gameplay",
    "feature1Text": "Unique dice-based block puzzle gameplay.",
    "feature2Title": "100 cells",
    "feature2Text": "A 10×10 board with 100 cells to master.",
    "feature3Title": "Interactive 3D dice",
    "feature3Text": "Two interactive 3D dice.",
    "feature4Title": "Choose your shape",
    "feature4Text": "Multiple block shapes and strategic choices.",
    "feature5Title": "A cosmic journey",
    "feature5Text": "10 constellations and 67 puzzle levels.",
    "feature6Title": "Luck and logic",
    "feature6Text": "A combination of luck, logic, and spatial thinking.",
    "feature7Title": "Simple controls",
    "feature7Text": "Simple controls and engaging puzzle challenges.",
    "feature8Title": "Quick sessions",
    "feature8Text": "Quick sessions that reward clever decisions.",
    "screenshot1": "Main menu",
    "screenshot2": "Roll the dice",
    "screenshot3": "Choose a block shape",
    "screenshot4": "Classic mode",
    "screenshot5": "Game settings",
    "screenshot6": "Constellation map",
    "screenshot7": "Explore constellations",
    "screenshot8": "Collect cosmic crystals",
    "screenshot9": "More ApriTouch games",
    "screenshot10": "Slice a shape"
};
  translations.en.meta['dice-block-puzzle'] = {"title": "Dice Block Puzzle | ApriTouch", "description": "Roll two dice, choose your block shape, and find the perfect spot on a 10×10 grid."};
  translations.en.index.heroCardDice = "Dice & blocks";
  translations.ru.diceBlockPuzzle = {
    "name": "Дайс Блок (Dice Block Puzzle)",
    "tagline": "Бросай кости. Подбирай фигуры. Думай.",
    "description": "Бросайте две кости, выбирайте форму блока и находите для него идеальное место на поле 10×10.",
    "intro": "Две игральные кости. Сто клеток. Каждый ход имеет значение!",
    "aboutTitle": "Кости, блоки и продуманные решения",
    "aboutText": "Dice Block Puzzle объединяет азарт броска костей и стратегию блочных головоломок. Бросайте две кости, выбирайте форму блока и находите для него идеальное место на поле 10×10.",
    "aboutMore": "Легко научиться, сложно стать мастером! Каждый бросок открывает новые возможности, а каждое решение имеет значение.",
    "guideTitle": "Как играть",
    "exampleTitle": "Одна площадь. Разные формы.",
    "exampleText": "Выпали 2 и 4 — площадь блока равна 8 клеткам. Выберите прямоугольник 1×8, 8×1, 2×4 или 4×2, который поместится на поле.",
    "universeTitle": "Исследуйте вселенную головоломок",
    "universeText": "Отправьтесь в космическое путешествие по 10 великолепным созвездиям и 67 увлекательным уровням.",
    "universeMore": "Собирайте космические кристаллы, выполняйте задания и восстанавливайте звёзды, возвращая ночному небу его сияние.",
    "featuresTitle": "Особенности игры",
    "closingText": "Каждый бросок непредсказуем. Куда поставить блок — решаете только вы.",
    "challenge": "Сможете ли вы освоить все 100 клеток и восстановить созвездия?",
    "motto": "Удача бросает кости. Решаете вы!",
    "screenshotsTitle": "Скриншоты",
    "screenshotsLead": "Режим Classic, выбор фигур и созвездия Puzzle Universe.",
    "screenshotsLabel": "Скриншоты Dice Block Puzzle",
    "logoAlt": "Логотип Dice Block Puzzle с игральными костями и цветными блоками",
    "iconAlt": "Иконка Dice Block Puzzle",
    "bannerAlt": "Dice Block Puzzle 10×10 на фоне космического пейзажа",
    "heroCard": "Кости и блоки",
    "step1": "Бросайте две реалистичные трёхмерные игральные кости.",
    "step2": "Перемножайте выпавшие числа, чтобы определить площадь блока.",
    "step3": "Выбирайте подходящую прямоугольную форму.",
    "step4": "Продуманно размещайте блоки на игровом поле.",
    "step5": "Планируйте следующие ходы и используйте каждую клетку с умом!",
    "feature1Title": "Кости и блоки",
    "feature1Text": "Уникальная блочная головоломка с механикой броска костей.",
    "feature2Title": "100 клеток",
    "feature2Text": "Поле 10×10 со 100 клетками, которые предстоит освоить.",
    "feature3Title": "Трёхмерные кости",
    "feature3Text": "Две интерактивные трёхмерные игральные кости.",
    "feature4Title": "Выбор формы",
    "feature4Text": "Разнообразные формы блоков и стратегические решения.",
    "feature5Title": "Космическое путешествие",
    "feature5Text": "10 созвездий и 67 уровней головоломок.",
    "feature6Title": "Удача и логика",
    "feature6Text": "Сочетание удачи, логики и пространственного мышления.",
    "feature7Title": "Простое управление",
    "feature7Text": "Простое управление и увлекательные испытания.",
    "feature8Title": "Короткие сессии",
    "feature8Text": "Короткие игровые сессии, в которых побеждает продуманная стратегия.",
    "screenshot1": "Главное меню",
    "screenshot2": "Бросок костей",
    "screenshot3": "Выбор формы блока",
    "screenshot4": "Режим Classic",
    "screenshot5": "Настройки игры",
    "screenshot6": "Карта созвездия",
    "screenshot7": "Выбор созвездия",
    "screenshot8": "Сбор космических кристаллов",
    "screenshot9": "Другие игры ApriTouch",
    "screenshot10": "Разрезание фигуры"
};
  translations.ru.meta['dice-block-puzzle'] = {"title": "Дайс Блок (Dice Block Puzzle) | ApriTouch", "description": "Бросайте две кости, выбирайте форму блока и находите для него идеальное место на поле 10×10."};
  translations.ru.index.heroCardDice = "Кости и блоки";
  translations.hy.diceBlockPuzzle = {
    "name": "Dice Block Puzzle",
    "tagline": "Նետիր զառերը։ Ընտրիր ձևը։ Մտածիր։",
    "description": "Նետեք երկու զառը, ընտրեք բլոկի ձևը և գտեք դրա համար լավագույն տեղը 10×10 խաղադաշտում։",
    "intro": "Երկու զառ։ Հարյուր վանդակ։ Ամեն քայլ կարևոր է։",
    "aboutTitle": "Զառեր, բլոկներ և մտածված քայլեր",
    "aboutText": "Dice Block Puzzle-ը համատեղում է զառ նետելու ոգևորությունն ու բլոկային գլուխկոտրուկների ռազմավարությունը։ Նետեք երկու զառը, ընտրեք բլոկի ձևը և գտեք դրա համար լավագույն տեղը 10×10 խաղադաշտում։",
    "aboutMore": "Սովորելը հեշտ է, վարպետանալը՝ իսկական մարտահրավեր։ Յուրաքանչյուր նետում նոր հնարավորություն է բացում, իսկ յուրաքանչյուր որոշում կարևոր է։",
    "guideTitle": "Ինչպես խաղալ",
    "exampleTitle": "Նույն մակերեսը։ Տարբեր ձևեր։",
    "exampleText": "Եթե զառերի վրա բացվել են 2 և 4 թվերը, բլոկը զբաղեցնում է 8 վանդակ։ Ընտրեք 1×8, 8×1, 2×4 կամ 4×2 ուղղանկյունը՝ ըստ խաղադաշտի ազատ տարածքի։",
    "universeTitle": "Բացահայտեք գլուխկոտրուկների տիեզերքը",
    "universeText": "Մեկնեք տիեզերական ճամփորդության՝ բացահայտելու 10 գեղեցիկ համաստեղություն և հաղթահարելու 67 հետաքրքիր մակարդակ։",
    "universeMore": "Հավաքեք տիեզերական բյուրեղները, կատարեք առաջադրանքները և կրկին վառեք աստղերը՝ գիշերային երկնքին վերադարձնելով իր փայլը։",
    "featuresTitle": "Խաղի առանձնահատկությունները",
    "closingText": "Յուրաքանչյուր նետում անկանխատեսելի է։ Իսկ բլոկի տեղը որոշում եք դուք։",
    "challenge": "Կկարողանա՞ք խելամտորեն օգտագործել բոլոր 100 վանդակներն ու վերականգնել համաստեղությունները։",
    "motto": "Բախտը նետում է զառերը։ Որոշումը ձերն է։",
    "screenshotsTitle": "Սքրինշոթներ",
    "screenshotsLead": "Դասական ռեժիմը, բլոկների ձևերն ու Puzzle Universe-ի համաստեղությունները։",
    "screenshotsLabel": "Dice Block Puzzle-ի սքրինշոթներ",
    "logoAlt": "Dice Block Puzzle-ի տարբերանշանը՝ զառերով և գունավոր բլոկներով",
    "iconAlt": "Dice Block Puzzle-ի պատկերակը",
    "bannerAlt": "Dice Block Puzzle 10×10՝ տիեզերական բնապատկերի ֆոնին",
    "heroCard": "Զառեր և բլոկներ",
    "step1": "Նետեք երկու իրատեսական եռաչափ զառը։",
    "step2": "Բազմապատկեք զառերի վրա բացված թվերը՝ բլոկի մակերեսը որոշելու համար։",
    "step3": "Ընտրեք հարմար ուղղանկյուն ձևը։",
    "step4": "Մտածված տեղադրեք բլոկը խաղադաշտում։",
    "step5": "Նախապես պլանավորեք հաջորդ քայլերը և խելամտորեն օգտագործեք յուրաքանչյուր վանդակը։",
    "feature1Title": "Զառեր և բլոկներ",
    "feature1Text": "Յուրօրինակ բլոկային գլուխկոտրուկ՝ զառերի նետման մեխանիկայով։",
    "feature2Title": "100 վանդակ",
    "feature2Text": "10×10 խաղադաշտ՝ 100 վանդակով, որտեղ յուրաքանչյուր քայլ կարևոր է։",
    "feature3Title": "Եռաչափ զառեր",
    "feature3Text": "Երկու ինտերակտիվ եռաչափ զառ։",
    "feature4Title": "Ձևի ընտրություն",
    "feature4Text": "Բլոկների բազմազան ձևեր և ռազմավարական ընտրություններ։",
    "feature5Title": "Տիեզերական ճամփորդություն",
    "feature5Text": "10 համաստեղություն և գլուխկոտրուկների 67 մակարդակ։",
    "feature6Title": "Բախտ և տրամաբանություն",
    "feature6Text": "Բախտի, տրամաբանության և տարածական մտածողության համադրություն։",
    "feature7Title": "Պարզ կառավարում",
    "feature7Text": "Պարզ կառավարում և հետաքրքիր գլուխկոտրուկներ։",
    "feature8Title": "Կարճ խաղային փուլեր",
    "feature8Text": "Կարճ խաղային փուլեր, որոնցում մտածված որոշումները բերում են հաջողության։",
    "screenshot1": "Գլխավոր մենյու",
    "screenshot2": "Զառերի նետում",
    "screenshot3": "Բլոկի ձևի ընտրություն",
    "screenshot4": "Դասական ռեժիմ",
    "screenshot5": "Խաղի կարգավորումներ",
    "screenshot6": "Համաստեղության քարտեզ",
    "screenshot7": "Համաստեղության ընտրություն",
    "screenshot8": "Տիեզերական բյուրեղների հավաքում",
    "screenshot9": "ApriTouch-ի այլ խաղեր",
    "screenshot10": "Պատկերի կտրում"
};
  translations.hy.meta['dice-block-puzzle'] = {"title": "Dice Block Puzzle | ApriTouch", "description": "Նետեք երկու զառը, ընտրեք բլոկի ձևը և գտեք դրա համար լավագույն տեղը 10×10 խաղադաշտում։"};
  translations.hy.index.heroCardDice = "Զառեր և բլոկներ";

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
