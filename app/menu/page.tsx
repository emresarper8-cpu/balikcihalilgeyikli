import FullMenu from "../components/FullMenu";

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-[#08253f] text-white">
      <div className="py-10">
        <h1 className="text-5xl font-bold text-center">
          Balıkçı Halil
        </h1>

        <p className="text-center text-cyan-300 mt-3 mb-10">
          Dijital Menü
        </p>

        <FullMenu />
      </div>
    </main>
  );
}