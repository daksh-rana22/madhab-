/* Madhab product catalogue — names and pack sizes exactly as printed in the Madhab brochure. */
window.MADHAB_CATEGORIES = [
  { id: "breads", name: "Breads", hindi: "ब्रेड", tint: "#FCE3C7", photo: "assets/img/photos/sliced-bread.jpg",
    blurb: "Soft, fresh loaves for every table — from everyday white to rich Makkhan Malai." },
  { id: "rusk-khari", name: "Rusk & Khari", hindi: "रस्क और खारी", tint: "#F9D9A8", photo: "assets/img/photos/chai.jpg",
    blurb: "Golden, crunchy partners for your morning chai." },
  { id: "buns-pav", name: "Buns & Pav", hindi: "बन और पाव", tint: "#FBE0C0", photo: "assets/img/photos/pav-bhaji.jpg",
    blurb: "Pillowy pav and burger buns made for street-food favourites." },
  { id: "cream", name: "Cream Delights", hindi: "क्रीम डिलाइट्स", tint: "#FFE7EC", photo: "assets/img/photos/baked-tray.jpg",
    blurb: "Cream-filled treats that bring a smile to every age." },
  { id: "sheermal", name: "Sheermal", hindi: "शीरमाल", tint: "#FBE6BF", photo: "assets/img/photos/flour-loaf.jpg",
    blurb: "The Awadhi classic — sweet, saffron-toned and soft." }
];

window.MADHAB_PRODUCTS = [
  // Rusk & Khari
  { id: "madhab-rusk-150g", name: "Madhab Rusk", size: "150g", cat: "rusk-khari", img: "rusk-150g.png", featured: true,
    desc: "Twice-baked golden rusk with a satisfying crunch. The classic Madhab start to the day — dip it in hot chai and enjoy." },
  { id: "madhab-rusk-75g", name: "Madhab Rusk", size: "75g", cat: "rusk-khari", img: "rusk-75g.png",
    desc: "Our premium rusk in a handy pocket pack — perfect for tea-time on the go, at the office or while travelling." },
  { id: "ajwain-khari", name: "Ajwain Khari", size: "130g (10 & 12 Pcs)", cat: "rusk-khari", img: "ajwain-khari.png", featured: true,
    desc: "Flaky, layered puff khari with the traditional Indian taste of ajwain. Light, crispy and irresistible with chai." },

  // Breads
  { id: "premium-white-bread", name: "Premium White Bread", size: "400g", cat: "breads", img: "premium-white-bread.png", featured: true,
    desc: "Our family-size premium white loaf — soft, fluffy slices baked fresh for breakfasts, toasts and sandwiches." },
  { id: "makkhan-malai-bread", name: "Makkhan Malai Bread", size: "350g", cat: "breads", img: "makkhan-malai-bread.png", featured: true,
    desc: "Real taste, pure quality. A rich, creamy loaf inspired by the goodness of makkhan and malai." },
  { id: "malai-makkhan-bread", name: "Malai Makkhan Bread", size: "300g", cat: "breads", img: "malai-makkhan-bread.png",
    desc: "Extra soft bread with a buttery malai flavour — a favourite for kids' tiffins and evening snacks." },
  { id: "extra-long-premium-bread", name: "Extra Long Premium Bread", size: "250g", cat: "breads", img: "extra-long-premium-bread.png",
    desc: "The wholesome goodness of tradition in an extra-long premium loaf, with more slices in every pack." },
  { id: "white-medium-bread", name: "White Medium Bread", size: "250g", cat: "breads", img: "white-medium-bread.png",
    desc: "Soft & tasty medium white bread — the everyday loaf for every Indian home." },
  { id: "sandwich-bread", name: "Sandwich Bread", size: "250g", cat: "breads", img: "sandwich-bread.png", featured: true,
    desc: "Evenly sliced, extra-soft sandwich bread that holds every filling — from aloo masala to grilled veggies." },
  { id: "premium-long-bread", name: "Premium Long Bread", size: "150g", cat: "breads", img: "premium-long-bread.png",
    desc: "A compact premium long loaf — just the right size for small families and quick meals." },
  { id: "gattu-bread", name: "Gattu Bread", size: "100g", cat: "breads", img: "gattu-bread.png",
    desc: "A small, soft Gattu loaf — an affordable, filling snack for any time of the day." },
  { id: "fruit-gattu", name: "Fruit Gattu", size: "150g", cat: "breads", img: "fruit-gattu.png",
    desc: "Sweet Gattu studded with colourful tutti-frutti — a fun, fruity treat loved by children." },
  { id: "slice-bread", name: "Slice Bread", size: "200g", cat: "breads", img: "slice-bread.png",
    desc: "Ready-sliced soft bread for easy breakfasts, toasts and bread pakodas." },
  { id: "long-economy-bread", name: "Long Economy Bread", size: "125g", cat: "breads", img: "long-economy-bread.png",
    desc: "Great value long bread — the same Madhab softness at an everyday economical price." },

  // Buns & Pav
  { id: "sumo-burger", name: "Sumo Burger", size: "350g (6 Pcs)", cat: "buns-pav", img: "sumo-burger.png",
    desc: "Big, soft burger buns in a value 6-piece pack — built for generous fillings." },
  { id: "twin-bun", name: "Twin Bun", size: "150g (2 Pcs)", cat: "buns-pav", img: "twin-bun.png",
    desc: "Two soft, sweet buns in one pack — a quick snack with tea or milk." },
  { id: "burger-bun", name: "Burger Bun", size: "225g (6 Pcs)", cat: "buns-pav", img: "burger-bun.png", featured: true,
    desc: "Fresh 'n' tasty burger buns with a light, fluffy crumb — ready for your favourite veg patty." },
  { id: "till-bun", name: "Till Bun", size: "350g (6 Pcs)", cat: "buns-pav", img: "till-bun.png",
    desc: "Sesame-topped Till Bun with a golden crust and soft inside — rich in taste." },
  { id: "ladi-pav-250g", name: "Ladi Pav", size: "250g (6 Pcs)", cat: "buns-pav", img: "ladi-pav-250g.png", featured: true,
    desc: "Soft, pull-apart Ladi Pav — made for pav bhaji, vada pav and misal." },
  { id: "ladi-pav-350g", name: "Ladi Pav", size: "350g (12 Pcs)", cat: "buns-pav", img: "ladi-pav-350g.png",
    desc: "Our 12-piece Ladi Pav tray for the whole family or your food stall." },

  // Cream
  { id: "cream-roll", name: "Cream Roll", size: "500g (12 Pcs)", cat: "cream", img: "cream-roll.png", featured: true,
    desc: "Crisp, flaky cones filled with smooth sweet cream. A tasty one, healthy fun for kids and grown-ups alike." },
  { id: "cream-bun", name: "Cream Bun", size: "250g (6 Pcs)", cat: "cream", img: "cream-bun.png", featured: true,
    desc: "Soft buns loaded with sweet vanilla cream — a delicious evening treat." },

  // Sheermal
  { id: "sheermal-roti-100g", name: "Sheermal Roti", size: "100g", cat: "sheermal", img: "sheermal-roti-100g.png",
    desc: "The Awadhi favourite — mildly sweet, soft Sheermal Roti, lovely with korma or simply with tea." },
  { id: "sheermal-roti-200g", name: "Sheermal Roti", size: "200g", cat: "sheermal", img: "sheermal-roti-200g.png",
    desc: "A bigger pack of our traditional Sheermal Roti for festive meals and family gatherings." }
];
