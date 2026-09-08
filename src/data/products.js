// Catalogue data transcribed from the TTK Prestige / Judge institutional
// gifting catalogue (2026). Printed MRPs are intentionally NOT carried over —
// GiftCanva quotes bulk pricing directly, see src/data/site.js.
//
// `image` holds the filename GiftCanva expects to find in /public/products/.
// Until the final product photography is dropped in, ProductCard.vue shows a
// branded placeholder instead of a broken <img>.

export const categories = [
  { id: 'pressure-cookers', label: 'Pressure Cookers' },
  { id: 'cookware', label: 'Cookware' },
  { id: 'gift-sets', label: 'Gift Combi Packs' },
  { id: 'mixer-grinders', label: 'Mixer Grinders' },
  { id: 'cooktops', label: 'Induction & Gas Stoves' },
  { id: 'air-fryers-ovens', label: 'Air Fryers & OTG' },
  { id: 'rice-cookers', label: 'Rice Cookers' },
  { id: 'appliances', label: 'Kitchen Appliances' },
  { id: 'drinkware', label: 'Bottles & Drinkware' },
  { id: 'judge-kitchenware', label: 'Judge Kitchenware' },
]

let uid = 0
// `image`, when set, is a filename in /public/products/ sourced from the
// official TTK Prestige / Judge online stores (shop.ttkprestige.com,
// judge.ttkprestige.com). `verified` marks whether that photo is confirmed
// to be this exact model, or just the closest match found for this product
// line — ProductCard.vue shows a "may differ" notice whenever it's false.
const p = (name, brand, category, series, spec, image = null, verified = false) => ({
  id: `p${++uid}`,
  name,
  brand,
  category,
  series,
  spec,
  image,
  verified: image ? verified : false,
})

export const products = [
  // Pressure Cookers
  p('Outer Lid Pressure Cooker', 'Prestige', 'pressure-cookers', 'Outer Lid', 'Tri-Ply', 'prestige-outer-lid-pressure-cooker-tri-ply.jpg', true),
  p('Outer Lid Pressure Cooker', 'Prestige', 'pressure-cookers', 'Outer Lid', 'Hard Anodized', 'prestige-outer-lid-pressure-cooker-hard-anodized.jpg', true),
  p('Outer Lid Pressure Cooker', 'Prestige', 'pressure-cookers', 'Outer Lid', 'Aluminium', 'prestige-outer-lid-pressure-cooker-aluminium.jpg', true),
  p('Outer Lid Pressure Cooker', 'Prestige', 'pressure-cookers', 'Outer Lid', 'Stainless Steel', 'prestige-outer-lid-pressure-cooker-stainless-steel.jpg', true),
  p('Outer Lid Pressure Cooker', 'Prestige', 'pressure-cookers', 'Outer Lid', 'SS Deluxe Granite', 'prestige-outer-lid-pressure-cooker-ss-deluxe-granite.jpg', true),
  p('Inner Lid Pressure Cooker', 'Prestige', 'pressure-cookers', 'Inner Lid', 'Tri-Ply Svachh', 'prestige-inner-lid-pressure-cooker-tri-ply-svachh.jpg', true),
  p('Inner Lid Pressure Cooker', 'Prestige', 'pressure-cookers', 'Inner Lid', 'Stainless Steel', 'prestige-inner-lid-pressure-cooker-stainless-steel.jpg', true),
  p('Inner Lid Pressure Cooker', 'Prestige', 'pressure-cookers', 'Inner Lid', 'Hard Anodized', 'prestige-inner-lid-pressure-cooker-hard-anodized.jpg', true),
  p('Inner Lid Pressure Cooker', 'Prestige', 'pressure-cookers', 'Inner Lid', 'Aluminium', 'prestige-inner-lid-pressure-cooker-aluminium.jpg', false),
  p('Modular Pressure Cooker', 'Prestige', 'pressure-cookers', 'Modular', 'Tri-Ply Svachh', 'prestige-modular-pressure-cooker-tri-ply-svachh.jpg', true),
  p('Modular Pressure Cooker', 'Prestige', 'pressure-cookers', 'Modular', 'Stainless Steel', 'prestige-modular-pressure-cooker-stainless-steel.jpg', true),
  p('Modular Pressure Cooker', 'Prestige', 'pressure-cookers', 'Modular', 'Hard Anodized', 'prestige-modular-pressure-cooker-hard-anodized.jpg', true),
  p('Judge Pressure Cooker', 'Judge', 'pressure-cookers', 'Judge', 'Stainless Steel', 'judge-judge-pressure-cooker-stainless-steel.jpg', false),
  p('Judge Pressure Cooker', 'Judge', 'pressure-cookers', 'Judge', 'Hard Anodized', 'judge-judge-pressure-cooker-hard-anodized.jpg', false),
  p('Judge Pressure Cooker', 'Judge', 'pressure-cookers', 'Judge', 'Aluminium', 'judge-judge-pressure-cooker-aluminium.jpg', true),

  // Cookware
  p('Ceraglide Duo Tawa', 'Prestige', 'cookware', 'Ceraglide Duo', 'Ceramic non-stick', 'prestige-ceraglide-duo-tawa-ceramic-non-stick.jpg', true),
  p('Ceraglide Duo Fry Pan', 'Prestige', 'cookware', 'Ceraglide Duo', 'Ceramic non-stick', 'prestige-ceraglide-duo-fry-pan-ceramic-non-stick.jpg', true),
  p('Ceraglide Duo Kadai', 'Prestige', 'cookware', 'Ceraglide Duo', 'Ceramic non-stick', 'prestige-ceraglide-duo-kadai-ceramic-non-stick.jpg', true),
  p('Omega Deluxe Granite Omni Tawa', 'Prestige', 'cookware', 'Omega Deluxe Granite', 'Granite non-stick', 'prestige-omega-deluxe-granite-omni-tawa-granite-non-stick.jpg', true),
  p('Omega Deluxe Granite Fry Pan with Lid', 'Prestige', 'cookware', 'Omega Deluxe Granite', 'Granite non-stick', 'prestige-omega-deluxe-granite-fry-pan-with-lid-granite-non-stick.jpg', true),
  p('Omega Deluxe Granite Kadai', 'Prestige', 'cookware', 'Omega Deluxe Granite', 'Granite non-stick', 'prestige-omega-deluxe-granite-kadai-granite-non-stick.jpeg', true),
  p('Durastone Hard Anodized Fry Pan', 'Prestige', 'cookware', 'Durastone', 'Hard anodized', 'prestige-durastone-hard-anodized-fry-pan-hard-anodized.jpg', true),
  p('Durastone Hard Anodized Kadai', 'Prestige', 'cookware', 'Durastone', 'Hard anodized', 'prestige-durastone-hard-anodized-kadai-hard-anodized.jpg', true),
  p('Cast Iron Fry Pan', 'Prestige', 'cookware', 'Cast Iron', 'Pre-seasoned cast iron', 'prestige-cast-iron-fry-pan-pre-seasoned-cast-iron.jpg', false),
  p('Cast Iron Kadai', 'Prestige', 'cookware', 'Cast Iron', 'Pre-seasoned cast iron', 'prestige-cast-iron-kadai-pre-seasoned-cast-iron.jpg', true),
  p('Stainless Steel Casserole', 'Prestige', 'cookware', 'Stainless Steel', 'Stainless steel', 'prestige-stainless-steel-casserole-stainless-steel.jpg', true),
  p('Stainless Steel Fry Pan', 'Prestige', 'cookware', 'Stainless Steel', 'Stainless steel', 'prestige-stainless-steel-fry-pan-stainless-steel.jpg', true),
  p('Stainless Steel Kadai', 'Prestige', 'cookware', 'Stainless Steel', 'Stainless steel', 'prestige-stainless-steel-kadai-stainless-steel.jpg', true),
  p('Tri-Ply Hammered Cookware', 'Prestige', 'cookware', 'Tri-Ply', 'Tri-ply stainless steel', 'prestige-tri-ply-hammered-cookware-tri-ply-stainless-steel.jpeg', true),
  p('Tri-Ply Hexamagic Cookware', 'Prestige', 'cookware', 'Tri-Ply', 'Tri-ply stainless steel', 'prestige-tri-ply-hexamagic-cookware-tri-ply-stainless-steel.jpg', true),
  p('Tri-Ply Designer Cookware', 'Prestige', 'cookware', 'Tri-Ply', 'Tri-ply stainless steel', 'prestige-tri-ply-designer-cookware-tri-ply-stainless-steel.jpg', true),
  p('Tri-Ply Splendid Cookware', 'Prestige', 'cookware', 'Tri-Ply', 'Tri-ply stainless steel', 'prestige-tri-ply-splendid-cookware-tri-ply-stainless-steel.jpg', true),
  p('Judge Everyday Kadai', 'Judge', 'cookware', 'Judge Everyday', 'Non-stick', 'judge-judge-everyday-fry-pan-non-stick.jpg', true),
  p('Judge Everyday Omni Tawa', 'Judge', 'cookware', 'Judge Everyday', 'Non-stick', 'judge-judge-everyday-omni-tawa-non-stick.jpg', true),
  p('Judge Everyday Fry Pan (Flat)', 'Judge', 'cookware', 'Judge Everyday', 'Non-stick', 'judge-judge-everyday-fry-pan-flat-non-stick.jpg', false),
  p('Judge Everyday Sauce Pan', 'Judge', 'cookware', 'Judge Everyday', 'Non-stick', 'judge-judge-everyday-sauce-pan-non-stick.jpg', true),

  // Gift Combi Packs
  p('Omega Deluxe Non-Stick Cookware Set', 'Prestige', 'gift-sets', 'Omega Deluxe', '3 piece set', 'prestige-omega-deluxe-non-stick-cookware-set-3-piece-set.jpg', true),
  p('Omega Deluxe Non-Stick Cookware Set', 'Prestige', 'gift-sets', 'Omega Deluxe', '6 piece set', 'prestige-omega-deluxe-non-stick-cookware-set-6-piece-set.jpg', true),
  p('Granite Non-Stick Cookware Set', 'Prestige', 'gift-sets', 'Granite', '3 piece set', 'prestige-granite-non-stick-cookware-set-3-piece-set.jpeg', true),
  p('Granite Non-Stick Cookware Set', 'Prestige', 'gift-sets', 'Granite', '4 piece set', 'prestige-granite-non-stick-cookware-set-4-piece-set.jpeg', true),
  p('Platina Popular Stainless Steel Cookware Set', 'Prestige', 'gift-sets', 'Platina Popular', '3 piece set', 'prestige-platina-popular-stainless-steel-cookware-set-3-piece-set.jpg', true),
  p('Tri-Ply Cookware Set', 'Prestige', 'gift-sets', 'Tri-Ply', '3 piece set', 'prestige-tri-ply-cookware-set-3-piece-set.jpeg', true),
  p('Judge Pride Cookware Set', 'Judge', 'gift-sets', 'Judge Pride', '2 piece set', 'judge-judge-pride-cookware-set-2-piece-set.jpg', true),
  p('Judge Twin Pack Cookware Set', 'Judge', 'gift-sets', 'Judge Twin Pack', '2 piece set', 'judge-judge-twin-pack-cookware-set-2-piece-set.jpg', true),
  p('Judge Pride Cookware Set', 'Judge', 'gift-sets', 'Judge Pride', '6 piece set', 'judge-judge-pride-cookware-set-6-piece-set.jpg', true),

  // Mixer Grinders
  p('Nutri-Jet Mixer Grinder', 'Prestige', 'mixer-grinders', 'Nutri-Jet', '2 jars | 450 W', 'prestige-nutri-jet-mixer-grinder-2-jars-450-w.jpeg', true),
  p('Diva Mixer Grinder', 'Prestige', 'mixer-grinders', 'Diva', '3 jars | 500 W', 'prestige-diva-mixer-grinder-3-jars-500-w.jpg', false),
  p('Nakshatra Mixer Grinder', 'Prestige', 'mixer-grinders', 'Nakshatra', '3 jars | 550 W', 'prestige-nakshatra-mixer-grinder-3-jars-550-w.jpg', false),
  p('Prism Plus Mixer Grinder', 'Prestige', 'mixer-grinders', 'Prism Plus', '4 jars | 1000 W', 'prestige-prism-plus-mixer-grinder-4-jars-1000-w.jpg', false),
  p('Endura Pro Mixer Grinder', 'Prestige', 'mixer-grinders', 'Endura Pro', '6 jars, food processor | 1000 W', 'prestige-endura-pro-mixer-grinder-6-jars-food-processor-1000-w.jpg', true),
  p('Breeze Juicer Mixer Grinder', 'Prestige', 'mixer-grinders', 'Breeze', '2 jars | 500 W', 'prestige-breeze-juicer-mixer-grinder-2-jars-500-w.jpeg', false),
  p('Judge Comet Mixer Grinder', 'Judge', 'mixer-grinders', 'Comet', '3 jars | 500 W', 'judge-judge-comet-mixer-grinder-3-jars-500-w.jpg', true),
  p('Judge Carnival Mixer Grinder', 'Judge', 'mixer-grinders', 'Carnival', '3 jars | 750 W', 'judge-judge-carnival-mixer-grinder-3-jars-750-w.jpg', true),

  // Induction & Gas Stoves
  p('Xpress Induction Cooktop', 'Prestige', 'cooktops', 'Induction', '1200 W', 'prestige-xpress-induction-cooktop-1200-w.jpg', true),
  p('Ray Induction Cooktop', 'Prestige', 'cooktops', 'Induction', '1350 W', 'prestige-ray-induction-cooktop-1350-w.jpeg', true),
  p('PIC 20 Wiz Induction Cooktop', 'Prestige', 'cooktops', 'Induction', '1600 W', 'prestige-pic-20-wiz-induction-cooktop-1600-w.jpg', false),
  p('Sleeq Induction Cooktop', 'Prestige', 'cooktops', 'Induction', '2300 W', 'prestige-sleeq-induction-cooktop-2300-w.jpeg', true),
  p('Judge Aura Plus Induction Cooktop', 'Judge', 'cooktops', 'Induction', '1800 W', 'judge-judge-aura-plus-induction-cooktop-1800-w.jpg', true),
  p('PIC 16.0+ Induction Cooktop', 'Prestige', 'cooktops', 'Induction', '2000 W', 'prestige-pic-16-0-induction-cooktop-2000-w.jpg', true),
  p('PIC 3.1 V3 Induction Cooktop', 'Prestige', 'cooktops', 'Induction', '2000 W', 'prestige-pic-3-1-v3-induction-cooktop-2000-w.jpg', true),
  p('PIC 6.1 V3 Induction Cooktop', 'Prestige', 'cooktops', 'Induction', '2200 W', 'prestige-pic-6-1-v3-induction-cooktop-2200-w.jpg', true),
  p('PIRC 1.0 Induction Cooktop', 'Prestige', 'cooktops', 'Induction', '2200 W', 'prestige-pirc-1-0-induction-cooktop-2200-w.jpg', true),
  p('Magic Plus Gas Stove', 'Prestige', 'cooktops', 'Gas Stove', 'Glass top', 'prestige-magic-plus-gas-stove-glass-top.jpeg', true),
  p('Svachh Neo Gas Stove', 'Prestige', 'cooktops', 'Gas Stove', 'Spill-proof drip tray', 'prestige-svachh-neo-gas-stove-spill-proof-drip-tray.jpg', false),
  p('Hobtop Gas Stove', 'Prestige', 'cooktops', 'Gas Stove', 'Built-in hob', 'prestige-hobtop-gas-stove-built-in-hob.jpg', true),
  p('Prime Gas Stove', 'Prestige', 'cooktops', 'Gas Stove', 'Stainless steel body', 'prestige-prime-gas-stove-stainless-steel-body.jpg', true),

  // Air Fryers & OTG
  p('Nutri Fry Air Fryer', 'Prestige', 'air-fryers-ovens', 'Air Fryer', '4.5 L', 'prestige-nutri-fry-air-fryer-4-5-l.jpg', true),
  p('Multichef Air Fryer', 'Judge', 'air-fryers-ovens', 'Air Fryer', '6.5 L', 'judge-multichef-air-fryer-6-5-l.jpg', true),
  p('Crysta Chef Air Fryer', 'Prestige', 'air-fryers-ovens', 'Air Fryer', 'Digital touch panel', 'prestige-crysta-chef-air-fryer-digital-touch-panel.jpeg', false),
  p('Insta Air Air Fryer', 'Judge', 'air-fryers-ovens', 'Air Fryer', '4 L', 'judge-insta-air-air-fryer-4-l.jpg', true),
  p('OTG Oven Toaster Griller', 'Prestige', 'air-fryers-ovens', 'OTG', '9 pc', 'prestige-otg-oven-toaster-griller-9-pc.jpg', true),
  p('POTG Oven Toaster Griller', 'Prestige', 'air-fryers-ovens', 'OTG', '19 pc', 'prestige-potg-oven-toaster-griller-19-pc.jpeg', false),

  // Rice Cookers
  p('PRWO 1.8 Rice Cooker', 'Prestige', 'rice-cookers', 'Rice Cooker', '1.8 L | Open type', 'prestige-prwo-1-8-rice-cooker-1-8-l-open-type.jpg', false),
  p('Cute 1.8 SS Rice Cooker', 'Prestige', 'rice-cookers', 'Rice Cooker', '1.8 L | Stainless steel bowl', 'prestige-cute-1-8-ss-rice-cooker-1-8-l-stainless-steel-bowl.jpg', false),
  p('PRWCS 2.8 Rice Cooker', 'Prestige', 'rice-cookers', 'Rice Cooker', '2.8 L | Close type', 'prestige-prwcs-2-8-rice-cooker-2-8-l-close-type.jpg', true),

  // Kitchen Appliances
  p('Cool Touch Body Electric Kettle', 'Prestige', 'appliances', 'Kettle', 'Cool touch body', 'prestige-cool-touch-body-electric-kettle-cool-touch-body.jpg', false),
  p('PKGB 1.8 L Glass Kettle', 'Prestige', 'appliances', 'Kettle', '1.8 L | Glass body', 'prestige-pkgb-1-8-l-glass-kettle-1-8-l-glass-body.jpg', true),
  p('PMC 4.0+ Multi Cooker', 'Prestige', 'appliances', 'Kettle', 'Multi cooker kettle', 'prestige-pmc-4-0-multi-cooker-multi-cooker-kettle.jpeg', false),
  p('Judge JEA 313 Electric Kettle', 'Judge', 'appliances', 'Kettle', 'Stainless steel body', 'judge-judge-jea-313-electric-kettle-stainless-steel-body.jpg', true),
  p('Flexi Grill 180 Sandwich Maker', 'Prestige', 'appliances', 'Sandwich Maker', '180 degree flexi grill', 'prestige-flexi-grill-180-sandwich-maker-180-degree-flexi-grill.jpeg', false),
  p('PGMFB Sandwich Maker', 'Prestige', 'appliances', 'Sandwich Maker', 'Fixed grill plates', 'prestige-pgmfb-sandwich-maker-fixed-grill-plates.jpeg', true),
  p('PDI 07 Dry Iron', 'Prestige', 'appliances', 'Iron', 'Non-stick soleplate', 'prestige-pdi-07-dry-iron-non-stick-soleplate.jpg', true),
  p('PRM 5.0 Roti Maker', 'Prestige', 'appliances', 'Roti Maker', 'Automatic roti maker', 'prestige-prm-5-0-roti-maker-automatic-roti-maker.jpeg', true),
  p('Blendx Hand Blender', 'Prestige', 'appliances', 'Hand Blender', 'Stainless steel stem', 'prestige-blendx-hand-blender-stainless-steel-stem.jpg', true),
  p('Ace Hand Blender', 'Prestige', 'appliances', 'Hand Blender', 'Compact hand blender', 'prestige-ace-hand-blender-compact-hand-blender.jpg', true),
  p('Centrifugal Juicer', 'Prestige', 'appliances', 'Juicer', 'Wide feeding chute', 'prestige-centrifugal-juicer-wide-feeding-chute.jpeg', true),

  // Bottles & Drinkware
  p('Stainless Steel Water Bottle', 'Prestige', 'drinkware', 'Water Bottle', '900 ml', 'prestige-stainless-steel-water-bottle-900-ml.jpg', true),
  p('Sipper Water Bottle', 'Prestige', 'drinkware', 'Water Bottle', '750 ml', 'prestige-sipper-water-bottle-750-ml.jpg', false),
  p('Stainless Steel Water Bottle', 'Prestige', 'drinkware', 'Water Bottle', '600 ml', 'prestige-stainless-steel-water-bottle-600-ml.jpg', true),
  p('Stainless Steel Water Bottle', 'Prestige', 'drinkware', 'Water Bottle', '1000 ml', 'prestige-stainless-steel-water-bottle-1000-ml.jpg', true),
  p('Aura Curve Copper Bottle', 'Prestige', 'drinkware', 'Copper Bottle', '950 ml', 'prestige-aura-curve-copper-bottle-950-ml.jpg', false),
  p('Rustic Copper Bottle', 'Prestige', 'drinkware', 'Copper Bottle', '750 ml', 'prestige-rustic-copper-bottle-750-ml.jpg', true),
  p('Charcoal Copper Bottle', 'Prestige', 'drinkware', 'Copper Bottle', '700 ml', 'prestige-charcoal-copper-bottle-700-ml.jpg', false),

  // Judge Kitchenware
  p('Judge Dinner Set', 'Judge', 'judge-kitchenware', 'Dinner Set', '16 pieces', 'judge-judge-dinner-set-16-pieces.jpg', false),
  p('Judge Dinner Set', 'Judge', 'judge-kitchenware', 'Dinner Set', '24 pieces', 'judge-judge-dinner-set-24-pieces.jpg', false),
  p('Judge Dinner Set', 'Judge', 'judge-kitchenware', 'Dinner Set', '36 pieces', 'judge-judge-dinner-set-36-pieces.jpg', false),
  p('Judge Idli Cooker', 'Judge', 'judge-kitchenware', 'Idli Cooker', '4 / 6 plates', 'judge-judge-idli-cooker-4-6-plates.jpg', true),
  p('Judge Stainless Steel Serveware', 'Judge', 'judge-kitchenware', 'Serveware', '1 L | 1.5 L | 2 L | 3 L', 'judge-judge-stainless-steel-serveware-1-l-1-5-l-2-l-3-l.jpg', true),
  p('Judge Masala Box', 'Judge', 'judge-kitchenware', 'Masala Box', 'Stainless steel', 'judge-judge-masala-box-stainless-steel.jpg', true),
  p('Judge Milk Cooker', 'Judge', 'judge-kitchenware', 'Milk Cooker', 'Stainless steel', 'judge-judge-milk-cooker-stainless-steel.jpg', true),
]
