import type { Lang } from './translations'

// Deployed Cloudflare Worker URL for the live Gemini assistant.
// Leave empty ('') to use the offline static answers below.
export const ASSISTANT_ENDPOINT = 'https://mert-assistant.mertgaygusuz55.workers.dev'

type KBEntry = {
  id: string
  // keywords (lowercase) in EN + TR; matched as substrings against the query
  keywords: string[]
  answer: Record<Lang, string>
}

export const GREETING: Record<Lang, string> = {
  en: "Hi! I'm Mert's AI assistant 🤖 Ask me about his experience, skills, apps, or availability.",
  tr: 'Merhaba! Ben Mert\'in AI asistanıyım 🤖 Deneyimi, becerileri, uygulamaları veya müsaitliği hakkında sorabilirsin.',
}

export const FALLBACK: Record<Lang, string> = {
  en: "Good question — I don't have a canned answer for that one. Best to ask Mert directly at mertgaygusuz@hotmail.com. You can also ask me about his experience, iOS / React Native / .NET skills, his apps, or Zynkra.",
  tr: 'Güzel soru — buna hazır bir yanıtım yok. En iyisi Mert\'e doğrudan mertgaygusuz@hotmail.com\'dan sor. Bana deneyimi, iOS / React Native / .NET becerileri, uygulamaları ya da Zynkra hakkında da sorabilirsin.',
}

export const SUGGESTIONS: Record<Lang, string[]> = {
  en: ["What's your experience?", 'iOS & React Native?', 'Tell me about Zynkra', 'Are you available?'],
  tr: ['Deneyimin ne?', 'iOS & React Native?', "Zynkra'yı anlat", 'Müsait misin?'],
}

export const KB: KBEntry[] = [
  {
    id: 'experience',
    keywords: ['experience', 'background', 'about you', 'who are you', 'deneyim', 'geçmiş', 'kimsin', 'hakkında', 'özgeçmiş', 'kaç yıl', 'years'],
    answer: {
      en: "I'm a Full-Stack Developer with 2+ years of .NET back-end experience, now specializing in mobile — React Native and native iOS (Swift/SwiftUI). I take products end-to-end, from scalable REST APIs to shipping App Store apps.",
      tr: '2+ yıl .NET back-end deneyimine sahip, şimdi mobilde uzmanlaşan bir Full-Stack Geliştiriciyim — React Native ve native iOS (Swift/SwiftUI). Ürünleri ölçeklenebilir REST API\'lerden App Store uygulamalarına kadar uçtan uca geliştiriyorum.',
    },
  },
  {
    id: 'reactnative',
    keywords: ['react native', 'f4e', 'cross-platform', 'cross platform', 'android'],
    answer: {
      en: 'At F4e I led the web-to-mobile transformation of an AI-powered workforce platform — building high-performance cross-platform (iOS/Android) interfaces with React Native and integrating .NET backend services via REST APIs.',
      tr: 'F4e\'de yapay zeka destekli bir çalışan performans platformunun web\'den mobile dönüşümüne öncülük ettim; React Native ile yüksek performanslı cross-platform (iOS/Android) arayüzler geliştirip .NET backend servislerini REST API\'lerle entegre ettim.',
    },
  },
  {
    id: 'ios',
    keywords: ['ios', 'swift', 'swiftui', 'combine', 'swiftdata', 'storekit', 'avplayer'],
    answer: {
      en: 'I build native iOS apps with Swift, SwiftUI, Combine and SwiftData — using MVVM, StoreKit 2 for subscriptions and AVPlayer for media. I have independently shipped 4 apps to the App Store: Zynkra, Blip, FocusReceipt and Jotly.',
      tr: 'Swift, SwiftUI, Combine ve SwiftData ile native iOS uygulamaları geliştiriyorum — MVVM, abonelikler için StoreKit 2, medya için AVPlayer. App Store\'a bağımsız olarak 4 uygulama yayınladım: Zynkra, Blip, FocusReceipt ve Jotly.',
    },
  },
  {
    id: 'dotnet',
    keywords: ['.net', 'dotnet', 'backend', 'back-end', 'back end', 'c#', 'asp.net', 'vendrops', 'signalr', 'redis', 'mongo', 'entity framework', 'ef core'],
    answer: {
      en: 'My backend foundation is .NET/C#. At Vendrops I architected a 10+ module SaaS platform with 100+ secure REST endpoints using ASP.NET Core and ABP Framework, plus MongoDB and Redis. I also work with SignalR, EF Core and PostgreSQL.',
      tr: 'Backend temelim .NET/C#. Vendrops\'ta ASP.NET Core ve ABP Framework ile 10+ modüllü bir SaaS platformunun mimarisini kurup 100+ güvenli REST endpoint geliştirdim; MongoDB ve Redis kullandım. Ayrıca SignalR, EF Core ve PostgreSQL ile çalışıyorum.',
    },
  },
  {
    id: 'ai',
    keywords: ['ai', 'yapay zeka', 'nl2sql', 'langchain', 'gemini', 'sql agent', 'machine learning', 'llm'],
    answer: {
      en: 'I integrate AI into production. I built an NL2SQL Agent from scratch with a dual-chain LangChain + Google Gemini setup that turns natural language into SQL — in-memory schema caching (Turbo Mode) cut response time by 80%, with SELECT-only access enforced for safety.',
      tr: 'Yapay zekayı üretime entegre ediyorum. Sıfırdan, çift zincirli LangChain + Google Gemini mimarisiyle doğal dili SQL\'e çeviren bir NL2SQL Agent geliştirdim — bellekte şema önbelleği (Turbo Mod) yanıt süresini %80 azalttı, güvenlik için yalnızca SELECT erişimi zorlandı.',
    },
  },
  {
    id: 'apps',
    keywords: ['apps', 'app store', 'applications', 'uygulama', 'uygulamalar', 'published', 'yayın', 'blip', 'focusreceipt', 'jotly'],
    answer: {
      en: 'Four apps are live on the App Store: Zynkra (synced social listening/watching), Blip (anonymous social), FocusReceipt (productivity) and Jotly (thought journal) — all built natively in Swift/SwiftUI.',
      tr: 'App Store\'da dört uygulama var: Zynkra (senkron sosyal dinleme/izleme), Blip (anonim sosyal), FocusReceipt (üretkenlik) ve Jotly (düşünce günlüğü) — hepsi Swift/SwiftUI ile native geliştirildi.',
    },
  },
  {
    id: 'zynkra',
    keywords: ['zynkra', 'vibe radar', 'vibe', 'synchronized', 'senkron', 'flagship', 'başyapıt'],
    answer: {
      en: "Zynkra is my flagship: a social app where people listen to music and watch videos together in live, synchronized rooms. Its 'Vibe Radar' surfaces same-mood people for anonymous chats. Native Swift/SwiftUI client on a real-time SignalR + ASP.NET Core / PostgreSQL backend, with AVPlayer + YouTube IFrame sync and StoreKit 2 subscriptions.",
      tr: 'Zynkra başyapıtım: insanların canlı senkronize odalarda birlikte müzik dinleyip video izlediği sosyal bir uygulama. \'Vibe Radar\' aynı moddaki kişileri anonim sohbet için keşfettiriyor. Native Swift/SwiftUI istemci, gerçek zamanlı SignalR + ASP.NET Core / PostgreSQL backend, AVPlayer + YouTube IFrame senkronu ve StoreKit 2 abonelikleri.',
    },
  },
  {
    id: 'availability',
    keywords: ['available', 'availability', 'hire', 'hiring', 'job', 'opportunit', 'open to', 'müsait', 'işe', 'fırsat', 'çalış', 'iş arıyor'],
    answer: {
      en: "Yes — I'm open to new opportunities and interesting mobile projects. The fastest way to reach me is email: mertgaygusuz@hotmail.com.",
      tr: 'Evet — yeni fırsatlara ve ilginç mobil projelere açığım. Bana ulaşmanın en hızlı yolu e-posta: mertgaygusuz@hotmail.com.',
    },
  },
  {
    id: 'contact',
    keywords: ['contact', 'email', 'reach', 'linkedin', 'github', 'iletişim', 'e-posta', 'eposta', 'ulaş', 'mail'],
    answer: {
      en: 'You can email me at mertgaygusuz@hotmail.com, or find me on LinkedIn (in/mertgaygusuz) and GitHub (github.com/mertgaygusuz).',
      tr: 'Bana mertgaygusuz@hotmail.com\'dan e-posta atabilir, LinkedIn (in/mertgaygusuz) ve GitHub (github.com/mertgaygusuz) üzerinden ulaşabilirsin.',
    },
  },
  {
    id: 'education',
    keywords: ['education', 'study', 'university', 'degree', 'school', 'eğitim', 'üniversite', 'okul', 'mezun'],
    answer: {
      en: "I'm studying Management Information Systems at Anadolu University, and I completed a Computer Programming degree at Altınbaş University (2018–2020).",
      tr: 'Anadolu Üniversitesi\'nde Yönetim Bilişim Sistemleri okuyorum; Altınbaş Üniversitesi\'nde Bilgisayar Programcılığı\'nı (2018–2020) tamamladım.',
    },
  },
  {
    id: 'skills',
    keywords: ['skill', 'stack', 'tech', 'technolog', 'tools', 'beceri', 'yetenek', 'teknoloji', 'araç'],
    answer: {
      en: 'Core stack: Swift/SwiftUI, React Native, .NET/C#, ASP.NET Core, SignalR, TypeScript, Next.js, PostgreSQL/MongoDB/Redis, and AI tooling (LangChain, Gemini). Architectures: MVVM, Clean Architecture, CQRS.',
      tr: 'Temel stack: Swift/SwiftUI, React Native, .NET/C#, ASP.NET Core, SignalR, TypeScript, Next.js, PostgreSQL/MongoDB/Redis ve AI araçları (LangChain, Gemini). Mimariler: MVVM, Clean Architecture, CQRS.',
    },
  },
  {
    id: 'location',
    keywords: ['location', 'where', 'based', 'city', 'konum', 'nerede', 'şehir', 'istanbul'],
    answer: {
      en: "I'm based in Istanbul, Turkey, and open to remote work.",
      tr: 'İstanbul, Türkiye\'deyim ve uzaktan çalışmaya açığım.',
    },
  },
]

export function findAnswer(input: string, lang: Lang): string {
  const q = input.toLowerCase().trim()
  if (!q) return FALLBACK[lang]
  let best: KBEntry | null = null
  let bestScore = 0
  for (const entry of KB) {
    let score = 0
    for (const kw of entry.keywords) {
      if (q.includes(kw)) score += kw.length // longer keyword = stronger signal
    }
    if (score > bestScore) {
      bestScore = score
      best = entry
    }
  }
  return best ? best.answer[lang] : FALLBACK[lang]
}
