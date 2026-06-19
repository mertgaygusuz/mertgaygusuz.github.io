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
      bio: 'Full-Stack Developer with 2+ years of .NET back-end experience, now specializing in mobile development with React Native and native iOS (Swift/SwiftUI). Experienced in end-to-end product delivery — from architecting scalable REST APIs and back-end systems to shipping high-performance cross-platform mobile interfaces. Proven ability to integrate AI capabilities into production applications, including building an NL2SQL Agent from scratch.',
      location: 'Istanbul, Turkey',
      email: 'mertgaygusuz@hotmail.com',
      phone: '+90 537 451 2329',
    },
    skills: {
      title: 'Skills',
      reactNativeDesc: 'Cross-platform development with native bridge optimization.',
      apiDesc: 'High performance endpoint design.',
      groups: [
        { label: 'Mobile', items: ['React Native', 'Swift', 'SwiftUI', 'Combine', 'SwiftData', 'UIKit', 'StoreKit 2', 'AVPlayer', 'iOS', 'Android', 'CocoaPods', 'Firebase'] },
        { label: 'Languages', items: ['JavaScript', 'TypeScript', 'C#', 'Python'] },
        { label: 'Backend', items: ['.NET', 'ASP.NET Core', 'SignalR', 'Entity Framework Core', 'RESTful APIs'] },
        { label: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Cloud Firestore', 'SQL Server', 'Redis'] },
        { label: 'Frontend', items: ['Angular', 'Next.js', 'TypeScript'] },
        { label: 'Architecture', items: ['MVVM', 'MVC', 'Clean Architecture', 'CQRS', 'Repository Pattern', 'ABP Framework'] },
        { label: 'AI & Tools', items: ['LangChain', 'Google Gemini API', 'NL2SQL', 'Git', 'GitHub'] },
      ],
    },
    experience: {
      title: 'Work Experience',
      items: [
        {
          role: 'Full-Stack Developer (React Native & .NET)',
          company: 'F4e',
          period: '01/2026 – 05/2026',
          location: 'Istanbul',
          bullets: [
            'Spearheaded the web-to-mobile transformation of the AI-powered F4e workforce performance management platform, building high-performance cross-platform (iOS/Android) interfaces using React Native.',
            'Architected mobile integration of backend services, managing data synchronization and complex data flows via REST APIs.',
            'Developed new features and bug fixes on the .NET/C# backend; contributed to front-end tasks as part of a full-stack workflow.',
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
          title: 'Zynkra',
          bullets: [
            'A social entertainment app where users listen to music and watch videos together in live, synchronized rooms; the "Vibe Radar" surfaces people in the same mood for anonymous chats — without revealing identity. Built a native Swift/SwiftUI/Combine client on a real-time SignalR + ASP.NET Core / PostgreSQL backend, with synchronized playback via AVPlayer & the YouTube IFrame API and subscriptions through StoreKit 2. Published on the App Store.',
          ],
        },
        {
          title: 'Blip',
          bullets: [
            'A social iOS app where users post anonymous thoughts, questions, and short updates, review incoming replies, and accept ones to start anonymous chats around trending topics. Built with MVVM and the repository pattern in Swift/SwiftUI/Combine, with Firebase Auth, Cloud Firestore, Sign in with Apple, and a custom design system. Published on the App Store.',
          ],
        },
        {
          title: 'NewsFlow',
          bullets: [
            'A full-stack news aggregation platform using .NET 10 Clean Architecture (CQRS/MediatR) on the backend and Next.js 15 with TypeScript on the frontend, featuring real-time headlines stored in PostgreSQL.',
          ],
        },
        {
          title: 'AI-Powered SQL Agent',
          bullets: [
            'An AI assistant that translates natural language queries into MS SQL Server statements using a dual-chain LangChain architecture with Google Gemini 2.5 Flash — first generating the correct SQL, then producing a human-readable response. In-memory schema caching (Turbo Mode) cut response time by 80%, with SELECT-only access enforced for production safety.',
          ],
        },
        {
          title: 'FocusReceipt',
          bullets: [
            'A local-first iOS productivity app that converts daily activities, focus sessions, energy levels, and notes into a shareable daily receipt summary. Full CRUD activity tracking with weekly insights and visual analytics via the Charts framework. Published on the App Store.',
          ],
        },
        {
          title: 'Jotly',
          bullets: [
            'A minimal, local-first iOS thought journal for quickly capturing ideas, tasks, and notes. Features category-based organization and a personal timeline view for revisiting past entries, built with Swift/SwiftUI/SwiftData and MVVM. Published on the App Store.',
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
      bio: '2+ yıllık .NET back-end deneyimine sahip, React Native ve native iOS (Swift/SwiftUI) ile mobil geliştirme alanında uzmanlaşmakta olan Full-Stack Geliştirici. Ölçeklenebilir REST API\'ler ve back-end sistemler tasarlamaktan yüksek performanslı cross-platform mobil arayüzler geliştirmeye kadar uçtan uca ürün sahipleniminde deneyimlidir. Yapısal NL2SQL Agent geliştirme dahil, yapay zeka yeteneklerini üretim uygulamalarına entegre etme konusunda kanıtlanmış yetkinliğe sahiptir.',
      location: 'İstanbul, Türkiye',
      email: 'mertgaygusuz@hotmail.com',
      phone: '+90 537 451 2329',
    },
    skills: {
      title: 'Beceriler',
      reactNativeDesc: 'Native bridge optimizasyonuyla cross-platform geliştirme.',
      apiDesc: 'Yüksek performanslı endpoint tasarımı.',
      groups: [
        { label: 'Mobil', items: ['React Native', 'Swift', 'SwiftUI', 'Combine', 'SwiftData', 'UIKit', 'StoreKit 2', 'AVPlayer', 'iOS', 'Android', 'CocoaPods', 'Firebase'] },
        { label: 'Diller', items: ['JavaScript', 'TypeScript', 'C#', 'Python'] },
        { label: 'Arka Uç', items: ['.NET', 'ASP.NET Core', 'SignalR', 'Entity Framework Core', 'RESTful APIs'] },
        { label: 'Veritabanı', items: ['PostgreSQL', 'MongoDB', 'Cloud Firestore', 'SQL Server', 'Redis'] },
        { label: 'Ön Yüz', items: ['Angular', 'Next.js', 'TypeScript'] },
        { label: 'Mimari', items: ['MVVM', 'MVC', 'Clean Architecture', 'CQRS', 'Repository Pattern', 'ABP Framework'] },
        { label: 'Yapay Zeka & Araçlar', items: ['LangChain', 'Google Gemini API', 'NL2SQL', 'Git', 'GitHub'] },
      ],
    },
    experience: {
      title: 'İş Deneyimi',
      items: [
        {
          role: 'Full-Stack Geliştirici (React Native & .NET)',
          company: 'F4e',
          period: '01/2026 – 05/2026',
          location: 'İstanbul',
          bullets: [
            'Yapay zeka destekli çalışan performans yönetimi platformu F4e\'nin web\'den mobil\'e dönüşümüne öncülük ederek React Native kullanarak yüksek performanslı, platformlar arası (iOS/Android) arayüzler geliştirdi.',
            'Back-end servislerinin mobil entegrasyonunu mimarladı; REST API\'ler aracılığıyla veri senkronizasyonunu ve karmaşık veri akışlarını yönetti.',
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
          title: 'Zynkra',
          bullets: [
            'Kullanıcıların canlı odalarda senkronize müzik dinleyip video izleyebildiği ve "Vibe Radar" ile kimlik paylaşmadan benzer ruh halindeki kişileri keşfedip anonim sohbet başlatabildiği bir sosyal eğlence uygulaması. Native iOS istemcisi Swift/SwiftUI/Combine ile, gerçek zamanlı oda senkronizasyonu ve sohbet SignalR + ASP.NET Core / PostgreSQL back-end ile kuruldu; AVPlayer ve YouTube IFrame ile senkron medya oynatımı, StoreKit 2 ile abonelik akışları uygulandı. App Store\'da yayınlandı.',
          ],
        },
        {
          title: 'Blip',
          bullets: [
            'Kullanıcıların anonim düşünce, soru ve kısa paylaşımlar yapıp gelen yanıtları kabul ederek anonim sohbet başlatabildiği ve gündem başlıkları etrafında etkileşime geçebildiği bir sosyal iOS uygulaması. MVVM ve repository pattern mimarisiyle Swift/SwiftUI/Combine kullanılarak geliştirildi; Firebase Auth, Cloud Firestore ve Sign in with Apple ile kimlik doğrulama ve veri katmanı, özel bir tasarım sistemiyle de tutarlı arayüz kuruldu. App Store\'da yayınlandı.',
          ],
        },
        {
          title: 'NewsFlow',
          bullets: [
            'Back-end\'de .NET 10 Clean Architecture (CQRS/MediatR), front-end\'de Next.js 15 ve TypeScript kullanan full-stack bir haber toplama platformu; gerçek zamanlı manşetler PostgreSQL\'de depolanmaktadır.',
          ],
        },
        {
          title: 'Yapay Zeka Destekli SQL Asistanı',
          bullets: [
            'Doğal dil sorgularını MS SQL Server komutlarına dönüştüren bir yapay zeka asistanı; çift zincirli LangChain mimarisi ve Google Gemini 2.5 Flash ile önce doğru SQL üretilmekte, ardından sonuç doğal dilde kullanıcıya sunulmaktadır. Turbo Mod ile yanıt süresi %80 azaltıldı, üretim güvenliği için yalnızca SELECT erişimi zorlandı.',
          ],
        },
        {
          title: 'FocusReceipt',
          bullets: [
            'Günlük aktiviteleri, odak sürelerini, enerji seviyelerini ve notları paylaşılabilir bir günlük makbuz özeti olarak sunan local-first bir iOS üretkenlik uygulaması. Tam CRUD aktivite takibi; Charts framework\'ü ile haftalık içgörüler ve görsel analitikler eklendi. App Store\'da yayınlandı.',
          ],
        },
        {
          title: 'Jotly',
          bullets: [
            'Kullanıcıların düşünce, fikir, görev ve küçük notlarını hızlıca kaydedebileceği minimal, local-first bir iOS düşünce günlüğü. Kategori bazlı organizasyon ve kişisel zaman akışıyla geçmiş düşünceleri inceleme özelliği sunar; Swift/SwiftUI/SwiftData ve MVVM ile geliştirildi. App Store\'da yayınlandı.',
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
