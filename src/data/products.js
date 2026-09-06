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
const p = (name, brand, category, series, spec) => ({
  id: `p${++uid}`,
  name,
  brand,
  category,
  series,
  spec,
  image: null,
})

export const products = [
  // Pressure Cookers
  p('Outer Lid Pressure Cooker', 'Prestige', 'pressure-cookers', 'Outer Lid', 'Tri-Ply'),
  p('Outer Lid Pressure Cooker', 'Prestige', 'pressure-cookers', 'Outer Lid', 'Hard Anodized'),
  p('Outer Lid Pressure Cooker', 'Prestige', 'pressure-cookers', 'Outer Lid', 'Aluminium'),
  p('Outer Lid Pressure Cooker', 'Prestige', 'pressure-cookers', 'Outer Lid', 'Stainless Steel'),
  p('Outer Lid Pressure Cooker', 'Prestige', 'pressure-cookers', 'Outer Lid', 'SS Deluxe Granite'),
  p('Inner Lid Pressure Cooker', 'Prestige', 'pressure-cookers', 'Inner Lid', 'Tri-Ply Svachh'),
  p('Inner Lid Pressure Cooker', 'Prestige', 'pressure-cookers', 'Inner Lid', 'Stainless Steel'),
  p('Inner Lid Pressure Cooker', 'Prestige', 'pressure-cookers', 'Inner Lid', 'Hard Anodized'),
  p('Inner Lid Pressure Cooker', 'Prestige', 'pressure-cookers', 'Inner Lid', 'Aluminium'),
  p('Modular Pressure Cooker', 'Prestige', 'pressure-cookers', 'Modular', 'Tri-Ply Svachh'),
  p('Modular Pressure Cooker', 'Prestige', 'pressure-cookers', 'Modular', 'Stainless Steel'),
  p('Modular Pressure Cooker', 'Prestige', 'pressure-cookers', 'Modular', 'Hard Anodized'),
  p('Judge Pressure Cooker', 'Judge', 'pressure-cookers', 'Judge', 'Stainless Steel'),
  p('Judge Pressure Cooker', 'Judge', 'pressure-cookers', 'Judge', 'Hard Anodized'),
  p('Judge Pressure Cooker', 'Judge', 'pressure-cookers', 'Judge', 'Aluminium'),

  // Cookware
  p('Ceraglide Duo Tawa', 'Prestige', 'cookware', 'Ceraglide Duo', 'Ceramic non-stick'),
  p('Ceraglide Duo Fry Pan', 'Prestige', 'cookware', 'Ceraglide Duo', 'Ceramic non-stick'),
  p('Ceraglide Duo Kadai', 'Prestige', 'cookware', 'Ceraglide Duo', 'Ceramic non-stick'),
  p('Omega Deluxe Granite Omni Tawa', 'Prestige', 'cookware', 'Omega Deluxe Granite', 'Granite non-stick'),
  p('Omega Deluxe Granite Fry Pan with Lid', 'Prestige', 'cookware', 'Omega Deluxe Granite', 'Granite non-stick'),
  p('Omega Deluxe Granite Kadai', 'Prestige', 'cookware', 'Omega Deluxe Granite', 'Granite non-stick'),
  p('Durastone Hard Anodized Fry Pan', 'Prestige', 'cookware', 'Durastone', 'Hard anodized'),
  p('Durastone Hard Anodized Kadai', 'Prestige', 'cookware', 'Durastone', 'Hard anodized'),
  p('Cast Iron Fry Pan', 'Prestige', 'cookware', 'Cast Iron', 'Pre-seasoned cast iron'),
  p('Cast Iron Kadai', 'Prestige', 'cookware', 'Cast Iron', 'Pre-seasoned cast iron'),
  p('Stainless Steel Casserole', 'Prestige', 'cookware', 'Stainless Steel', 'Stainless steel'),
  p('Stainless Steel Fry Pan', 'Prestige', 'cookware', 'Stainless Steel', 'Stainless steel'),
  p('Stainless Steel Kadai', 'Prestige', 'cookware', 'Stainless Steel', 'Stainless steel'),
  p('Tri-Ply Hammered Cookware', 'Prestige', 'cookware', 'Tri-Ply', 'Tri-ply stainless steel'),
  p('Tri-Ply Hexamagic Cookware', 'Prestige', 'cookware', 'Tri-Ply', 'Tri-ply stainless steel'),
  p('Tri-Ply Designer Cookware', 'Prestige', 'cookware', 'Tri-Ply', 'Tri-ply stainless steel'),
  p('Tri-Ply Splendid Cookware', 'Prestige', 'cookware', 'Tri-Ply', 'Tri-ply stainless steel'),
  p('Judge Everyday Fry Pan', 'Judge', 'cookware', 'Judge Everyday', 'Non-stick'),
  p('Judge Everyday Omni Tawa', 'Judge', 'cookware', 'Judge Everyday', 'Non-stick'),
  p('Judge Everyday Fry Pan (Flat)', 'Judge', 'cookware', 'Judge Everyday', 'Non-stick'),
  p('Judge Everyday Sauce Pan', 'Judge', 'cookware', 'Judge Everyday', 'Non-stick'),

  // Gift Combi Packs
  p('Omega Deluxe Non-Stick Cookware Set', 'Prestige', 'gift-sets', 'Omega Deluxe', '3 piece set'),
  p('Omega Deluxe Non-Stick Cookware Set', 'Prestige', 'gift-sets', 'Omega Deluxe', '6 piece set'),
  p('Granite Non-Stick Cookware Set', 'Prestige', 'gift-sets', 'Granite', '3 piece set'),
  p('Granite Non-Stick Cookware Set', 'Prestige', 'gift-sets', 'Granite', '4 piece set'),
  p('Platina Popular Stainless Steel Cookware Set', 'Prestige', 'gift-sets', 'Platina Popular', '3 piece set'),
  p('Tri-Ply Cookware Set', 'Prestige', 'gift-sets', 'Tri-Ply', '3 piece set'),
  p('Judge Pride Cookware Set', 'Judge', 'gift-sets', 'Judge Pride', '2 piece set'),
  p('Judge Twin Pack Cookware Set', 'Judge', 'gift-sets', 'Judge Twin Pack', '2 piece set'),
  p('Judge Pride Cookware Set', 'Judge', 'gift-sets', 'Judge Pride', '7 piece set'),

  // Mixer Grinders
  p('Nutri-Jet Mixer Grinder', 'Prestige', 'mixer-grinders', 'Nutri-Jet', '2 jars | 450 W'),
  p('Diva Mixer Grinder', 'Prestige', 'mixer-grinders', 'Diva', '3 jars | 500 W'),
  p('Nakshatra Mixer Grinder', 'Prestige', 'mixer-grinders', 'Nakshatra', '3 jars | 550 W'),
  p('Prism Plus Mixer Grinder', 'Prestige', 'mixer-grinders', 'Prism Plus', '4 jars | 1000 W'),
  p('Endura Pro Mixer Grinder', 'Prestige', 'mixer-grinders', 'Endura Pro', '6 jars, food processor | 1000 W'),
  p('Breeze Juicer Mixer Grinder', 'Prestige', 'mixer-grinders', 'Breeze', '2 jars | 500 W'),
  p('Judge Comet Mixer Grinder', 'Judge', 'mixer-grinders', 'Comet', '3 jars | 500 W'),
  p('Judge Carnival Mixer Grinder', 'Judge', 'mixer-grinders', 'Carnival', '3 jars | 750 W'),

  // Induction & Gas Stoves
  p('Xpress Induction Cooktop', 'Prestige', 'cooktops', 'Induction', '1200 W'),
  p('Ray Induction Cooktop', 'Prestige', 'cooktops', 'Induction', '1350 W'),
  p('PIC 20 Wiz Induction Cooktop', 'Prestige', 'cooktops', 'Induction', '1600 W'),
  p('Sleeq Induction Cooktop', 'Prestige', 'cooktops', 'Induction', '2300 W'),
  p('Judge Aura Plus Induction Cooktop', 'Judge', 'cooktops', 'Induction', '1800 W'),
  p('PIC 16.0+ Induction Cooktop', 'Prestige', 'cooktops', 'Induction', '2000 W'),
  p('PIC 3.1 V3 Induction Cooktop', 'Prestige', 'cooktops', 'Induction', '2000 W'),
  p('PIC 6.1 V3 Induction Cooktop', 'Prestige', 'cooktops', 'Induction', '2200 W'),
  p('PIRC 1.0 Induction Cooktop', 'Prestige', 'cooktops', 'Induction', '2200 W'),
  p('Magic Plus Gas Stove', 'Prestige', 'cooktops', 'Gas Stove', 'Glass top'),
  p('Svachh Neo Gas Stove', 'Prestige', 'cooktops', 'Gas Stove', 'Spill-proof drip tray'),
  p('Hobtop Gas Stove', 'Prestige', 'cooktops', 'Gas Stove', 'Built-in hob'),
  p('Prime Gas Stove', 'Prestige', 'cooktops', 'Gas Stove', 'Stainless steel body'),

  // Air Fryers & OTG
  p('Nutri Fry Air Fryer', 'Prestige', 'air-fryers-ovens', 'Air Fryer', '4.5 L'),
  p('Multichef Air Fryer', 'Judge', 'air-fryers-ovens', 'Air Fryer', '6.5 L'),
  p('Crysta Chef Air Fryer', 'Prestige', 'air-fryers-ovens', 'Air Fryer', 'Digital touch panel'),
  p('Insta Air Air Fryer', 'Judge', 'air-fryers-ovens', 'Air Fryer', '4 L'),
  p('OTG Oven Toaster Griller', 'Prestige', 'air-fryers-ovens', 'OTG', '9 pc'),
  p('POTG Oven Toaster Griller', 'Prestige', 'air-fryers-ovens', 'OTG', '19 pc'),

  // Rice Cookers
  p('PRWO 1.8 Rice Cooker', 'Prestige', 'rice-cookers', 'Rice Cooker', '1.8 L | Open type'),
  p('Cute 1.8 SS Rice Cooker', 'Prestige', 'rice-cookers', 'Rice Cooker', '1.8 L | Stainless steel bowl'),
  p('PRWCS 2.8 Rice Cooker', 'Prestige', 'rice-cookers', 'Rice Cooker', '2.8 L | Close type'),

  // Kitchen Appliances
  p('Cool Touch Body Electric Kettle', 'Prestige', 'appliances', 'Kettle', 'Cool touch body'),
  p('PKGB 1.8 L Glass Kettle', 'Prestige', 'appliances', 'Kettle', '1.8 L | Glass body'),
  p('PMC 4.0+ Multi Cooker', 'Prestige', 'appliances', 'Kettle', 'Multi cooker kettle'),
  p('Judge JEA 313 Electric Kettle', 'Judge', 'appliances', 'Kettle', 'Stainless steel body'),
  p('Flexi Grill 180 Sandwich Maker', 'Prestige', 'appliances', 'Sandwich Maker', '180 degree flexi grill'),
  p('PGMFB Sandwich Maker', 'Prestige', 'appliances', 'Sandwich Maker', 'Fixed grill plates'),
  p('PDI 07 Dry Iron', 'Prestige', 'appliances', 'Iron', 'Non-stick soleplate'),
  p('PRM 5.0 Roti Maker', 'Prestige', 'appliances', 'Roti Maker', 'Automatic roti maker'),
  p('Blendx Hand Blender', 'Prestige', 'appliances', 'Hand Blender', 'Stainless steel stem'),
  p('Ace Hand Blender', 'Prestige', 'appliances', 'Hand Blender', 'Compact hand blender'),
  p('Centrifugal Juicer', 'Prestige', 'appliances', 'Juicer', 'Wide feeding chute'),

  // Bottles & Drinkware
  p('Stainless Steel Water Bottle', 'Prestige', 'drinkware', 'Water Bottle', '900 ml'),
  p('Sipper Water Bottle', 'Prestige', 'drinkware', 'Water Bottle', '750 ml'),
  p('Stainless Steel Water Bottle', 'Prestige', 'drinkware', 'Water Bottle', '600 ml'),
  p('Stainless Steel Water Bottle', 'Prestige', 'drinkware', 'Water Bottle', '1000 ml'),
  p('Aura Curve Copper Bottle', 'Prestige', 'drinkware', 'Copper Bottle', '950 ml'),
  p('Rustic Copper Bottle', 'Prestige', 'drinkware', 'Copper Bottle', '750 ml'),
  p('Charcoal Copper Bottle', 'Prestige', 'drinkware', 'Copper Bottle', '700 ml'),

  // Judge Kitchenware
  p('Judge Dinner Set', 'Judge', 'judge-kitchenware', 'Dinner Set', '16 pieces'),
  p('Judge Dinner Set', 'Judge', 'judge-kitchenware', 'Dinner Set', '24 pieces'),
  p('Judge Dinner Set', 'Judge', 'judge-kitchenware', 'Dinner Set', '36 pieces'),
  p('Judge Idli Cooker', 'Judge', 'judge-kitchenware', 'Idli Cooker', '4 / 6 plates'),
  p('Judge Stainless Steel Serveware', 'Judge', 'judge-kitchenware', 'Serveware', '1 L | 1.5 L | 2 L | 3 L'),
  p('Judge Masala Box', 'Judge', 'judge-kitchenware', 'Masala Box', 'Stainless steel'),
  p('Judge Milk Cooker', 'Judge', 'judge-kitchenware', 'Milk Cooker', 'Stainless steel'),
]
