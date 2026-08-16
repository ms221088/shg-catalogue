/* =====================================================
   SERVICES DATA
   -----------------------------------------------------
   HOW TO ADD A NEW SERVICE:
   1. Copy one item block below (the { ... } object) and
      paste it into the SERVICES array, separated by a comma.
   2. Fill in category / subcategory / block / title / details.
      - category & subcategory are ARRAYS — you can list more
        than one, e.g. category: ["agriculture", "skill"]
      - block must be one of the keys in data-blocks.js
        (salarpur, wazirganj, ambiyapur, etc.)
   3. If you're using a brand-new category or subcategory value
      that isn't in SERVICE_LABELS.category / .subcategory below,
      add one line there too so it has a proper Hindi/English
      dropdown label (otherwise it still works, just shows the
      raw code as its label).
   4. Save. The filter dropdowns and cards update automatically —
      you do NOT need to touch services.html.

   HOW TO ADD A NEW IMAGE:
   - Put the image file in the images/ folder.
   - Set "image" below to "images/your-file-name.jpg".

   TEMPLATE (copy this):
   {
     category: ["CATEGORY_KEY"],
     subcategory: ["SUBCATEGORY_KEY"],
     block: "BLOCK_KEY",
     title: { hi: "हिंदी शीर्षक", en: "English Title" },
     details: [
       { hi: "दर/मूल्य", en: "Rate/Price" },
       { hi: "संपर्क: ", en: "Contact: " },
       { hi: "पता: ", en: "Address: " }
     ],
     image: "images/example.jpg",
     imageAlt: "Short description"
   },
===================================================== */

const SERVICE_LABELS = {
  category: {
    agriculture: { hi: "कृषि", en: "Agriculture" },
    skill:       { hi: "कौशल", en: "Skill" }
  },
  subcategory: {
    drone:     { hi: "ड्रोन", en: "Drone" },
    tailoring: { hi: "सिलाई", en: "Tailoring" }
  }
};

const SERVICES = [
  {
    category: ["agriculture"],
    subcategory: ["drone"],
    block: "salarpur",
    title: {
      hi: "ड्रोन दीदी कृषि सेवा - दवा / उर्वरक छिड़काव",
      en: "Drone Didi Agriculture Service - Spraying Pesticide / Fertilizer"
    },
    details: [
      { hi: "दर: ₹400 प्रति एकड़", en: "Rate: ₹400 per acre" },
      { hi: "संपर्क: 7895403652 / 7983153273", en: "Contact: 7895403652 / 7983153273" },
      { hi: "पता: ग्राम पंचायात – ब्यौर, विकास खण्ड – सालारपुर, बदायूँ |", en: "Address: Gram Panchayat- Byour, Block - Salarpur, Budaun." }
    ],
    image: "images/drone.png",
    imageAlt: "Drone service"
  },
  {
    category: ["skill"],
    subcategory: ["tailoring"],
    block: "salarpur",
    title: {
      hi: "सिलाई–कढ़ाई सेवाएँ - कमल स्वयं सहायता समूह, कासिमपुर, सालारपुर",
      en: "Tailoring / Sewing Service - Kamla SHG, Kasimpur, Salarpur"
    },
    details: [
      { hi: "मूल्य: वस्तु के अनुसार अलग-अलग", en: "Price: Varies by item" },
      { hi: "संपर्क: 8755541457", en: "Contact: 8755541457" },
      { hi: "पता: कमल महिला स्वयं सहायता समूह, गाँव-कासिमपुर, ग्राम पंचायात – कुआँडांडा-कासिमपुर, विकास खण्ड – सालारपुर, बदायूँ |", en: "Address: Kamal Mahila Self Help Group, Gram Panchayat- Kunandanda-Kasimppur, Block - Salarpur, Budaun." }
    ],
    image: "images/RakhiKamalSewingKasimpur.jpg",
    imageAlt: "KamalSHG-Kasimpur-Tailoring-Sewing"
  },
  {
    category: ["skill"],
    subcategory: ["tailoring"],
    block: "wazirganj",
    title: {
      hi: "सिलाई–कढ़ाई सेवाएँ - बनकोटा, वज़ीरगंज",
      en: "Tailoring / Sewing Service - Bankota, Wazirganj"
    },
    details: [
      { hi: "मूल्य: वस्तु के अनुसार अलग-अलग", en: "Price: Varies by item" },
      { hi: "संपर्क: 8273205891", en: "Contact: 8273205891" },
      { hi: "पता: राधा रानी स्वयं सहायता समूह, ग्राम पंचायात – बनकोटा, विकास खण्ड – वज़ीरगंज, बदायूँ |", en: "Address: Radha Rani Self Help Group, Gram Panchayat- Bankota, Block - Wazirganj, Budaun." }
    ],
    image: "images/RajaRaniSewing.jpg",
    imageAlt: "Tailouring-Sewing"
  },
  {
    category: ["skill"],
    subcategory: ["tailoring"],
    block: "jagat",
    title: {
      hi: "सिलाई–कढ़ाई सेवाएँ - ग्रा.पं करोलिया, जगत ब्लॉक",
      en: "Tailoring / Sewing Service - Karoliya gram panchayat, Jagat"
    },
    details: [
      { hi: "मूल्य: वस्तु के अनुसार अलग-अलग (सूट, ब्लाउज़, राष्ट्रीय तिरंगा झंडा, इत्यादि)", en: "Price: Varies by item (Suit, Blouse, Tricolor National Flag, etc.)" },
      { hi: "संपर्क: 9639704831", en: "Contact: 9639704831" },
      { hi: "पता: लक्ष्मी महिला स्वयं सहायता समूह, ग्राम पंचायात – करोलिया, विकास खण्ड – जगत, बदायूँ |", en: "Address: Laxmi Mahila Self Help Group, Gram Panchayat- Karoliya, Block - Jagat, Budaun." }
    ],
    image: "images/sewingLaxmiSHGKaroliyaJagat.jpg",
    imageAlt: "Tailoring-Sewing"
  }
];
