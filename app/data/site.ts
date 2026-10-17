export interface Service {
  id: string
  number: string
  name: string
  price: string
  duration: string
  image: string
  shape?: 'wide' | 'tall'
}

export interface GalleryItem {
  id: number
  title: string
  category: string
  filter: string
  image: string
}

export const navigation = [
  { href: "/", label: "Главная", key: "home" },
  { href: "/services", label: "Услуги", key: "services" },
  { href: "/gallery", label: "Галерея", key: "gallery" },
  { href: "/contacts", label: "Контакты", key: "contacts" },
];

export const socials = [
  { href: "https://vk.com/sudarkrd1", label: "VK" },
  { href: "https://wa.me/79892692442?text=%D0%9E%D0%B1%D1%80%D0%B0%D1%89%D0%B5%D0%BD%D0%B8%D0%B5+%D0%B8%D0%B7+%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81+%D0%9A%D0%B0%D1%80%D1%82%0A%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!+%D0%9C%D0%B5%D0%BD%D1%8F+%D0%B7%D0%B0%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D0%BE%D0%B2%D0%B0%D0%BB%D0%BE+%D0%B2%D0%B0%D1%88%D0%B5+%D0%BF%D1%80%D0%B5%D0%B4%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5", label: "WA" },
  { href: "https://t.me/+79892692442", label: "TG" },
];

export const bookingUrl = "/contacts";

export const services: Service[] = [
  {
    "id": "13159292",
    "number": "01",
    "name": "Воск",
    "price": "300 ₽",
    "duration": "10 мин",
    "image": "https://avatars.mds.yandex.net/get-sprav-products/1540730/2a0000019fd315a6e2e68f843b8729914e16/M_height",
    "shape": "wide"
  },
  {
    "id": "13184196",
    "number": "02",
    "name": "Камуфляж бороды",
    "price": "от 1000 ₽",
    "duration": "40 мин",
    "image": "https://avatars.mds.yandex.net/get-sprav-products/4472294/2a0000019fdbdd0e2cff4a169f47a1c254df/M_height"
  },
  {
    "id": "13184162",
    "number": "03",
    "name": "Камуфляж головы",
    "price": "1000 ₽",
    "duration": "40 мин",
    "image": "https://avatars.mds.yandex.net/get-sprav-products/9495815/2a0000019fd316368589c9cbcd46f2b50f5b/M_height"
  },
  {
    "id": "12812892",
    "number": "04",
    "name": "Оформление бороды и усов",
    "price": "1000 ₽",
    "duration": "30 мин",
    "image": "https://avatars.mds.yandex.net/get-sprav-products/20340178/2a0000019fcd60409a733894a24a996bc422/M_height"
  },
  {
    "id": "12754632",
    "number": "05",
    "name": "Стрижка мужская TOP BARBER",
    "price": "1800 ₽",
    "duration": "1 ч",
    "image": "https://avatars.mds.yandex.net/get-sprav-products/19300642/2a0000019fccacd34aded3bfaffe6cc50ff5/M_height",
    "shape": "tall"
  },
  {
    "id": "19891864",
    "number": "06",
    "name": "Стрижка + уход (NISHMAN)",
    "price": "3500 ₽",
    "duration": "1 ч 30 мин",
    "image": "https://f2.dikidi.net/c18/v17873/7hl7ig0r55.jpg"
  },
  {
    "id": "12754658",
    "number": "07",
    "name": "Стрижка детская (с 5 до 14 лет)",
    "price": "1200 ₽",
    "duration": "30 мин",
    "image": "https://avatars.mds.yandex.net/get-sprav-products/19300642/2a0000019fcd644ee34b73631028e2fd7b1f/M_height"
  },
  {
    "id": "12815132",
    "number": "08",
    "name": "Окантовка",
    "price": "от 1000 ₽",
    "duration": "30 мин",
    "image": "https://f2.dikidi.net/c18/v17807/437decrp3g.jpg"
  },
  {
    "id": "12754684",
    "number": "09",
    "name": "Стрижка машинкой (2 насадки)",
    "price": "от 1000 ₽",
    "duration": "30 мин",
    "image": "https://avatars.mds.yandex.net/get-sprav-products/17700615/2a0000019fd6a1f24d30ccdb9592708235d0/M_height"
  },
  {
    "id": "19505617",
    "number": "10",
    "name": "Сухое бритьё (шейвером)",
    "price": "1200 ₽",
    "duration": "30 мин",
    "image": "https://avatars.mds.yandex.net/get-sprav-products/17700615/2a0000019fd315631ea892c2b66764e832c9/M_height"
  },
  {
    "id": "12812928",
    "number": "11",
    "name": "Укладка",
    "price": "от 800 ₽",
    "duration": "30 мин",
    "image": "https://avatars.mds.yandex.net/get-sprav-products/19300642/2a0000019fcd61cc06e65722fc9540b4b0e6/M_height"
  },
  {
    "id": "19840275",
    "number": "12",
    "name": "Уход за лицом (NISHMAN)",
    "price": "1700 ₽",
    "duration": "1 ч",
    "image": "https://avatars.mds.yandex.net/get-sprav-products/4472294/2a0000019fd6a325129d1500b1768cb91b73/M_height"
  },
  {
    "id": "21162381",
    "number": "13",
    "name": "Черная маска",
    "price": "1000 ₽",
    "duration": "20 мин",
    "image": "https://f2.dikidi.net/c25/v24736/6qumeno1ev.jpg"
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Fade contour",
    category: "Стрижки",
    filter: "haircut",
    image:
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "Precision side",
    category: "Стрижки",
    filter: "haircut",
    image:
      "https://images.unsplash.com/photo-1512690459411-b0fd1c86b8ec?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Brill room",
    category: "Интерьер",
    filter: "interior",
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "Hot towel ritual",
    category: "Процесс",
    filter: "process",
    image:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 5,
    title: "Silver crop",
    category: "Стрижки",
    filter: "haircut",
    image:
      "https://images.unsplash.com/photo-1503951458645-643d53bfd90f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    title: "Chair line-up",
    category: "Интерьер",
    filter: "interior",
    image:
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=950&q=80",
  },
  {
    id: 7,
    title: "Beard detail",
    category: "Борода",
    filter: "beard",
    image:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 8,
    title: "Clipper hands",
    category: "Процесс",
    filter: "process",
    image:
      "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?auto=format&fit=crop&w=950&q=80",
  },
  {
    id: 9,
    title: "Sharp outline",
    category: "Борода",
    filter: "beard",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
  },
];
