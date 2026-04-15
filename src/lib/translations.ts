export const translations = {
  en: {
    nav: {
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      title: 'Mert Gaygusuz',
      role: 'Full-Stack Developer with end-to-end experience — from scalable .NET back-end systems to high-performance React Native and native iOS interfaces.',
      bio: 'Full-Stack Developer with 2+ years of .NET back-end experience, now specializing in mobile development with React Native and native iOS (Swift/SwiftUI). Experienced in end-to-end product delivery — from architecting scalable REST APIs and back-end systems to shipping high-performance cross-platform mobile interfaces. Currently driving the mobile transformation of an AI-powered workforce performance platform at F4e.',
      location: 'Istanbul, Turkey',
      email: 'mertgaygusuz@hotmail.com',
      phone: '+90 537 451 2329',
    },
    skills: {
      title: 'Skills',
      reactNativeDesc: 'Cross-platform development with native bridge optimization.',
      apiDesc: 'High performance endpoint design.',
      groups: [
        { label: 'Mobile', items: ['React Native', 'Swift', 'SwiftUI', 'UIKit', 'iOS', 'Android', 'CocoaPods'] },
        { label: 'Languages', items: ['JavaScript', 'TypeScript', 'C#'] },
        { label: 'Backend', items: ['.NET', 'RESTful APIs', 'MongoDB', 'PostgreSQL', 'SQL Server', 'Redis'] },
        { label: 'Frontend', items: ['Angular', 'Next.js'] },
      ],
    },
    experience: {
      title: 'Work Experience',
      items: [
        {
          role: 'Full-Stack Developer (React Native & .NET)',
          company: 'F4e',
          period: '01/2026 – Present',
          location: 'Istanbul',
          bullets: [
            'Spearheaded the web-to-mobile transformation of the AI-powered F4e workforce performance management platform, building high-performance cross-platform (iOS/Android) interfaces using React Native.',
            'Architected mobile integration of backend services, managing data synchronization and complex data flows via REST APIs.',
            'Developed new features and bug fixes on the .NET/C# backend; occasionally contribute to front-end tasks as part of a full-stack workflow.',
            'Built an NL2SQL Agent from scratch — translating natural language queries into SQL — and integrated it directly into the core application.',
          ],
        },
        {
          role: '.NET Back-End Developer',
          company: 'Vendrops Technologies',
          period: '01/2022 – 01/2024',
          location: 'Istanbul',
          bullets: [
            'Architected the backend of a 10+ module SaaS facility management platform; developed over 100 secure RESTful endpoints using .NET, C#, and ABP Framework.',
            'Integrated MongoDB (NoSQL) and Redis (Caching) to scale data management and optimize system performance.',
            'Supported the Front-End team using Angular/TypeScript.',
          ],
        },
        {
          role: 'IT Support Intern',
          company: 'hepsiemlak',
          period: '09/2016 – 06/2017',
          location: 'Istanbul',
          bullets: [
            'Optimized end-user system performance by performing hardware upgrades (RAM/SSD) and operating system configurations.',
          ],
        },
      ],
    },
    education: {
      title: 'Education',
      items: [
        {
          degree: 'Management Information Systems (AOF)',
          school: 'Anadolu University',
          period: '10/2022 – Present',
        },
        {
          degree: 'Computer Programming',
          school: 'Altınbaş University',
          period: '10/2018 – 06/2020',
        },
      ],
    },
    certificates: {
      title: 'Certificates',
      items: [
        {
          name: 'Mobile Application Development Workshop',
          issuer: 'Tech Istanbul (IMM)',
          description:
            'Successfully completed a 12-hour hands-on mobile application development training.',
        },
      ],
    },
    projects: {
      title: 'Personal Projects',
      items: [
        {
          title: 'CineFlow',
          bullets: [
            'Built a native iOS movie discovery app with MVVM architecture, featuring a now-playing slider, upcoming films list, search, and a favorites system powered by the TMDb API.',
          ],
        },
        {
          title: 'NewsFlow',
          bullets: [
            'Built a full-stack news aggregation platform using .NET 10 Clean Architecture (CQRS/MediatR) on the backend and Next.js 15 with TypeScript on the frontend, featuring real-time headlines stored in PostgreSQL.',
          ],
        },
        {
          title: 'AI-Powered SQL Agent',
          bullets: [
            'Built an AI assistant that translates natural language queries into MS SQL Server statements using a dual-chain LangChain architecture with Google Gemini 2.5 Flash — first generating the correct SQL, then producing a human-readable response.',
            'Implemented an in-memory schema caching mechanism (Turbo Mode) that reduced average query response time by 80%.',
            'Enforced read-only (SELECT-only) database access for secure, production-safe operation.',
          ],
        },
        {
          title: 'SwiftUI & ChatGPT App',
          bullets: [
            'Built an interactive iOS application with NLP capabilities via ChatGPT API integration, delivering real-time responses to user queries.',
            'Architected using modern SwiftUI components, MVC pattern, and the Alamofire library for network communication.',
          ],
        },
      ],
    },
    contact: {
      title: 'Contact',
      subtitle: "Let's connect",
    },
    footer: {
      built: 'Built with Next.js & Tailwind CSS',
      rights: 'All rights reserved.',
    },
  },
  tr: {
    nav: {
      skills: 'Beceriler',
      experience: 'Deneyim',
      projects: 'Projeler',
      contact: 'İletişim',
    },
    hero: {
      title: 'Mert Gaygusuz',
      role: 'Ölçeklenebilir .NET back-end sistemlerinden yüksek performanslı React Native ve native iOS arayüzlerine kadar uçtan uca deneyime sahip Full-Stack Geliştirici.',
      bio: '2+ yıllık .NET back-end deneyimine sahip, React Native ve native iOS (Swift/SwiftUI) ile mobil geliştirme alanında uzmanlaşmakta olan Full-Stack Geliştirici. Ölçeklenebilir REST API\'ler ve back-end sistemler tasarlamaktan yüksek performanslı cross-platform mobil arayüzler geliştirmeye kadar uçtan uca ürün sahipleniminde deneyimlidir. Halihazırda yapay zeka destekli çalışan performans yönetimi platformu F4e\'nin mobil dönüşümünü yönetmektedir.',
      location: 'İstanbul, Türkiye',
      email: 'mertgaygusuz@hotmail.com',
      phone: '+90 537 451 2329',
    },
    skills: {
      title: 'Beceriler',
      reactNativeDesc: 'Native bridge optimizasyonuyla cross-platform geliştirme.',
      apiDesc: 'Yüksek performanslı endpoint tasarımı.',
      groups: [
        { label: 'Mobil', items: ['React Native', 'Swift', 'SwiftUI', 'UIKit', 'iOS', 'Android', 'CocoaPods'] },
        { label: 'Diller', items: ['JavaScript', 'TypeScript', 'C#'] },
        { label: 'Arka Uç', items: ['.NET', 'RESTful APIs', 'MongoDB', 'PostgreSQL', 'SQL Server', 'Redis'] },
        { label: 'Ön Yüz', items: ['Angular', 'Next.js'] },
      ],
    },
    experience: {
      title: 'İş Deneyimi',
      items: [
        {
          role: 'Full-Stack Geliştirici (React Native & .NET)',
          company: 'F4e',
          period: '01/2026 – günümüz',
          location: 'İstanbul',
          bullets: [
            'Yapay zeka destekli çalışan performans yönetimi platformu F4e\'nin web\'den mobil\'e dönüşümüne öncülük ederek React Native kullanarak yüksek performanslı, platformlar arası (iOS/Android) arayüzler geliştirdi.',
            'Back-end servislerinin mobil entegrasyonunu mimarlandı; REST API\'ler aracılığıyla veri senkronizasyonunu ve karmaşık veri akışlarını yönetti.',
            '.NET/C# back-end\'inde yeni özellikler geliştirdi ve hata düzeltmeleri yaptı; full-stack iş akışının bir parçası olarak zaman zaman front-end görevleri de üstlendi.',
            'Doğal dil sorgularını SQL\'e dönüştüren NL2SQL Agent\'ı sıfırdan geliştirerek core uygulamaya entegre etti.',
          ],
        },
        {
          role: '.NET Back-End Developer',
          company: 'Vendrops Technologies',
          period: '01/2022 – 01/2024',
          location: 'İstanbul',
          bullets: [
            "10+ modüllü SaaS tesis yönetimi platformunun mimarisini kurgulamak; .NET, C# ve ABP Framework ile 100'den fazla güvenli RESTful endpoint geliştirmek.",
            'Veri yönetimi ve sistem performansını ölçeklendirmek için MongoDB (NoSQL) ve Redis (Caching) entegrasyonlarını sağlamak.',
            'Angular/TypeScript ile Front-End ekibine destek vermek.',
          ],
        },
        {
          role: 'Bilgi İşlem Stajyeri (IT Support)',
          company: 'hepsiemlak',
          period: '09/2016 – 06/2017',
          location: 'İstanbul',
          bullets: [
            'Donanım yükseltmeleri (RAM/SSD) ve işletim sistemi yapılandırmaları ile son kullanıcı sistem performanslarını optimize etmek.',
          ],
        },
      ],
    },
    education: {
      title: 'Eğitim',
      items: [
        {
          degree: 'Yönetim Bilişim Sistemleri (AOF)',
          school: 'Anadolu Üniversitesi',
          period: '10/2022 – günümüz',
        },
        {
          degree: 'Bilgisayar Programcılığı',
          school: 'Altınbaş Üniversitesi',
          period: '10/2018 – 06/2020',
        },
      ],
    },
    certificates: {
      title: 'Sertifikalar',
      items: [
        {
          name: 'Mobil Uygulama Geliştirme Atölyesi',
          issuer: 'İBB Tech Istanbul',
          description:
            'İBB Tech Istanbul tarafından düzenlenen 12 saatlik uygulamalı eğitimde modern mobil uygulama geliştirme süreçleri başarıyla tamamlanmıştır.',
        },
      ],
    },
    projects: {
      title: 'Kişisel Projeler',
      items: [
        {
          title: 'CineFlow',
          bullets: [
            'MVVM mimarisini kullanan native bir iOS film keşif uygulaması geliştirdi; TMDb API ile güncel vizyondaki filmler, yaklaşan filmler, arama ve favoriler sistemi özellikleri sunmaktadır.',
          ],
        },
        {
          title: 'NewsFlow',
          bullets: [
            'Back-end\'de .NET 10 Clean Architecture (CQRS/MediatR), front-end\'de Next.js 15 ve TypeScript kullanan full-stack bir haber toplama platformu geliştirdi; gerçek zamanlı haberler PostgreSQL\'de depolanmaktadır.',
          ],
        },
        {
          title: 'Yapay Zeka Destekli SQL Asistanı',
          bullets: [
            'Doğal dil sorgularını MS SQL Server komutlarına dönüştüren bir yapay zeka asistanı geliştirdi; çift zincirli LangChain mimarisi ve Google Gemini 2.5 Flash ile önce doğru SQL üretilmekte, ardından sonuç doğal dilde kullanıcıya sunulmaktadır.',
            'Veritabanı şema bilgisini bellekte saklayan Turbo Mod mekanizması ile ortalama sorgu yanıt süresini %80 azalttı.',
            'Güvenlik için erişim yalnızca SELECT sorgusuyla sınırlandırıldı.',
          ],
        },
        {
          title: 'SwiftUI & ChatGPT Uygulaması',
          bullets: [
            'ChatGPT API entegrasyonuyla NLP yeteneğine sahip, gerçek zamanlı yanıt veren etkileşimli bir iOS uygulaması tasarladı.',
            'Modern SwiftUI bileşenleri, MVC mimarisi ve Alamofire kütüphanesi kullanıldı.',
          ],
        },
      ],
    },
    contact: {
      title: 'İletişim',
      subtitle: 'Bağlantı kuralım',
    },
    footer: {
      built: 'Next.js & Tailwind CSS ile geliştirildi',
      rights: 'Tüm hakları saklıdır.',
    },
  },
}

export type Lang = 'en' | 'tr'
export type Translations = typeof translations.en
