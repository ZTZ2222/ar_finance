import { PrismaClient } from "@prisma/client"
import type {
  zEmployeeRange,
  zFieldOfActivity,
  zFormOfOwnership,
  zTaxSystem,
  zTimePeriod,
} from "@/types/calculator.schema"
import type { zContact, zSection, zSocial } from "@/types/content.schema"

const prisma = new PrismaClient()

async function seedSections() {
  const sections: zSection[] = [
    {
      uid: 1,
      slug: "hero",
      sectionName_ru: null,
      sectionName_en: null,
      sectionName_ky: null,
      heading_ru: "Мы делаем бухгалтерию простой",
      heading_en: "We make accounting simple",
      heading_ky: "Биз бухгалтердик эсепти жөнөкөйлөштүрөбүз",
      subheading_ru:
        "Оставьте заявку, чтобы узнать, как наши решения могут упростить Ваш бухгалтерский учет",
      subheading_en:
        "Leave a request to find out how our solutions can simplify your accounting",
      subheading_ky:
        "Биздин чечимдер бухгалтердик эсепти кантип жөнөкөйлөштүрө аларын билүү үчүн өтүнүч калтырыңыз",
      primaryButton_ru: "Оставить заявку",
      primaryButton_en: "Submit your application",
      primaryButton_ky: "Өтүнмөңүздү тапшырыңыз",
      secondaryButton_ru: null,
      secondaryButton_en: null,
      secondaryButton_ky: null,
      image: null,
      cards: [],
    },
    {
      uid: 2,
      slug: "about-us",
      sectionName_ru: "О нас",
      sectionName_en: "About us",
      sectionName_ky: "Биз жөнүндө",
      heading_ru: "Мы - AR Finance",
      heading_en: "We are AR Finance",
      heading_ky: "Биз AR Finance",
      subheading_ru:
        "Наша компания специализируется на предоставлении высококачественных профессиональных бухгалтерских услуг для Вашего бизнеса! Наша цель - помочь Вам сфокусироваться на росте Вашего бизнеса, обеспечивая надежное и эффективное финансовое сопровождение",
      subheading_en:
        "Our company specializes in providing high-quality professional accounting services for your business! Our goal is to help you focus on the growth of your business by providing reliable and effective financial support",
      subheading_ky:
        "Биздин компания сиздин бизнесиңиз үчүн жогорку сапаттагы кесипкөй бухгалтердик кызматтарды көрсөтүүгө адистешкен! Биздин максат ишенимдүү жана натыйжалуу каржылык колдоо көрсөтүү аркылуу бизнесиңиздин өсүшүнө көңүл бурууга жардам берүү",
      primaryButton_ru: null,
      primaryButton_en: null,
      primaryButton_ky: null,
      secondaryButton_ru: null,
      secondaryButton_en: null,
      secondaryButton_ky: null,
      image: null,
      cards: [
        {
          sectionId: 2,
          title_ru: null,
          title_en: null,
          title_ky: null,
          description_ru: null,
          description_en: null,
          description_ky: null,
          extra_ru: null,
          extra_en: null,
          extra_ky: null,
          bullets_ru: [],
          bullets_en: [],
          bullets_ky: [],
          image:
            "https://utfs.io/f/b18baf4e-583c-4800-b624-830d5cc718c1-1lywq0.jpg",
        },
        {
          sectionId: 2,
          title_ru: null,
          title_en: null,
          title_ky: null,
          description_ru: null,
          description_en: null,
          description_ky: null,
          extra_ru: null,
          extra_en: null,
          extra_ky: null,
          bullets_ru: [],
          bullets_en: [],
          bullets_ky: [],
          image:
            "https://utfs.io/f/49417da6-c337-4031-9418-ea75ee8d5d0c-1lywq1.jpg",
        },
        {
          sectionId: 2,
          title_ru: null,
          title_en: null,
          title_ky: null,
          description_ru: null,
          description_en: null,
          description_ky: null,
          extra_ru: null,
          extra_en: null,
          extra_ky: null,
          bullets_ru: [],
          bullets_en: [],
          bullets_ky: [],
          image:
            "https://utfs.io/f/f8a7059a-9cca-4564-93b3-c8a78f70136e-1lywq2.jpg",
        },
        {
          sectionId: 2,
          title_ru: null,
          title_en: null,
          title_ky: null,
          description_ru: null,
          description_en: null,
          description_ky: null,
          extra_ru: null,
          extra_en: null,
          extra_ky: null,
          bullets_ru: [],
          bullets_en: [],
          bullets_ky: [],
          image:
            "https://utfs.io/f/f2eee931-b0c0-4067-a6e6-274294715db3-1lywq3.jpg",
        },
        {
          sectionId: 2,
          title_ru: null,
          title_en: null,
          title_ky: null,
          description_ru: null,
          description_en: null,
          description_ky: null,
          extra_ru: null,
          extra_en: null,
          extra_ky: null,
          bullets_ru: [],
          bullets_en: [],
          bullets_ky: [],
          image:
            "https://utfs.io/f/a9344499-8b37-4bf5-83f4-0a06010f564d-1lywq4.jpg",
        },
      ],
    },
    {
      uid: 3,
      slug: "why-us",
      sectionName_ru: "Почему мы?",
      sectionName_en: "Why choose us?",
      sectionName_ky: "Эмне үчүн биз?",
      heading_ru: null,
      heading_en: null,
      heading_ky: null,
      subheading_ru: null,
      subheading_en: null,
      subheading_ky: null,
      primaryButton_ru: null,
      primaryButton_en: null,
      primaryButton_ky: null,
      secondaryButton_ru: null,
      secondaryButton_en: null,
      secondaryButton_ky: null,
      image: null,
      cards: [
        {
          sectionId: 3,
          title_ru: "Профессионализм",
          title_en: "Professionalism",
          title_ky: "Профессионализм",
          description_ru:
            "Опытные бухгалтеры и налоговые консультанты с многолетним стажем",
          description_en:
            "Experienced accountants and tax consultants with a long experience",
          description_ky:
            "Биз бухгалтердик байлдырмалар жана налогдарын байлдырмалары с мүмкүн саламдардым",
          extra_ru: null,
          extra_en: null,
          extra_ky: null,
          bullets_ru: [],
          bullets_en: [],
          bullets_ky: [],
          image: null,
        },
        {
          sectionId: 3,
          title_ru: "Надежность",
          title_en: "Reliability",
          title_ky: "Надежность",
          description_ru:
            "Мы гарантируем точность и своевременность выполнения всех работ",
          description_en:
            "We guarantee accuracy and timely completion of all our work",
          description_ky:
            "Биз бул жердүнүүдүн сүрөткөрүнө үчүн жалпы жараксыздым",
          extra_ru: null,
          extra_en: null,
          extra_ky: null,
          bullets_ru: [],
          bullets_en: [],
          bullets_ky: [],
          image: null,
        },
        {
          sectionId: 3,
          title_ru: "Индивидуальный подход",
          title_en: "Individual approach",
          title_ky: "Индивидуальный подход",
          description_ru:
            "Учитываем особенности вашего бизнеса и предлагаем наилучшие решения",
          description_en:
            "We take into account the specifics of your business and offer the best solutions",
          description_ky:
            "Биз бул жердүнүүдүн сүрөткөрүнө үчүн жалпы жараксыздым",
          extra_ru: null,
          extra_en: null,
          extra_ky: null,
          bullets_ru: [],
          bullets_en: [],
          bullets_ky: [],
          image: null,
        },
        {
          sectionId: 3,
          title_ru: "Конфиденциальность",
          title_en: "Confidentiality",
          title_ky: "Конфиденциальность",
          description_ru:
            "Обеспечиваем полную защиту вашей финансовой информации",
          description_en:
            "We ensure full confidentiality of your financial information",
          description_ky:
            "Биз бул жердүнүүдүн сүрөткөрүнө үчүн жалпы жараксыздым",
          extra_ru: null,
          extra_en: null,
          extra_ky: null,
          bullets_ru: [],
          bullets_en: [],
          bullets_ky: [],
          image: null,
        },
      ],
    },
    {
      uid: 4,
      slug: "cta",
      sectionName_ru: null,
      sectionName_en: null,
      sectionName_ky: null,
      heading_ru: "Спецпредложение для стартаперов",
      heading_en: "Special offer for startups",
      heading_ky: "Стартаптар үчүн атайын сунуш",
      subheading_ru:
        "Для новых клиентов - стартапов мы предлагаем бесплатную консультацию и бесплатный аудит ваших текущих бухгалтерских процессов. Мы оценим вашу ситуацию и предложим наиболее эффективные решения для вашего бизнеса.",
      subheading_en:
        "For new clients - startups we offer free consultation and free audit of your current accounting processes. We assess your situation and suggest the most effective solutions for your business.",
      subheading_ky:
        "Жаңы кардарлар - стартаптар үчүн биз акысыз консультацияларды жана учурдагы бухгалтердик процесстердин акысыз аудитин сунуштайбыз. Биз сиздин абалыңызды баалайбыз жана бизнесиңиз үчүн эң эффективдүү чечимдерди сунуштайбыз.",
      primaryButton_ru: "Получить предложение",
      primaryButton_en: "Get an offer",
      primaryButton_ky: "Сунуш алыңыз",
      secondaryButton_ru: "Подробнее",
      secondaryButton_en: "Learn more",
      secondaryButton_ky: "Көбүрөөк билүү",
      image: null,
      cards: [
        {
          sectionId: 4,
          title_ru: "Дорогие стартаперы!",
          title_en: "Dear startupers!",
          title_ky: "Урматтуу стартаптар!",
          description_ru:
            "Запуск и развитие стартапа – это захватывающее, но одновременно и сложное приключение. Мы понимаем, что вам нужно сосредоточиться на инновациях, привлечении клиентов и развитии вашего бизнеса. Однако финансовые и бухгалтерские вопросы также требуют вашего внимания. Именно здесь мы можем помочь вам! Почему именно мы? Мы – бухгалтерская фирма, специализирующаяся на поддержке стартапов. Наш опыт работы с молодыми компаниями позволяет нам предлагать эффективные и гибкие решения, которые соответствуют вашим уникальным потребностям. Мы знаем, как важна для вас каждая копейка и каждая минута, поэтому предлагаем вам полный спектр бухгалтерских услуг по доступным ценам. Преимущества работы с нами: Индивидуальный подход: Мы предлагаем персонализированные решения, адаптированные под ваш бизнес. Прозрачные цены: Мы понимаем, что стартапы работают с ограниченными бюджетами, поэтому наши тарифы прозрачны и доступны. Технологии и инновации: Мы используем современные технологии для автоматизации бухгалтерского учета, что позволяет сократить время на рутинные операции и минимизировать ошибки. Опыт и надежность: Наши специалисты обладают многолетним опытом работы с стартапами и знают все нюансы бухгалтерского и налогового учета. Специальное предложение Для новых клиентов-стартапов мы предлагаем бесплатную консультацию и бесплатный аудит ваших текущих бухгалтерских процессов. Мы оценим вашу ситуацию и предложим наиболее эффективные решения для вашего бизнеса.",
          description_en:
            "Launching and growing a startup is an exciting but also challenging adventure. We understand that you need to focus on innovation, attracting customers and growing your business. However, financial and accounting issues also require your attention. This is where we can help you! Why us? We are an accounting firm specializing in supporting startups. Our experience working with start-up companies allows us to offer efficient and flexible solutions that fit your unique needs. We know how important every penny and every minute is to you, so we offer you a full range of accounting services at affordable prices. Advantages of working with us: Individual approach: We offer personalized solutions tailored to your business. Transparent Pricing: We understand that startups operate on tight budgets, which is why our rates are transparent and affordable. Technologies and innovations: We use modern technologies to automate accounting, which allows us to reduce time for routine operations and minimize errors. Experience and reliability: Our specialists have many years of experience working with startups and know all the nuances of accounting and tax accounting. Special offer For new startup clients, we offer a free consultation and a free audit of your current accounting processes. We will assess your situation and offer the most effective solutions for your business.",
          description_ky:
            "Стартапты ишке киргизүү жана өнүктүрүү - бул кызыктуу, бирок ошол эле учурда татаал укмуштуу окуя. Сиз инновацияларга, кардарларды тартууга жана бизнесиңизди өнүктүрүүгө басым жасашыңыз керек экенин түшүнөбүз. Бирок, каржы жана бухгалтердик маселелер да сиздин көңүлүңүздү талап кылат. Бул жерде биз сизге жардам бере алабыз! Эмне үчүн биз? Биз стартаптарды колдоо боюнча адистешкен бухгалтердик фирмабыз. Биздин стартап компаниялар менен иштөө тажрыйбабыз сиздин уникалдуу муктаждыктарыңызга туура келген эффективдүү жана ийкемдүү чечимдерди сунуштоого мүмкүндүк берет. Ар бир тыйын жана ар бир мүнөт сиз үчүн канчалык маанилүү экенин билебиз, ошондуктан биз сизге жеткиликтүү баада бухгалтердик кызматтардын толук спектрин сунуштайбыз. Биз менен иштөөнүн артыкчылыктары: Жеке мамиле: Биз сиздин бизнесиңизге ылайыкташтырылган жекече чечимдерди сунуштайбыз. Ачык баа: Биз стартаптар катуу бюджетте иштээрин түшүнөбүз, ошондуктан биздин тарифтер ачык жана жеткиликтүү. Технологиялар жана инновациялар: Биз бухгалтердик эсепти автоматташтыруу үчүн заманбап технологияларды колдонобуз, бул бизге күнүмдүк операциялар үчүн убакытты кыскартууга жана каталарды минималдаштырууга мүмкүндүк берет. Тажрыйба жана ишенимдүүлүк: Биздин адистер стартаптар менен иштөө боюнча көп жылдык тажрыйбага ээ жана бухгалтердик эсептин жана салыктык эсептин бардык нюанстарын билишет. Атайын сунуш Жаңы стартап кардарлар үчүн биз акысыз консультацияларды жана учурдагы бухгалтердик процесстердин акысыз аудитин сунуштайбыз. Биз сиздин абалыңызды баалап, бизнесиңиз үчүн эң эффективдүү чечимдерди сунуштайбыз.",
          extra_ru: "10 000 сом",
          extra_en: "10 000 som",
          extra_ky: "10 000 сом",
          bullets_ru: [],
          bullets_en: [],
          bullets_ky: [],
          image:
            "https://utfs.io/f/51744327-1287-448a-a9b6-e78c3629df32-vbf9gy.png",
        },
      ],
    },
    {
      uid: 5,
      slug: "our-services",
      sectionName_ru: "Наши услуги",
      sectionName_en: "Our services",
      sectionName_ky: "Биздин кызматтар",
      heading_ru: "Получите персонализированное решение",
      heading_en: "Get personalized solutions",
      heading_ky: "Жекече чечимди алыңыз",
      subheading_ru:
        "Мы берем на себя все аспекты ведения бухгалтерского учета, чтобы вы могли сосредоточиться на вашем бизнесе. В наши услуги входят:",
      subheading_en:
        "We take care of all aspects of accounting management to make you focus on your business. Our services include:",
      subheading_ky:
        "Биз бухгалтердик эсептин бардык аспектилерине кам көрөбүз, ошондуктан сиздин бизнесиңизге көңүл буруңуз. Биздин кызматтарга төмөнкүлөр кирет:",
      primaryButton_ru: null,
      primaryButton_en: null,
      primaryButton_ky: null,
      secondaryButton_ru: null,
      secondaryButton_en: null,
      secondaryButton_ky: null,
      image: null,
      cards: [
        {
          sectionId: 5,
          title_ru: "Бухгалтерский учет",
          title_en: "Accounting",
          title_ky: "Бухгалтерский учет",
          description_ru:
            "Мы берем на себя все аспекты ведения бухгалтерского учета, чтобы вы могли сосредоточиться на вашем бизнесе. В наши услуги входят:",
          description_en:
            "We take care of all aspects of accounting management to make you focus on your business. Our services include:",
          description_ky:
            "Биз бухгалтердик эсептин бардык аспектилерине кам көрөбүз, ошондуктан сиздин бизнесиңизге көңүл буруңуз. Биздин кызматтарга төмөнкүлөр кирет:",
          extra_ru: "10 000 сом",
          extra_en: "10 000 som",
          extra_ky: "10 000 сом",
          bullets_ru: [
            "Ведение первичной документации",
            "Расчет заработной платы",
            "Учет доходов и расходов",
            "Подготовка бухгалтерской отчетности",
            "Ведение первичной документации",
            "Расчет заработной платы",
            "Учет доходов и расходов",
            "Подготовка бухгалтерской отчетности",
          ],
          bullets_en: [
            "Maintaining primary documentation",
            "Payroll calculation",
            "Accounting for income and expenses",
            "Preparation of financial statements",
            "Maintaining primary documentation",
            "Payroll calculation",
            "Accounting for income and expenses",
            "Preparation of financial statements",
          ],
          bullets_ky: [
            "Баштапкы документацияны жүргүзүү",
            "Эмгек акыларды эсептөө",
            "Киреше жана чыгашаларды эсепке алуу",
            "Финансылык отчеттуулукту түзүү",
            "Баштапкы документацияны жүргүзүү",
            "Эмгек акысын эсептөө",
            "Кирешелердин жана чыгашалардын эсеби",
            "Финансылык отчеттуулукту түзүү",
          ],
          image:
            "https://utfs.io/f/95fa0e46-254a-4461-8c7f-6cbb78218343-jcfmf7.png",
        },
        {
          sectionId: 5,
          title_ru: "Бухгалтерский учет",
          title_en: "Accounting",
          title_ky: "Бухгалтерский учет",
          description_ru:
            "Мы берем на себя все аспекты ведения бухгалтерского учета, чтобы вы могли сосредоточиться на вашем бизнесе. В наши услуги входят:",
          description_en:
            "We take care of all aspects of accounting management to make you focus on your business. Our services include:",
          description_ky:
            "Биз бухгалтердик эсептин бардык аспектилерине кам көрөбүз, ошондуктан сиздин бизнесиңизге көңүл буруңуз. Биздин кызматтарга төмөнкүлөр кирет:",
          extra_ru: "10 000 сом",
          extra_en: "10 000 som",
          extra_ky: "10 000 сом",
          bullets_ru: [
            "Ведение первичной документации",
            "Расчет заработной платы",
            "Учет доходов и расходов",
            "Подготовка бухгалтерской отчетности",
            "Ведение первичной документации",
            "Расчет заработной платы",
            "Учет доходов и расходов",
            "Подготовка бухгалтерской отчетности",
          ],
          bullets_en: [
            "Maintaining primary documentation",
            "Payroll calculation",
            "Accounting for income and expenses",
            "Preparation of financial statements",
            "Maintaining primary documentation",
            "Payroll calculation",
            "Accounting for income and expenses",
            "Preparation of financial statements",
          ],
          bullets_ky: [
            "Баштапкы документацияны жүргүзүү",
            "Эмгек акыларды эсептөө",
            "Киреше жана чыгашаларды эсепке алуу",
            "Финансылык отчеттуулукту түзүү",
            "Баштапкы документацияны жүргүзүү",
            "Эмгек акысын эсептөө",
            "Кирешелердин жана чыгашалардын эсеби",
            "Финансылык отчеттуулукту түзүү",
          ],
          image:
            "https://utfs.io/f/a9614a44-92cc-4681-94be-b51f0f060091-v9ilef.png",
        },
        {
          sectionId: 5,
          title_ru: "Бухгалтерский учет",
          title_en: "Accounting",
          title_ky: "Бухгалтерский учет",
          description_ru:
            "Мы берем на себя все аспекты ведения бухгалтерского учета, чтобы вы могли сосредоточиться на вашем бизнесе. В наши услуги входят:",
          description_en:
            "We take care of all aspects of accounting management to make you focus on your business. Our services include:",
          description_ky:
            "Биз бухгалтердик эсептин бардык аспектилерине кам көрөбүз, ошондуктан сиздин бизнесиңизге көңүл буруңуз. Биздин кызматтарга төмөнкүлөр кирет:",
          extra_ru: "10 000 сом",
          extra_en: "10 000 som",
          extra_ky: "10 000 сом",
          bullets_ru: [
            "Ведение первичной документации",
            "Расчет заработной платы",
            "Учет доходов и расходов",
            "Подготовка бухгалтерской отчетности",
            "Ведение первичной документации",
            "Расчет заработной платы",
            "Учет доходов и расходов",
            "Подготовка бухгалтерской отчетности",
          ],
          bullets_en: [
            "Maintaining primary documentation",
            "Payroll calculation",
            "Accounting for income and expenses",
            "Preparation of financial statements",
            "Maintaining primary documentation",
            "Payroll calculation",
            "Accounting for income and expenses",
            "Preparation of financial statements",
          ],
          bullets_ky: [
            "Баштапкы документацияны жүргүзүү",
            "Эмгек акыларды эсептөө",
            "Киреше жана чыгашаларды эсепке алуу",
            "Финансылык отчеттуулукту түзүү",
            "Баштапкы документацияны жүргүзүү",
            "Эмгек акысын эсептөө",
            "Кирешелердин жана чыгашалардын эсеби",
            "Финансылык отчеттуулукту түзүү",
          ],
          image:
            "https://utfs.io/f/4fe1d3e3-a837-485a-abd6-df20f7d84ddd-o2tnmy.png",
        },
        {
          sectionId: 5,
          title_ru: "Бухгалтерский учет",
          title_en: "Accounting",
          title_ky: "Бухгалтерский учет",
          description_ru:
            "Мы берем на себя все аспекты ведения бухгалтерского учета, чтобы вы могли сосредоточиться на вашем бизнесе. В наши услуги входят:",
          description_en:
            "We take care of all aspects of accounting management to make you focus on your business. Our services include:",
          description_ky:
            "Биз бухгалтердик эсептин бардык аспектилерине кам көрөбүз, ошондуктан сиздин бизнесиңизге көңүл буруңуз. Биздин кызматтарга төмөнкүлөр кирет:",
          extra_ru: "10 000 сом",
          extra_en: "10 000 som",
          extra_ky: "10 000 сом",
          bullets_ru: [
            "Ведение первичной документации",
            "Расчет заработной платы",
            "Учет доходов и расходов",
            "Подготовка бухгалтерской отчетности",
            "Ведение первичной документации",
            "Расчет заработной платы",
            "Учет доходов и расходов",
            "Подготовка бухгалтерской отчетности",
          ],
          bullets_en: [
            "Maintaining primary documentation",
            "Payroll calculation",
            "Accounting for income and expenses",
            "Preparation of financial statements",
            "Maintaining primary documentation",
            "Payroll calculation",
            "Accounting for income and expenses",
            "Preparation of financial statements",
          ],
          bullets_ky: [
            "Баштапкы документацияны жүргүзүү",
            "Эмгек акыларды эсептөө",
            "Киреше жана чыгашаларды эсепке алуу",
            "Финансылык отчеттуулукту түзүү",
            "Баштапкы документацияны жүргүзүү",
            "Эмгек акысын эсептөө",
            "Кирешелердин жана чыгашалардын эсеби",
            "Финансылык отчеттуулукту түзүү",
          ],
          image:
            "https://utfs.io/f/abeae765-d594-47e9-933e-75911c0485ba-v8zlvs.png",
        },
        {
          sectionId: 5,
          title_ru: "Восстановление бухгалтерского учета",
          title_en: "Accounting restoration",
          title_ky: "Бухгалтердик эсепти калыбына келтирүү",
          description_ru:
            "Если у вас возникли проблемы с бухгалтерским учетом, мы поможем вам их решить. Восстановим учет за любой период, исправим ошибки и приведем документацию в порядок.",
          description_en:
            "If you encounter problems with accounting, we can help you. We will restore your accounting for any period, fix errors and bring your documentation in order.",
          description_ky:
            "Бухгалтердик эсеп менен көйгөйлөрүңүз болсо, аларды чечүүгө жардам беребиз. Биз бухгалтердик эсепти каалаган мезгилде калыбына келтиребиз, каталарды оңдоп, документтерди иретке келтиребиз.",
          extra_ru: "10 000 сом",
          extra_en: "10 000 som",
          extra_ky: "10 000 сом",
          bullets_ru: [],
          bullets_en: [],
          bullets_ky: [],
          image:
            "https://utfs.io/f/19d938cc-5cdc-4726-b0d1-fe86e556cb63-vfujmb.png",
        },
        {
          sectionId: 5,
          title_ru: "Восстановление бухгалтерского учета",
          title_en: "Accounting restoration",
          title_ky: "Бухгалтердик эсепти калыбына келтирүү",
          description_ru:
            "Если у вас возникли проблемы с бухгалтерским учетом, мы поможем вам их решить. Восстановим учет за любой период, исправим ошибки и приведем документацию в порядок.",
          description_en:
            "If you encounter problems with accounting, we can help you. We will restore your accounting for any period, fix errors and bring your documentation in order.",
          description_ky:
            "Бухгалтердик эсеп менен көйгөйлөрүңүз болсо, аларды чечүүгө жардам беребиз. Биз бухгалтердик эсепти каалаган мезгилде калыбына келтиребиз, каталарды оңдоп, документтерди иретке келтиребиз.",
          extra_ru: "10 000 сом",
          extra_en: "10 000 som",
          extra_ky: "10 000 сом",
          bullets_ru: [],
          bullets_en: [],
          bullets_ky: [],
          image:
            "https://utfs.io/f/a0e469e7-999a-46a6-93f3-e006f8398878-osvygl.png",
        },
      ],
    },
    {
      uid: 6,
      slug: "plans",
      sectionName_ru: "Тарифы",
      sectionName_en: "Plans",
      sectionName_ky: "Тарифтер",
      heading_ru: "Прозрачные и доступные цены для вашего бизнеса",
      heading_en: "Transparent and available prices for your business",
      heading_ky: "Ар кандай бизнес үчүн ачык жана жеткиликтүү баалар",
      subheading_ru:
        "Мы предлагаем различные тарифные планы, чтобы вы могли выбрать тот, который наилучшим образом соответствует вашим потребностям и бюджету. Наши тарифы включают все необходимые услуги для ведения бухгалтерского учета, налогового консультирования и финансового планирования.",
      subheading_en:
        "We offer various tariff plans to help you choose the best way to meet your needs and budget. Our plans include all necessary services for accounting management, tax advisory and financial planning.",
      subheading_ky:
        "Биз сиздин муктаждыктарыңызга жана бюджетиңизге эң туура келгенин тандап алуу үчүн ар кандай пландарды сунуштайбыз. Биздин тарифтер бухгалтердик эсеп, салыктык консалтинг жана финансылык пландаштыруу боюнча бардык зарыл кызматтарды камтыйт.",
      primaryButton_ru: "Выбрать тариф",
      primaryButton_en: "Choose a plan",
      primaryButton_ky: "Тарифты таңдаңыз",
      secondaryButton_ru: null,
      secondaryButton_en: null,
      secondaryButton_ky: null,
      image: null,
      cards: [
        {
          sectionId: 6,
          title_ru: "Базовый",
          title_en: "Basic",
          title_ky: "Базовый",
          description_ru: "Идеально подходит для малого бизнеса и стартапов",
          description_en: "Ideal for small businesses and startups",
          description_ky:
            "Бизнес аркылууларда болгону жана стартаптарда болгону",
          extra_ru: "от 7 900 сом",
          extra_en: "from 7,900 som",
          extra_ky: "7 900 сомдон",
          bullets_ru: [
            "Ведение бухгалтерского учета",
            "Подготовка и сдача отчетности",
            "Консультации по основным вопросам налогообложения",
            "Поддержка по email",
          ],
          bullets_en: [
            "Accounting",
            "Preparation and submission of reports",
            "Consultations on basic tax issues",
            "Support by email",
          ],
          bullets_ky: [
            "Бухгалтердик эсеп",
            "Отчетторду даярдоо жана берүү",
            "Салыктын негизги маселелери боюнча консультациялар",
            "Электрондук почта аркылуу колдоо",
          ],
          image:
            "https://utfs.io/f/ed5c0d8e-19b1-4659-948e-ccf29b477bdf-uwpyqb.png",
        },
        {
          sectionId: 6,
          title_ru: "Стандарт",
          title_en: "Standard",
          title_ky: "Стандарт",
          description_ru: "Оптимальный выбор для развивающихся компаний",
          description_en: "Optimal for growing businesses",
          description_ky: "Өнүгүп жаткан компаниялар үчүн оптималдуу тандоо",
          extra_ru: "от 17 900 сом",
          extra_en: "from 17,900 som",
          extra_ky: "17 900 сомдон",
          bullets_ru: [
            "Все перечисленное в тарифе 'Базовый', плюс:",
            "Поддержка по email",
            "Поддержка по email",
            "Поддержка по email",
          ],
          bullets_en: [
            "Everything listed in the 'Basic' plan, plus:",
            "Support by email",
            "Support by email",
            "Support by email",
          ],
          bullets_ky: [
            "«Базовый» тарифте жазылгандардын баары, жана:",
            "Электрондук почта аркылуу колдоо",
            "Электрондук почта аркылуу колдоо",
            "Электрондук почта аркылуу колдоо",
          ],
          image:
            "https://utfs.io/f/510b07b2-d265-4d06-ab29-b5e46636da63-ef6in8.png",
        },
        {
          sectionId: 6,
          title_ru: "Премиум",
          title_en: "Premium",
          title_ky: "Премиум",
          description_ru:
            "Для компаний, которым нужен комплексный подход к бухгалтерскому учету и налоговому планированию",
          description_en:
            "For businesses with complex accounting and tax planning needs",
          description_ky:
            "Бухгалтердик эсепке жана салыкты пландаштырууга комплекстүү мамилени талап кылган компаниялар үчүн",
          extra_ru: "от 37 900 сом",
          extra_en: "from 37,900 som",
          extra_ky: "37 900 сомдон",
          bullets_ru: [
            "Все перечисленное в тарифе 'Стандарт', плюс:",
            "Подготовка и сдача отчетности",
            "Подготовка и сдача отчетности",
            "Подготовка и сдача отчетности",
          ],
          bullets_en: [
            "Everything listed in the 'Standard' plan, plus:",
            "Preparation and submission of reports",
            "Preparation and submission of reports",
            "Preparation and submission of reports",
          ],
          bullets_ky: [
            "«Стандарт» тарифте жазылгандардын баары, жана:",
            "Отчетторду даярдоо жана берүү",
            "Отчетторду даярдоо жана берүү",
            "Отчетторду даярдоо жана берүү",
          ],
          image:
            "https://utfs.io/f/29630769-f477-4707-9003-49eb4f604338-yrs3vs.png",
        },
      ],
    },
    {
      uid: 7,
      slug: "calculator",
      sectionName_ru: "Калькулятор",
      sectionName_en: "Calculator",
      sectionName_ky: "Калькулятор",
      heading_ru: "Рассчитайте стоимость наших услуг",
      heading_en: "Calculate our cost",
      heading_ky: "Биздин кызматтардын баасын эсептеп алыңыз",
      subheading_ru:
        "Мы понимаем, что каждый бизнес уникален и требует индивидуального подхода. Чтобы упростить процесс выбора и расчета стоимости наших услуг, мы предлагаем воспользоваться калькулятором услуг. Это позволит вам быстро и удобно узнать ориентировочную цену наших бухгалтерских услуг, исходя из потребностей вашего бизнеса.",
      subheading_en:
        "We understand that every business is unique and requires an individual approach. To simplify the process of selecting and calculating the cost of our services, we suggest using a service calculator. This will allow you to quickly and conveniently find out the estimated price of our accounting services based on the needs of your business.",
      subheading_ky:
        "Ар бир бизнес уникалдуу экенин жана жеке мамилени талап кылаарын түшүнөбүз. Биздин кызматтардын баасын тандоо жана эсептөө процессин жөнөкөйлөтүү үчүн биз кызмат калькуляторун колдонууну сунуштайбыз. Бул сиздин бизнесиңиздин муктаждыктарына жараша биздин бухгалтердик кызматтардын болжолдуу баасын тез жана ыңгайлуу билүүгө мүмкүндүк берет.",
      primaryButton_ru: null,
      primaryButton_en: null,
      primaryButton_ky: null,
      secondaryButton_ru: null,
      secondaryButton_en: null,
      secondaryButton_ky: null,
      image: null,
      cards: [],
    },
    {
      uid: 8,
      slug: "blog",
      sectionName_ru: "Блог",
      sectionName_en: "Blog",
      sectionName_ky: "Блог",
      heading_ru: "Последние статьи",
      heading_en: "Latest articles",
      heading_ky: "Акыркы макалалар",
      subheading_ru:
        "Здесь вы найдете последние новости, полезные советы и экспертные мнения по вопросам бухгалтерии и финансов. Мы делимся знаниями и опытом, чтобы помочь вашему бизнесу расти и процветать.",
      subheading_en:
        "Here you can find the latest news, useful advice and expert opinions on accounting and finance. We share knowledge and experience to help your business grow and succeed.",
      subheading_ky:
        "Бул жерден сиз бухгалтердик эсеп жана финансы боюнча акыркы жаңылыктарды, пайдалуу кеңештерди жана эксперттердин пикирлерин таба аласыз. Биз сиздин бизнесиңиздин өнүгүшүнө жана гүлдөшүнө жардам берүү үчүн билим жана тажрыйба менен бөлүшөбүз.",
      primaryButton_ru: "Смотреть все статьи",
      primaryButton_en: "View all articles",
      primaryButton_ky: "Бардык макалаларды көрүү",
      secondaryButton_ru: null,
      secondaryButton_en: null,
      secondaryButton_ky: null,
      image: null,
      cards: [],
    },
    {
      uid: 9,
      slug: "our-team",
      sectionName_ru: "Наша команда",
      sectionName_en: "Our team",
      sectionName_ky: "Биздин топ",
      heading_ru: "Ознакомьтесь с нашими специалистами",
      heading_en: "Meet our specialists",
      heading_ky: "Биздин адистер менен таанышыңыз",
      subheading_ru:
        "Наши сотрудники - это высококвалифицированные специалисты с богатым опытом в области бухгалтерии и налогового консультирования. Мы постоянно совершенствуем наши знания и следим за изменениями в законодательстве, чтобы предложить Вам самые актуальные и эффективные решения.",
      subheading_en:
        "Our employees are highly qualified specialists with extensive experience in the field of accounting and tax consulting. We constantly improve our knowledge and monitor changes in legislation in order to offer you the most relevant and effective solutions.",
      subheading_ky:
        "Биздин кызматкерлер бухгалтердик эсеп жана салык консалтинги тармагында чоң тажрыйбасы бар жогорку квалификациялуу адистер. Биз сизге эң актуалдуу жана эффективдүү чечимдерди сунуштоо үчүн билимибизди дайыма өркүндөтүп, мыйзамдардагы өзгөрүүлөргө мониторинг жүргүзүп турабыз.",
      primaryButton_ru: null,
      primaryButton_en: null,
      primaryButton_ky: null,
      secondaryButton_ru: null,
      secondaryButton_en: null,
      secondaryButton_ky: null,
      image: null,
      cards: [
        {
          sectionId: 9,
          title_ru: "Дмитрий Сергеев",
          title_en: "Dmitry Sergeev",
          title_ky: "Дмитрий Сергеев",
          description_ru: "Директор",
          description_en: "Director",
          description_ky: "Директор",
          extra_ru: null,
          extra_en: null,
          extra_ky: null,
          bullets_ru: [],
          bullets_en: [],
          bullets_ky: [],
          image: null,
        },
        {
          sectionId: 9,
          title_ru: "Анна Королева",
          title_en: "Anna Koroleva",
          title_ky: "Анна Королева",
          description_ru: "Генеральный директор",
          description_en: "CEO",
          description_ky: "Башкы директор",
          extra_ru: null,
          extra_en: null,
          extra_ky: null,
          bullets_ru: [],
          bullets_en: [],
          bullets_ky: [],
          image: null,
        },
        {
          sectionId: 9,
          title_ru: "Дмитрий Сергеев",
          title_en: "Dmitry Sergeev",
          title_ky: "Дмитрий Сергеев",
          description_ru: "Директор",
          description_en: "Director",
          description_ky: "Директор",
          extra_ru: null,
          extra_en: null,
          extra_ky: null,
          bullets_ru: [],
          bullets_en: [],
          bullets_ky: [],
          image: null,
        },
      ],
    },
    {
      uid: 10,
      slug: "our-partners",
      sectionName_ru: "Наши партнеры",
      sectionName_en: "Our partners",
      sectionName_ky: "Биздин өнөктөштөр",
      heading_ru: "Вместе мы сильнее",
      heading_en: "Together we are stronger",
      heading_ky: "Бирге биз күчтүүбүз",
      subheading_ru:
        "Мы гордимся нашими партнёрскими отношениями с ведущими компаниями и организациями. Совместная работа с нашими партнёрами позволяет нам предлагать клиентам лучшие решения и инновационные услуги.",
      subheading_en:
        "We are proud of our partners' relationships with leading companies and organizations. The collaborative work with our partners allows us to offer clients the best solutions and innovative services.",
      subheading_ky:
        "Биз алдыңкы ишканалар жана уюмдар менен өнөктөштүгүбүз менен сыймыктанабыз. Биздин өнөктөштөр менен биргелешип иштөө бизге кардарларга мыкты чечимдерди жана инновациялык кызматтарды сунуштоого мүмкүндүк берет.",
      primaryButton_ru: null,
      primaryButton_en: null,
      primaryButton_ky: null,
      secondaryButton_ru: null,
      secondaryButton_en: null,
      secondaryButton_ky: null,
      image: null,
      cards: [
        {
          sectionId: 10,
          title_ru: "Компания 1",
          title_en: "Company 1",
          title_ky: "Компания 1",
          description_ru: null,
          description_en: null,
          description_ky: null,
          extra_ru: null,
          extra_en: null,
          extra_ky: null,
          bullets_ru: [],
          bullets_en: [],
          bullets_ky: [],
          image:
            "https://utfs.io/f/23e2ac09-b493-4c0b-89fa-6411752db802-tp2m4m.png",
        },
        {
          sectionId: 10,
          title_ru: "Компания 2",
          title_en: "Company 2",
          title_ky: "Компания 2",
          description_ru: null,
          description_en: null,
          description_ky: null,
          extra_ru: null,
          extra_en: null,
          extra_ky: null,
          bullets_ru: [],
          bullets_en: [],
          bullets_ky: [],
          image:
            "https://utfs.io/f/60b60663-b0dc-4a26-a558-a785a22d0b68-tp2m4l.png",
        },
        {
          sectionId: 10,
          title_ru: "Компания 3",
          title_en: "Company 3",
          title_ky: "Компания 3",
          description_ru: null,
          description_en: null,
          description_ky: null,
          extra_ru: null,
          extra_en: null,
          extra_ky: null,
          bullets_ru: [],
          bullets_en: [],
          bullets_ky: [],
          image:
            "https://utfs.io/f/7f3d8ae9-88b0-42c2-b431-84a107ca8520-tp2m4k.png",
        },
        {
          sectionId: 10,
          title_ru: "Компания 4",
          title_en: "Company 4",
          title_ky: "Компания 4",
          description_ru: null,
          description_en: null,
          description_ky: null,
          extra_ru: null,
          extra_en: null,
          extra_ky: null,
          bullets_ru: [],
          bullets_en: [],
          bullets_ky: [],
          image:
            "https://utfs.io/f/6cdda794-a51c-498e-ba06-f57381e19c12-tp2m4j.png",
        },
        {
          sectionId: 10,
          title_ru: "Компания 5",
          title_en: "Company 5",
          title_ky: "Компания 5",
          description_ru: null,
          description_en: null,
          description_ky: null,
          extra_ru: null,
          extra_en: null,
          extra_ky: null,
          bullets_ru: [],
          bullets_en: [],
          bullets_ky: [],
          image:
            "https://utfs.io/f/008c0556-37b9-4ed8-b9ba-b682834a67d4-tp2m4i.png",
        },
      ],
    },
    {
      uid: 11,
      slug: "faq",
      sectionName_ru: "Часто задаваемые вопросы",
      sectionName_en: "Frequently asked questions",
      sectionName_ky: "Көп берилүүчү суроолор",
      heading_ru: "Ищете ответы? Мы здесь, чтобы помочь!",
      heading_en: "Looking for answers? We're here to help!",
      heading_ky:
        "Жоопторду издеп жатасызбы? Биз жардам берүү үчүн бул жердебиз!",
      subheading_ru:
        "Свяжитесь с нами, если не нашли нужной информации. Мы всегда рады помочь!",
      subheading_en:
        "Contact us if you don't find the information you need. We're always here to help!",
      subheading_ky:
        "Керектүү маалыматты таппасаңыз, биз менен байланышыңыз. Биз ар дайым жардам берүүгө кубанычтабыз!",
      primaryButton_ru: null,
      primaryButton_en: null,
      primaryButton_ky: null,
      secondaryButton_ru: null,
      secondaryButton_en: null,
      secondaryButton_ky: null,
      image: null,
      cards: [
        {
          sectionId: 11,
          title_ru: "В каких случаях предприниматель должен выставить ЭСФ?",
          title_en: "When should an entrepreneur apply for an ESF?",
          title_ky: "Кандай учурларда ишкер ESF чыгарышы керек?",
          description_ru:
            "Согласно постановлению правительства от 19 июня 2020 года №343, применение электронной счет-фактуры обязательно для налогоплательщика НДС и налогоплательщика, осуществляющего импорт и/или экспорт товаров.",
          description_en:
            "According to the Act of 19 June 2020, No. 343, the application of an electronic account is mandatory for the tax payer, tax payer, importer and exporter.",
          description_ky:
            "Өкмөттүн 2020-жылдын 19-июнундагы №343 токтомуна ылайык, электрондук эсеп-фактураны колдонуу КНС боюнча салык төлөөчүлөр жана товарларды импорттоочу жана/же экспорттоочу салык төлөөчүлөр үчүн милдеттүү болуп саналат.",
          extra_ru: null,
          extra_en: null,
          extra_ky: null,
          bullets_ru: [],
          bullets_en: [],
          bullets_ky: [],
          image: null,
        },
        {
          sectionId: 11,
          title_ru: "В каких случаях предприниматель должен выставить ЭСФ?",
          title_en: "When should an entrepreneur apply for an ESF?",
          title_ky: "Кандай учурларда ишкер ESF чыгарышы керек?",
          description_ru:
            "Согласно постановлению правительства от 19 июня 2020 года №343, применение электронной счет-фактуры обязательно для налогоплательщика НДС и налогоплательщика, осуществляющего импорт и/или экспорт товаров.",
          description_en:
            "According to the Act of 19 June 2020, No. 343, the application of an electronic account is mandatory for the tax payer, tax payer, importer and exporter.",
          description_ky:
            "Өкмөттүн 2020-жылдын 19-июнундагы №343 токтомуна ылайык, электрондук эсеп-фактураны колдонуу КНС боюнча салык төлөөчүлөр жана товарларды импорттоочу жана/же экспорттоочу салык төлөөчүлөр үчүн милдеттүү болуп саналат.",
          extra_ru: null,
          extra_en: null,
          extra_ky: null,
          bullets_ru: [],
          bullets_en: [],
          bullets_ky: [],
          image: null,
        },
      ],
    },
  ]

  await prisma.section.deleteMany({})

  for (const section of sections) {
    const { cards, ...rest } = section
    await prisma.section.create({
      data: rest,
    })

    if (cards.length > 0) {
      await prisma.card.createMany({
        data: cards,
      })
    }
  }

  console.log("Sections have been seeded.")
}

async function seedAdminUser() {
  const adminEmail = process.env.ADMIN_EMAIL
  const adminPassword = process.env.ADMIN_PASSWORD

  if (!adminEmail || !adminPassword) {
    throw new Error(
      "ADMIN_EMAIL and ADMIN_PASSWORD must be set in environment variables.",
    )
  }

  await prisma.user.deleteMany({})

  await prisma.user.create({
    data: {
      name: "Admin",
      email: adminEmail,
      password: adminPassword,
      role: "ADMIN",
    },
  })

  console.log("Admin user has been seeded.")
}

async function seedSocialsAndContacts() {
  const contacts: zContact[] = [
    {
      name_ru: "+996 500 30 10 80",
      name_en: "+996 500 30 10 80",
      name_ky: "+996 500 30 10 80",
      link: "+996500301080",
      icon: "https://utfs.io/f/a5f3239f-6d71-4c3c-ae65-d93198a68c8c-527hby.png",
    },
    {
      name_ru: "пн - пт с 9:00 до 18:00",
      name_en: "Mon - Fri from 9:00 to 18:00",
      name_ky: "Дүйшөмбү - Жума 9:00дөн 18:00гө чейин",
      link: "",
      icon: "https://utfs.io/f/a1a67591-1054-470c-9503-d893e337d57e-59a9cu.png",
    },
    {
      name_ru: "г.Бишкек, ул. Абдрахманова 1",
      name_en: "Bishkek, st. Abdrakhmanova 1",
      name_ky: "Бишкек ш., Абдрахманов көч. 1",
      link: "https://2gis.kg/bishkek",
      icon: "https://utfs.io/f/3c0e240a-aff6-4d67-9157-70c2f9c5ecd2-gd5dui.png",
    },
    {
      name_ru: "arfinance@gmail.com",
      name_en: "arfinance@gmail.com",
      name_ky: "arfinance@gmail.com",
      link: "arfinance@gmail.com",
      icon: "https://utfs.io/f/ba118dcd-796d-49ff-b4be-a351d341bcad-p1fe3n.png",
    },
  ]
  const socials: zSocial[] = [
    {
      name: "whatsapp",
      link: "https://api.whatsapp.com/send?phone=996555000555",
      icon: "https://utfs.io/f/2205a91a-8b76-4ae0-9d18-b28aecf696a3-88rxlz.png",
    },
    {
      name: "instagram",
      link: "https://www.instagram.com/",
      icon: "https://utfs.io/f/3b1be131-bd11-4c66-b012-2af923e4ad5d-dg0vuz.png",
    },
    {
      name: "facebook",
      link: "https://www.facebook.com/",
      icon: "https://utfs.io/f/ff7099e5-425c-4e41-bbf0-e08edbca06c0-qvoe8r.png",
    },
    {
      name: "telegram",
      link: "https://t.me/",
      icon: "https://utfs.io/f/39e23303-fcf3-4583-af0d-9b74dda14c80-27pr6y.png",
    },
    {
      name: "tiktok",
      link: "https://www.tiktok.com/",
      icon: "https://utfs.io/f/e455af9b-6c8c-4a50-8bbf-5e5309a0b018-bid8v.png",
    },
  ]

  prisma.contact.deleteMany({})
  prisma.social.deleteMany({})

  // Contacts
  await prisma.contact.createMany({ data: contacts })

  // Socials
  await prisma.social.createMany({ data: socials })

  console.log("Socials and contacts have been seeded.")
}

async function seedCalculatorOptions() {
  const formsOfOwnership: zFormOfOwnership[] = [
    {
      name_ru: "ИП",
      name_en: "SP",
      name_ky: "ЖИ",
    },
    {
      name_ru: "ОсОО",
      name_en: "LLC",
      name_ky: "ЖЧК",
    },
  ]
  const fieldsOfActivity: zFieldOfActivity[] = [
    {
      name_ru: "Услуги",
      name_en: "Services",
      name_ky: "Кызматтар",
    },
    {
      name_ru: "Торговля",
      name_en: "Trade",
      name_ky: "Соода",
    },
  ]
  const taxSystems: zTaxSystem[] = [
    {
      name_ru: "Общий налоговый режим",
      name_en: "General tax regime",
      name_ky: "Жалпы салык режими",
    },
  ]
  const employeeRanges: zEmployeeRange[] = [
    {
      range: "1-5",
    },
  ]
  const timePeriods: zTimePeriod[] = [
    {
      period_ru: "1 месяц",
      period_en: "1 month",
      period_ky: "1 ай",
    },
    {
      period_ru: "3 месяца",
      period_en: "3 months",
      period_ky: "3 ай",
    },
    {
      period_ru: "6 месяцев",
      period_en: "6 months",
      period_ky: "6 ай",
    },
    {
      period_ru: "1 год",
      period_en: "1 year",
      period_ky: "1 жыл",
    },
  ]

  prisma.formOfOwnership.deleteMany({})
  prisma.fieldOfActivity.deleteMany({})
  prisma.taxSystem.deleteMany({})
  prisma.employeeRange.deleteMany({})
  prisma.timePeriod.deleteMany({})

  // formsOfOwnership
  await prisma.formOfOwnership.createMany({ data: formsOfOwnership })

  // fieldsOfActivity
  await prisma.fieldOfActivity.createMany({ data: fieldsOfActivity })

  // taxSystems
  await prisma.taxSystem.createMany({ data: taxSystems })

  // employeeRanges
  await prisma.employeeRange.createMany({ data: employeeRanges })

  // timePeriods
  await prisma.timePeriod.createMany({ data: timePeriods })

  console.log("Calculator options have been seeded.")
}

// async function seedPlans() {
//   const plans: zPlanCreate[] = [
//     {
//       title_ru: "Базовый",
//       title_en: "Basic",
//       title_ky: "Базовый",
//       description_ru: "Идеально подходит для малого бизнеса и стартапов",
//       description_en: "Ideal for small businesses and startups",
//       description_ky: "Бизнес аркылууларда болгону жана стартаптарда болгону",
//       price_ru: "от 7 900 сом",
//       price_en: "from 7,900 som",
//       price_ky: "7 900 сомдон",
//       bullets_ru: [
//         "Ведение бухгалтерского учета",
//         "Подготовка и сдача отчетности",
//         "Консультации по основным вопросам налогообложения",
//         "Поддержка по email",
//       ],
//       bullets_en: [
//         "Accounting",
//         "Preparation and submission of reports",
//         "Consultations on basic tax issues",
//         "Support by email",
//       ],
//       bullets_ky: [
//         "Бухгалтердик эсеп",
//         "Отчетторду даярдоо жана берүү",
//         "Салыктын негизги маселелери боюнча консультациялар",
//         "Электрондук почта аркылуу колдоо",
//       ],
//       icon: "/assets/plan-icons/zap.png",
//     },
//     {
//       title_ru: "Стандарт",
//       title_en: "Standard",
//       title_ky: "Стандарт",
//       description_ru: "Оптимальный выбор для развивающихся компаний",
//       description_en: "Optimal for growing businesses",
//       description_ky: "Өнүгүп жаткан компаниялар үчүн оптималдуу тандоо",
//       price_ru: "от 17 900 сом",
//       price_en: "from 17,900 som",
//       price_ky: "17 900 сомдон",
//       bullets_ru: [
//         "Все перечисленное в тарифе 'Базовый', плюс:",
//         "Поддержка по email",
//         "Поддержка по email",
//         "Поддержка по email",
//       ],
//       bullets_en: [
//         "Everything listed in the 'Basic' plan, plus:",
//         "Support by email",
//         "Support by email",
//         "Support by email",
//       ],
//       bullets_ky: [
//         "«Базовый» тарифте жазылгандардын баары, жана:",
//         "Электрондук почта аркылуу колдоо",
//         "Электрондук почта аркылуу колдоо",
//         "Электрондук почта аркылуу колдоо",
//       ],
//       icon: "/assets/plan-icons/cluster.png",
//     },
//     {
//       title_ru: "Премиум",
//       title_en: "Premium",
//       title_ky: "Премиум",
//       description_ru:
//         "Для компаний, которым нужен комплексный подход к бухгалтерскому учету и налоговому планированию",
//       description_en:
//         "For businesses with complex accounting and tax planning needs",
//       description_ky:
//         "Бухгалтердик эсепке жана салыкты пландаштырууга комплекстүү мамилени талап кылган компаниялар үчүн",
//       price_ru: "от 37 900 сом",
//       price_en: "from 37,900 som",
//       price_ky: "37 900 сомдон",
//       bullets_ru: [
//         "Все перечисленное в тарифе 'Стандарт', плюс:",
//         "Подготовка и сдача отчетности",
//         "Подготовка и сдача отчетности",
//         "Подготовка и сдача отчетности",
//       ],
//       bullets_en: [
//         "Everything listed in the 'Standard' plan, plus:",
//         "Preparation and submission of reports",
//         "Preparation and submission of reports",
//         "Preparation and submission of reports",
//       ],
//       bullets_ky: [
//         "«Стандарт» тарифте жазылгандардын баары, жана:",
//         "Отчетторду даярдоо жана берүү",
//         "Отчетторду даярдоо жана берүү",
//         "Отчетторду даярдоо жана берүү",
//       ],
//       icon: "/assets/plan-icons/star.png",
//     },
//   ]
//   prisma.plan.deleteMany({})
//   await prisma.plan.createMany({ data: plans })
//   console.log("Plans have been seeded.")
// }
async function main() {
  await seedSections()
  await seedAdminUser()
  await seedSocialsAndContacts()
  await seedCalculatorOptions()
  // await seedPlans()
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
