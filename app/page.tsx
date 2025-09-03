import { getLandingSlugs } from "@/lib/data";

export default function Home() {
  const slugs = getLandingSlugs();
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
          Демо лендінги
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 mb-12 font-medium">
          Виберіть лендінг для перегляду
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {slugs.length ? (
            slugs.map((slug, index) => (
              <a
                key={slug}
                href={`/${slug}`}
                className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2"
              >
                <div className="p-8">
                  <div className="text-4xl font-black text-slate-300 mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {index + 1}
                  </div>

                  <h2 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {slug.toUpperCase()}
                  </h2>

                  <p className="text-slate-600 font-medium">
                    Переглянути лендінг
                  </p>

                  <div className="mt-4 text-blue-500 group-hover:text-blue-600 transition-colors duration-300">
                    <svg
                      className="w-6 h-6 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-blue-500/5 group-hover:to-blue-500/10 transition-all duration-300" />
              </a>
            ))
          ) : (
            <div className="col-span-full">
              <span className="text-slate-500 text-lg font-medium">
                Немає доступних лендінгів
              </span>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
