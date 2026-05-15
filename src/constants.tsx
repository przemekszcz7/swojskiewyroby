import { Facebook, Mail, MapPin, Phone, Clock, Quote } from 'lucide-react';

export const IMAGES = {
  hero: "https://i.postimg.cc/FsJcvKKL/698680395-122173115336822950-5038398005759299378-n.jpg",
  gallery1: "https://i.postimg.cc/3rqpzG3x/678967186-122171060312822950-3798168413252509713-n.jpg",
  gallery2: "https://i.postimg.cc/dtTdF00C/698958732-122173115492822950-5609928028029778567-n.jpg",
  gallery3: "https://i.postimg.cc/xTbHQddH/699927943-122173115288822950-6427480762480010185-n.jpg",
  logo: "https://i.postimg.cc/RhSP8Hmd/504199434-122123601398822950-3331216097283898248-n.jpg"
};

export const CONTACT = {
  email: "swojskiewyroby@firma.pl",
  address: "Węglowa 2, 80-209 Chwaszczyno",
  phone: "506 132 774",
  facebook: "https://www.facebook.com/profile.php?id=61574688525078",
  reviews: "https://www.facebook.com/profile.php?id=61574688525078&sk=reviews"
};

export const OPENING_HOURS = [
  { day: "Poniedziałek", hours: "ZAMKNIĘTE" },
  { day: "Wtorek", hours: "ZAMKNIĘTE" },
  { day: "Środa", hours: "ZAMKNIĘTE" },
  { day: "Czwartek", hours: "13:00 - 18:00" },
  { day: "Piątek", hours: "13:00 - 18:00" },
  { day: "Sobota", hours: "09:00 - 14:00" },
  { day: "Niedziela", hours: "09:00 - 13:00" }
];

export const PRODUCTS = [
  {
    title: "Wędliny Wędzone",
    items: ["Szynki", "Schaby", "Balerony", "Boczki", "Kiełbasy", "Kabanosy"],
    icon: "smoke"
  },
  {
    title: "Sery Wędzone",
    items: ["Sery w przyprawach", "Wiele smaków tradycji"],
    icon: "cheese"
  },
  {
    title: "Tradycyjne Wyroby",
    items: ["Salcesony", "Kaszanki", "Pasztety"],
    icon: "board"
  },
  {
    title: "Wek i Spiżarnia",
    items: ["Wyroby mięsne w słoikach"],
    icon: "jar"
  }
];

export const SVGS = {
  Sausages: () => (
    <svg viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-24 h-auto opacity-40">
      <path d="M10 20C10 10 30 10 30 20C30 30 50 30 50 20C50 10 70 10 70 20C70 30 90 30 90 20" strokeLinecap="round" />
      <circle cx="10" cy="20" r="2" fill="currentColor" />
      <circle cx="90" cy="20" r="2" fill="currentColor" />
    </svg>
  ),
  Pig: () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12 opacity-20">
      <path d="M48 24C48 16 40 12 32 12C24 12 16 16 16 24C16 32 20 40 32 40C44 40 48 32 48 24Z" />
      <circle cx="24" cy="22" r="1.5" fill="currentColor" />
      <circle cx="40" cy="22" r="1.5" fill="currentColor" />
      <path d="M30 30H34V34H30V30Z" fill="currentColor" />
      <path d="M48 24L56 20M16 24L8 20" strokeLinecap="round" />
    </svg>
  ),
  Wheat: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8 opacity-40">
      <path d="M12 2V22M12 4C10 6 8 8 12 10M12 4C14 6 16 8 12 10M12 8C10 10 8 12 12 14M12 8C14 10 16 12 12 14M12 12C10 14 8 16 12 18M12 12C14 14 16 16 12 18" strokeLinecap="round" />
    </svg>
  )
};
