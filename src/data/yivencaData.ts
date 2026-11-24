import talamDurianImage from "../assets/talam-durian.jpeg";
import browniesAzuraImage from "../assets/brownies-azura.jpg";
import boluGulungNanasImage from "../assets/bolu-gulung-nanas.jpg";

export const INSTAGRAM_HANDLE = "@yivenca.id";
export const INSTAGRAM_URL = "https://www.instagram.com/yivenca.id/";

export const products = [
  {
    name: "Talam Durian",
    price: "Rp 45.000",
    description:
      "Lembutnya talam berpadu dengan aroma durian pilihan yang legit dan bikin rindu.",
    image: talamDurianImage,
    imageAlt: "Kotak Talam Durian Yivenca berwarna kuning",
    highlights: [
      "Durian pilihan, rasa autentik",
      "Dibuat fresh setiap hari",
      "Aman untuk perjalanan",
    ],
  },
  {
    name: "Bolu Gulung Nanas",
    price: "Rp 55.000",
    description:
      "Bolu lembut dengan isian nanas harum, teman sempurna untuk dinikmati bersama.",
    image: boluGulungNanasImage,
    imageAlt: "Potongan bolu gulung nanas Yivenca",
    highlights: [
      "Selai nanas racikan sendiri",
      "Tekstur lembut dan moist",
      "Kemasan praktis dibawa",
    ],
  },
  {
    name: "Brownies Azura",
    price: "Rp 60.000",
    description:
      "Brownies Azura berlapis cokelat dengan rasa kaya, cocok jadi buah tangan untuk keluarga.",
    image: browniesAzuraImage,
    imageAlt: "Kemasan brownies khas Pekanbaru",
    highlights: [
      "Cokelat berkualitas",
      "Tanpa pengawet buatan",
      "Packing aman untuk oleh-oleh",
    ],
  },
];

export const testimonials = [
  {
    quote:
      "Talam duriannya lembut banget dan rasanya pas. Selalu jadi oleh-oleh wajib kalau pulang ke Jakarta!",
    name: "Dina P.",
    detail: "Wisatawan dari Jakarta",
    initials: "DP",
    tone: "bg-rose-100 text-rose-700",
  },
  {
    quote:
      "Adminnya ramah, fast response, dan pesanan disiapkan rapi. Bolu nanasnya favorit keluarga.",
    name: "Rizky A.",
    detail: "Pelanggan Pekanbaru",
    initials: "RA",
    tone: "bg-amber-100 text-amber-700",
  },
  {
    quote:
      "Packing-nya aman dibawa naik pesawat. Semua sampai rumah tetap cantik dan rasanya enak.",
    name: "Maya S.",
    detail: "Wisatawan dari Bandung",
    initials: "MS",
    tone: "bg-emerald-100 text-emerald-700",
  },
  {
    quote:
      "Brownies Azura-nya enak dan nggak terlalu manis. Sudah langganan untuk buah tangan.",
    name: "Fajar H.",
    detail: "Pelanggan Pekanbaru",
    initials: "FH",
    tone: "bg-sky-100 text-sky-700",
  },
];

export const storeAddress =
  "Jl. Jenderal Sudirman, Pekanbaru, Riau 28121";
export const storeHours = "Setiap hari, 09.00–21.00 WIB";
