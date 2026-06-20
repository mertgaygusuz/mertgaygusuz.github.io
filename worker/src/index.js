// Cloudflare Worker — AI assistant proxy for mertgaygusuz.github.io
// Holds the Gemini API key as a secret and answers questions about Mert,
// grounded ONLY in the CV context below.

const CV_CONTEXT = `
Mert Gaygusuz — Full-Stack Mobile Developer (iOS, React Native, .NET). Based in Istanbul, Turkey. Open to remote work and new opportunities.
Contact: mertgaygusuz@hotmail.com · github.com/mertgaygusuz · linkedin.com/in/mertgaygusuz

SUMMARY
Full-Stack Developer with 2+ years of .NET back-end experience, now specializing in mobile — React Native and native iOS (Swift/SwiftUI). Independent developer of multiple iOS apps published on the App Store. Experienced end-to-end: from scalable REST APIs and real-time back-ends to high-performance cross-platform mobile interfaces. Has integrated AI into production, including building an NL2SQL Agent from scratch.

EXPERIENCE
- Full-Stack Developer (React Native & .NET) — F4e (Jan 2026 – May 2026, Istanbul). Led the web-to-mobile transformation of an AI-powered workforce performance platform; built high-performance cross-platform (iOS/Android) interfaces with React Native; integrated .NET/C# backend services via REST APIs; built an NL2SQL Agent from scratch and integrated it into the core app.
- .NET Back-End Developer — Vendrops Technologies (Jan 2022 – Jan 2024, Istanbul). Architected the back-end of a 10+ module SaaS facility-management platform; 100+ secure REST endpoints with .NET, C#, ABP Framework; integrated MongoDB and Redis; supported the Angular/TypeScript front-end.
- IT Support Intern — Hepsiemlak (Sep 2016 – Jun 2017, Istanbul).

EDUCATION
- Management Information Systems, Anadolu University (ongoing).
- Computer Programming, Altınbaş University (2018–2020).

SKILLS
Mobile: React Native, Swift, SwiftUI, Combine, SwiftData, UIKit, StoreKit 2, AVPlayer, CocoaPods, Firebase.
Backend & languages: .NET, ASP.NET Core, C#, JavaScript, TypeScript, Python, SignalR, Entity Framework Core, RESTful APIs.
Frontend: Angular, Next.js, TypeScript.
Databases: PostgreSQL, MongoDB, Cloud Firestore, SQL Server, Redis.
Architecture: MVVM, MVC, Clean Architecture, CQRS, Repository Pattern.
AI & tools: LangChain, Google Gemini API, NL2SQL, Git, GitHub.

APPS ON THE APP STORE (built solo, native Swift/SwiftUI)
- Zynkra — social entertainment app; listen to music and watch videos together in live, synchronized rooms; "Vibe Radar" surfaces same-mood people for anonymous chats. Swift/SwiftUI/Combine client; real-time SignalR + ASP.NET Core / EF Core / PostgreSQL backend; AVPlayer + YouTube IFrame sync; StoreKit 2 subscriptions.
- Blip — anonymous social app; post anonymous thoughts/questions, accept replies to start anonymous chats. MVVM + repository pattern; Firebase Auth, Cloud Firestore, Sign in with Apple.
- FocusReceipt — local-first productivity app turning daily activity/focus/energy into a shareable daily "receipt"; weekly insights via the Charts framework; SwiftData.
- Jotly — minimal local-first thought journal; quick capture of ideas/tasks/notes; category organization and a personal timeline; SwiftData + MVVM.

OTHER PROJECTS
- NewsFlow — full-stack news aggregation; .NET 10 Clean Architecture (CQRS/MediatR) backend, Next.js 15 + TypeScript frontend, PostgreSQL. (github.com/mertgaygusuz/NewsFlow)
- AI-Powered SQL Agent — NL2SQL assistant; dual-chain LangChain + Google Gemini 2.5 Flash turns natural language into MS SQL Server queries; in-memory schema caching (Turbo Mode) cut response time by 80%; SELECT-only for safety. (github.com/mertgaygusuz/nl2sql-agent)

CERTIFICATE
- Mobile Application Development Workshop — Tech Istanbul (IMM).
`.trim()

const SYSTEM_PROMPT = `You are the AI assistant on Mert Gaygusuz's developer portfolio. You answer questions from recruiters and visitors about Mert, speaking warmly and in the first person as Mert ("I built…", "My experience…").

Rules:
- Use ONLY the facts in the CV context. Never invent or guess details that are not there (age, salary, exact dates beyond what's given, personal life, etc.).
- If something isn't in the context, say you didn't include that here and invite them to email mertgaygusuz@hotmail.com. Do not make it up.
- Keep answers concise: 1–3 sentences, conversational, no markdown headings.
- If asked something unrelated to Mert or his work, politely steer back to his professional profile.
- Reply in the SAME language as the user's latest message (Turkish or English).

CV CONTEXT:
${CV_CONTEXT}`

function corsHeaders(origin, allowed) {
  const allow = allowed.includes(origin) ? origin : allowed[0]
  return {
    'Access-Control-Allow-Origin': allow,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  }
}

export default {
  async fetch(request, env) {
    const allowed = (env.ALLOWED_ORIGINS || '').split(',').map(s => s.trim()).filter(Boolean)
    const origin = request.headers.get('Origin') || ''
    const cors = corsHeaders(origin, allowed)

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: cors })
    }
    if (request.method !== 'POST') {
      return new Response('Method Not Allowed', { status: 405, headers: cors })
    }

    let body
    try {
      body = await request.json()
    } catch {
      return json({ error: 'Invalid JSON' }, 400, cors)
    }

    const message = (body.message || '').toString().slice(0, 1000)
    if (!message.trim()) return json({ error: 'Empty message' }, 400, cors)

    const history = Array.isArray(body.history) ? body.history.slice(-8) : []
    const contents = [
      ...history.map(m => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: (m.text || '').toString().slice(0, 1000) }],
      })),
      { role: 'user', parts: [{ text: message }] },
    ]

    const model = env.GEMINI_MODEL || 'gemini-2.5-flash'
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`

    let geminiRes
    try {
      geminiRes = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': env.GEMINI_API_KEY,
        },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents,
          generationConfig: { temperature: 0.4, maxOutputTokens: 500 },
        }),
      })
    } catch {
      return json({ error: 'Upstream request failed' }, 502, cors)
    }

    if (!geminiRes.ok) {
      return json({ error: 'Assistant is busy right now' }, 502, cors)
    }

    const data = await geminiRes.json()
    const answer = data?.candidates?.[0]?.content?.parts?.map(p => p.text).join('') || ''
    if (!answer.trim()) {
      return json({ error: 'No answer' }, 502, cors)
    }

    return json({ answer: answer.trim() }, 200, cors)
  },
}

function json(obj, status, cors) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json', ...cors },
  })
}
