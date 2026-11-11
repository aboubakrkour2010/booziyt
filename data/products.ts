// =====================================================================
// 🛒 منتجات متجر Booziyt — هنا كتتحكم فالمتجر كامل
// ---------------------------------------------------------------------
// كل منتوج فيه:
//   slug        : سمية قصيرة بالإنجليزية بلا فراغات (خاصها تكون فريدة)
//   title       : سمية المنتوج لي كتبان للكليان
//   category    : "oil" (الزيوت والزيتون) | "packs" (الباقات) | "honey" (العسل) | "amlou" (أملو) | "more" (أخرى)
//   image       : التصويرة (حط الصورة فـ public/s/img/p/ وكتب "/s/img/p/السمية.webp")
//   price       : الثمن الأول (كيتحسب "ابتداءً من" من الأحجام)
//   sizes       : الأحجام والأثمنة  [{ label: "1kg", price: 200 }, ...]
//   oldPrice    : (اختياري) الثمن القديم المشطب
//   freeShipping: (اختياري) true = التوصيل مجاني
//   best        : (اختياري) true = كيبان فـ "الأكثر مبيعاً"
//   hidden      : (اختياري) true = المنتوج مخبي
//   contents    : (اختياري للباقات) شنو كاين فالباقة
//   description : الوصف
// من بعد ما تعدل: Commit + Push (Sync) فـ VS Code، و Vercel كينشر بوحدو ✅
// =====================================================================

export const products = [
  {
    slug: "olive-oil",
    title: "زيت الزيتون البلدية",
    category: "oil",
    image: "/s/img/p/oil-shop.webp",
    price: 300,
    sizes: [
      {
        label: "5L",
        price: 300
      },
      {
        label: "10L",
        price: 600
      },
      {
        label: "15L",
        price: 900
      },
      {
        label: "20L",
        price: 1200
      },
      {
        label: "25L",
        price: 1500
      }
    ],
    best: true,
    tag: "الأكثر مبيعاً",
    description: "زيت زيتون بلدي طبيعي 100٪ من تعاونية بو الزيت. 60 درهم للتر."
  },
  {
    slug: "arbequina-oil",
    title: "زيت الزيتون لاربيكين",
    category: "oil",
    image: "/s/img/p/olive-oil.webp",
    price: 225,
    sizes: [
      {
        label: "5L",
        price: 225
      },
      {
        label: "10L",
        price: 450
      },
      {
        label: "15L",
        price: 675
      },
      {
        label: "20L",
        price: 900
      },
      {
        label: "25L",
        price: 1125
      }
    ],
    best: true,
    description: "زيت زيتون من نوع لاربيكين (Arbequina)، طعم خفيف وفاكهي. 45 درهم للتر."
  },
  {
    slug: "argan-food-oil",
    title: "زيت أركان للأكل",
    category: "oil",
    image: "/s/img/p/argan-food-oil.webp",
    price: 175,
    sizes: [
      {
        label: "250ml",
        price: 150
      },
      {
        label: "500ml",
        price: 300
      }
    ],
    best: true,
    description: "زيت أركان طبيعي صالح للأكل."
  },
  {
    slug: "argan-cosmetic-oil",
    title: "زيت أركان للتجميل",
    category: "oil",
    image: "/s/img/p/argan-cosmetic-oil.webp",
    price: 175,
    sizes: [
      {
        label: "250ml",
        price: 175
      }
    ],
    description: "زيت أركان طبيعي للعناية بالبشرة والشعر."
  },
  {
    slug: "apple-vinegar",
    title: "خل التفاح",
    category: "oil",
    image: "/s/img/p/apple-vinegar.webp",
    price: 40,
    sizes: [
      {
        label: "250ml",
        price: 45
      },
      {
        label: "500ml",
        price: 90
      }
    ],
    description: "خل تفاح طبيعي بجودة ممتازة."
  },
  {
    slug: "rose-pack",
    title: "باقة وردة",
    category: "packs",
    image: "/s/img/p/rose-pack.jpg",
    price: 550,
    sizes: [
      {
        label: "Pack",
        price: 550
      }
    ],
    oldPrice: 620,
    freeShipping: true,
    contents: [
      "زيت أركان للأكل 250 مل",
      "أملو باللوز 700 غ",
      "أملو الأكاجو 370 غ",
      "عسل الكاليتوس 1 كغ"
    ],
    description: "🌹 باقة وردة\n\nتضم باقة وردة تشكيلة من المنتجات الطبيعية المختارة بعناية، وتجمع بين زيت الأركان والأملو والعسل في باقة واحدة، مناسبة للاستعمال اليومي أو كهدية.\n\n📦 مكونات الباقة:\n\n🌿 250 مل زيت الأركان للأكل.\n🌰 700 غرام أملو باللوز.\n🥜 370 غرام أملو بالأكاجو بزيت الأركان.\n🍯 1 كيلوغرام عسل الكالبتوس.\n\n✨ مميزات الباقة:\n\n✅ منتجات طبيعية مختارة بعناية.\n✅ جودة عالية.\n✅ مناسبة للعائلة أو كهدية.\n✅ توصيل سريع إلى جميع مدن المغرب.\n\n💰 السعر: 550 درهم (شامل التوصيل إلى جميع مدن المغرب)."
  },
  {
    slug: "summer-pack",
    title: "باقة الصيف",
    category: "packs",
    image: "/s/img/p/summer-pack.jpg",
    price: 550,
    sizes: [
      {
        label: "Pack",
        price: 550
      }
    ],
    oldPrice: 685,
    freeShipping: true,
    contents: [
      "عسل البرتقال 1 كغ",
      "عسل الكاليتوس 1 كغ",
      "أملو الأكاجو 700 غ",
      "أملو باللوز 700 غ"
    ],
    description: "🌞 باقة الصيف\n\nتضم باقة الصيف تشكيلة من المنتجات الطبيعية، مناسبة للاستعمال اليومي أو كهدية، وتجمع بين الأملو والعسل في عرض واحد.\n\n📦 مكونات الباقة:\n\n🍊 1 كيلوغرام عسل البرتقال.\n🍯 1 كيلوغرام عسل الكالبتوس.\n🥜 700 غرام أملو بالأكاجو.\n🌰 700 غرام أملو باللوز.\n\n✨ مميزات الباقة:\n\n✅ منتجات طبيعية مختارة بعناية.\n✅ جودة عالية.\n✅ مناسبة للعائلة أو كهدية.\n✅ توصيل سريع إلى جميع مدن المغرب.\n\n💰 السعر: 550 درهم (شامل التوصيل إلى جميع مدن المغرب)."
  },
  {
    slug: "eid-pack",
    title: "باقة العيد",
    category: "packs",
    image: "/s/img/p/eid-pack.jpg",
    price: 600,
    sizes: [
      {
        label: "Pack",
        price: 600
      }
    ],
    freeShipping: true,
    contents: [
      "زيت أركان للأكل 250 مل",
      "أملو باللوز ×2",
      "عسل الدغموس",
      "عسل الكاليتوس"
    ],
    description: "🌙 باقة العيد\n\nباقة كاملة للعيد: زيت أركان، جوج ديال أملو باللوز وجوج أنواع ديال العسل الطبيعي."
  },
  {
    slug: "ramadan-pack",
    title: "باقة رمضان",
    category: "packs",
    image: "/s/img/p/ramadan-pack.jpg",
    price: 450,
    sizes: [
      {
        label: "Pack",
        price: 450
      }
    ],
    freeShipping: true,
    contents: [
      "خل التفاح 250 مل",
      "مكمل المكسرات بالعسل",
      "عسل الكاليتوس",
      "أملو باللوز",
      "زيت أركان للأكل 250 مل"
    ],
    description: "🌙 باقة رمضان\n\n5 منتجات طبيعية لمائدة رمضان: خل التفاح، مكمل المكسرات، العسل، أملو وزيت الأركان."
  },
  {
    slug: "azghar-pack",
    title: "باقة أزغار",
    category: "packs",
    image: "/s/img/p/azghar-pack.jpg",
    price: 550,
    sizes: [
      {
        label: "Pack",
        price: 550
      }
    ],
    freeShipping: true,
    contents: [
      "عسل الكاليتوس",
      "زيت أركان للأكل 250 مل",
      "عسل الدغموس",
      "أملو باللوز"
    ],
    description: "🌿 باقة أزغار\n\nزيت الأركان، أملو باللوز وجوج أنواع ديال العسل الحر فباقة وحدة."
  },
  {
    slug: "generosity-pack",
    title: "باقة الكرم",
    category: "packs",
    image: "/s/img/p/generosity-pack.jpg",
    price: 550,
    sizes: [
      {
        label: "Pack",
        price: 550
      }
    ],
    oldPrice: 610,
    freeShipping: true,
    contents: [
      "زيت أركان للأكل 250 مل",
      "أملو بالكاكاو 1 كغ",
      "أملو باللوز 700 غ",
      "عسل الدغموس نصف كيلو"
    ],
    description: "🌿 باقة الكرم\n\nتضم باقة الكرم تشكيلة من المنتجات الطبيعية المختارة بعناية، وتجمع بين زيت الأركان والأملو والعسل في باقة واحدة، مناسبة للاستعمال اليومي أو كهدية.\n\n📦 مكونات الباقة:\n\n🌿 250 مل زيت الأركان للأكل.\n🥜 1 كيلوغرام أملو بالكاوكاو.\n🌰 700 غرام أملو باللوز.\n🍯 نصف كيلوغرام عسل الدغموس.\n\n✨ مميزات الباقة:\n\n✅ منتجات طبيعية مختارة بعناية.\n✅ جودة عالية.\n✅ مناسبة للعائلة أو كهدية.\n✅ توصيل سريع إلى جميع مدن المغرب.\n\n💰 السعر: 550 درهم (شامل التوصيل إلى جميع مدن المغرب)."
  },
  {
    slug: "authentic-pack",
    title: "باقة الأصالة",
    category: "packs",
    image: "/s/img/p/authentic-pack.jpg",
    price: 550,
    sizes: [
      {
        label: "Pack",
        price: 550
      }
    ],
    oldPrice: 710,
    freeShipping: true,
    contents: [
      "أملو باللوز 700 غ ×2",
      "زيت أركان للأكل 250 مل",
      "عسل الكاليتوس نصف كيلو"
    ],
    description: "\n🌸✨ **باقة الصالة من Boo Ziyt** ✨🌸\n\n🥜 **أملو باللوز — 700غ**\nمخلط بزيت أركان والعسل الطبيعي 🌰🫒🍯\n\n🥜 **أملو باللوز — 700غ**\nمخلط بزيت أركان والعسل الطبيعي 🌰🫒🍯\n\n🫒 **زيت أركان الأكل — 250مل**\nطبيعي وعالي الجودة 🌿✨\n\n🍯 **نصف كيلو عسل الكلبتوس**\nعسل طبيعي بنكهة مميزة 🌿🍯\n\n💰 **ثمن الباقة: 550 درهم فقط**\n🚚 **التوصيل شامل فالثمن** 🎁✨\n\n📞 **للطلب: 0663756637**\n"
  },
  {
    slug: "tadart-pack",
    title: "باقة تادرات",
    category: "packs",
    image: "/s/img/p/tadart-pack.jpg",
    price: 550,
    sizes: [
      {
        label: "Pack",
        price: 550
      }
    ],
    oldPrice: 700,
    freeShipping: true,
    contents: [
      "أملو باللوز 700 غ",
      "أملو بذور اليقطين 700 غ",
      "عسل الكاليتوس 1 كغ",
      "عسل الليمون 1 كغ"
    ],
    description: "🌿 باقة تدارت\n\nتضم هذه الباقة تشكيلة من المنتجات الطبيعية المغربية، مناسبة للاستعمال اليومي أو كهدية، وتجمع بين الأملو والعسل في عرض واحد.\n\n📦 مكونات الباقة:\n\n🥜 700 غرام أملو باللوز بزيت الأركان.\n\n🎃 700 غرام أملو ببذور اليقطين بزيت الأركان.\n\n🍯 1 كيلوغرام عسل الكالبتوس.\n\n🍋 1 كيلوغرام عسل الليمون.\n\n✨ مميزات الباقة:\n\n✅ منتجات طبيعية مختارة بعناية.\n✅ جودة عالية.\n✅ مناسبة للعائلة أو كهدية.\n✅ توصيل إلى جميع مدن المغرب.\n\n💰 السعر: 550 درهم (شامل التوصيل إلى جميع مدن المغرب)."
  },
  {
    slug: "amlou-pack-370g",
    title: "باقة أملو 370 غرام",
    category: "packs",
    image: "/s/img/p/amlou-pack-370g.jpg",
    price: 420,
    sizes: [
      {
        label: "Pack",
        price: 420
      }
    ],
    oldPrice: 500,
    freeShipping: true,
    contents: [
      "أملو البيستاش 370 غ",
      "أملو الأكاجو 370 غ",
      "أملو اللوز 370 غ",
      "أملو بذور اليقطين 370 غ"
    ],
    description: "🥜 باقة أملو 370 غرام\n\nتضم باقة أملو 370 غرام تشكيلة متنوعة من أنواع الأملو المحضر بزيت الأركان والعسل الطبيعي، وتمنحك فرصة لتذوق أربع نكهات مختلفة في باقة واحدة، مناسبة للاستعمال اليومي أو كهدية.\n\n📦 مكونات الباقة:\n\n💚 370 غرام أملو بالبسطاش بزيت الأركان والعسل.\n🥜 370 غرام أملو بالأكاجو بزيت الأركان والعسل.\n🌰 370 غرام أملو باللوز بزيت الأركان والعسل.\n🎃 370 غرام أملو ببذور اليقطين بزيت الأركان والعسل.\n\n✨ مميزات الباقة:\n\n✅ منتجات طبيعية مختارة بعناية.\n✅ أربعة أنواع مختلفة من الأملو في باقة واحدة.\n✅ مناسبة للاستعمال اليومي أو كهدية.\n✅ توصيل سريع إلى جميع مدن المغرب.\n\n💰 السعر: 420 درهم (شامل التوصيل إلى جميع مدن المغرب)."
  },
  {
    slug: "flowers-pack",
    title: "باقة الأزهار",
    category: "packs",
    image: "/s/img/p/flowers-pack.jpg",
    price: 550,
    sizes: [
      {
        label: "Pack",
        price: 550
      }
    ],
    oldPrice: 620,
    freeShipping: true,
    description: "🌸 باقة الأزهار\n\nباقة مميزة تضم مجموعة من أجود المنتجات الطبيعية المختارة بعناية، مناسبة للاستعمال اليومي أو كهدية."
  },
  {
    slug: "taj-alasal",
    title: "تاج العسل",
    category: "honey",
    image: "/s/img/p/taj-alasal.webp",
    price: 600,
    sizes: [
      {
        label: "1kg",
        price: 600
      }
    ],
    description: "عسل فاخر طبيعي غني بالفوائد."
  },
  {
    slug: "thyme-honey",
    title: "عسل الزعتر",
    category: "honey",
    image: "/s/img/p/thyme-honey.webp",
    price: 400,
    sizes: [
      {
        label: "500g",
        price: 200
      },
      {
        label: "1kg",
        price: 400
      }
    ],
    description: "عسل الزعتر الطبيعي بجودة عالية."
  },
  {
    slug: "daghmous-honey",
    title: "عسل الدغموس",
    category: "honey",
    image: "/s/img/p/daghmous-honey.webp",
    price: 200,
    sizes: [
      {
        label: "نصف كيلو",
        price: 200
      },
      {
        label: "1 كيلو",
        price: 400
      }
    ],
    description: "عسل الدغموس الطبيعي."
  },
  {
    slug: "choukiyat-honey",
    title: "عسل الشوكيات",
    category: "honey",
    image: "/s/img/p/choukiyat-honey.webp",
    price: 300,
    sizes: [
      {
        label: "500g",
        price: 130
      },
      {
        label: "1kg",
        price: 250
      }
    ],
    description: "عسل طبيعي من أزهار الشوكيات."
  },
  {
    slug: "sidr-honey",
    title: "عسل السدر",
    category: "honey",
    image: "/s/img/p/sidr-honey.webp",
    price: 250,
    sizes: [
      {
        label: "500g",
        price: 130
      },
      {
        label: "1kg",
        price: 250
      }
    ],
    description: "عسل السدر الطبيعي غني بالطاقة."
  },
  {
    slug: "eucalyptus-honey",
    title: "عسل الكاليتوس",
    category: "honey",
    image: "/s/img/p/eucalyptus-honey.webp",
    price: 200,
    sizes: [
      {
        label: "500g",
        price: 100
      },
      {
        label: "1kg",
        price: 200
      }
    ],
    description: "عسل الكاليتوس الطبيعي النقي."
  },
  {
    slug: "lemon-honey",
    title: "عسل الليمون",
    category: "honey",
    image: "/s/img/p/lemon-honey.webp",
    price: 99,
    sizes: [
      {
        label: "1kg",
        price: 99
      },
      {
        label: "1kg",
        price: 100
      }
    ],
    description: "عسل الليمون الطبيعي المنعش."
  },
  {
    slug: "white-honey",
    title: "العسل الأبيض",
    category: "honey",
    image: "/s/img/p/white-honey.webp",
    price: 200,
    sizes: [
      {
        label: "500g",
        price: 100
      },
      {
        label: "1kg",
        price: 200
      }
    ],
    description: "عسل أبيض طبيعي بطعم مميز."
  },
  {
    slug: "taj-alasal-honeycomb",
    title: "شهدة تاج العسل",
    category: "honey",
    image: "/s/img/p/taj-alasal-honeycomb.jpg",
    price: 500,
    sizes: [
      {
        label: "1 كيلو",
        price: 500
      },
      {
        label: "900 غرام",
        price: 450
      },
      {
        label: "800 غرام",
        price: 400
      },
      {
        label: "700 غرام",
        price: 350
      }
    ],
    description: "شهدة تاج العسل من مناحل Boo Ziyt، اختيار مميز لعشاق العسل الطبيعي بالشهدة. منتوج من مناحل بوزيت، مع الحرص على الجودة والمحافظة على خصائص العسل الطبيعية."
  },
  {
    slug: "daghmous-honeycomb",
    title: "شهدة الدغموس",
    category: "honey",
    image: "/s/img/p/daghmous-honeycomb.jpg",
    price: 400,
    sizes: [
      {
        label: "1 كيلو",
        price: 400
      },
      {
        label: "900 غرام",
        price: 360
      },
      {
        label: "800 غرام",
        price: 320
      }
    ],
    description: "شهدة الدغموس من مناحل Boo Ziyt، عسل طبيعي بالشهدة، بجودة نهتمو بها من المنحل حتى يوصل لعندكم. منتوج من مناحل بوزيت، بدون علف حسب طريقة الإنتاج المعتمدة."
  },
  {
    slug: "amlou-almond",
    title: "أملو باللوز",
    category: "amlou",
    image: "/s/img/p/amlou-almond.webp",
    price: 160,
    sizes: [
      {
        label: "700g",
        price: 160
      },
      {
        label: "370g",
        price: 80
      }
    ],
    best: true,
    description: "أملو طبيعي باللوز وزيت الأركان والعسل."
  },
  {
    slug: "almond-amlou",
    title: "أملو اللوز بزيت الزيتون",
    category: "amlou",
    image: "/s/img/p/almond-amlou.webp",
    price: 140,
    sizes: [
      {
        label: "1kg",
        price: 140
      },
      {
        label: "700g",
        price: 100
      }
    ],
    description: "اللوز مطحون بزيت الزيتون و العسل الطبيعي"
  },
  {
    slug: "amlou-cashew",
    title: "أملو الأكاجو",
    category: "amlou",
    image: "/s/img/p/amlou-cashew.webp",
    price: 110,
    sizes: [
      {
        label: "700g",
        price: 180
      },
      {
        label: "370g",
        price: 110
      }
    ],
    description: "أملو طبيعي بالأكاجو غني بالطاقة."
  },
  {
    slug: "amlou-pistachio",
    title: "أملو بيستاش",
    category: "amlou",
    image: "/s/img/p/amlou-pistachio.webp",
    price: 129,
    sizes: [
      {
        label: "700g",
        price: 250
      },
      {
        label: "370g",
        price: 130
      }
    ],
    description: "أملو فاخر بالفستق وزيت الأركان."
  },
  {
    slug: "pumpkin-seeds-amlou",
    title: "أملو بذور اليقطين",
    category: "amlou",
    image: "/s/img/p/pumpkin-seeds-amlou.webp",
    price: 80,
    sizes: [
      {
        label: "700g",
        price: 130
      },
      {
        label: "370g",
        price: 70
      }
    ],
    description: "أملو طبيعي ببذور اليقطين."
  },
  {
    slug: "cocoa-amlou",
    title: "أملو كاكاو",
    category: "amlou",
    image: "/s/img/p/cocoa-amlou.webp",
    price: 60,
    sizes: [
      {
        label: "1kg",
        price: 60
      }
    ],
    description: "أملو بنكهة الكاكاو اللذيذة."
  },
  {
    slug: "nuts-honey-mix",
    title: "خلطة المكسرات بالعسل",
    category: "amlou",
    image: "/s/img/p/nuts-honey-mix.webp",
    price: 250,
    sizes: [
      {
        label: "500g",
        price: 130
      },
      {
        label: "1kg",
        price: 250
      }
    ],
    description: "خلطة طبيعية من المكسرات والعسل."
  },
  {
    slug: "saffron",
    title: "الزعفران الحر",
    category: "more",
    image: "/s/img/p/saffron.webp",
    price: 105,
    sizes: [
      {
        label: "3g",
        price: 105
      },
      {
        label: "9g (3 علب)",
        price: 315
      }
    ],
    description: "زعفران حر أصلي (Safran Pur) فعلب زجاجية ديال 3 غرام. 35 درهم للغرام."
  },
  {
    slug: "olives",
    title: "الزيتون البلدي",
    category: "oil",
    image: "/s/img/p/olives.webp",
    price: 50,
    sizes: [
      {
        label: "بيدو 5 لتر",
        price: 50
      }
    ],
    description: "زيتون أخضر بلدي طري فالبيدو ديال 5 لتر، من الضيعة مباشرة. 50 درهم للبيدو."
  }
];
