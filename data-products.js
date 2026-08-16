/* =====================================================
   PRODUCTS DATA
   -----------------------------------------------------
   HOW TO ADD A NEW PRODUCT:
   1. Copy one item block below (the { ... } object) and
      paste it into the PRODUCTS array, separated by a comma.
   2. Fill in category / subcategory / block / title / details.
      - category & subcategory are ARRAYS — list more than one
        if a product fits multiple, e.g. category: ["food","home-decor"]
      - block must be one of the keys in data-blocks.js
   3. If you're using a brand-new category/subcategory value that
      isn't in PRODUCT_LABELS.category / .subcategory below, add
      one line there too so it gets a proper Hindi/English dropdown
      label (otherwise it still works, just shows the raw code).
   4. Save. Filters and cards rebuild automatically — you do NOT
      need to touch products.html.

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
       { hi: "मूल्य: ", en: "Price: " },
       { hi: "संपर्क: ", en: "Contact: " },
       { hi: "पता/समूह: ", en: "Group/Address: " }
     ],
     image: "images/example.jpg",
     imageAlt: "Short description"
   },
===================================================== */

const PRODUCT_LABELS = {
  category: {
    food:               { hi: "खाद्य", en: "Food" },
    "home-improvement":  { hi: "घरेलू", en: "Home Improvement" },
    "building-material": { hi: "निर्माण सामग्री", en: "Building Material" },
    apparel:            { hi: "कपड़े", en: "Apparel" },
    "home-decor":        { hi: "घर की सजावट", en: "Home-Decor" }
  },
  subcategory: {
    pickle:            { hi: "अचार", en: "Pickle" },
    "milk-products":    { hi: "दुग्ध उत्पाद", en: "Milk Products" },
    ghee:              { hi: "गाय के दूध का घी", en: "Cow Milk Ghee" },
    masale:            { hi: "मसाले", en: "Spices" },
    flour:             { hi: "विभिन्न प्रकार का आँटा", en: "Multi-Grain Flour" },
    sweets:            { hi: "मिठाईयाँ", en: "Sweets" },
    honey:             { hi: "शहद", en: "Honey" },
    clayUtensils:      { hi: "मिटटी के बर्तन", en: "Clay Utensils" },
    candle:            { hi: "मोमबत्ती", en: "Candle" },
    paint:             { hi: "पेंट", en: "Paint" },
    "curtains&Footmats": { hi: "पर्दे-फुटमैट", en: "Curtains & Footmats" },
    cap:               { hi: "मुस्लिम टोपी", en: "Muslim Cap" },
    "Shoes&Slippers":   { hi: "जूते-चप्पल", en: "Shoes & Slippers" },
    "zari-zardozi":     { hi: "ज़री-ज़रदोज़ी उत्पाद", en: "Zari-Zardozi Products" },
    toys:              { hi: "खिलौने (घोड़े)", en: "Toys (Horse)" }
  }
};

const PRODUCTS = [
  {
    category: ["home-improvement", "home-decor", "building-material"],
    subcategory: ["paint"],
    block: "salarpur",
    title: {
      hi: "प्राकृतिक पेंट - गाय के गोबर से निर्मित",
      en: "Natural Paint - Made Using Cow Dung"
    },
    details: [
      { hi: "मूल्य: इमल्शन ₹156.35 प्रति लीटर (₹132.5 + 18% जी एस टी)", en: "Price: Emulsion ₹156.35 per litre (₹132.5 + 18% GST)" },
      { hi: " डिस्टेंपर ₹82.6 per litre (₹70 + 18% जी एस टी)", en: "Distemper ₹82.6 per litre (₹70 + 18% GST)" },
      { hi: "संपर्क: 9720572572, 8077913715", en: "Contact: 9720572572, 8077913715" },
      { hi: "शिव पार्वती महिला स्वयं सहायता समूह, घटपुरी ग्रा.पं, सालारपुर विकासखण्ड", en: "Shiv Parwati Mahila Self Help Group, Ghatpuri gram panchayat, Salarpur Block" }
    ],
    image: "images/NaturalPaintShivParwatiSHGSalarpur.jpg",
    imageAlt: "natural - cow dung based - paint"
  },
  {
    category: ["apparel", "home-decor"],
    subcategory: ["zari-zardozi"],
    block: "salarpur",
    title: {
      hi: "ज़रकला: ज़री-ज़रदोज़ी उत्पाद",
      en: "Zarkala: Zari-Zardozi Products"
    },
    details: [
      { hi: "वेबसाईट: https://zarkala.in/", en: "Website: https://zarkala.in/" },
      { hi: "कपड़े, कुशन-कवर, कोस्टर, वाल-हैंगिंग, इत्यादि |", en: "Apparels, Cushion Covers, Coasters, Wall Hangings, etc." },
      { hi: "संपर्क: 9304185432, contact@zarkala.in", en: "Contact: 9304185432, contact@zarkala.in" },
      { hi: "ज़रकला महिला हस्तशिल्प प्रोड्यूसर कम्पनी, सालारपुर विकास खण्ड", en: "Zarkala Mahila Hastshilp Producer Company, Salarpur Block" }
    ],
    image: "images/Zarkala.jpg",
    imageAlt: "Zarkala"
  },
  {
    category: ["food"],
    subcategory: ["flour"],
    block: "salarpur",
    title: {
      hi: "विभिन्न प्रकार का पिसा आंटा",
      en: "Powdered Flour - Various Types"
    },
    details: [
      { hi: "बहु-अनाज – ₹160/किग्रा | ज्वार – ₹160/किग्रा | बाजरा – ₹110/किग्रा | मक्का – ₹90/किग्रा | चना – ₹170/किग्रा | रागी – ₹160/किग्रा", en: "Multigrain – ₹160/kg | Jowar – ₹160/kg | Bajra – ₹110/kg | Makka – ₹90/kg | Chana – ₹170/kg | Ragi – ₹160/kg" },
      { hi: "संपर्क: 7895613490", en: "Contact: 7895613490" },
      { hi: "सूरज समृद्धि महिला स्वयं सहायता समूह, सालारपुर विकासखण्ड", en: "Sooraj Samriddhi Mahila Self Help Group, Salarpur Block" }
    ],
    image: "images/SoorajSamriddhiMultigrainSalarpur.jpg",
    imageAlt: "multigrain flour"
  },
  {
    category: ["food"],
    subcategory: ["milk-products", "ghee"],
    block: "sahaswan",
    title: {
      hi: "देशी घी",
      en: "Deshi Ghee"
    },
    details: [
      { hi: "मूल्य: ₹1000 / किग्रा", en: "Price: ₹1000 / Kg" },
      { hi: "संपर्क: 8954079726", en: "Contact: 8954079726" },
      { hi: "गंगा महिला स्वयं सहायता समूह, ग्रा.पं शेखपुर सैदपुर, विकासखण्ड सहसवान", en: "Ganga Mahila Self Help Group, Gram Panchayat Shekhpur Saidpur, Sahaswan Block" }
    ],
    image: "images/DeshiGheeGangaSHGSahaswan.jpg",
    imageAlt: "Deshi Ghee"
  },
  {
    category: ["food"],
    subcategory: ["pickle"],
    block: "dataganj",
    title: {
      hi: "स्वादिष्ट अचार",
      en: "Tasty Pickles"
    },
    details: [
      { hi: "मूल्य: ₹100 / किलो ", en: "Price: ₹100 / किलो" },
      { hi: "संपर्क: 9690934064", en: "Contact: 9690934064" },
      { hi: "रौशनी महिला स्वयं सहायता समूह, दातागंज", en: "Roshni Mahila Self Help Group, Dataganj" }
    ],
    image: "images/mixPickle.jpg",
    imageAlt: "Swadisht Pickles"
  },
  {
    category: ["food"],
    subcategory: ["masale", "flour"],
    block: "qadarchowk",
    title: {
      hi: "पिसे मसाले व आँटा",
      en: "Ground Spices & Flour"
    },
    details: [
      { hi: "पिसी लाल मिर्च, धनिया, हल्दी, व बेसन पाउडर", en: "Powdered red chilli, coriander, turmeric, gram flour powder" },
      { hi: "संपर्क: 9837871292", en: "Contact: 9837871292" },
      { hi: "दुर्गा माँ महिला स्वयं सहायता समूह, कचौरा ग्रां.पं, क़ादरचौक", en: "Durga Maa Mahila Self Help Group, Kachoura Gram Panchayat, Qadarchowk" }
    ],
    image: "images/MasaleDurgaMaaQadarchowk.png",
    imageAlt: "Ground Spices & Flour"
  },
  {
    category: ["food"],
    subcategory: ["sweets"],
    block: "usawan",
    title: {
      hi: "मिठाइयाँ",
      en: "Sweets"
    },
    details: [
      { hi: "संपर्क: 7983440403", en: "Contact: 7983440403" },
      { hi: "जय सिया राम महिला स्वयं सहायता समूह, राजानगला, उसावाँ देहात ग्रां.पं, उसावाँ", en: "Jai Siya Ram Mahila Self Help Group, Rajanagla, Usawan Dehat Gram Panchayat, Usawan" }
    ],
    image: "images/SweetsJaiSiyaRaamUsawan.jpeg",
    imageAlt: "Sweets-Jai-Siya-Ram"
  },
  {
    category: ["food"],
    subcategory: ["milk-products"],
    block: "jagat",
    title: {
      hi: " दूध एवं दुग्ध-उत्पाद (पनीर)",
      en: "Milk & Milk-Products (Cottage Cheese)"
    },
    details: [
      { hi: "संपर्क: 9760629467", en: "Contact: 9760629467" },
      { hi: "राधा महिला स्वयं सहायता समूह, बीबीपुर ग्रां.पं, जगत", en: "Radha Mahila Self Help Group, Bibipur Gram Panchayat, Jagat" }
    ],
    image: "images/MilkPaneerRadhaSHGJagat.jpg",
    imageAlt: "Milk-Products"
  },
  {
    category: ["food"],
    subcategory: ["milk-products"],
    block: "qadarchowk",
    title: {
      hi: "दुग्ध-उत्पादन",
      en: "Milk-Production"
    },
    details: [
      { hi: "संपर्क: 7017526290", en: "Contact: 7017526290" },
      { hi: "प्रगतिशील स्वयं सहायता समूह, चूड़ियाँ ग्रां.पं, क़ादरचौक", en: "Pragatishil Self Help Group, Chudiyan Gram Panchayat, Qadarchowk" }
    ],
    image: "images/milkProductionPragatishilQadarchowk.jpg",
    imageAlt: "Milk-Products"
  },
  {
    category: ["apparel"],
    subcategory: ["cap"],
    block: "wazirganj",
    title: {
      hi: "मुस्लिम टोपी",
      en: "Muslim Cap"
    },
    details: [
      { hi: "मूल्य: ₹50 प्रति पीस", en: "Price: ₹50 per piece." },
      { hi: "वज़न: 45g प्रति पीस", en: "Weight: 45g per piece." },
      { hi: "संपर्क: 7248432797", en: "Contact: 7248432797" },
      { hi: "ख्वाजा गरीब नवाज़ महिला स्वयं सहायता समूह, सिसैया ग्रां.पं, वज़ीरगंज", en: "Khwaja Garib Nawaz Self Help Group, Sisaiya Gram Panchayat, Wazirganj" }
    ],
    image: "images/MuslimTopiKHwajaGaribNawazWazirganj.jpg",
    imageAlt: "Muslim-Cap"
  },
  {
    category: ["apparel"],
    subcategory: ["Shoes&Slippers"],
    block: "ambiyapur",
    title: {
      hi: "जूते और चप्पल",
      en: "Shoes & Slippers"
    },
    details: [
      { hi: "संपर्क: 9761084954", en: "Contact: 9761084954" },
      { hi: "मदीना महिला स्वयं सहायता समूह, भीकमपुर हरदोपट्टी ग्रां.पं, अम्बियापुर", en: "Madina Self Help Group, Bheekampur Hardopatti Gram Panchayat, Ambiyapur" }
    ],
    image: "",
    imageAlt: "Shoes-&-Slippers"
  },
  {
    category: ["food"],
    subcategory: ["honey"],
    block: "ambiyapur",
    title: {
      hi: "शहद (मधुमक्खी पालन)",
      en: "Honey (Bee Keeping)"
    },
    details: [
      { hi: "संपर्क: 7505466120", en: "Contact: 7505466120" },
      { hi: "श्री राम स्वयं सहायता समूह, बैरमई बुज़ुर्ग ग्रां.पं, अम्बियापुर", en: "Shree Ram Self Help Group, Bairmai Buzurg Gram Panchayat, Ambiyapur" }
    ],
    image: "",
    imageAlt: "honey(BeeKeeping)"
  }
];
