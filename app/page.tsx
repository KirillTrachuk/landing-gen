export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Демо лендінги</h1>
      <div className="flex flex-col gap-3">
        <a className="text-blue-600 underline" href="/landing-a">
          Перейти до Landing A
        </a>
        <a className="text-blue-600 underline" href="/landing-b">
          Перейти до Landing B
        </a>
      </div>
    </main>
  );
}
