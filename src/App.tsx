import { useEffect, useMemo, useState } from 'react';
import {
  Award,
  BarChart3,
  BriefcaseBusiness,
  Camera,
  ChevronLeft,
  ChevronRight,
  Mail,
  MapPin,
  Moon,
  Phone,
  Send,
  Sparkles,
  Sun,
  Target,
  TrendingUp,
  Users,
  X,
} from 'lucide-react';
import './App.css';

type Lang = 'uz' | 'ru' | 'en';
type Theme = 'dark' | 'light';

const smmProjects = ['Chococream', 'ABCO', 'Garant Textile', 'Maqsad by Hilola'];
const targetProjects = ['Lobar Gullari', 'La Baguette', 'Gagarin Plaza'];
const smmLogos = [
  '/assets/optimized/logos/logo1.webp',
  '/assets/optimized/logos/logo4.webp',
  '/assets/optimized/logos/logo3.webp',
  '/assets/optimized/logos/logo2.webp',
];
const targetLogos = [
  '/assets/optimized/logos/logo5.webp',
  '/assets/optimized/logos/logo7.webp',
  '/assets/optimized/logos/logo6.webp',
];

const resultShots = [
  '/assets/optimized/results/result-1.webp',
  '/assets/optimized/results/result-2.webp',
  '/assets/optimized/results/result-3.webp',
  '/assets/optimized/results/result-4.webp',
  '/assets/optimized/results/result-5.webp',
  '/assets/optimized/results/result-6.webp',
  '/assets/optimized/results/result-7.webp',
  '/assets/optimized/results/result-8.webp',
  '/assets/optimized/results/result-9.webp',
  '/assets/optimized/results/result-10.webp',
  '/assets/optimized/results/result-11.webp',
  '/assets/optimized/results/result-12.webp',
];

const certificateImages = [
  '/assets/optimized/certificates/certificate1.webp',
  '/assets/optimized/certificates/certificate2.webp',
];

const content = {
  uz: {
    portfolio: 'Portfolio',
    roleTag: 'SMM | Targetolog',
    roleTitle: 'SMM va Targetolog',
    roleDescription:
      "SMM-mutaxassis va targetolog. SMM va targetda 2 yildan ortiq tajriba, moliya sohasida 4 yillik tajriba. 10+ loyiha bilan ishlaganman: Chococream, ABCO, Garant Textile, Maqsad by Hilola va boshqalar.",
    stats: ['Reklama qamrovi', 'Haqiqiy obunachilar', 'Video ko`rishlar'],
    contactsTitle: 'Kontaktlar',
    skillsTitle: 'Asosiy ko`nikmalar',
    skills: ['Kontent strategiya va analitika', 'Targetni noldan yoqish', 'Gipotezalarni test qilish', 'Loyiha kommunikatsiyasi'],
    resumeTitle: 'Rezyume va sertifikatlar',
    experienceTitle: 'Tajriba',
    coursesTitle: 'Kurslar',
    experience: ['SMM/Target: 2+ yil', 'Moliya bo`yicha tajriba: 4 yil', 'Loyihalar: 10+'],
    courses: ['RiOne stars 2.0', 'Space academy SMM praktikum', 'Sabriya SMM Mobilografiya', 'RiOne mini', 'Rione 7.0'],
    smmTitle: 'SMM keyslar',
    targetTitle: 'Target keyslar',
    resultsTitle: 'Loyihalar natijalari',
    resultsSubtitle: 'Statistika, qamrov va auditoriya o`sishi bo`yicha real screenshotlar.',
    certTitle: 'Sertifikatlar',
    storyTitle: 'Story Maker',
    storyDescription:
      'Story-maker sifatida ham ishlayman: e`tiborni ushlaydigan, shaxsiy brendni kuchaytiradigan va maqsadli harakatga olib keladigan stories seriyalarini yarataman.',
    storyFeatures: ['Vov-qiladigan vizual', 'Story ssenariylari', 'Sotuvga yo`naltirilgan kontent'],
    connectTitle: 'Bog`lanish',
    contactCity: 'Tashkent, Mirzo Ulugbek',
    light: 'Light',
    dark: 'Dark',
    smmResults: [
      'Faollik oshdi va kiruvchi so`rovlar oqimi barqarorlashdi.',
      'Kontent strategiya tizimlashtirildi, brend tanilishi kuchaydi.',
      'Brend qadoqlandi va auditoriya ishonchi oshdi.',
      'Kontent retention va qamrovda sezilarli o`sish berdi.',
    ],
    targetResults: [
      'Lobar Gullari uchun maqsadli auditoriya jalb qilinib, brend ko`rinishi va murojaatlar oqimi kuchaytirildi.',
      'La Baguette loyihasida HoReCa yo`nalishi uchun target reklama orqali ishonchli murojaatlar yo`lga qo`yildi.',
      'Gagarin Plaza uchun premium auditoriyaga qaratilgan reklama va vizual pozitsiyalash kuchaytirildi.',
    ],
  },
  ru: {
    portfolio: 'Portfolio',
    roleTag: 'SMM | Targetolog',
    roleTitle: 'СММ и Таргетолог',
    roleDescription:
      'SMM-mutaxassis va targetolog. Опыт в SMM и таргете более 2 лет, в финансовой сфере 4 года. Работала с 10+ проектами: Chococream, ABCO, Garant Textile, Maqsad by Hilola и другие.',
    stats: ['Охват рекламы', 'Реальные подписчики', 'Просмотры видео'],
    contactsTitle: 'Контакты',
    skillsTitle: 'Ключевые навыки',
    skills: ['Контент-стратегия и аналитика', 'Запуск таргета с нуля', 'Тестирование гипотез', 'Проектная коммуникация'],
    resumeTitle: 'Резюме и сертификаты',
    experienceTitle: 'Опыт',
    coursesTitle: 'Курсы',
    experience: ['SMM/Target: 2+ года', 'Финансовый бэкграунд: 4 года', 'Проекты: 10+'],
    courses: ['RiOne stars 2.0', 'Space academy SMM praktikum', 'Sabriya SMM Mobilografiya', 'RiOne mini', 'Rione 7.0'],
    smmTitle: 'Кейсы SMM',
    targetTitle: 'Кейсы по таргету',
    resultsTitle: 'Результаты по проектам',
    resultsSubtitle: 'Реальные скриншоты статистики, охватов и динамики аккаунтов.',
    certTitle: 'Сертификаты',
    storyTitle: 'Сторис-мейкер',
    storyDescription:
      'Дополнительно работаю как сторис-мейкер: создаю визуальные серии сторис, которые удерживают внимание, усиливают личный бренд и доводят аудиторию до целевого действия.',
    storyFeatures: ['Вовлекающий визуал', 'Сценарии сторис', 'Контент под продажи'],
    connectTitle: 'Связаться',
    contactCity: 'Tashkent, Mirzo Ulugbek',
    light: 'Light',
    dark: 'Dark',
    smmResults: [
      'Рост вовлеченности и стабильный входящий поток заявок.',
      'Системная контент-стратегия и укрепление узнаваемости бренда.',
      'Упаковка бренда и рост доверия аудитории к продукту.',
      'Контент с высоким удержанием и заметный охват в нише.',
    ],
    targetResults: [
      'Для Lobar Gullari через таргет привлекалась целевая аудитория, усиливались узнаваемость бренда и поток обращений.',
      'Для La Baguette был выстроен поток более целевых обращений по HoReCa-направлению через таргетированную рекламу.',
      'Для Gagarin Plaza усилили премиальное позиционирование и рекламу на нужную аудиторию.',
    ],
  },
  en: {
    portfolio: 'Portfolio',
    roleTag: 'SMM | Targetologist',
    roleTitle: 'SMM & Targetologist',
    roleDescription:
      'SMM specialist and targetologist with 2+ years in SMM/ads and 4 years in finance. Worked with 10+ projects including Chococream, ABCO, Garant Textile, and Maqsad by Hilola.',
    stats: ['Ad Reach', 'Real Followers', 'Video Views'],
    contactsTitle: 'Contacts',
    skillsTitle: 'Core Skills',
    skills: ['Content strategy & analytics', 'Launch ads from scratch', 'Hypothesis testing', 'Project communication'],
    resumeTitle: 'Resume & Certificates',
    experienceTitle: 'Experience',
    coursesTitle: 'Courses',
    experience: ['SMM/Target: 2+ years', 'Finance background: 4 years', 'Projects: 10+'],
    courses: ['RiOne stars 2.0', 'Space academy SMM practicum', 'Sabriya SMM Mobilography', 'RiOne mini', 'Rione 7.0'],
    smmTitle: 'SMM Cases',
    targetTitle: 'Target Cases',
    resultsTitle: 'Project Results',
    resultsSubtitle: 'Real screenshots of analytics, reach, and growth dynamics.',
    certTitle: 'Certificates',
    storyTitle: 'Story Maker',
    storyDescription:
      'I also work as a story maker: building visual story sequences that hold attention, strengthen personal branding, and drive action.',
    storyFeatures: ['High-retention visuals', 'Story scripts', 'Sales-focused content'],
    connectTitle: 'Let`s Connect',
    contactCity: 'Tashkent, Mirzo Ulugbek',
    light: 'Light',
    dark: 'Dark',
    smmResults: [
      'Higher engagement with a steady flow of incoming leads.',
      'Systematic content strategy and stronger brand awareness.',
      'Clear brand packaging and stronger audience trust.',
      'High-retention content with strong niche reach.',
    ],
    targetResults: [
      'For Lobar Gullari, targeted campaigns helped attract the right audience and strengthen inbound interest.',
      'For La Baguette, targeted ads were focused on generating more qualified HoReCa inquiries.',
      'For Gagarin Plaza, premium positioning and audience-focused ad delivery were strengthened.',
    ],
  },
} as const;

function App() {
  const [lang, setLang] = useState<Lang>('uz');
  const [theme, setTheme] = useState<Theme>('light');
  const [lightboxItems, setLightboxItems] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isIntroVisible, setIsIntroVisible] = useState(true);
  const c = content[lang];

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') as Theme | null;
    const savedLang = localStorage.getItem('portfolio-lang') as Lang | null;
    if (savedTheme) setTheme(savedTheme);
    if (savedLang) setLang(savedLang);
  }, []);

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('portfolio-lang', lang);
  }, [lang]);

  useEffect(() => {
    const introTimer = window.setTimeout(() => {
      setIsIntroVisible(false);
    }, 1700);

    return () => {
      window.clearTimeout(introTimer);
    };
  }, []);

  const logoStrip = useMemo(() => [...smmLogos, ...targetLogos], []);
  const duplicatedLogos = useMemo(() => [...logoStrip, ...logoStrip], [logoStrip]);

  const smmCases = smmProjects.map((project, index) => ({
    project,
    logo: smmLogos[index],
    result: c.smmResults[index],
  }));

  const targetCases = targetProjects.map((project, index) => ({
    project,
    logo: targetLogos[index],
    result: c.targetResults[index],
  }));

  const openLightbox = (items: string[], index: number) => {
    setLightboxItems(items);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxItems([]);
    setLightboxIndex(0);
  };

  const showPrev = () => {
    setLightboxIndex((prev) => (prev - 1 + lightboxItems.length) % lightboxItems.length);
  };

  const showNext = () => {
    setLightboxIndex((prev) => (prev + 1) % lightboxItems.length);
  };

  return (
    <div
      className={`portfolio-page ${theme === 'light' ? 'light-mode' : ''} ${isIntroVisible ? 'is-entering' : 'is-ready'}`}
    >
      <div className="portfolio-noise" />
      <div className="page-intro" aria-hidden="true">
        <div className="page-intro__curtain page-intro__curtain--left" />
        <div className="page-intro__curtain page-intro__curtain--right" />
        <div className="page-intro__content">
          <p className="page-intro__eyebrow">{c.portfolio}</p>
          <p className="page-intro__name">Maftuna Rakhimova</p>
          <span className="page-intro__line" />
          <p className="page-intro__role">{c.roleTag}</p>
        </div>
      </div>
      <main className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-8 md:px-6 lg:grid-cols-[340px_minmax(0,1fr)] lg:py-12">
        <aside className="portfolio-sidebar portfolio-surface slide-up intro-1 space-y-6 rounded-3xl p-6 lg:sticky lg:top-8 lg:h-fit lg:self-start">
          <div className="toolbar-shell flex items-center justify-between gap-2 rounded-xl p-2">
            <div className="lang-switch">
              {(['uz', 'ru', 'en'] as Lang[]).map((language) => (
                <button
                  key={language}
                  type="button"
                  className={`lang-btn ${lang === language ? 'active' : ''}`}
                  onClick={() => setLang(language)}
                >
                  {language.toUpperCase()}
                </button>
              ))}
            </div>
            <button
              type="button"
              className="theme-btn"
              onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
              {theme === 'dark' ? c.light : c.dark}
            </button>
          </div>

          <div className="flex items-center gap-4">
            <div className="avatar-shell h-24 w-24 shrink-0 rounded-full p-1">
              <div className="avatar-core flex h-full w-full items-center justify-center rounded-full text-xl font-semibold">
                <img
                  src="/assets/optimized/avatar.webp"
                  alt="Maftuna Rakhimova"
                  className="avatar-image"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
            </div>
            <div>
              <p className="eyebrow-text text-xs uppercase tracking-[0.35em]">{c.portfolio}</p>
              <h1 className="display-copy font-display text-2xl font-semibold leading-tight">
                Maftuna <br />
                Rakhimova
              </h1>
            </div>
          </div>

          <div className="portfolio-subcard space-y-4 rounded-2xl p-4">
            <h2 className="subheading text-xs font-medium uppercase tracking-[0.35em]">{c.contactsTitle}</h2>
            <ul className="body-copy space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={16} className="muted-icon" />
                <span>+998 95 717 71 77</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="muted-icon" />
                <span>mrakhimova820@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Send size={16} className="muted-icon" />
                <span>@rm7177</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="muted-icon" />
                <span>{c.contactCity}</span>
              </li>
            </ul>
          </div>

          <div className="portfolio-subcard space-y-4 rounded-2xl p-4">
            <h2 className="subheading text-xs font-medium uppercase tracking-[0.35em]">{c.skillsTitle}</h2>
            <ul className="body-copy space-y-2 text-sm">
              {c.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </aside>

        <section className="space-y-6">
          <article className="portfolio-panel slide-up intro-2 rounded-3xl p-6 md:p-8">
            <p className="eyebrow-text text-xs uppercase tracking-[0.35em]">{c.roleTag}</p>
            <h2 className="display-copy font-display mt-2 text-4xl font-semibold md:text-6xl">{c.roleTitle}</h2>
            <p className="body-copy mt-6 max-w-3xl text-base leading-relaxed">{c.roleDescription}</p>
            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="stat-card">
                <TrendingUp size={18} />
                <p>4M+</p>
                <span>{c.stats[0]}</span>
              </div>
              <div className="stat-card">
                <Users size={18} />
                <p>20K+</p>
                <span>{c.stats[1]}</span>
              </div>
              <div className="stat-card">
                <BarChart3 size={18} />
                <p>1M+</p>
                <span>{c.stats[2]}</span>
              </div>
            </div>

            <div className="logo-marquee mt-7">
              <div className="logo-marquee-track">
                {duplicatedLogos.map((logo, index) => (
                  <button
                    type="button"
                    key={`${logo}-${index}`}
                    className="logo-pill"
                    onClick={() => openLightbox(logoStrip, index % logoStrip.length)}
                  >
                    <img src={logo} alt={`Project logo ${index + 1}`} loading="lazy" />
                  </button>
                ))}
              </div>
            </div>
          </article>

          <article className="portfolio-panel slide-up intro-3 rounded-3xl p-6 md:p-8">
            <h3 className="section-title">
              <Award size={17} />
              {c.resumeTitle}
            </h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="panel">
                <p className="panel-title">{c.experienceTitle}</p>
                {c.experience.map((line) => (
                  <p key={line} className="panel-text">
                    {line}
                  </p>
                ))}
              </div>
              <div className="panel">
                <p className="panel-title">{c.coursesTitle}</p>
                <ul className="panel-list">
                  {c.courses.map((course) => (
                    <li key={course}>{course}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

          <article className="portfolio-panel slide-up intro-4 rounded-3xl p-6 md:p-8">
            <h3 className="section-title">
              <BriefcaseBusiness size={17} />
              {c.smmTitle}
            </h3>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {smmCases.map((item, index) => (
                <div key={item.project} className="case-card">
                  <button
                    type="button"
                    className="case-logo"
                    onClick={() => openLightbox(smmLogos, index)}
                  >
                    <img src={item.logo} alt={`${item.project} logo`} loading="lazy" />
                  </button>
                  <div>
                    <p className="case-title">{item.project}</p>
                    <p className="case-result">{item.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="portfolio-panel slide-up intro-5 rounded-3xl p-6 md:p-8">
            <h3 className="section-title">
              <Target size={17} />
              {c.targetTitle}
            </h3>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {targetCases.map((item, index) => (
                <div key={item.project} className="case-card">
                  <button
                    type="button"
                    className="case-logo"
                    onClick={() => openLightbox(targetLogos, index)}
                  >
                    <img src={item.logo} alt={`${item.project} logo`} loading="lazy" />
                  </button>
                  <div>
                    <p className="case-title">{item.project}</p>
                    <p className="case-result">{item.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="portfolio-panel slide-up intro-6 rounded-3xl p-6 md:p-8">
            <h3 className="section-title">
              <BarChart3 size={17} />
              {c.resultsTitle}
            </h3>
            <p className="eyebrow-text mt-4 text-sm">{c.resultsSubtitle}</p>
            <div className="result-grid mt-5">
              {resultShots.map((shot, index) => (
                <button
                  type="button"
                  key={shot}
                  className="result-card"
                  onClick={() => openLightbox(resultShots, index)}
                >
                  <img src={shot} alt={`Result screenshot ${index + 1}`} loading="lazy" />
                </button>
              ))}
            </div>
          </article>

          <article className="portfolio-panel slide-up intro-7 rounded-3xl p-6 md:p-8">
            <h3 className="section-title">
              <Award size={17} />
              {c.certTitle}
            </h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {certificateImages.map((certificate, index) => (
                <button
                  type="button"
                  key={certificate}
                  className="cert-card"
                  onClick={() => openLightbox(certificateImages, index)}
                >
                  <img src={certificate} alt={`Sertificate ${index + 1}`} loading="lazy" />
                </button>
              ))}
            </div>
          </article>

          <article className="portfolio-panel slide-up intro-8 rounded-3xl p-6 md:p-8">
            <h3 className="section-title">
              <Camera size={17} />
              {c.storyTitle}
            </h3>
            <p className="body-copy mt-4 max-w-3xl">{c.storyDescription}</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {c.storyFeatures.map((feature) => (
                <div key={feature} className="micro-feature">
                  <Sparkles size={16} />
                  {feature}
                </div>
              ))}
            </div>
          </article>

          <article className="portfolio-panel slide-up intro-8 rounded-3xl p-6 md:p-8">
            <h3 className="section-title">
              <Mail size={17} />
              {c.connectTitle}
            </h3>
            <div className="body-copy mt-5 grid gap-3 sm:grid-cols-2">
              <a className="contact-tile" href="tel:+998957177177">
                +998 95 717 71 77
              </a>
              <a className="contact-tile" href="mailto:mrakhimova820@gmail.com">
                mrakhimova820@gmail.com
              </a>
              <a className="contact-tile" href="https://t.me/rm7177" target="_blank" rel="noreferrer">
                Telegram: @rm7177
              </a>
              <div className="contact-tile">{c.contactCity}</div>
            </div>
          </article>
        </section>
      </main>

      {lightboxItems.length > 0 && (
        <div className="lightbox" onClick={closeLightbox}>
          <button type="button" className="lightbox-close" onClick={closeLightbox} aria-label="Close">
            <X size={18} />
          </button>
          {lightboxItems.length > 1 && (
            <>
              <button
                type="button"
                className="lightbox-nav left"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrev();
                }}
                aria-label="Previous"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                className="lightbox-nav right"
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
                aria-label="Next"
              >
                <ChevronRight size={18} />
              </button>
            </>
          )}
          <img
            src={lightboxItems[lightboxIndex]}
            alt="Preview"
            className="lightbox-image"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default App;
