
/*plants*/
const SYMPTOMS = {
  yellowing: {
    label: 'Yellowing leaves',
    cause: 'Yellowing often means chlorophyll (the green pigment that captures light for photosynthesis) is being lost. Possible reasons include nutrient deficiency, natural ageing of old leaves, excess water around the roots, or other plant stress.',
    steps: [
      'Check whether the soil is soggy or very dry.',
      'Check how much light the plant receives.',
      'Note the pattern: are older or newer leaves affected first?'
    ]
  },
  brownSpots: {
    label: 'Brown spots',
    cause: 'Brown spots may come from a fungal or bacterial disease, pest damage, sun scorch, or other environmental stress.',
    steps: [
      'Watch for a few days to see whether the spots grow or spread.',
      'Look closely at the leaf surface, top and underside.',
      'Keep the affected plant apart from others if the spots spread.'
    ]
  },
  wilting: {
    label: 'Wilting',
    cause: 'Wilting happens when leaves lose more water than the roots can supply. Possible reasons include too little water, waterlogged soil that damages roots, other root problems, or heat stress.',
    steps: [
      'Check soil moisture with a finger before watering.',
      'Check that the pot drains and the roots are not sitting in water.',
      'Move the plant out of intense midday heat and see if it recovers.'
    ]
  },
  holes: {
    label: 'Holes or visible leaf damage',
    cause: 'Holes and torn edges often point to chewing insects or other pests, though physical damage (wind, handling, hail) can look similar.',
    steps: [
      'Inspect both sides of the leaf and the stem.',
      'Look for insects, eggs or droppings, ideally in the early morning.',
      'Check whether new damage keeps appearing.'
    ]
  },
  whitePowder: {
    label: 'White powdery coating',
    cause: 'A white powdery layer can be powdery mildew, a fungal disease, or another surface deposit such as dust or mineral residue from water.',
    steps: [
      'Examine the coating carefully. Does it rub off like powder?',
      'Check whether it is spreading to other leaves.',
      'If it spreads, ask for plant-specific guidance from a nursery or plant expert.'
    ]
  },
  curling: {
    label: 'Curling leaves',
    cause: 'Curling can be a response to heat stress, watering problems, pests or other conditions around the plant. Leaves may curl to reduce water loss.',
    steps: [
      'Check temperature, sunlight and airflow around the plant.',
      'Review your watering routine.',
      'Inspect the underside of leaves for tiny pests.'
    ]
  }
};


const COMBINATIONS = [
  { needs: ['yellowing', 'wilting'],
    text: 'Yellowing together with wilting often points towards the roots or water supply. Compare soil moisture and drainage first.' },
  { needs: ['brownSpots', 'yellowing'],
    text: 'Brown spots with yellow areas around them can happen with leaf diseases or stress. Watch whether the pattern spreads.' },
  { needs: ['wilting', 'curling'],
    text: 'Wilting and curling together can indicate heat or water stress. Check the plant at different times of day.' },
  { needs: ['holes', 'brownSpots'],
    text: 'Damage plus spots may mean pests or injured tissue is letting problems in. Inspect closely for insects.' },
  { needs: ['whitePowder', 'curling'],
    text: 'A coating on curling leaves is worth a close look, since surface growth and stress can occur together.' }
];


const SAMPLES = {
  yellow:  { name: 'Yellow Leaf',  symptoms: ['yellowing'],               plant: 'Money plant' },
  spotted: { name: 'Spotted Leaf', symptoms: ['brownSpots', 'yellowing'], plant: 'Tomato' },
  wilting: { name: 'Wilting Plant', symptoms: ['wilting'],                plant: 'Rose' }
};


const LIMIT_TEXT = {
  light: 'Low light limits the energy available for the light-dependent reactions.',
  water: 'Low water supply limits a raw material and can make stomata close, which reduces CO₂ entry.',
  co2:   'Low carbon dioxide limits the raw material used to build glucose.'
};


const care = (name, summary, light, water, soil, watch, tips) => ({ name, summary, details: [['Light', light], ['Water', water], ['Soil', soil], ['Watch for', watch]], tips });
const PLANT_CARE = {
  tomato: {
    name: 'Tomato',
    summary: 'A fruiting plant that needs plenty of sun and steady moisture.',
    details: [
      ['Light', 'Full sun, about 6 or more hours a day.'],
      ['Water', 'Keep soil evenly moist. Very uneven watering stresses the plant.'],
      ['Soil', 'Well-drained, loose soil rich in organic matter.'],
      ['Watch for', 'Leaf spots in humid weather and leaf curling in strong heat.']
    ],
    tips: ['Water near the base, not over the leaves.', 'Give support such as a stake as the plant grows.', 'Space plants so air can move between them.']
  },
  rose: {
    name: 'Rose',
    summary: 'A flowering shrub that likes sun, airflow and good drainage.',
    details: [
      ['Light', 'At least 5 to 6 hours of direct sun a day.'],
      ['Water', 'Water deeply but not too often, and let the top soil dry slightly.'],
      ['Soil', 'Loamy, well-drained soil with compost.'],
      ['Watch for', 'Powdery mildew, black spots on leaves, and aphids on new shoots.']
    ],
    tips: ['Remove faded flowers and dead stems.', 'Good airflow helps reduce fungal problems.', 'Avoid wetting the leaves late in the day.']
  },
  money: {
    name: 'Money plant',
    summary: 'A hardy climber that grows well indoors in bright, indirect light.',
    details: [
      ['Light', 'Bright indirect light. It tolerates lower light but grows slower.'],
      ['Water', 'Let the top layer of soil dry before watering again.'],
      ['Soil', 'Light, well-drained potting mix. The pot must have drainage holes.'],
      ['Watch for', 'Yellow leaves and soft stems, often linked to too much water.']
    ],
    tips: ['Wipe dusty leaves so they can take in light.', 'Do not leave the pot standing in water.', 'Keep it away from pets and small children, because chewing the leaves can cause irritation.']
  },
  mango: {
    name: 'Mango',
    summary: 'A tropical tree that needs sun, space and deep roots.',
    details: [
      ['Light', 'Full sun for most of the day.'],
      ['Water', 'Young plants need regular watering. Established trees need deep, less frequent watering.'],
      ['Soil', 'Deep, well-drained soil. Waterlogging harms roots.'],
      ['Watch for', 'Powdery mildew on flowers and dark leaf or fruit spots in humid weather.']
    ],
    tips: ['Spread mulch around the base to hold moisture.', 'Keep the trunk base dry and clear of soil heaps.', 'Protect very young plants from strong heat.']
  },
  bougainvillea: {
    name: 'Bougainvillea',
    summary: 'A tough, colourful climbing shrub that flowers best in strong sun and slightly dry conditions.',
    details: [
      ['Light', 'Full sun, at least 5 to 6 hours a day. In shade it grows leaves but flowers less.'],
      ['Water', 'Water deeply, then let the soil dry before watering again. Too much water means fewer flowers and fallen leaves.'],
      ['Soil', 'Well-drained soil, neutral to slightly acidic. A pot must have drainage holes.'],
      ['Watch for', 'Leaf drop after overwatering or a sudden move, caterpillars, and aphids on new shoots.']
    ],
    tips: ['The bright colours are bracts (modified leaves). The real flowers are the small white parts inside.', 'Prune lightly after a flush of flowers to encourage new growth.', 'Wear gloves, because the stems have thorns.']
  },
  jasmine: {
    name: 'Jasmine (Mogra)',
    summary: 'A fragrant flowering shrub that likes sun, warmth and steady moisture.',
    details: [
      ['Light', 'Full sun to light shade. At least 4 to 6 hours of sun helps it flower well.'],
      ['Water', 'Keep soil evenly moist but never soggy. Water more often in hot weather.'],
      ['Soil', 'Rich, well-drained soil with compost. Slightly acidic soil suits it.'],
      ['Watch for', 'Yellow leaves in poorly drained soil, aphids, mites, and bud-damaging insects.']
    ],
    tips: ['Add compost during the flowering season to support new buds.', 'Prune after flowering to keep the plant bushy.', 'Pick flowers regularly, since this encourages more buds.']
  },
  hibiscus: {
    name: 'Hibiscus',
    summary: 'A fast-growing flowering shrub with large blooms that lasts best with sun and regular water.',
    details: [
      ['Light', 'Full sun, about 5 to 6 hours a day, for plenty of flowers.'],
      ['Water', 'Keep soil moist but not waterlogged. Uneven watering can make buds drop.'],
      ['Soil', 'Rich, well-drained soil, slightly acidic, with compost.'],
      ['Watch for', 'Aphids, whiteflies and mealybugs, bud drop under stress, and yellow leaves from poor drainage or low nutrients.']
    ],
    tips: ['Each flower lasts only a day or two, so new buds matter.', 'Prune in the growing season to keep a good shape.', 'Check the underside of leaves often for small pests.']
  },
  areca: {
    name: 'Areca Palm',
    summary: 'A feathery indoor palm that likes bright light without harsh direct sun.',
    details: [
      ['Light', 'Bright, indirect light. Strong direct sun can scorch the fronds.'],
      ['Water', 'Keep soil slightly moist and let the top layer dry a little between waterings.'],
      ['Soil', 'Rich, well-drained potting mix in a pot with drainage holes.'],
      ['Watch for', 'Brown leaf tips from dry air or irregular watering, yellow fronds, and tiny spider mites.']
    ],
    tips: ['Wipe dusty fronds with a damp cloth so they can take in light.', 'Keep it away from air-conditioner and heater blasts.', 'Turn the pot now and then so it grows evenly.']
  },
  lavender: {
    name: 'Lavender',
    summary: 'A fragrant herb that loves sun and dry, well-drained soil.',
    details: [
      ['Light', 'Full sun, 6 or more hours a day.'],
      ['Water', 'Let the soil dry well between waterings. Overwatering is the most common problem.'],
      ['Soil', 'Light, sandy or gritty, well-drained soil. Neutral to slightly alkaline suits it.'],
      ['Watch for', 'Root rot in wet soil, grey mould in humid weather, and leggy, woody stems.']
    ],
    tips: ['Good airflow helps prevent fungal problems.', 'Trim lightly after flowering, but avoid cutting into old bare wood.', 'In heavy rain, move the pot to a sheltered, bright spot.']
  },
  basil: {
    name: 'Basil (Ocimum basilicum)',
    summary: 'A quick-growing leafy herb that likes warmth, sun and regular water.',
    details: [
      ['Light', 'At least 6 hours of sun a day.'],
      ['Water', 'Keep soil moist but not soggy. Basil wilts quickly if it dries out completely.'],
      ['Soil', 'Rich, well-drained soil with compost.'],
      ['Watch for', 'Wilting from dry soil, yellow leaves from poor drainage, aphids, and spots or mould in humid weather.']
    ],
    tips: ['Pinch off the top shoots and flower buds so the plant grows bushy with more leaves.', 'Harvest often, taking a little from the top.', 'Water the soil rather than the leaves to reduce mould.']
  },
  aloe: {
    name: 'Aloe Vera',
    summary: 'A succulent that stores water in its thick leaves, so it needs little watering.',
    details: [
      ['Light', 'Bright light with some direct sun. Move it to strong sun gradually to avoid sunburn.'],
      ['Water', 'Water thoroughly, then let the soil dry completely before the next watering. Water even less in cool weather.'],
      ['Soil', 'Sandy, fast-draining soil such as a cactus mix, in a pot with drainage holes.'],
      ['Watch for', 'Soft, mushy leaves or a rotten base from too much water. Thin, curling leaves can mean too little water.']
    ],
    tips: ['Never leave the pot standing in water.', 'Use a pot only slightly larger than the plant.', 'Check the base of the leaves for cottony mealybugs.']
  },
  marigold: care('Marigold', 'A cheerful, easy flowering plant that loves sun.', 'Full sun, 6 or more hours a day.', 'Water moderately at the base and avoid wetting the flowers.', 'Well-drained, loose soil.', 'Aphids, spider mites, powdery mildew, and rotting seedlings in soggy soil.', ['Pinch the growing tips early for a bushier plant.', 'Remove faded flowers to get more blooms.', 'Leave space between plants for airflow.']),
  chrysanthemum: care('Chrysanthemum (Guldaudi)', 'A popular flowering plant that blooms as the days become shorter.', 'Sun for 5 to 6 hours a day.', 'Keep soil moist but not waterlogged.', 'Rich, well-drained soil with compost.', 'Aphids, leaf spots, powdery mildew, and wilting from root rot.', ['Pinch the tips in the early growing stage for more flowers.', 'Remove faded blooms.', 'Water the soil, not the leaves.']),
  zinnia: care('Zinnia', 'A bright, fast-growing flower that attracts butterflies and bees.', 'Full sun.', 'Water at the base. It tolerates short dry spells but not soggy soil.', 'Well-drained, fertile soil.', 'Powdery mildew in humid weather and aphids.', ['Sow seeds directly, since seedlings dislike root disturbance.', 'Remove faded flowers often.', 'Space plants well so air can move between them.']),
  sunflower: care('Sunflower', 'A tall, sun-loving plant with large flower heads.', 'Full sun, 6 to 8 hours a day. Young plants turn their heads towards the sun.', 'Water deeply but not often. Deep roots make it fairly drought tolerant once established.', 'Deep, well-drained soil.', 'Caterpillars, downy mildew, and tall stems falling in strong wind.', ['Sow seeds directly where they will grow.', 'Stake tall varieties.', 'Leave seed heads for birds once the flowers fade.']),
  petunia: care('Petunia', 'A colourful flowering plant that grows best in cooler weather.', 'Sun for 5 to 6 hours a day, with some shade in very hot weather.', 'Keep soil moist but not soggy. Pots dry out quickly.', 'Light, well-drained potting mix.', 'Leggy stems, aphids, and grey mould in cool, wet weather.', ['Pinch back long stems to keep it bushy.', 'Remove faded flowers.', 'Feed regularly during flowering.']),
  periwinkle: care('Periwinkle (Sadabahar)', 'A tough, almost always flowering plant that handles heat well.', 'Full sun to light shade.', 'Water lightly and let the soil dry a little between waterings.', 'Well-drained soil.', 'Root rot from overwatering and fungal leaf spots.', ['Very low maintenance.', 'Do not eat any part of this plant, because it is harmful if eaten.', 'Keep it away from small children and pets.']),
  ixora: care('Ixora', 'A shrub with clusters of small, bright flowers.', 'Sun for 4 to 6 hours a day.', 'Keep soil evenly moist but not soggy.', 'Slightly acidic, well-drained soil rich in organic matter.', 'Yellowing leaves in alkaline soil or iron shortage, and scale insects.', ['Mulch to keep the roots cool and moist.', 'Prune lightly after flowering.', 'Feed with compost in the growing season.']),
  gerbera: care('Gerbera', 'A daisy-like flower in many bright colours.', 'Bright light with morning sun and some shade in hot afternoons.', 'Water at the base and keep water off the crown, the centre where leaves meet.', 'Rich, well-drained soil.', 'Crown rot from wet soil, powdery mildew, and whiteflies.', ['Keep the crown slightly above the soil.', 'Remove old flower stalks and yellow leaves.', 'Make sure the pot drains well.']),
  canna: care('Canna Lily', 'A tall plant with large leaves and bright flowers that likes water.', 'Full sun.', 'Keep soil moist and water well in hot weather.', 'Rich, moist but well-drained soil.', 'Caterpillars that roll and eat leaves, and rust spots on leaves.', ['Cut back old flower stems.', 'Divide crowded clumps every few years.', 'Mulch to keep the soil moist.']),
  portulaca: care('Portulaca (Moss Rose)', 'A low, succulent-like plant that thrives in hot, dry spots.', 'Full sun. The flowers open in bright light and close in shade.', 'Water lightly and let the soil dry between waterings.', 'Sandy, well-drained soil.', 'Rot in wet soil and few flowers in shade.', ['Good for hot, sunny pots and borders.', 'Do not overwater.', 'It spreads easily from small cuttings.']),
  mint: care('Mint', 'A fragrant herb that spreads quickly and likes moisture.', 'Sun for at least 4 hours, with some shade in hot afternoons.', 'Keep soil moist.', 'Rich, well-drained soil.', 'Aggressive spreading, rust (orange spots), and aphids.', ['Grow it in its own pot so it does not take over.', 'Pinch the tips to make it bushy.', 'Replace old, woody plants with fresh cuttings.']),
  tulsi: care('Tulsi (Holy Basil)', 'A sacred, aromatic herb that grows well in warm weather.', 'Full sun, 5 to 6 or more hours a day.', 'Water regularly but let the top soil dry a little. Avoid soggy soil.', 'Well-drained soil with compost.', 'Aphids, mealybugs, caterpillars, and wilting from dry or waterlogged soil.', ['Pinch off flower spikes so it keeps making leaves.', 'Harvest from the tips.', 'Prune in the growing season to keep it bushy.']),
  coriander: care('Coriander (Dhania)', 'A quick herb that prefers cooler weather and runs to flower in heat.', 'Morning sun with some shade in hot weather.', 'Keep soil evenly moist.', 'Loose, well-drained soil. Sow seeds directly.', 'Early flowering in heat, aphids, and powdery mildew.', ['Sow every 2 to 3 weeks for a steady supply.', 'Harvest the outer leaves first.', 'It grows best in the cooler months.']),
  curryleaf: care('Curry Leaf (Kadi Patta)', 'A small tree whose leaves are used in cooking.', 'Full sun or bright light.', 'Water moderately and let the top soil dry slightly.', 'Well-drained soil. Poor drainage causes yellow leaves.', 'Yellowing leaves, scale insects, and leaf curl.', ['Pinch the tips to make it bushy.', 'Protect young plants from cold.', 'Pick leaves regularly to encourage new growth.']),
  lemongrass: care('Lemongrass', 'A tall, fragrant grass used in teas and cooking.', 'Full sun.', 'Water regularly during the growing season.', 'Rich, well-drained soil.', 'Yellow or brown leaf tips from dry soil, and rust spots.', ['Harvest the outer stalks near the base.', 'Divide big clumps to renew them.', 'Give it a large pot or a spot with space.']),
  chilli: care('Chilli', 'A sun-loving fruiting plant that likes warmth.', 'Full sun, 6 or more hours a day.', 'Keep soil moist but not waterlogged.', 'Rich, well-drained soil.', 'Leaf curl from mites, thrips or whiteflies, flowers dropping in extreme heat, and wilting.', ['Stake the plant when it gets heavy with fruit.', 'Mulch to hold moisture.', 'Wash your hands after handling chillies and avoid touching your eyes.']),
  brinjal: care('Brinjal (Eggplant)', 'A warm-season vegetable that needs sun and regular water.', 'Full sun.', 'Water regularly and evenly.', 'Rich, well-drained soil with compost.', 'Shoot and fruit borers, whiteflies, and wilting.', ['Stake the plant as fruits form.', 'Mulch to keep moisture steady.', 'Remove damaged shoots and fruits early.']),
  okra: care('Okra (Bhindi)', 'A warm-weather vegetable that grows fast in heat.', 'Full sun.', 'Water regularly. It tolerates heat but not waterlogging.', 'Well-drained, fertile soil.', 'Yellow vein mosaic virus spread by whiteflies, aphids, and jassids.', ['Sow in warm weather.', 'Pick pods while young and tender.', 'Remove badly affected plants to protect others.']),
  lemon: care('Lemon', 'A small citrus tree that fruits best in strong sun.', 'Full sun, 6 to 8 hours a day.', 'Water deeply, then let the top soil dry a little.', 'Well-drained, slightly acidic soil.', 'Citrus leaf miner (silvery trails on young leaves), yellow leaves, and scale insects.', ['Feed regularly in the growing season.', 'Prune crowded branches for airflow.', 'Be careful of thorns when handling.']),
  spinach: care('Spinach (Palak)', 'A leafy vegetable that grows best in the cool season.', 'Sun to light shade.', 'Keep soil moist.', 'Rich, loose, well-drained soil.', 'Early flowering in heat, aphids, leaf miners, and downy mildew.', ['Sow in the cooler months.', 'Harvest the outer leaves and let the centre keep growing.', 'Sow a few seeds every couple of weeks.']),
  snakeplant: care('Snake Plant', 'A very hardy plant with upright, sword-shaped leaves.', 'Tolerates low light but grows best in bright, indirect light.', 'Water sparingly and let the soil dry completely between waterings.', 'Fast-draining soil in a pot with drainage holes.', 'Soft, mushy leaf bases from too much water, and mealybugs.', ['Water even less in winter.', 'It is mildly harmful if chewed, so keep it away from pets and small children.', 'Wipe the leaves occasionally.']),
  spiderplant: care('Spider Plant', 'An easy hanging plant that grows baby plantlets.', 'Bright, indirect light.', 'Water when the top soil feels dry.', 'Well-drained potting mix.', 'Brown leaf tips from dry air or irregular watering, and pale leaves in low light.', ['Baby plantlets can be rooted in soil or water.', 'Trim brown tips.', 'Avoid harsh direct sun.']),
  fern: care('Boston Fern', 'A leafy fern that likes humid air and gentle light.', 'Bright, filtered light. Avoid strong direct sun.', 'Keep soil evenly moist but not soggy.', 'Rich, well-drained soil with plenty of organic matter.', 'Browning fronds from dry air or dry soil, and scale insects.', ['Keep it away from hot, dry air.', 'Trim brown fronds.', 'Group plants together to raise humidity.']),
  jade: care('Jade Plant', 'A succulent with thick, glossy leaves that stores water.', 'Bright light with some direct sun.', 'Water deeply, then let the soil dry completely before watering again.', 'Gritty, fast-draining soil in a pot with drainage holes.', 'Wrinkled leaves from too little water, and soft leaves or leaf drop from too much.', ['Use a heavy pot because the plant can get top-heavy.', 'Keep it away from pets and children, because it is harmful if eaten.', 'Check for mealybugs in leaf joints.']),
  peacelily: care('Peace Lily', 'A shade-tolerant plant with white flower-like bracts.', 'Low to medium indirect light. Too little light means fewer flowers.', 'Keep soil slightly moist. It droops when thirsty and recovers after watering.', 'Well-drained potting mix.', 'Brown tips from dry air or fertiliser buildup, and yellow leaves from overwatering.', ['Wipe the leaves to remove dust.', 'The white part is a modified leaf called a bract.', 'Keep it away from pets and small children, because chewing it can cause irritation.']),
  other: {
    name: 'Other / Unknown plant',
    summary: 'When you are unsure of the plant, use these general habits and look up its name.',
    details: [
      ['Light', 'Check whether the plant likes sun or shade. Watch where leaves look healthiest.'],
      ['Water', 'Push a finger about 2 to 3 cm into the soil. Water only if it feels dry.'],
      ['Soil', 'Most plants need soil that drains well.'],
      ['Watch for', 'Changes in leaf colour, spots, drooping or new pests.']
    ],
    tips: ['Identify the plant through a nursery or a plant-ID book.', 'Change only one thing at a time so you can see what helps.', 'Use the Plant Health Scanner if leaves look unusual.']
  }
};


const WATER_BASE = {
  tomato: [2, 3], rose: [3, 4], money: [5, 7], mango: [4, 6], bougainvillea: [4, 6], jasmine: [2, 3], hibiscus: [2, 3],
  areca: [4, 6], lavender: [5, 8], basil: [2, 3], aloe: [7, 14],
  marigold: [2, 3], chrysanthemum: [2, 3], zinnia: [2, 4], sunflower: [3, 5], petunia: [2, 3], periwinkle: [4, 6],
  ixora: [2, 4], gerbera: [2, 3], canna: [2, 3], portulaca: [4, 6], mint: [2, 3], tulsi: [2, 3], coriander: [2, 3],
  curryleaf: [3, 5], lemongrass: [2, 3], chilli: [2, 3], brinjal: [2, 3], okra: [2, 3], lemon: [3, 5], spinach: [2, 3],
  snakeplant: [10, 14], spiderplant: [4, 6], fern: [2, 3], jade: [7, 12], peacelily: [4, 6], other: [4, 6]
};
const SEASON_FACTOR = { summer: 0.75, monsoon: 1.3, winter: 1.4 };
const SEASON_NOTE = {
  summer: 'Hot, dry weather dries the soil faster. Water in the early morning or evening.',
  monsoon: 'Rain may supply much of the water outdoors. Skip watering if the soil is still damp, and make sure pots can drain.',
  winter: 'Growth slows and soil stays damp for longer, so water less often.'
};
const POT_FACTOR = { small: 0.8, medium: 1, large: 1.25 };
const POT_NOTE = {
  small: 'Small pots hold little soil and dry out quickly.',
  medium: 'A medium pot dries at a moderate pace.',
  large: 'Large pots hold moisture longer, so check deeper in the soil.'
};

const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
const MAX_FILE_BYTES = 10 * 1024 * 1024; // 10 MB


const $ = (id) => document.getElementById(id);
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;


function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function clearNode(node) {
  while (node.firstChild) node.removeChild(node.firstChild);
}


function announce(message) {
  const live = $('liveRegion');
  live.textContent = '';
  setTimeout(() => { live.textContent = message; }, 50);
}

function scrollToNode(node) {
  node.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
}

function showMessage(node, text) {
  node.textContent = text;
  node.hidden = false;
}

function hideMessage(node) {
  node.textContent = '';
  node.hidden = true;
}

/*  IMAGE HANDLING */

let currentImageUrl = null;   
let currentFileName = '';

function validateFile(file) {
  if (!ALLOWED_TYPES.includes(file.type)) {
    return 'That file is not supported. Please choose a JPG, PNG or WEBP image.';
  }
  if (file.size > MAX_FILE_BYTES) {
    return 'That image is larger than 10 MB. Please choose a smaller photo.';
  }
  return '';
}

function handleFile(file) {
  const problem = validateFile(file);
  if (problem) {
    showMessage($('fileError'), problem);
    announce(problem);
    return; 
  }
  hideMessage($('fileError'));
  if (currentImageUrl) URL.revokeObjectURL(currentImageUrl);
  currentImageUrl = URL.createObjectURL(file); 
  currentFileName = file.name;

  $('previewImg').src = currentImageUrl;
  $('fileName').textContent = file.name;    
  $('fileName').title = file.name;
  $('emptyState').hidden = true;
  $('previewWrap').hidden = false;
  $('fileMeta').hidden = false;
  $('dropzone').classList.add('has-image');
  announce('Image added: ' + file.name);
}

function removeImage() {
  if (currentImageUrl) URL.revokeObjectURL(currentImageUrl);
  currentImageUrl = null;
  currentFileName = '';
  $('fileInput').value = '';                 
  $('previewImg').removeAttribute('src');
  $('emptyState').hidden = false;
  $('previewWrap').hidden = true;
  $('fileMeta').hidden = true;
  $('dropzone').classList.remove('has-image');
  hideMessage($('fileError'));
  announce('Image removed.');
}

function setupImageControls() {
  const input = $('fileInput');
  const zone = $('dropzone');

  input.addEventListener('change', () => {
    if (input.files && input.files[0]) handleFile(input.files[0]);
  });

  
  $('chooseLabel').addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); input.click(); }
  });
  $('replaceBtn').addEventListener('click', () => input.click());
  $('removeBtn').addEventListener('click', removeImage);

  
  zone.addEventListener('click', (e) => {
    if (!$('previewWrap').hidden || e.target.closest('label')) return;
    input.click();
  });

  
  ['dragenter', 'dragover'].forEach((type) => zone.addEventListener(type, (e) => {
    e.preventDefault();
    zone.classList.add('is-drag');
  }));
  ['dragleave', 'drop'].forEach((type) => zone.addEventListener(type, (e) => {
    e.preventDefault();
    zone.classList.remove('is-drag');
  }));
  zone.addEventListener('drop', (e) => {
    const files = e.dataTransfer && e.dataTransfer.files;
    if (files && files.length) handleFile(files[0]);
  });

 
  ['dragover', 'drop'].forEach((type) => window.addEventListener(type, (e) => {
    if (!zone.contains(e.target)) e.preventDefault();
  }));
}

/*  ASSESSMENT  */

function getSelectedSymptoms() {
  return Array.from(document.querySelectorAll('input[name="symptom"]:checked'))
    .map((box) => box.value)
    .filter((key) => Object.prototype.hasOwnProperty.call(SYMPTOMS, key));
}


function buildAssessment(selected) {
  const causes = selected.map((key) => ({ label: SYMPTOMS[key].label, text: SYMPTOMS[key].cause }));

 
  const steps = [];
  selected.forEach((key) => {
    SYMPTOMS[key].steps.forEach((step) => { if (!steps.includes(step)) steps.push(step); });
  });

  const notes = COMBINATIONS
    .filter((rule) => rule.needs.every((need) => selected.includes(need)))
    .map((rule) => rule.text);

  return { causes, steps, notes };
}

function renderResult(selected, plant, sampleName) {
  const { causes, steps, notes } = buildAssessment(selected);

  $('resultBadge').textContent = sampleName ? 'Demonstration case · Preliminary observation' : 'Preliminary observation';
  $('resultTitle').textContent = selected.length === 1
    ? 'Assessment: ' + SYMPTOMS[selected[0]].label
    : 'Combined assessment: ' + selected.length + ' observations';

  const metaParts = [];
  if (sampleName) metaParts.push('Sample: ' + sampleName);
  if (plant) metaParts.push('Plant: ' + plant);
  if (currentFileName && !sampleName) metaParts.push('Photo kept for reference only');
  $('resultMeta').textContent = metaParts.join(' · ');

 
  if (currentImageUrl && !sampleName) {
    $('resultImg').src = currentImageUrl;
    $('resultThumb').hidden = false;
  } else {
    $('resultImg').removeAttribute('src');
    $('resultThumb').hidden = true;
  }

 
  const chips = $('resultSymptoms');
  clearNode(chips);
  selected.forEach((key) => chips.appendChild(el('span', 'chip-out', SYMPTOMS[key].label)));

  
  const causeBox = $('resultCauses');
  clearNode(causeBox);
  causes.forEach((c) => {
    const item = el('div', 'cause');
    item.appendChild(el('h5', '', c.label));
    item.appendChild(el('p', '', c.text));
    causeBox.appendChild(item);
  });

  
  const list = $('resultSteps');
  clearNode(list);
  steps.forEach((s) => list.appendChild(el('li', '', s)));


  const combined = $('resultCombined');
  if (notes.length) {
    combined.textContent = 'Putting it together: ' + notes.join(' ');
    combined.hidden = false;
  } else if (selected.length > 1) {
    combined.textContent = 'Putting it together: these symptoms can share causes such as water balance, light, nutrients or pests. Compare them and look for a pattern.';
    combined.hidden = false;
  } else {
    hideMessage(combined);
  }

  const card = $('resultCard');
  card.hidden = false;
  scrollToNode(card);
  card.focus({ preventScroll: true });
  announce('Assessment ready: ' + selected.length + (selected.length === 1 ? ' symptom' : ' symptoms') + ' considered.');
}

function handleAssess(event) {
  event.preventDefault();
  const selected = getSelectedSymptoms();
  if (selected.length === 0) {
    const msg = 'Please select at least one symptom you can see on the plant.';
    showMessage($('formMessage'), msg);
    announce(msg);
    const first = document.querySelector('input[name="symptom"]');
    if (first) first.focus();
    return;
  }
  hideMessage($('formMessage'));
  renderResult(selected, $('plantType').value, '');
}


function clearAssessment() {
  document.querySelectorAll('input[name="symptom"]').forEach((box) => { box.checked = false; });
  $('plantType').value = '';
  hideMessage($('formMessage'));
  $('resultCard').hidden = true;
  announce('Assessment cleared.');
}

function tryAnother() {
  clearAssessment();
  scrollToNode($('plant-health'));
  const first = document.querySelector('input[name="symptom"]');
  if (first) first.focus({ preventScroll: true });
}

/*  SAMPLE CASES  */

function loadSample(key) {
  const sample = SAMPLES[key];
  if (!sample) return;
  document.querySelectorAll('input[name="symptom"]').forEach((box) => {
    box.checked = sample.symptoms.includes(box.value);
  });
  $('plantType').value = sample.plant;
  hideMessage($('formMessage'));
  renderResult(sample.symptoms, sample.plant, sample.name);
}

/*PHOTOSYNTHESIS */

function getRadio(name) {
  const checked = document.querySelector('input[name="' + name + '"]:checked');
  return checked ? checked.value : '';
}

function updateExplorer() {
  const light = getRadio('light');
  const water = getRadio('water');
  const co2 = getRadio('co2');

  
  const limits = [];
  if (light === 'low') limits.push('light');
  if (water === 'low') limits.push('water');
  if (co2 === 'low') limits.push('co2');

  let level, label, text;
  if (limits.length === 0 && light === 'high') {
    level = 4; label = 'Highly favourable conditions';
    text = 'Strong light, enough water and enough carbon dioxide give photosynthesis everything it needs. Other factors such as temperature and nutrients can still matter.';
  } else if (limits.length === 0) {
    level = 3; label = 'Favourable conditions';
    text = 'Water and carbon dioxide are adequate and light is moderate. More light might help, as long as other factors are also supplied.';
  } else if (limits.length === 1) {
    level = 2; label = 'Limited by one factor';
    text = 'One shortage can slow the whole process, even if the other inputs are plentiful.';
  } else if (limits.length === 2) {
    level = 1; label = 'Limited by two factors';
    text = 'Two inputs are scarce, so photosynthesis is likely to be strongly restricted.';
  } else {
    level = 0; label = 'Severely limited conditions';
    text = 'Light, water and carbon dioxide are all low, so very little glucose can be made.';
  }

  $('expMeter').dataset.level = String(level);
  $('expMeter').setAttribute('aria-label', 'Conditions indicator: ' + label);
  $('expLabel').textContent = label;
  $('expText').textContent = text;
  $('expLimit').textContent = limits.length
    ? limits.map((k) => LIMIT_TEXT[k]).join(' ')
    : 'No factor is low in this setting.';
}

/* PLANT CARE GUIDE WATERING PLANNER*/

const PLANT_GROUPS = [
  ['Flowering plants', ['rose', 'bougainvillea', 'jasmine', 'hibiscus', 'lavender', 'marigold', 'chrysanthemum', 'zinnia', 'sunflower', 'petunia', 'periwinkle', 'ixora', 'gerbera', 'canna', 'portulaca']],
  ['Herbs', ['basil', 'tulsi', 'mint', 'coriander', 'curryleaf', 'lemongrass']],
  ['Vegetables and fruit', ['tomato', 'chilli', 'brinjal', 'okra', 'spinach', 'lemon', 'mango']],
  ['Foliage and succulents', ['money', 'areca', 'aloe', 'snakeplant', 'spiderplant', 'fern', 'jade', 'peacelily']],
  ['Not listed', ['other']]
];

function fillPlantSelect(select) {
  PLANT_GROUPS.forEach(([label, keys]) => {
    const group = document.createElement('optgroup');
    group.label = label;
    keys.forEach((key) => {
      const option = document.createElement('option');
      option.value = key;
      option.textContent = PLANT_CARE[key].name;
      group.appendChild(option);
    });
    select.appendChild(group);
  });
  select.value = 'tomato';
}

function renderCareGuide(key) {
  const plant = PLANT_CARE[key];
  if (!plant) return;
  $('careName').textContent = plant.name;
  $('careSummary').textContent = plant.summary;

  const box = $('careDetails');
  clearNode(box);
  plant.details.forEach(([title, text]) => {
    const item = el('div', 'cause');
    item.appendChild(el('h5', '', title));
    item.appendChild(el('p', '', text));
    box.appendChild(item);
  });

  const tips = $('careTips');
  clearNode(tips);
  plant.tips.forEach((tip) => tips.appendChild(el('li', '', tip)));
}


function planWatering(event) {
  event.preventDefault();
  const plant = $('planPlant').value;
  const season = $('planSeason').value;
  const pot = $('planPot').value;
  if (!WATER_BASE[plant] || !SEASON_FACTOR[season] || !POT_FACTOR[pot]) return;

  const factor = SEASON_FACTOR[season] * POT_FACTOR[pot];
  const low = Math.max(1, Math.round(WATER_BASE[plant][0] * factor));
  const high = Math.max(low, Math.round(WATER_BASE[plant][1] * factor));

  $('planFreq').textContent = low === high
    ? 'About every ' + low + (low === 1 ? ' day' : ' days')
    : 'About every ' + low + '–' + high + ' days';
  $('planText').textContent = SEASON_NOTE[season] + ' ' + POT_NOTE[pot];

  const steps = $('planSteps');
  clearNode(steps);
  [
    'Push a finger 2 to 3 cm into the soil. If it is still damp, wait.',
    'When you water, do it slowly until a little drains from the bottom, then empty the saucer.',
    'Adjust the routine if the leaves droop, yellow or the soil stays wet.'
  ].forEach((s) => steps.appendChild(el('li', '', s)));

  $('planEmpty').hidden = true;
  $('planResult').hidden = false;
  announce('Watering guideline ready for ' + PLANT_CARE[plant].name + '.');
}

function setupCare() {
  const guide = $('guidePlant');
  fillPlantSelect(guide);
  guide.addEventListener('change', () => renderCareGuide(guide.value));
  renderCareGuide(guide.value);
  fillPlantSelect($('planPlant'));
  $('planForm').addEventListener('submit', planWatering);
}

/*  NAVIGATION */

function setupNavigation() {
  const toggle = $('navToggle');
  const links = $('navLinks');

  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  links.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
    links.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && links.classList.contains('is-open')) {
      links.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }
  });
}

function init() {
  setupNavigation();
  setupImageControls();

  $('scanForm').addEventListener('submit', handleAssess);
  $('clearFormBtn').addEventListener('click', clearAssessment);
  $('clearBtn').addEventListener('click', clearAssessment);
  $('anotherBtn').addEventListener('click', tryAnother);

  // Hide the "select a symptom" warning once the user picks one.
  document.querySelectorAll('input[name="symptom"]').forEach((box) => {
    box.addEventListener('change', () => {
      if (getSelectedSymptoms().length) hideMessage($('formMessage'));
    });
  });

  document.querySelectorAll('[data-sample]').forEach((btn) => {
    btn.addEventListener('click', () => loadSample(btn.dataset.sample));
  });

  document.querySelectorAll('.seg input').forEach((radio) => {
    radio.addEventListener('change', updateExplorer);
  });
  updateExplorer();
  setupCare();
}

document.addEventListener('DOMContentLoaded', init);