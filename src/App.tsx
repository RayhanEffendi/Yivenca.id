import { useRef, useState } from "react";
import {
  ArrowUpRight,
  BadgeCheck,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Gift,
  Heart,
  Instagram,
  MapPin,
  Menu,
  PackageCheck,
  Quote,
  ShieldCheck,
  ShoppingBag,
  Star,
  Store,
  Truck,
  X,
} from "lucide-react";
import yivencaLogo from "./assets/logo-yivenca.png";
import Reveal from "./components/Reveal";
import {
  products,
  storeAddress,
  storeHours,
  testimonials,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
} from "./data/yivencaData";

const navigation = [
  ["Beranda", "#beranda"],
  ["Produk Unggulan", "#produk"],
  ["Keunggulan", "#keunggulan"],
  ["Testimoni", "#testimoni"],
  ["Cara Pesan", "#cara-pesan"],
  ["Lokasi", "#lokasi"],
];

const advantages = [
  {
    icon: Heart,
    title: "Harga Ramah & Asli",
    text: "Rasa istimewa dengan harga yang bersahabat.",
  },
  {
    icon: Gift,
    title: "Pilihan Beragam",
    text: "Banyak pilihan buah tangan untuk orang tersayang.",
  },
  {
    icon: BadgeCheck,
    title: "Kualitas Selalu Fresh",
    text: "Setiap oleh-oleh dipilih dengan teliti agar selalu fresh, higienis, dan terjaga cita rasanya.",
  },
  {
    icon: MapPin,
    title: "Lokasi Strategis",
    text: "Mudah dijangkau saat berkeliling Pekanbaru.",
  },
];

const steps = [
  {
    number: "01",
    title: "Pilih Produk Favorit",
    text: "Jelajahi pilihan oleh-oleh dan tentukan yang paling kamu suka.",
    icon: ShoppingBag,
  },
  {
    number: "02",
    title: `Kirim DM ke Instagram ${INSTAGRAM_HANDLE}`,
    text: "Sebutkan produk, jumlah, serta jadwal ambil atau kirim.",
    icon: Instagram,
  },
  {
    number: "03",
    title: "Ambil atau Kirim",
    text: "Ambil langsung di toko atau gunakan layanan kurir pilihanmu.",
    icon: Truck,
  },
];

function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <a href="#beranda" className="flex shrink-0 items-center gap-2.5" aria-label="Yivenca.id, beranda">
      <img
        src={yivencaLogo}
        alt="Yivenca — Rajanya Oleh-Oleh Pekanbaru"
        className={footer ? "h-20 w-20 object-contain" : "h-14 w-14 object-contain"}
      />
      <span className={`font-sans font-extrabold tracking-[-0.06em] ${footer ? "text-[#FAF8EE]" : "text-charcoal"} ${footer ? "text-xl" : "text-[19px]"}`}>
        Yivenca<span className="text-[#F3C11A]">.id</span>
      </span>
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const closeMenu = () => setMenuOpen(false);
  const moveSlide = (direction: number) =>
    setActiveProduct((current) => (current + direction + products.length) % products.length);

  return (
    <div className="overflow-x-hidden">
      <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 md:h-20 sm:px-6 lg:px-8">
          <Logo />
          <nav className="hidden items-center gap-2 text-xs font-medium text-[#1C1917] md:flex md:gap-3 lg:gap-7 lg:text-sm xl:gap-8" aria-label="Navigasi utama">
            {navigation.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-[#1C1917] transition-colors hover:text-[#1B6523]"
              >
                {label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-stone-200/80 text-stone-800 md:hidden"
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-stone-100 bg-white shadow-sm md:hidden" aria-label="Navigasi mobile">
            <div className="mx-auto max-w-6xl px-4 pb-5 pt-2 sm:px-6 lg:px-8">
              {navigation.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className="block border-b border-stone-100 py-3.5 text-sm font-semibold text-charcoal"
                >
                  {label}
                </a>
              ))}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#1B6523] px-5 py-3.5 text-sm font-semibold text-white hover:bg-[#144E1A]"
              >
                <Instagram size={17} /> @yivenca.id
              </a>
            </div>
          </nav>
        )}
      </header>

      <main>
        <section id="beranda" className="relative bg-[#F6F2E0] pt-12 pb-16 md:pt-16 md:pb-20">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12 lg:px-8">
            <div className="relative z-10">
              <Reveal delay={0}>
                <div className="mb-4 inline-flex items-center gap-2.5">
                  <span className="h-0.5 w-6 rounded-full bg-[#F3C11A]" />
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#1B6523]">Oleh-Oleh Khas Pekanbaru</span>
                </div>
              </Reveal>
              <Reveal delay={50}>
                <h1 className="max-w-[620px] font-sans text-3xl font-extrabold leading-[1.15] tracking-[-0.035em] text-charcoal sm:text-4xl lg:text-5xl">
                  Temukan Oleh-Oleh Favoritmu di{" "}
                  <span className="whitespace-nowrap text-[#1B6523] underline decoration-[#F3C11A] decoration-4 underline-offset-4">Yivenca!</span>
                </h1>
              </Reveal>
              <Reveal delay={90}>
                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                  Bawa pulang kelezatan Pekanbaru untuk orang tersayang. Dari Talam
                  Durian yang lembut, Bolu Gulung Nanas, hingga Brownies Azura
                  penuh rasa.
                </p>
              </Reveal>
              <Reveal delay={120}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#produk"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#1B6523] px-5 py-3 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-[#144E1A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3C11A] focus-visible:ring-offset-2 sm:w-auto"
                >
                  Lihat Produk Unggulan
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border border-[#1B6523]/25 bg-white px-5 py-3 text-xs font-semibold text-[#1B6523] transition-colors hover:bg-[#EDF5ED] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3C11A] focus-visible:ring-offset-2 sm:w-auto"
                >
                  Pesan <Instagram size={15} />
                </a>
              </div>
              </Reveal>
              <Reveal delay={150}>
              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
                {[
                  [ShieldCheck, "100% Halal"],
                  [Instagram, "Fast Response via DM"],
                  [PackageCheck, "Ready Stock"],
                ].map(([Icon, label]) => {
                  const BadgeIcon = Icon as typeof ShieldCheck;
                  return (
                    <span key={label as string} className="flex items-center gap-2 text-[11px] font-semibold text-slate-500">
                      <BadgeIcon size={16} className="text-[#52A633]" />
                      {label as string}
                    </span>
                  );
                })}
              </div>
              <div className="mt-10 flex items-center gap-3 border-t border-[#1B6523]/15 pt-5">
                <div className="flex -space-x-2">
                  {["bg-[#F3C11A]", "bg-[#52A633]", "bg-[#FAF8EE]", "bg-[#EDF5ED]"].map((tone, index) => (
                    <span
                      key={tone}
                      className={`grid h-8 w-8 place-items-center rounded-full border-2 border-[#F6F2E0] ${tone} text-[9px] font-bold text-stone-700`}
                    >
                      {["DP", "RA", "MS", "FH"][index]}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-slate-500">
                  <strong className="text-charcoal">Disukai banyak orang</strong>
                  <br /> oleh pelanggan Pekanbaru & wisatawan
                </p>
              </div>
              </Reveal>
            </div>

            <Reveal delay={200} className="relative mx-auto w-full max-w-[540px] lg:ml-auto">
              <div
                className="hero-image relative aspect-[4/3] overflow-hidden rounded-xl border border-[#1B6523]/15 bg-white shadow-sm"
                onTouchStart={(event) => { touchStartX.current = event.touches[0]?.clientX ?? null; }}
                onTouchEnd={(event) => {
                  if (touchStartX.current === null) return;
                  const distance = event.changedTouches[0].clientX - touchStartX.current;
                  if (Math.abs(distance) > 40) moveSlide(distance < 0 ? 1 : -1);
                  touchStartX.current = null;
                }}
              >
                <div
                  className="flex h-full transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${activeProduct * 100}%)` }}
                >
                  {products.map((product) => (
                    <img
                      key={product.name}
                      src={product.image}
                      alt={product.imageAlt}
                      draggable="false"
                      className="h-full w-full shrink-0 select-none object-cover"
                    />
                  ))}
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => moveSlide(-1)}
                  aria-label="Foto produk sebelumnya"
                  className="grid h-9 w-9 place-items-center rounded-full border border-[#1B6523]/20 bg-white text-[#1B6523] transition-colors hover:bg-[#EDF5ED]"
                >
                  <ChevronLeft size={18} />
                </button>
                <div className="flex items-center gap-2" aria-label="Pilih foto produk">
                  {products.map((product, index) => (
                    <button
                      key={product.name}
                      type="button"
                      onClick={() => setActiveProduct(index)}
                      aria-label={`Tampilkan foto ${product.name}`}
                      aria-pressed={activeProduct === index}
                      className={`h-2.5 rounded-full transition-all ${activeProduct === index ? "w-7 bg-[#1B6523]" : "w-2.5 bg-[#1B6523]/25 hover:bg-[#1B6523]/50"}`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => moveSlide(1)}
                  aria-label="Foto produk berikutnya"
                  className="grid h-9 w-9 place-items-center rounded-full border border-[#1B6523]/20 bg-white text-[#1B6523] transition-colors hover:bg-[#EDF5ED]"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="produk" className="bg-white py-14 md:py-20">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <Reveal delay={0} className="mx-auto max-w-[600px] text-center">
              <p className="eyebrow text-[10px] font-extrabold uppercase text-[#1B6523]">Pilihan untuk dibawa pulang</p>
              <h2 className="mt-3 font-sans text-3xl font-extrabold leading-snug tracking-tight text-charcoal sm:text-[40px]">
                Pilihan Produk Unggulan
                <br className="hidden sm:block" /> Yivenca.id
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-500">
                Setiap gigitan punya cerita. Temukan rasa favoritmu dan bagikan
                hangatnya Pekanbaru untuk keluarga.
              </p>
            </Reveal>
            <div className="mt-10 grid gap-6 md:mt-12 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product, index) => (
                <Reveal key={product.name} delay={index * 120} className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#E7E0C8] bg-[#FAF8EE] shadow-sm">
                  <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-[#E7E0C8] bg-[#F8F9FA]">
                    <img
                      src={product.image}
                      alt={product.imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-bold text-[#1C1917]">{product.name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#57534E]">{product.description}</p>
                    <ul className="mt-4 space-y-2 text-sm text-[#57534E]">
                      {product.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center gap-2.5">
                          <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-[#EDF5ED] text-[#52A633]">
                            <Check size={10} strokeWidth={3} />
                          </span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto border-t border-[#E7E0C8] pt-4">
                      <div className="flex items-end justify-between gap-3">
                        <div>
                          <span className="text-xl font-extrabold text-[#1B6523]">{product.price}</span>
                        </div>
                      <a
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-[#EDF5ED] px-3 py-1.5 text-sm font-semibold text-[#1B6523] transition-colors hover:bg-[#1B6523] hover:text-white"
                      >
                        Pesan <ArrowUpRight size={15} />
                      </a>
                      </div>
                    </div>
                  </div>
                </article>
                </Reveal>
              ))}
            </div>
            <Reveal delay={150} className="mt-7">
            <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-[#F3C11A]/60 bg-[#FEF7D6] px-5 py-4 text-center text-[#1C1917] sm:flex-row sm:text-left">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-[#1B6523]">
                <PackageCheck size={20} />
              </span>
              <p className="text-xs leading-5 text-[#1C1917]">
                <strong className="text-[#1C1917]">Aman sampai tujuan.</strong>{" "}
                Kami siapkan packing yang rapi untuk bagasi maupun kabin pesawat.
              </p>
            </div>
            </Reveal>
          </div>
        </section>

        <section id="keunggulan" className="bg-[#EDF5ED] py-14 md:py-20">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <Reveal delay={0} className="mx-auto max-w-[650px] text-center">
              <p className="eyebrow text-[10px] font-extrabold uppercase text-[#1B6523]">Kenapa Yivenca?</p>
              <h2 className="mt-3 font-sans text-3xl font-extrabold leading-tight tracking-tight text-charcoal sm:text-[40px]">
                Belanja Oleh-Oleh Kini Jauh Lebih Mudah & Nyaman!
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm text-[#57534E] md:text-base">
                Kami memastikan setiap buah tangan dari Pekanbaru siap dibawa pulang dengan kualitas terbaik.
              </p>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-12 lg:grid-cols-4">
              {advantages.map(({ icon: Icon, title, text }, index) => (
                <Reveal key={title} delay={index * 100} className="h-full">
                <article className="flex h-full flex-col rounded-2xl border border-[#1B6523]/[0.12] bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1B6523]/[0.3]">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#1B6523]/10 bg-[#EDF5ED] text-[#1B6523]">
                      <Icon size={23} strokeWidth={1.6} />
                    </span>
                    <span className="text-xs font-bold tracking-wider text-[#1B6523]/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mb-2 text-base font-bold text-[#1C1917]">{title}</h3>
                  <p className="text-sm leading-relaxed text-[#57534E]">{text}</p>
                  <div className="mt-auto pt-4">
                    <span className="block h-1 w-8 rounded-full bg-[#F3C11A]/80" />
                  </div>
                </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="testimoni" className="bg-[#F6F2E0] py-14 md:py-20">
          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-14 lg:px-8">
            <Reveal delay={0}>
            <div>
              <p className="eyebrow text-[10px] font-extrabold uppercase text-[#1B6523]">Cerita pelanggan</p>
              <h2 className="mt-3 font-sans text-3xl font-extrabold leading-tight tracking-tight text-charcoal sm:text-[39px]">
                Dipercaya Pelanggan Pekanbaru & Wisatawan Nusantara
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500">
                Senang rasanya jadi bagian dari cerita perjalanan dan momen
                spesial banyak keluarga.
              </p>
              <div className="mt-7 flex items-center gap-4">
                <div>
                  <p className="font-sans text-[52px] font-extrabold leading-none text-charcoal">4.9<span className="text-[#D9A60E]">/5</span></p>
                  <div className="mt-3 flex gap-1 text-[#F3C11A]">
                    {Array.from({ length: 5 }, (_, index) => <Star key={index} size={15} fill="currentColor" />)}
                  </div>
                  <p className="mt-2 text-[11px] text-slate-500">Berdasarkan cerita pelanggan</p>
                </div>
                <span className="h-16 border-l border-stone-200" />
                <p className="max-w-[135px] text-xs leading-5 text-slate-500">
                  Setiap oleh-oleh membawa pulang cerita baik.
                </p>
              </div>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 text-xs font-bold text-[#1B6523] hover:text-[#D9A60E]"
              >
                Ceritakan pengalamanmu <ArrowUpRight size={15} />
              </a>
            </div>
            </Reveal>
            <div className="grid items-stretch gap-3 sm:grid-cols-2 sm:gap-4">
              {testimonials.map((review, index) => (
                <Reveal key={review.name} delay={index * 100} className="h-full">
                <article className="flex h-full flex-col rounded-2xl border border-[#E7E0C8] bg-white p-5 shadow-sm sm:p-6">
                  <div className="flex items-center justify-between">
                    <span className="flex gap-0.5 text-[#F3C11A]">
                      {Array.from({ length: 5 }, (_, index) => <Star key={index} size={12} fill="currentColor" />)}
                    </span>
                  <Quote size={18} className="text-[#D9A60E]/50" />
                  </div>
                  <p className="mt-4 flex-1 text-xs leading-[1.8] text-slate-500">“{review.quote}”</p>
                  <div className="mt-4 flex items-center gap-3 border-t border-[#E7E0C8] pt-4">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-[#EDF5ED] text-[10px] font-extrabold text-[#1B6523]">
                      {review.initials}
                    </span>
                    <span>
                      <strong className="block text-[11px] text-charcoal">{review.name}</strong>
                      <span className="mt-0.5 block text-[9px] text-slate-500">{review.detail}</span>
                    </span>
                  </div>
                </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="cara-pesan" className="bg-white py-14 md:py-20">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <Reveal delay={0} className="mx-auto max-w-[560px] text-center">
              <p className="eyebrow text-[10px] font-extrabold uppercase text-[#1B6523]">Praktis & cepat</p>
              <h2 className="mt-3 font-sans text-3xl font-extrabold tracking-tight text-charcoal sm:text-[40px]">3 Langkah Cara Memesan</h2>
              <p className="mt-3 text-sm text-slate-500">Oleh-oleh favoritmu cuma sejauh beberapa chat.</p>
            </Reveal>
            <div className="relative mt-10 grid gap-4 md:mt-12 md:grid-cols-3">
              {steps.map(({ number, title, text, icon: Icon }, index) => (
                <Reveal key={number} delay={index * 120} className="h-full">
                <article className="relative flex h-full flex-col items-center rounded-2xl border border-[#E7E0C8] bg-[#FAF8EE] p-5 text-center shadow-sm sm:p-6">
                  <span className="relative mx-auto grid h-[68px] w-[68px] place-items-center rounded-full border-[5px] border-[#FAF8EE] bg-[#EDF5ED] text-[#1B6523]">
                    <Icon size={24} />
                    <span className="absolute -right-1 -top-1 grid h-6 w-6 place-items-center rounded-full bg-[#1B6523] text-[9px] font-bold text-[#F3C11A] ring-4 ring-[#F3C11A]/30">{number}</span>
                  </span>
                  <h3 className="mt-5 text-sm font-extrabold text-charcoal">{title}</h3>
                  <p className="mx-auto mt-2 max-w-[270px] text-xs leading-5 text-slate-500">{text}</p>
                </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="lokasi" className="bg-[#EDF5ED] py-14 md:py-20">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center md:mb-12">
              <p className="eyebrow text-[10px] font-extrabold uppercase text-[#1B6523]">Mampir, yuk!</p>
              <h2 className="mt-3 font-sans text-3xl font-extrabold tracking-tight text-charcoal sm:text-[40px]">Temukan Toko Yivenca</h2>
            </div>
            <div className="grid overflow-hidden rounded-2xl border border-[#1B6523]/15 bg-white lg:grid-cols-[0.8fr_1.2fr]">
              <Reveal delay={0} className="h-full">
              <div className="h-full p-6 sm:p-9">
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-[#EDF5ED] text-[#1B6523]">
                  <Store size={23} />
                </span>
                <h3 className="mt-5 font-sans text-2xl font-extrabold text-charcoal">Mampir ke toko kami</h3>
                <p className="mt-2 text-xs leading-5 text-slate-500">Kami tunggu kedatanganmu untuk memilih buah tangan favorit.</p>
                <div className="mt-6 space-y-5">
                  <div className="flex gap-3">
                    <MapPin size={17} className="mt-0.5 shrink-0 text-[#1B6523]" />
                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-wider text-stone-400">Alamat</p>
                      <p className="mt-1 text-xs leading-5 text-stone-700">{storeAddress}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Clock3 size={17} className="mt-0.5 shrink-0 text-[#1B6523]" />
                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-wider text-stone-400">Jam operasional</p>
                      <p className="mt-1 text-xs text-stone-700">{storeHours}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Instagram size={17} className="mt-0.5 shrink-0 text-[#1B6523]" />
                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-wider text-stone-400">Instagram</p>
                      <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-xs font-semibold text-charcoal hover:text-[#D9A60E]">{INSTAGRAM_HANDLE}</a>
                    </div>
                  </div>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(storeAddress)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#1B6523] px-5 py-3 text-[11px] font-semibold text-white transition-colors hover:bg-[#144E1A]"
                >
                  Buka Google Maps <ArrowUpRight size={14} />
                </a>
              </div>
              </Reveal>
              <Reveal delay={120} className="min-h-[290px] lg:min-h-[430px]">
              <div className="map-frame h-full min-h-[290px] bg-stone-200 lg:min-h-[430px]">
                <iframe
                  title="Peta lokasi toko Yivenca di Pekanbaru"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(storeAddress)}&output=embed`}
                  className="h-full min-h-[290px] w-full border-0 lg:min-h-[430px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200/40 bg-[#144E1A] py-14 text-[#FAF8EE] md:py-20">
        <Reveal delay={0} className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-9 border-b border-emerald-100/20 pb-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.85fr_1fr_1fr]">
            <div>
              <Logo footer />
              <p className="mt-4 max-w-[270px] text-xs leading-6 text-emerald-100/80">
                Oleh-oleh khas Pekanbaru yang dibuat sepenuh hati untuk menemani
                perjalanan dan momen bersama keluarga.
              </p>
              <div className="mt-4 flex items-center gap-2 text-[10px] font-medium text-emerald-100/80">
                <ShieldCheck size={14} className="text-[#F3C11A]" /> Halal • Fresh • Penuh rasa
              </div>
            </div>
            <div>
              <h3 className="text-xs font-extrabold text-[#FAF8EE]">Navigasi Cepat</h3>
              <ul className="mt-4 space-y-3">
                {navigation.map(([label, href]) => (
                  <li key={href}><a href={href} className="text-[11px] text-emerald-100/80 transition hover:text-[#F3C11A]">{label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-extrabold text-[#FAF8EE]">Instagram</h3>
              <p className="mt-4 text-[11px] leading-5 text-emerald-100/80">Ada yang ingin ditanyakan atau dipesan?</p>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-emerald-100/80 hover:text-[#F3C11A]"
              >
                <Instagram size={15} /> {INSTAGRAM_HANDLE}
              </a>
            </div>
            <div>
              <h3 className="text-xs font-extrabold text-[#FAF8EE]">Jam Operasional</h3>
              <p className="mt-4 text-[11px] leading-5 text-emerald-100/80">{storeHours}</p>
              <p className="mt-2 text-[10px] text-emerald-100/80">Waktu Indonesia Barat (WIB)</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 border-t border-emerald-100/20 pt-5 text-[10px] text-emerald-100/80 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Yivenca.id. Dibuat dengan sepenuh hati di Pekanbaru.</p>
            <p>Oleh-oleh yang membawa pulang cerita.</p>
          </div>
        </Reveal>
      </footer>

      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Kunjungi Instagram @yivenca.id"
        title="DM Instagram @yivenca.id"
        className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#F3C11A] bg-[#1B6523] text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-[#144E1A] sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
      >
        <Instagram size={22} />
      </a>

    </div>
  );
}

export default App;
