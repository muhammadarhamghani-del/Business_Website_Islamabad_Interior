/**
 * SINGLE SOURCE OF TRUTH for all site content.
 *
 * To add/edit products: find the relevant category/subcategory below and
 * add an object to its `items` array. No HTML or other JS needs to change.
 *
 * To add a real photo: drop an image file into assets/images/ using the
 * same path you put in an item's `image` field. Until a real file exists
 * at that path, the site automatically shows a "Photo coming soon" tile
 * instead of a broken image — so it's safe to write image paths ahead of
 * having the actual photos.
 */

// ---- Business / contact info (edit these once, they update the whole site) ----
const BUSINESS = {
  name: "AS Interior Islamabad",
  tagline: "Islamabad's Trusted Name in Premium Interior Design",
  city: "Islamabad, Pakistan",
  areaServed: ["Islamabad", "Rawalpindi"],
  phoneDisplay: "+92 336 335 6666",
  phoneTel: "+923363356666",
  whatsapp: "923363356666", // digits only, no + , used for wa.me links
  email: "asinterior2003@gmail.com", // placeholder — update to a real inbox
  address: "Main Service Golra Road, Near Nazim-ud-din Road, Opposite to Street No # 1, F-11/1, Islamabad, Pakistan",
  // Real shop location (from the Google Maps share link).
  mapEmbedSrc: "https://www.google.com/maps?q=33.6723396,72.9841005&output=embed",
  mapsUrl: "https://maps.app.goo.gl/d6PoSKD1R5gqF7KH8",
  geo: { lat: 33.6723396, lng: 72.9841005 },
  // used for structured data (JSON-LD); canonical/OG tags are hardcoded per-page in HTML.
  siteUrl: "https://islamabadinterior.com",
  socials: {
    tiktok: "https://www.tiktok.com/@as_interior_islamabad",
    youtube: "https://www.youtube.com/@AS_Interior_Islamabad",
    facebook: "https://www.facebook.com/profile.php?id=61587008565687",
  },
};

// ---- FAQ content (rendered on-page + mirrored into FAQPage structured data) ----
const FAQS = [
  {
    q: "What services does AS Interior Islamabad offer?",
    a: "We provide complete interior design and fit-out services, including wall panels (PVC and solid), wallpaper, UV sheets, media walls, PU stone cladding, wooden, laminate, SPC, Turkish and vinyl flooring, false and gypsum ceilings, roller blinds, insulation, artificial grass, PVC molding, fomic sheet, and bespoke furniture. Whether it's a single room or a full home or office, we handle it. Message us on WhatsApp to discuss your project.",
  },
  {
    q: "Which areas do you serve?",
    a: "We serve Islamabad and Rawalpindi, with our showroom located on Main Service Golra Road in F-11/1, Islamabad. From F-sectors and E-sectors to Bahria Town and beyond, our team works across the twin cities. Send us a WhatsApp message with your location and we'll take it from there.",
  },
  {
    q: "How do I get a quote for my project?",
    a: "Simply message us on WhatsApp with details of your space — photos, measurements, or even just a rough idea of what you want. Our team will guide you on suitable options and share pricing based on your requirements. Every project is different, so we quote after understanding your exact needs.",
  },
  {
    q: "What materials do you use for flooring and wall panels?",
    a: "For flooring we offer wooden, laminate, SPC, Turkish, and vinyl options in both local and imported varieties, so there's something for every budget. For walls, we work with PVC panels (normal and hard), solid panels, UV sheets, PU stone cladding, and wallpaper. Message us on WhatsApp and we can share samples and options that suit your space.",
  },
  {
    q: "How can I contact AS Interior Islamabad?",
    a: 'The fastest way to reach us is WhatsApp — just tap the "Message on WhatsApp" button anywhere on this page. Share your requirements and our team will respond with guidance, options, and next steps, including arranging a site visit if needed. You can also visit us at Main Service Golra Road, F-11/1, Islamabad.',
  },
  {
    q: "Why should I choose AS Interior Islamabad?",
    a: "We're rated 4.9 stars on Google from 119 reviews by customers across Islamabad and Rawalpindi — a reflection of the quality and care we put into every job. From premium materials to proper installation, we treat your space like our own. Message us on WhatsApp and see the difference for yourself.",
  },
  {
    q: "Do you provide wall panel installation in F-10, F-11, or other F-sectors of Islamabad?",
    a: "Yes, we work across Islamabad, and our own setup is based in F-11/1 on Main Service Golra Road — so the F-sectors are right in our neighbourhood. Whether it's PVC wall panels, media walls, or a full room makeover, send us your sector and house details on WhatsApp and we'll confirm a visit for your exact location.",
  },
  {
    q: "Do you work in DHA Islamabad and Bahria Town?",
    a: "We serve clients throughout Islamabad and Rawalpindi, and we regularly get enquiries from DHA and Bahria Town. Message us your phase or precinct on WhatsApp along with the work you have in mind — flooring, ceilings, blinds, anything — and we'll confirm coverage for your address and arrange the next step.",
  },
  {
    q: "Can I get interior work done in Rawalpindi, like Cantt or Saddar areas?",
    a: "Absolutely — Rawalpindi is very much part of our service area alongside Islamabad. Just share your exact location on WhatsApp with a photo or two of the space, and we'll confirm your area and guide you on measurements and material options from there.",
  },
  {
    q: "What's the difference between a gypsum and a PVC false ceiling?",
    a: "Gypsum gives a smooth, seamless, paintable finish and suits custom designs with concealed lighting, but it doesn't like moisture. PVC ceiling panels are waterproof, low-maintenance, and quicker to install, which makes them ideal for kitchens, bathrooms, and rental spaces. For living rooms and bedrooms, gypsum usually looks more premium. Send us a photo of your room on WhatsApp and we'll suggest the right option for your space and budget.",
  },
  {
    q: "Is imported vinyl flooring better than local vinyl flooring?",
    a: "Imported vinyl generally offers thicker wear layers, better finish quality, and longer life, while local vinyl is more budget-friendly and works well for lighter use or short-term needs. The right choice depends on foot traffic, moisture, and how long you plan to keep the floor. We stock both — message us on WhatsApp and we'll help you pick what suits your rooms.",
  },
  {
    q: "How does PU stone compare to real stone cladding?",
    a: "PU stone panels give you the look of natural stone at a fraction of the weight, so they install faster, put less load on your walls, and usually cost less overall. Real stone is heavier and more permanent but needs stronger fixing and more labour. For feature walls and media walls indoors, PU stone is often the smarter choice. WhatsApp us your wall size and we'll recommend the best fit.",
  },
];

// ---- Google reviews (edit rating/count here once they change on Google) ----
const REVIEWS = {
  rating: 4.9,
  count: 119,
  url: "https://share.google/F0rttiy8klKRXw2b8",
  items: [
    {
      name: "Muhammad Zaryab Khan",
      text: "Got a media wall done from Azeem & Sons Interior and the final look came out really clean. The design was well planned and they guided me properly about panel selection and UV sheet. Overall experience was smooth and I'm satisfied with the work.",
    },
    {
      name: "Hassan Farooq",
      text: "I purchased Jumbolon sheets in bulk from here at wholesale rates. The quality was really good, and all sizes (1 inch, 1.5 inch, 2 inch) were available. Jumbolon works very well for insulation and feels stronger than thermopore.",
    },
    {
      name: "Mubeen Amjad",
      text: "Bought fabric wallpaper from AS Interior. Prices are reasonable and the good thing is they also provide wallpaper in cut pieces, which really helps if you don't want to buy a full roll. Quality is perfect.",
    },
    {
      name: "Mudazir Rafique",
      text: "We had PU stone installed on our wall and it looks very realistic and elegant. The material is strong and waterproof. The room's look has completely improved from dull to premium. Highly recommended.",
    },
    {
      name: "Muhammad Faraz",
      text: "PVC 2×2 ceiling done by Azeem & Sons Interior. Work is neat and looks clean. Quality is good and charges are reasonable. Satisfied overall.",
    },
    {
      name: "Ezah Khalid",
      text: "I chose AS Interior for a 6 inch, 10mm premium wall panel at my home, and the work turned out elegant, solid, and truly outclass.",
    },
    {
      name: "Raja Aliyan",
      text: "Excellent services and customer dealing. Minimum rates and quality products including wallpapers, wall panels, blinds, majlis, flooring and ceiling tiles.",
    },
    {
      name: "Sheraz Abid",
      text: "The PU Stone work was completed as per the commitment. They follow the rules of safety. Highly professional — truly understands client needs.",
    },
  ],
};

function slugify(str) {
  return String(str)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Builds a per-product image path from category path + product name so every
// product gets its own predictable image slot (see comment at top of file).
function img(pathParts, name) {
  const slugs = pathParts.map(slugify);
  return `assets/images/${slugs.join("/")}/${slugify(name)}.jpg`;
}

function makeItems(pathParts, list) {
  return list.map(([name, desc]) => ({
    name,
    desc,
    image: img(pathParts, name),
  }));
}

// ---- Product catalogue: Category -> Subcategory -> Sub-type -> items ----
// Each node is either a "branch" (has `children`) or a "leaf" (has `items`).
const PRODUCT_CATALOGUE = [
  {
    id: "wall-panel",
    name: "Wall Panel",
    cardDesc: "Decorative wall panels for feature walls, offices & living spaces in Islamabad.",
    children: [
      {
        id: "wall-panel-pvc",
        name: "PVC",
        children: [
          {
            id: "wall-panel-pvc-normal",
            name: "Normal Panel",
            items: makeItems(["Wall Panel", "PVC", "Normal Panel"], [
              ["Panel — 1339-P", "Marble-effect PVC wall panel, charcoal & gold veining."],
              ["Panel — 030-P", "Wood-grain PVC wall panel, rich mahogany finish."],
              ["Panel — 1305-P", "Marble-effect PVC wall panel, soft white & grey veining."],
              ["Panel — 1222-P", "Damask-pattern PVC wall panel, beige & gold tones."],
              ["Panel — 1190-P", "Geometric pattern PVC wall panel, muted multi-tone finish."],
              ["Panel — 1166-P", "Ornamental medallion PVC wall panel, ivory & bronze finish."],
              ["Panel — 801-10P", "Paisley stripe PVC wall panel, warm beige finish."],
              ["Panel — 1169-P", "Ornamental border PVC wall panel, black, gold & ivory finish."],
              ["Panel — 245-P", "Geometric crosshatch PVC wall panel, charcoal finish."],
              ["Panel — 1271-P", "Vertical stripe PVC wall panel, soft grey finish."],
              ["Panel — 1333-M", "Marble-effect PVC wall panel, black with orange-gold veining."],
              ["Panel — 1237-M", "Wood-grain PVC wall panel, golden teak finish."],
              ["Panel — 1322-M", "Abstract brushed-texture PVC wall panel, grey & taupe tones."],
              ["Panel — 597-M", "Floral vine PVC wall panel, rose motif on champagne finish."],
              ["Panel — 1235-M", "Distressed marble-effect PVC wall panel, white & gold fleck finish."],
              ["Panel — 239-4M", "Subtle wave-texture PVC wall panel in white."],
              ["Panel — 146-5M", "Linen-texture PVC wall panel, soft grey finish."],
              ["Panel — 54-2M", "Wood-grain PVC wall panel, deep walnut finish."],
              ["Panel — 196-1M", "Wood-grain PVC wall panel, honey oak finish."],
              ["Panel — 138-2M", "Wood-grain PVC wall panel, charcoal-brown finish."],
              ["Panel — 3149-AKB", "Marble-effect PVC wall panel, soft grey & gold veining."],
              ["Panel — 3151-AKB", "Marble-effect PVC wall panel, bold gold vein on soft grey."],
              ["Panel — AKB-3123", "Geometric faceted PVC wall panel, black & gold finish."],
              ["Panel — 3148-AKB", "Wave-ribbon PVC wall panel, charcoal & gold splash finish."],
              ["Panel — 3135-AKB", "Geometric square & tree-motif PVC wall panel, blue finish."],
            ]),
          },
          {
            id: "wall-panel-pvc-hard",
            name: "Hard Panel",
            items: makeItems(["Wall Panel", "PVC", "Hard Panel"], [
              ["PVC Hard Panel — 357-P", "Rigid PVC panel, cream marble effect with black veining."],
              ["PVC Hard Panel — 1162-P", "Rigid PVC panel, silver-grey damask ornamental pattern."],
              ["PVC Hard Panel — 1314-P", "Rigid PVC panel, plain brushed grey finish."],
              ["PVC Hard Panel — 1332-P", "Rigid PVC panel, grey marble effect with gold veining."],
              ["PVC Hard Panel — 1333-P", "Rigid PVC panel, black marble effect with gold & white diagonal streak."],
              ["PVC Hard Panel — 1335-P", "Rigid PVC panel, grey-white marble effect with gold veining."],
              ["PVC Hard Panel — 1345-P", "Rigid PVC panel, white-grey marble effect with gold veining."],
              ["PVC Hard Panel — 1348-P", "Rigid PVC panel, white marble effect with blue & gold veining."],
              ["PVC Hard Panel — 1354-P", "Rigid PVC panel, white marble effect with bold red & black veining."],
            ]),
          },
          {
            id: "wall-panel-pvc-16-hard",
            name: `16" Hard`,
            items: makeItems(["Wall Panel", "PVC", "16 Hard"], [
              [`16" Hard — 4019-White`, `16 inch rigid PVC Executive panel, plain white finish.`],
              [`16" Hard — 5040`, `16 inch rigid PVC Executive panel, black marble effect with bold gold & white veining.`],
              [`16" Hard — 5087`, `16 inch rigid PVC Executive panel, white finish with fine crisscross gold lines.`],
              [`16" Hard — 5093`, `16 inch rigid PVC Executive panel, white-grey marble effect with fine gold veining.`],
              [`16" Hard — 5115`, `16 inch rigid PVC Executive panel, silver-grey brushed marble with gold streaks.`],
              [`16" Hard — 5131`, `16 inch rigid PVC Executive panel, charcoal-grey swirl marble effect.`],
              [`16" Hard — 5134`, `16 inch rigid PVC Executive panel, black marble effect with bold diagonal gold streak.`],
              [`16" Hard — 5139`, `16 inch rigid PVC Executive panel, soft grey marble effect.`],
              [`16" Hard — 5145`, `16 inch rigid PVC Executive panel, grey-white marble effect with bold gold veining.`],
              [`16" Hard — 5147`, `16 inch rigid PVC Executive panel, white marble effect with gold faceted lines.`],
              [`16" Hard — 5151`, `16 inch rigid PVC Executive panel, blue-grey abstract marble with gold flecks.`],
              [`16" Hard — 5154`, `16 inch rigid PVC Executive panel, white marble effect with golden diagonal streaks.`],
              [`16" Hard — 5157`, `16 inch rigid PVC Executive panel, grey damask with copper-gold ornamental medallion pattern.`],
              [`16" Hard — 5158`, `16 inch rigid PVC Executive panel, glossy black marble effect with fine silver veining.`],
              [`16" Hard — 5161`, `16 inch rigid PVC Executive panel, green-white marble effect with bold gold veining.`],
            ]),
          },
        ],
      },
      {
        id: "wall-panel-wpc",
        name: "WPC",
        children: [
          {
            id: "wall-panel-wpc-25mm",
            name: "25mm Imported",
            items: makeItems(["Wall Panel", "WPC", "25mm Imported"], [
              ["WPC 25mm Imported — Black", "25mm imported WPC panel, matte black finish."],
              ["WPC 25mm Imported — Colour Range", "25mm imported WPC panel, full colour range shown side by side."],
              ["WPC 25mm Imported — Gold", "25mm imported WPC panel, metallic gold finish."],
              ["WPC 25mm Imported — Grey", "25mm imported WPC panel, brushed grey wood grain."],
              ["WPC 25mm Imported — Rosewood", "25mm imported WPC panel, reddish rosewood grain."],
            ]),
          },
          {
            id: "wall-panel-wpc-23mm",
            name: "23mm",
            items: makeItems(["Wall Panel", "WPC", "23mm"], [
              ["WPC 23mm — 2018-White", "23mm WPC panel, plain white finish."],
              ["WPC 23mm — 2023", "23mm WPC panel, grey wood texture."],
              ["WPC 23mm — 2024", "23mm WPC panel, white-grey marble effect with gold splash veining."],
              ["WPC 23mm — 2025", "23mm WPC panel, dark grey marble effect with gold splash veining."],
              ["WPC 23mm — 2026", "23mm WPC panel, black finish with gold splash veining."],
              ["WPC 23mm — 2028-Black", "23mm WPC panel, matte black finish."],
              ["WPC 23mm — 2040", "23mm WPC panel, white marble effect with gold veining."],
              ["WPC 23mm — 2045", "23mm WPC panel, dark brown striped wood grain."],
              ["WPC 23mm — 2054", "23mm WPC panel, reddish-brown wood grain."],
            ]),
          },
          {
            id: "wall-panel-wpc-19mm",
            name: "19mm",
            items: makeItems(["Wall Panel", "WPC", "19mm"], [
              ["WPC 19mm — 7702", "19mm WPC panel, light grey-beige linen texture."],
              ["WPC 19mm — 7713", "19mm WPC panel, charcoal-grey herringbone wood grain."],
              ["WPC 19mm — 7725", "19mm WPC panel, reddish-brown wood grain."],
              ["WPC 19mm — 7727", "19mm WPC panel, dark walnut-grey wood grain."],
              ["WPC 19mm — 7728", "19mm WPC panel, golden oak wood grain."],
              ["WPC 19mm — 7729", "19mm WPC panel, amber honey-oak wood grain."],
            ]),
          },
          {
            id: "wall-panel-wpc-10mm",
            name: "10mm",
            items: makeItems(["Wall Panel", "WPC", "10mm"], [
              ["WPC 10mm — 1002", "10mm WPC panel, charcoal-black vertical wood grain."],
              ["WPC 10mm — 1004", "10mm WPC panel, dark grey marble effect with gold veining."],
              ["WPC 10mm — 1006", "10mm WPC panel, warm mahogany wood grain."],
              ["WPC 10mm — 1008", "10mm WPC panel, orange-red rosewood grain."],
              ["WPC 10mm — 1009", "10mm WPC panel, soft grey marble effect."],
              ["WPC 10mm — 1010", "10mm WPC panel, weathered silver-grey texture."],
              ["WPC 10mm — 1014", "10mm WPC panel, dark marble effect with gold splash veining."],
              ["WPC 10mm — 1015", "10mm WPC panel, white marble effect with gold veining."],
              ["WPC 10mm — 1019", "10mm WPC panel, white marble effect with fine diagonal veining."],
              ["WPC 10mm — 1020", "10mm WPC panel, light oak wood grain."],
              ["WPC 10mm — 1023", "10mm WPC panel, light grey subtle wood texture."],
              ["WPC 10mm — 1025", "10mm WPC panel, white marble effect with fine gold veining."],
              ["WPC 10mm — 1034", "10mm WPC panel, beige linen texture."],
              ["WPC 10mm — 1035", "10mm WPC panel, charcoal-grey wood texture."],
              ["WPC 10mm — 1036", "10mm WPC panel, black marble effect with bold gold veining."],
              ["WPC 10mm — 1038", "10mm WPC panel, deep reddish-brown wood grain."],
              ["WPC 10mm — 1039", "10mm WPC panel, medium brown striped wood grain."],
              ["WPC 10mm — 1040", "10mm WPC panel, teak wood grain."],
              ["WPC 10mm — 1041", "10mm WPC panel, weathered grey wood texture."],
              ["WPC 10mm — 1043", "10mm WPC panel, dark walnut wood grain."],
              ["WPC 10mm — 1046", "10mm WPC panel, brushed grey-silver metallic wood grain."],
            ]),
          },
          {
            id: "wall-panel-wpc-8mm",
            name: "8mm",
            items: makeItems(["Wall Panel", "WPC", "8mm"], [
              ["WPC 8mm — 6600-Black", "8mm WPC interlock panel, matte black finish."],
              ["WPC 8mm — 6602", "8mm WPC interlock panel, plain cream finish."],
              ["WPC 8mm — 6627", "8mm WPC interlock panel, amber honey-oak wood grain."],
              ["WPC 8mm — 6631-White", "8mm WPC interlock panel, plain white finish."],
              ["WPC 8mm — 6650", "8mm WPC interlock panel, reddish-brown wood grain."],
              ["WPC 8mm — 6680", "8mm WPC interlock panel, grey finish with cracked gold & white marble lines."],
              ["WPC 8mm — 6737", "8mm WPC interlock panel, blue-grey marble effect with gold diagonal veining."],
              ["WPC 8mm — 6748", "8mm WPC interlock panel, cream finish with gold marbled texture."],
            ]),
          },
        ],
      },
      {
        id: "wall-panel-solid",
        name: "Solid",
        children: [
          {
            id: "wall-panel-solid-standard",
            name: `4.5" 25mm`,
            items: makeItems(["Wall Panel", "Solid", `4.5" 25mm`], [
              [`Solid 4.5" 25mm — 05-02`, "4.5 inch solid panel, grey wood grain."],
              [`Solid 4.5" 25mm — 05-07`, "4.5 inch solid panel, knotty brown wood grain."],
              [`Solid 4.5" 25mm — 05-18`, "4.5 inch solid panel, black marble effect with gold & white veining."],
              [`Solid 4.5" 25mm — 05-25`, "4.5 inch solid panel, reddish-orange wood grain."],
              [`Solid 4.5" 25mm — 05-48-Black`, "4.5 inch solid panel, black finish with fine gold lines."],
              [`Solid 4.5" 25mm — 05-49-White`, "4.5 inch solid panel, plain white finish."],
              [`Solid 4.5" 25mm — 05-61`, "4.5 inch solid panel, white marble effect with black veining."],
              [`Solid 4.5" 25mm — 05-63`, "4.5 inch solid panel, white-grey marble effect with gold veining."],
              [`Solid 4.5" 25mm — 05-90`, "4.5 inch solid panel, white marble effect with gold veining."],
              [`Solid 4.5" 25mm — 126-20`, "4.5 inch solid panel, medium brown wood grain."],
              [`Solid 4.5" 25mm — 126-54`, "4.5 inch solid panel, dark brown wood grain."],
              [`Solid 4.5" 25mm — 126-55`, "4.5 inch solid panel, warm brown wood grain."],
              [`Solid 4.5" 25mm — 126-201`, "4.5 inch solid panel, black-grey marble effect."],
              [`Solid 4.5" 25mm — 126-207`, "4.5 inch solid panel, taupe-brown wood grain."],
              [`Solid 4.5" 25mm — 126-1825`, "4.5 inch solid panel, light beige linen texture."],
            ]),
          },
          {
            id: "wall-panel-solid-crystal",
            name: "Crystal Series",
            items: makeItems(["Wall Panel", "Solid", "Crystal Series"], [
              ["Golden Line Crystal — 2113", "Crystal Series solid panel, beige-tan wood grain with gold accent strip."],
              ["Golden Line Crystal — 2148", "Crystal Series solid panel, dark brown-black finish with gold accent strip."],
              ["Golden Line Crystal — 2169", "Crystal Series solid panel, grey wood grain with gold accent strip."],
              ["Golden Line Crystal — 2175", "Crystal Series solid panel, reddish-brown wood grain with gold accent strip."],
              ["Golden Line Crystal — 2183", "Crystal Series solid panel, light grey-white wood grain with gold accent strip."],
              ["Golden Line Crystal — 2192", "Crystal Series solid panel, grey marble effect with gold accent strip."],
            ]),
          },
          {
            id: "wall-panel-solid-master",
            name: "Master Series",
            items: makeItems(["Wall Panel", "Solid", "Master Series"], [
              ["Golden Line Master — 4801-Black", "Master Series imported solid panel, black gradient sheen with gold accent strips."],
              ["Golden Line Master — 4901-White", "Master Series imported solid panel, plain white finish with gold accent strips."],
              ["Golden Line Master — 6501", "Master Series imported solid panel, black marble effect with white veining."],
              ["Golden Line Master — 6901", "Master Series imported solid panel, grey stone texture with gold accent strips."],
              ["Golden Line Master — 7001", "Master Series imported solid panel, grey marble effect with gold accent strips."],
              ["Golden Line Master — 7401", "Master Series imported solid panel, dark walnut wood grain."],
              ["Golden Line Master — 7601", "Master Series imported solid panel, medium brown wood grain."],
              ["Golden Line Master — 8401", "Master Series imported solid panel, white-cream stone texture with gold accent strips."],
              ["Golden Line Master — 15-69", "Master Series imported solid panel, grey stone finish with black & gold vertical stripe."],
            ]),
          },
        ],
      },
    ],
  },
  {
    id: "wallpaper",
    name: "Wallpaper",
    cardDesc: "Premium wallpaper collections in a wide range of textures & finishes, delivered across Islamabad.",
    items: makeItems(["Wallpaper"], [
      ["Wallpaper — MB-410F", "Fabric roll wallpaper, layered agate marble in maroon, navy & gold, 5ft x 18m."],
      ["Wallpaper — ONE-D", "Fabric roll wallpaper, blue-grey abstract crack marble effect, 5ft x 18m."],
      ["Wallpaper — ONE-G", "Fabric roll wallpaper, grey-black abstract crack marble effect with gold veining, 5ft x 18m."],
      ["Wallpaper — ONE-HB", "Fabric roll wallpaper, green-grey abstract crack marble effect, 5ft x 18m."],
      ["Wallpaper — ONE-IB", "Fabric roll wallpaper, grey-beige abstract crack marble effect, 5ft x 18m."],
      ["Wallpaper — ONE-J", "Fabric roll wallpaper, white-cream abstract crack marble effect, 5ft x 18m."],
      ["Wallpaper — ONE-NF", "Fabric roll wallpaper, pink-beige abstract crack marble effect, 5ft x 18m."],
      ["Wallpaper — TL-9", "Fabric roll wallpaper, grey texture with ornamental quatrefoil medallions, 5ft x 18m."],
      ["Wallpaper — TL-23", "Fabric roll wallpaper, tulip floral pattern in gold & black on grey, 5ft x 18m."],
      ["Wallpaper — TP-19D", "Fabric roll wallpaper, damask fleur medallion pattern in grey, gold & burgundy, 5ft x 18m."],
      ["Wallpaper — TP-21A", "Fabric roll wallpaper, swirl marble pattern in gold on navy blue, 5ft x 18m."],
      ["Wallpaper — TP-21C", "Fabric roll wallpaper, swirl marble pattern in gold on grey-silver, 5ft x 18m."],
      ["Wallpaper — TS-37BB", "Fabric roll wallpaper, tropical leaf & picture-frame pattern in silver-taupe, 5ft x 18m."],
      ["Wallpaper — WB98033", "Fabric roll wallpaper, chevron zigzag pattern in grey & gold, 5ft x 18m."],
      ["Wallpaper — WB98036", "Fabric roll wallpaper, hexagon lattice pattern in grey & gold, 5ft x 18m."],
      ["Wallpaper — WB98038", "Fabric roll wallpaper, scale-wave pattern with gold outline, 5ft x 18m."],
      ["Wallpaper — WB98039", "Fabric roll wallpaper, scale-wave pattern in grey & gold, 5ft x 18m."],
      ["Wallpaper — WB98040", "Fabric roll wallpaper, scale-wave pattern in grey & gold, 5ft x 18m."],
      ["Wallpaper — WB98042", "Fabric roll wallpaper, hexagon marble pattern in grey & gold, 5ft x 18m."],
      ["Wallpaper — WB98043", "Fabric roll wallpaper, grey stone texture with gold ornamental drop motifs, 5ft x 18m."],
      ["Wallpaper — WB98046", "Fabric roll wallpaper, geometric lattice pattern in grey, gold & copper, 5ft x 18m."],
      ["Wallpaper — WB98052", "Fabric roll wallpaper, art-deco diamond pattern in silver-taupe, 5ft x 18m."],
      ["Wallpaper — WB98056", "Fabric roll wallpaper, geometric triangle mosaic with feather leaves, taupe & silver, 5ft x 18m."],
      ["Wallpaper — WB98058", "Fabric roll wallpaper, trailing vine leaf pattern in taupe, 5ft x 18m."],
      ["Wallpaper — WB98061", "Fabric roll wallpaper, abstract textured stone pattern in rust & gold, 5ft x 18m."],
      ["Wallpaper — WB98071", "Fabric roll wallpaper, leaf pattern in grey, gold & copper, 5ft x 18m."],
      ["Wallpaper — WB98075", "Fabric roll wallpaper, marble ginkgo leaf pattern in brown & grey, 5ft x 18m."],
      ["Wallpaper — WB98085", "Fabric roll wallpaper, floral & geometric collage pattern in beige & gold, 5ft x 18m."],
      ["Wallpaper — WB98091", "Fabric roll wallpaper, swirl flame pattern in gold & brown, 5ft x 18m."],
      ["Wallpaper — WB98092", "Fabric roll wallpaper, peacock feather & crack marble pattern in grey & gold, 5ft x 18m."],
    ]),
  },
  {
    id: "uv-sheet",
    name: "UV Sheet",
    cardDesc: "High-gloss and matte UV sheets for cabinetry & feature surfaces, supplied across Islamabad.",
    items: makeItems(["UV Sheet"], [
      ["UV Sheet 3mm — 9502", "High-gloss UV sheet, dark grey marble texture, 4ft x 9.5ft."],
      ["UV Sheet 3mm — 9503", "High-gloss UV sheet, black marble texture with white crosshatch veining, 4ft x 9.5ft."],
      ["UV Sheet 3mm — 9504", "High-gloss UV sheet, grey-white marble texture, 4ft x 9.5ft."],
      ["UV Sheet 3mm — 9505", "High-gloss UV sheet, white marble texture with soft grey-brown veining, 4ft x 9.5ft."],
      ["UV Sheet 3mm — 9506", "High-gloss UV sheet, grey-white marble texture with metalized gold veining, 4ft x 9.5ft."],
      ["UV Sheet 3mm — 9507", "High-gloss UV sheet, white marble texture with metalized gold veining, 4ft x 9.5ft."],
      ["UV Sheet 3mm — 9508", "High-gloss UV sheet, white & black marble texture with metalized gold veining, 4ft x 9.5ft."],
      ["UV Sheet 3mm — 9509", "High-gloss UV sheet, grey stone texture, 4ft x 9.5ft."],
      ["UV Sheet 3mm — 9510", "High-gloss UV sheet, white marble texture with metalized gold veining, 4ft x 9.5ft."],
      ["UV Sheet 3mm — 9512", "High-gloss UV sheet, white marble texture with metalized gold veining, 4ft x 9.5ft."],
      ["UV Sheet 5mm — 1211", "High-gloss UV sheet, black finish with fine gold crackle veining, 4ft x 9.5ft."],
      ["UV Sheet 5mm — 1221", "High-gloss UV sheet, white & black marble effect with bold orange veining, 4ft x 9.5ft."],
      ["UV Sheet 5mm — 1222", "High-gloss UV sheet, blue-grey marble effect with orange veining, 4ft x 9.5ft."],
      ["UV Sheet 5mm — 1226", "High-gloss UV sheet, white & black marble effect with bold gold veining, 4ft x 9.5ft."],
      ["UV Sheet 5mm — 1227", "High-gloss UV sheet, white & black marble effect with gold-blue veining, 4ft x 9.5ft."],
      ["UV Sheet 5mm — 1228", "High-gloss UV sheet, white marble effect with bold brown crack veining, 4ft x 9.5ft."],
      ["UV Sheet 5mm — 2104", "High-gloss UV sheet, grey stone texture, 4ft x 9.5ft."],
      ["UV Sheet 5mm — 2110", "High-gloss UV sheet, teal abstract marble effect with gold veining, 4ft x 9.5ft."],
      ["UV Sheet 5mm — 2111", "High-gloss UV sheet, dark blue & white marble effect with bold gold-orange streak, 4ft x 9.5ft."],
      ["UV Sheet 5mm — 2113", "High-gloss UV sheet, white marble effect with black & gold veining, 4ft x 9.5ft."],
      ["UV Sheet 5mm — 2114", "High-gloss UV sheet, white marble effect with gold & black veining, 4ft x 9.5ft."],
    ]),
  },
  {
    id: "media-wall",
    name: "Media Wall",
    cardDesc: "Custom TV & media wall units tailored to your living space in Islamabad.",
    comboIntro: "Select the combo of your choice",
    relatedLinks: [
      { label: "Wall Panel — WPC", id: "wall-panel-wpc" },
      { label: "UV Sheet", id: "uv-sheet" },
    ],
    items: makeItems(["Media Wall"], [
      ["Classic Media Wall", "Symmetrical media wall, white marble centre panel flanked by dark wood-tone fluted columns & mirror strips."],
      ["Modern Media Wall", "Modern media wall, white marble panel with vertical gold & black inlay strips, wood-tone fluted side panel."],
      ["Minimalist Media Wall", "Minimalist media wall, single white marble panel between slim fluted columns with a linear wall light."],
      ["Luxury Media Wall", "Luxury statement media wall, black marble panel with bold gold veining framed by fluted wood-tone columns & sconces."],
      ["Contemporary Media Wall", "Full-width glossy white marble media wall with grey/gold veining, flanked by grey fluted side columns."],
    ]),
  },
  {
    id: "pu-stone",
    name: "PU Stone",
    cardDesc: "Lightweight PU stone cladding for feature walls & exteriors in Islamabad.",
    items: makeItems(["PU Stone"], [
      ["PU Stone — Reto Brick - Dark Grey", "Textured brick-profile PU stone panel, dark grey finish."],
      ["PU Stone — Reto Brick - Sand", "Textured brick-profile PU stone panel, sand finish."],
      ["PU Stone — Shell - Beige", "Faceted shell-texture PU stone panel, beige finish."],
      ["PU Stone — Shell - Dark Grey", "Faceted shell-texture PU stone panel, dark grey finish."],
      ["PU Stone — Shell - White", "Faceted shell-texture PU stone panel, white finish."],
      ["PU Stone — Stone 30mm - Beige", "30mm rugged ledge-stone PU panel, beige finish."],
      ["PU Stone — Stone 30mm - Dark Grey", "30mm rugged ledge-stone PU panel, dark grey finish."],
      ["PU Stone — Stone 30mm - Sand", "30mm rugged ledge-stone PU panel, sand finish."],
      ["PU Stone — Stone 30mm - White", "30mm rugged ledge-stone PU panel, white finish."],
      ["PU Stone — Stone 50mm - Beige", "50mm rugged ledge-stone PU panel, beige finish."],
      ["PU Stone — Stone 50mm - Dark Grey", "50mm rugged ledge-stone PU panel, dark grey finish."],
      ["PU Stone — Stone 50mm - Off White", "50mm rugged ledge-stone PU panel, off-white finish."],
      ["PU Stone — Stone 50mm - White", "50mm rugged ledge-stone PU panel, white finish."],
      ["PU Stone — Twister - Beige", "Angular twisted-line PU stone panel, beige finish."],
      ["PU Stone — Twister - Black", "Angular twisted-line PU stone panel, black finish."],
      ["PU Stone — Twister - Grey", "Angular twisted-line PU stone panel, grey finish."],
      ["PU Stone — Window - Black", "3D window-grid PU stone panel, black finish."],
      ["PU Stone — Window - White", "3D window-grid PU stone panel, white finish."],
    ]),
  },
  {
    id: "wooden-flooring",
    name: "Wooden Flooring",
    cardDesc: "Lamination, SPC (waterproof) & Turkish wood flooring in a range of tones, installed across Islamabad.",
    children: [
      {
        id: "wooden-flooring-lamination",
        name: "Lamination",
        items: makeItems(["Wooden Flooring", "Lamination"], [
          ["Lamination Flooring — BT-001", "Durable matte laminate flooring, golden oak multi-plank finish."],
          ["Lamination Flooring — BT-002", "Durable matte laminate flooring, reddish-mahogany finish."],
          ["Lamination Flooring — BT-020", "Durable matte laminate flooring, dark walnut finish."],
          ["Lamination Flooring — BT-024", "Durable matte laminate flooring, honey-brown multi-plank finish."],
          ["Lamination Flooring — BT-032", "Durable matte laminate flooring, dark brown wood-grain finish."],
          ["Lamination Flooring — BT-040", "Durable matte laminate flooring, grey wood-grain finish."],
          ["Lamination Flooring — BT-041", "Durable matte laminate flooring, taupe wood-grain finish."],
          ["Lamination Flooring — BT-043", "Durable matte laminate flooring, medium brown wood-grain finish."],
          ["Lamination Flooring — BT-802", "Durable semi-gloss laminate flooring, dark grey-brown multi-plank finish."],
          ["Lamination Flooring — BT-806", "Durable semi-gloss laminate flooring, light amber multi-plank finish."],
          ["Lamination Flooring — BT-807", "Durable semi-gloss laminate flooring, dark brown multi-plank finish."],
          ["Lamination Flooring — WD-21", "Durable semi-gloss laminate flooring, reddish-orange glossy wood-grain finish."],
        ]),
      },
      {
        id: "wooden-flooring-spc",
        name: "SPC (Waterproof)",
        items: makeItems(["Wooden Flooring", "SPC (Waterproof)"], [
          ["SPC Flooring — EU88004-2", "Rigid, waterproof Euro SPC plank, weathered grey-brown multi-plank finish."],
          ["SPC Flooring — EU88008-5", "Rigid, waterproof Euro SPC plank, dark reddish-brown finish."],
          ["SPC Flooring — EU88009-1", "Rigid, waterproof Euro SPC plank, light tan oak finish."],
          ["SPC Flooring — EU88010-5", "Rigid, waterproof Euro SPC plank, grey wood-grain finish."],
          ["SPC Flooring — EU88010-7", "Rigid, waterproof Euro SPC plank, medium brown multi-tone finish."],
          ["SPC Flooring — EU88015-1", "Rigid, waterproof Euro SPC plank, dark red-brown finish."],
          ["SPC Flooring — EU88022-1", "Rigid, waterproof Euro SPC plank, honey-brown finish with knots."],
          ["SPC Flooring — EU88027-6", "Rigid, waterproof Euro SPC plank, rustic red-orange finish."],
          ["SPC Flooring — EU88028-2", "Rigid, waterproof Euro SPC plank, weathered light grey finish."],
          ["SPC Flooring — EU88049-2", "Rigid, waterproof Euro SPC plank, distressed reclaimed-wood look."],
          ["SPC Flooring — EU88058-2", "Rigid, waterproof Euro SPC plank, narrow multi-tone plank strips."],
          ["SPC Flooring — EU99004-2", "Rigid, waterproof Euro SPC plank, travertine stone-look finish."],
        ]),
      },
    ],
  },
  {
    id: "vinyl-flooring",
    name: "Vinyl Flooring",
    cardDesc: "Local & imported vinyl flooring for any room, installed across Islamabad.",
    items: makeItems(["Vinyl Flooring"], [
      ["Local Vinyl — 504", "Locally manufactured vinyl flooring plank, honey wood-grain finish."],
      ["Local Vinyl — 505", "Locally manufactured vinyl flooring plank, grey-silver striated finish."],
      ["Local Vinyl — 506", "Locally manufactured vinyl flooring plank, red-orange wood-grain finish."],
      ["Local Vinyl — 507", "Locally manufactured vinyl flooring plank, grey-brown striated wood-grain finish."],
      ["Local Vinyl — 508", "Locally manufactured vinyl flooring plank, warm brown wood-grain finish."],
      ["Local Vinyl — 510", "Locally manufactured vinyl flooring plank, honey-beige striped wood-grain finish."],
      ["Local Vinyl — 512", "Locally manufactured vinyl flooring plank, pale weathered grey-tan finish."],
      ["Local Vinyl — 514", "Locally manufactured vinyl flooring plank, orange wood-grain finish."],
      ["Imported Vinyl — C-1009", "Imported vinyl flooring plank, dark reddish-brown finish, 6\" x 36\"."],
      ["Imported Vinyl — C-1011", "Imported vinyl flooring plank, light oak multi-plank finish, 6\" x 36\"."],
      ["Imported Vinyl — C-1025", "Imported vinyl flooring plank, amber wood-grain finish, 6\" x 36\"."],
      ["Imported Vinyl — C-1028", "Imported vinyl flooring plank, dark walnut multi-plank finish, 6\" x 36\"."],
      ["Imported Vinyl — C-1045", "Imported vinyl flooring plank, grey multi-plank finish, 6\" x 36\"."],
      ["Imported Vinyl — C-1047", "Imported vinyl flooring plank, medium brown multi-plank finish, 6\" x 36\"."],
      ["Imported Vinyl — C-1048", "Imported vinyl flooring plank, golden honey wood-grain finish, 6\" x 36\"."],
      ["Imported Vinyl — C-1051", "Imported vinyl flooring plank, dark espresso finish, 6\" x 36\"."],
      ["Imported Vinyl — C-1052", "Imported vinyl flooring plank, amber wood-grain finish with knots, 6\" x 36\"."],
      ["Imported Vinyl — C-1054", "Imported vinyl flooring plank, reddish walnut finish, 6\" x 36\"."],
      ["Imported Vinyl — C-1055", "Imported vinyl flooring plank, walnut finish with knot feature, 6\" x 36\"."],
      ["Imported Vinyl — C-1057", "Imported vinyl flooring plank, rich reddish-brown finish, 6\" x 36\"."],
      ["Imported Vinyl — C-1058", "Imported vinyl flooring plank, dark reddish finish with knot feature, 6\" x 36\"."],
      ["Imported Vinyl — C-1060", "Imported vinyl flooring plank, dark walnut mixed-plank finish, 6\" x 36\"."],
      ["Imported Vinyl — C-1069", "Imported vinyl flooring plank, light cream-beige finish, 6\" x 36\"."],
      ["Imported Vinyl — C-1071", "Imported vinyl flooring plank, golden oak multi-plank finish, 6\" x 36\"."],
    ]),
  },
  {
    id: "ceiling",
    name: "Ceiling",
    cardDesc: "False ceiling solutions in gypsum & PVC for every room, installed across Islamabad.",
    children: [
      {
        id: "ceiling-gypsum",
        name: "Gypsum False Ceiling 2x2",
        items: makeItems(["Ceiling", "Gypsum False Ceiling"], [
          ["Gypsum Ceiling — Almas", "2x2 gypsum ceiling tile, quatrefoil crosshatch texture."],
          ["Gypsum Ceiling — Bamboo", "2x2 gypsum ceiling tile, diagonal crosshatch texture with floral motif."],
          ["Gypsum Ceiling — C-19", "2x2 gypsum ceiling tile, tufted pattern with blue floral medallion & corner motifs."],
          ["Gypsum Ceiling — C-20", "2x2 gypsum ceiling tile, tufted pattern with navy paisley border & medallion."],
          ["Gypsum Ceiling — C-26", "2x2 gypsum ceiling tile, wood-tone geometric border with floral medallion."],
          ["Gypsum Ceiling — C-45", "2x2 gypsum ceiling tile, silver diamond medallion on grey ground."],
          ["Gypsum Ceiling — C-48", "2x2 gypsum ceiling tile, wood-tone pinwheel pattern with star medallion."],
          ["Gypsum Ceiling — C-49", "2x2 gypsum ceiling tile, tufted pattern with wood-tone arcs & medallion."],
          ["Gypsum Ceiling — C-55", "2x2 gypsum ceiling tile, blue star-burst pattern."],
          ["Gypsum Ceiling — C-67", "2x2 gypsum ceiling tile, black & grey mandala star pattern."],
          ["Gypsum Ceiling — C-69", "2x2 gypsum ceiling tile, abstract curved star pattern."],
          ["Gypsum Ceiling — Fissured", "2x2 gypsum ceiling tile, fissured speckled texture."],
          ["Gypsum Ceiling — Frost", "2x2 gypsum ceiling tile, fine speckled frost texture."],
          ["Gypsum Ceiling — Granular", "2x2 gypsum ceiling tile, fine granular texture."],
          ["Gypsum Ceiling — Palm Silver", "2x2 gypsum ceiling tile, silver acanthus leaf texture."],
        ]),
      },
      {
        id: "ceiling-pvc",
        name: "PVC Ceiling 2x2",
        items: makeItems(["Ceiling", "PVC Ceiling"], [
          ["PVC Ceiling — 160-11", "Moisture-resistant 2x2 PVC ceiling panel, white foil diamond-lattice pattern."],
          ["PVC Ceiling — 600-12", "Moisture-resistant 2x2 PVC ceiling panel, black & white curved geometric pattern."],
          ["PVC Ceiling — 600-56", "Moisture-resistant 2x2 PVC ceiling panel, wood-tone X pattern."],
          ["PVC Ceiling — 600-62", "Moisture-resistant 2x2 PVC ceiling panel, wood-tone interlocking geometric pattern."],
          ["PVC Ceiling — 600-113", "Moisture-resistant 2x2 PVC ceiling panel, wood-tone diamond medallion pattern."],
          ["PVC Ceiling — 600-116", "Moisture-resistant 2x2 PVC ceiling panel, tufted cream finish with floral rose corner motif."],
          ["PVC Ceiling — 6019", "Moisture-resistant 2x2 PVC ceiling panel, dark brown X-cross pattern with holographic medallion."],
          ["PVC Ceiling — 6035", "Moisture-resistant 2x2 PVC ceiling panel, tufted white finish with black ornamental medallion."],
          ["PVC Ceiling — 6063", "Moisture-resistant 2x2 PVC ceiling panel, silver ornamental holographic border pattern."],
          ["PVC Ceiling — 6085", "Moisture-resistant 2x2 PVC ceiling panel, marble finish with ornamental corner medallions."],
          ["PVC Ceiling — 6094", "Moisture-resistant 2x2 PVC ceiling panel, Greek-key pattern in brown & gold."],
          ["PVC Ceiling — 6098", "Moisture-resistant 2x2 PVC ceiling panel, tufted finish with wood-tone frame."],
          ["PVC Ceiling — 6103", "Moisture-resistant 2x2 PVC ceiling panel, tufted cream finish with jewelled floral medallions."],
          ["PVC Ceiling — 6104", "Moisture-resistant 2x2 PVC ceiling panel, silver diamond lattice with ornamental medallion accents."],
          ["PVC Ceiling — 6105", "Moisture-resistant 2x2 PVC ceiling panel, gold starburst pattern."],
        ]),
      },
      {
        id: "ceiling-gypsum-board-4x8",
        name: "Gypsum Board Ceiling 4x8",
        items: makeItems(["Ceiling", "Gypsum Board Ceiling 4x8"], [
          ["Gypsum Board Ceiling 4x8 — Cove Lighting Design", "4x8 ft gypsum board false ceiling with multi-level cove lighting."],
        ]),
      },
    ],
  },
  {
    id: "insulation",
    name: "Insulation",
    cardDesc: "Thermal, acoustic & roof insulation solutions for Islamabad homes.",
    children: [
      {
        id: "insulation-jumbo-board-3x6",
        name: "Jumbo Board 3x6",
        items: makeItems(["Insulation", "Jumbo Board 3x6"], [
          ["Jumbolon Board — 3x6 ft", "Rigid Jumbolon foam insulation board, 3x6 ft, available in multiple thicknesses for wall & roof insulation."],
        ]),
      },
      {
        id: "insulation-thermapol-4x8",
        name: "Thermapol",
        items: makeItems(["Insulation", "Thermapol 4x8"], [
          ["Thermapol Sheet — 4x8 ft", "Polystyrene foam insulation sheet, 4x8 ft, multiple thicknesses for heat-barrier & false ceiling use."],
        ]),
      },
      {
        id: "insulation-glass-wool-50mm",
        name: "Glass Wool",
        items: makeItems(["Insulation", "Glass Wool (50mm)"], [
          ["Glass Wool Roll — 50mm", "Imported glass wool insulation roll, 50mm thick, 4ft x 50ft, 10kg/m³ density — thermal & acoustic insulation."],
        ]),
      },
      {
        id: "insulation-rock-wool-50mm",
        name: "Rock Wool",
        items: makeItems(["Insulation", "Rock Wool (50mm)"], [
          ["Rock Wool Roll — 50mm", "Imported rock wool insulation roll, 50mm thick, 1m x 5m, 50kg/m³ density — fire-resistant thermal barrier."],
        ]),
      },
    ],
  },
  {
    id: "blinds",
    name: "Blinds",
    cardDesc: "Roller blinds in a range of fabric designs, fitted across Islamabad.",
    items: [
      ...makeItems(["Blinds", "Roller Blinds"], [
        ["Roller Blinds — 709 (Maroon Leaf)", "Leaf-weave jacquard roller blind fabric, maroon, swatch code 709."],
        ["Roller Blinds — 738 (Royal Blue Leaf)", "Leaf-weave jacquard roller blind fabric, royal blue, swatch code 738."],
        ["Roller Blinds — 747 (Sky Blue Leaf)", "Leaf-weave jacquard roller blind fabric, sky blue, swatch code 747."],
        ["Roller Blinds — 730 (Cream Leaf)", "Leaf-weave jacquard roller blind fabric, cream, swatch code 730."],
        ["Roller Blinds — 772 (Taupe Pinstripe)", "Fine pinstripe-weave roller blind fabric, taupe, swatch code 772."],
        ["Roller Blinds — 761 (Maroon Pinstripe)", "Fine pinstripe-weave roller blind fabric, maroon, swatch code 761."],
      ]),
    ],
  },
  {
    id: "artificial-grass",
    name: "Artificial Grass",
    cardDesc: "Realistic, low-maintenance artificial grass for lawns, terraces & balconies in Islamabad.",
    items: makeItems(["Artificial Grass"], [
      ["Artificial Grass — Checkerboard Mosaic", "Decorative artificial grass wall, light & dark green checkerboard mosaic pattern."],
      ["Artificial Grass — Diamond Lattice", "Decorative artificial grass wall, diamond lattice pattern on wood-tone backing."],
      ["Artificial Grass — Diamond Trellis", "Decorative artificial grass wall, diamond trellis pattern on white lattice grid."],
      ["Artificial Grass — Striped Panel", "Decorative artificial grass wall, striped design with stone-look bands & mirror-black accent."],
      ["Artificial Grass — Textured Tile Mosaic", "Decorative artificial grass wall, textured light & dark green tile mosaic."],
      ["Artificial Grass — Vertical Fence Stripe", "Decorative artificial grass fence panel, vertical wood-stripe & grass accent design."],
    ]),
  },
  {
    id: "pvc-molding",
    name: "PVC Molding",
    cardDesc: "Durable, moisture-resistant PVC molding for skirting, cornice & trim work in Islamabad.",
    items: makeItems(["PVC Molding"], [
      ["PVC Molding — D-25mm Golden", "Dome-profile PVC molding with golden edge trim, 1\" width, 25mm thickness, 9.8 ft length."],
      ["PVC Molding — D-40mm Golden", "Dome-profile PVC molding with golden edge trim, 1.5\" width, 40mm thickness, 9.8 ft length."],
      ["PVC Molding — D-25mm", "Dome-profile PVC molding, 1\" width, 25mm thickness, 9.8 ft length."],
      ["PVC Molding — D-40mm", "Dome-profile PVC molding, 1.5\" width, 40mm thickness, 9.8 ft length."],
      ["PVC Molding — D-60mm", "Dome-profile PVC molding, 2.5\" width, 60mm thickness, 9.8 ft length."],
      ["PVC Molding — R-20mm", "Reeded-profile PVC molding, 0.75\" width, 20mm thickness, 9.8 ft length."],
      ["PVC Molding — R-40mm", "Reeded-profile PVC molding, 1.5\" width, 40mm thickness, 9.8 ft length."],
      ["PVC Molding — R-60mm", "Reeded-profile PVC molding, 2.5\" width, 60mm thickness, 9.8 ft length."],
    ]),
  },
  {
    id: "fomic-sheet",
    name: "Fomic Sheet",
    cardDesc: "Lightweight foam PVC sheet for cladding, signage & interior fit-out in Islamabad.",
    items: makeItems(["Fomic Sheet"], [
      ["Fomic Sheet — Printed Designs", "Assorted marble, stone & wood-grain printed foam PVC sheet rolls for cladding & signage."],
    ]),
  },
  {
    id: "custom-furniture",
    name: "Custom Furniture",
    cardDesc: "Bespoke furniture pieces built to match your Islamabad interior.",
    comingSoon: true,
    items: [],
  },
];

const SITE_DATA = { BUSINESS, REVIEWS, PRODUCT_CATALOGUE, FAQS, slugify };
if (typeof window !== "undefined") window.SITE_DATA = SITE_DATA;
if (typeof module !== "undefined") module.exports = SITE_DATA;
