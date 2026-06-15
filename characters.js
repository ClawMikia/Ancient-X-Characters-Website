/* characters.js — Complete character gallery system */

const CM_TO_INCH = 0.393701;

function cmToFtIn(cm) {
  const totalInches = Math.round(cm * CM_TO_INCH);
  const ft = Math.floor(totalInches / 12);
  const inch = totalInches % 12;
  return { cm, ft, inch: totalInches };
}

function fmtHeight(cm) {
  const h = cmToFtIn(cm);
  return `${h.cm} cm (${h.ft}'${h.inch}")`;
}

function parseYear(dob) {
  const m = dob.match(/\d{3,4}/);
  return m ? parseInt(m[0], 10) : 9999;
}

const characters = [
  {
    name: 'Alice',
    folder: 'fighters',
    img: 'assets/Characters/Ancient X Fighters/Alice/Alice.png',
    dob: 'January 15, 892',
    height: 192,
    gender: 'Female',
    race: 'Crimson Blade Dancer',
    personality: 'Fierce · Graceful · Unyielding',
    rank: 'Blade-Master',
    storyTitle: 'The Crimson Waltz',
    story: '<p>Alice was born into a lineage of blade-dancers whose artistry was as lethal as it was beautiful. Trained from childhood in the Crimson Waltz — a fighting style that doubles as a ceremonial dance — she earns her place among the Ancient X Fighters through unmatched precision and fiery spirit.</p><p>Her movements on the battlefield are said to resemble a dance, each strike flowing into the next with devastating grace. Those who have faced her speak of a whirlwind of steel and flame that leaves nothing but silence in its wake.</p>'
  },
  {
    name: 'Garrett',
    folder: 'fighters',
    img: 'assets/Characters/Ancient X Fighters/Garrett/Garrett.png',
    dob: 'March 12, 1503',
    height: 198,
    gender: 'Male',
    race: 'Shadowstalker',
    personality: 'Silent · Deadly · Calculating',
    rank: 'Shadowlord',
    storyTitle: 'Whispers in the Dark',
    story: '<p>Garrett moves through shadows as though they were his native element. A master of stealth and silence, he has eliminated more targets than any other Ancient X Fighter without ever being seen. His origins are shrouded in mystery, known only by the crescent blade he carries.</p><p>He speaks little, acts decisively, and never leaves witnesses. Those who hire him say his fee is always exact, his contract always fulfilled, and his presence felt only after it is too late.</p>'
  },
  {
    name: 'Markoredor',
    folder: 'fighters',
    img: 'assets/Characters/Ancient X Fighters/Markoredor/Markoredor.png',
    dob: 'May 5, 1632',
    height: 205,
    gender: 'Male',
    race: 'Dwarven Ironlord',
    personality: 'Stubborn · Mighty · Unbreakable',
    rank: 'Ironlord',
    storyTitle: 'The Unbreakable',
    story: '<p>Markoredor is a mountain of a warrior, both in stature and in spirit. Forged in the deepest forges of the Iron Peaks, his body is as hard as the metal he wields. He carries a warhammer said to weigh more than any mortal could lift — yet he swings it with frightening ease.</p><p>His loyalty is absolute, his temper legendary, and his sense of humor drier than the deserts of the southern wastes. Those who know him trust him with their lives; those who oppose him fear him with good reason.</p>'
  },
  {
    name: 'Maryonna',
    folder: 'fighters',
    img: 'assets/Characters/Ancient X Fighters/Maryonna/Maryonna.png',
    dob: 'October 22, 1789',
    height: 190,
    gender: 'Female',
    race: 'Tidal Sorceress',
    personality: 'Mysterious · Powerful · Compassionate',
    rank: 'Tide-Weaver',
    storyTitle: "The Ocean's Voice",
    story: '<p>Maryonna draws her power from the depths of the ocean, commanding tides and currents with a mere thought. She appears serene, but beneath her calm exterior lies a power capable of reshaping coastlines and summoning tsunamis.</p><p>She serves as both protector and judge for coastal settlements, her decisions final and her mercy earned. Her connection to the sea gives her insight into the future through the patterns of waves and tides.</p>'
  },
  {
    name: 'Milffy',
    folder: 'fighters',
    img: 'assets/Characters/Ancient X Fighters/Milffy/Milffy.png',
    dob: 'April 9, 1654',
    height: 193,
    gender: 'Female',
    race: 'Floral Valkyrie',
    personality: 'Gentle · Deadly · Resilient',
    rank: 'Bloom-Knight',
    storyTitle: 'The Thorn and the Petal',
    story: '<p>Milffy draws her strength from the forest, her armor grown from living bark and her weapons crafted from thorn and petal. She embodies the paradox of nature — capable of nurturing life and ending it with equal elegance.</p><p>Her connection to the natural world allows her to communicate with animals, accelerate plant growth into defensive barriers, and call upon the full fury of a storm through ancient woodland rituals.</p>'
  },
  {
    name: 'Mou',
    folder: 'fighters',
    img: 'assets/Characters/Ancient X Fighters/Mou/Mou.png',
    dob: 'August 14, 1401',
    height: 194,
    gender: 'Male',
    race: 'Ember Monk',
    personality: 'Peaceful · Intense · Disciplined',
    rank: 'Flame-Monk',
    storyTitle: 'The Inner Fire',
    story: '<p>Mou spent decades in meditation atop Mount Cinder, mastering the art of channeling inner fire into physical power. His combat style is fluid and meditative — each movement deliberate, each strike carrying the weight of focused intention.</p><p>He rarely speaks of his past, preferring to let his actions define him. Those who witness his fighting describe it as watching a ritual unfold — precise, beautiful, and utterly devastating.</p>'
  },
  {
    name: 'Muffyangelia',
    folder: 'fighters',
    img: 'assets/Characters/Ancient X Fighters/Muffyangelia/Muffyangelia.png',
    dob: 'February 3, 1205',
    height: 191,
    gender: 'Female',
    race: 'Celestial Valkyrie',
    personality: 'Radiant · Just · Fierce',
    rank: 'Halo-Captain',
    storyTitle: 'The Light-Bearer',
    story: '<p>Muffyangelia descends from a lineage of celestial warriors tasked with defending the mortal realm from extra-dimensional threats. Her wings — luminous and vast — are both her greatest asset and her heaviest burden.</p><p>She fights with the conviction of someone who has seen both heaven and hell and chosen to stand between them. Her light can purify corruption, shield allies, and incinerate the unworthy with equal measure.</p>'
  },
  {
    name: 'Lloyd',
    folder: 'fighters',
    img: 'assets/Characters/Ancient X Fighters/Lloyd/LLoyd.png',
    dob: 'November 19, 1847',
    height: 195,
    gender: 'Male',
    race: 'Windblade Ronin',
    personality: 'Honorable · Stoic · Swift',
    rank: 'Ronin-Blade',
    storyTitle: 'The Passing Wind',
    story: '<p>Lloyd wanders the lands as a ronin, his blade as fast as the wind he commands. He follows a strict code of honor despite having no master to serve, believing that true strength lies in protecting the vulnerable rather than pursuing power.</p><p>His sword technique, known as the Gale Cutter, allows him to strike multiple opponents in the time it takes most warriors to take one step. He appears where needed, aids without question, and vanishes without a trace.</p>'
  },
  {
    name: 'Leonard & Flannery',
    folder: 'fighters',
    img: 'assets/Characters/Ancient X Fighters/Leonard/Leonard & Flanneryromania.png',
    dob: 'March 22, 1678',
    height: 188,
    gender: 'Male & Female',
    race: 'Twin Blade Dancer',
    personality: 'Synced · Dynamic · Unstoppable',
    rank: 'Dual-Master',
    storyTitle: 'The Twin Dance',
    story: '<p>Leonard and Flannery fight as one, their movements perfectly synchronized in an ancient twin-blade technique passed down through their bloodline. Though they are two souls, they move as a single entity — each strike doubled, each defense mirrored, each victory achieved through perfect harmony.</p><p>Their dance of blades is said to create whirlwinds of steel, leaving opponents bewildered by the seamless coordination that renders them untouchable in combat.</p>'
  },
  {
    name: 'Vladimir',
    folder: 'fighters',
    img: 'assets/Characters/Ancient X Fighters/Vladimir/Vladimir.png',
    dob: 'October 31, 1408',
    height: 204,
    gender: 'Male',
    race: 'Vampire Warlord',
    personality: 'Authoritative · Cunning · Noble',
    rank: 'Blood-Warlord',
    storyTitle: 'The Eternal Sovereign',
    story: '<p>Vladimir has ruled his domain for centuries, his authority unquestioned and his power absolute. A vampire of noble bearing, he commands respect through a combination of ancient bloodline, terrifying strength, and genuine care for those under his protection.</p><p>He does not hunt mortals for sport. He sees his immortality as a responsibility — a sentinel who watches over the boundary between the living and the dead, ensuring neither side oversteps.</p>'
  },
  {
    name: 'Armourgeddon',
    folder: 'megahforce',
    img: 'assets/Characters/Villains/Megahforce of Destruction/Armourgeddon/Armourgeddon.png',
    dob: 'June 6, 999',
    height: 210,
    gender: 'Male',
    race: 'Armored Apocalypse',
    personality: 'Unstoppable · Ruthless · Devastating',
    rank: 'Apocalypse-Class',
    storyTitle: 'The Walking Cataclysm',
    story: '<p>Armourgeddon is less a being than a force of nature given form. Once a mortal warrior who sought forbidden armor to end a devastating war, the armor consumed him — fused his body, mind, and soul into a single unstoppable weapon. Now he brings ruin wherever he walks.</p><p>His armor can withstand dragon fire, godly lightning, and the crushing depths of the abyss. There is no known material that can breach it, and no known force capable of stopping him.</p>'
  },
  {
    name: 'Cyrobranxonn',
    folder: 'megahforce',
    img: 'assets/Characters/Villains/Megahforce of Destruction/Cyrobranxonn/Cyrobranxonn.png',
    dob: 'December 15, 777',
    height: 208,
    gender: 'Male',
    race: 'Frost Tyrant',
    personality: 'Cold · Calculating · Merciless',
    rank: 'Frost-Lord',
    storyTitle: 'Heart of Absolute Zero',
    story: '<p>Cyrobranxonn draws power from the coldest reaches of existence — temperatures so low that time itself slows. His body radiates such intense cold that the very air around him freezes, creating instant ice sculptures from anything that gets too close.</p><p>He conquered the northern wastelands in a single season, turning entire armies into frozen statues that still stand as a warning.</p>'
  },
  {
    name: 'Furrokaizyon',
    folder: 'megahforce',
    img: 'assets/Characters/Villains/Megahforce of Destruction/Furrokaizyon/Furrokaizyon.png',
    dob: 'September 9, 1205',
    height: 197,
    gender: 'Male',
    race: 'Feral Beast-King',
    personality: 'Savage · Territorial · Proud',
    rank: 'Beast-Lord',
    storyTitle: 'The Untamed Roar',
    story: '<p>Furrokaizyon commands legions of mutated beasts, creatures twisted by dark alchemy into instruments of destruction. He himself stands partially transformed — part man, part apex predator — with claws that rend steel and a roar that shatters stone.</p><p>He sees civilization as a disease and the wild as the only true order.</p>'
  },
  {
    name: 'Gayiuveron',
    folder: 'megahforce',
    img: 'assets/Characters/Villains/Megahforce of Destruction/Gayiuveron/Gayiuveron.png',
    dob: 'February 21, 1340',
    height: 203,
    gender: 'Male',
    race: 'Voidreaver',
    personality: 'Eerie · Patient · Devouring',
    rank: 'Void-Eater',
    storyTitle: 'The Hunger Between Stars',
    story: '<p>Gayiuveron feeds on existence itself — consuming matter, energy, and even the abstract concepts of time and space. Where he walks, reality frays and dimensions collapse. He is a living paradox: present yet absent, powerful yet formless.</p><p>Ancient texts describe him as "the eater of endings."</p>'
  },
  {
    name: 'Ghardoviozhoir',
    folder: 'megahforce',
    img: 'assets/Characters/Villains/Megahforce of Destruction/Ghardoviozhoir/Ghardoviozhoir.png',
    dob: 'April 3, 876',
    height: 199,
    gender: 'Male',
    race: 'Arcane Leviathan',
    personality: 'Arrogant · Brilliant · Unfathomable',
    rank: 'Arcane-Titan',
    storyTitle: 'The Spell That Broke the Sky',
    story: '<p>Ghardoviozhoir was once the greatest archmage of a lost civilization, so powerful that his experiments in reality-bending magic accidentally fractured the sky itself. The resulting cataclysm destroyed his civilization and transformed him into something beyond mortal comprehension.</p><p>His mastery of arcane forces is unmatched.</p>'
  },
  {
    name: 'Grammandeth',
    folder: 'megahforce',
    img: 'assets/Characters/Villains/Megahforce of Destruction/Grammandeth/Grammandeth.png',
    dob: 'November 18, 644',
    height: 196,
    gender: 'Male',
    race: 'Undead Necrolord',
    personality: 'Clinical · Eloquent · Unfeeling',
    rank: 'Grand-Necromancer',
    storyTitle: 'The Orchestrator of Death',
    story: '<p>Grammandeth does not raise the dead mindlessly. He does so with surgical precision, having spent centuries perfecting necromantic arts that preserve the intelligence and loyalty of his subjects. His armies are not hordes — they are legions of disciplined, thinking warriors.</p><p>He approaches death as an art form.</p>'
  },
  {
    name: 'Keviophoena',
    folder: 'megahforce',
    img: 'assets/Characters/Villains/Megahforce of Destruction/Keviophoena/Keviophoena.png',
    dob: 'May 7, 1501',
    height: 190,
    gender: 'Female',
    race: 'Serpentine Harbinger',
    personality: 'Seductive · Treacherous · Venomous',
    rank: 'Serpent-Queen',
    storyTitle: 'The Venomous Crown',
    story: '<p>Keviophoena rules through a combination of seductive charm and paralytic venom. Her serpentine lower half grants her extraordinary strength and speed, while her upper body retains a deceptive beauty that lulls targets into lowering their guard — one fatal mistake.</p><p>She has toppled kingdoms by infiltrating royal courts, her poison undetectable by any known antidote.</p>'
  },
  {
    name: 'Phoenomoux',
    folder: 'megahforce',
    img: 'assets/Characters/Villains/Megahforce of Destruction/Phoenomoux/Phoenomoux.png',
    dob: 'January 1, 1',
    height: 200,
    gender: 'Male',
    race: 'Phoenix Overlord',
    personality: 'Feared · Eternal · Burning',
    rank: 'Eternal-Flame',
    storyTitle: 'The Undying Flame',
    story: '<p>Phoenomoux is reborn with every death, each resurrection making him stronger and more dangerous. His flames do not merely burn — they consume the very concept of heat from surrounding matter, creating absolute cold in their aftermath.</p><p>He has been defeated countless times, each defeat temporary and each return more devastating than the last.</p>'
  },
  {
    name: 'Remonnogamo',
    folder: 'megahforce',
    img: 'assets/Characters/Villains/Megahforce of Destruction/Remonnogamo/Remonnogamo.png',
    dob: 'August 14, 1102',
    height: 207,
    gender: 'Male',
    race: 'Shadow Behemoth',
    personality: 'Enormous · Patient · Crushing',
    rank: 'Shadow-Titan',
    storyTitle: 'The Colossus of Night',
    story: '<p>Remonnogamo towers over battlefields like a living mountain, his shadow long enough to blot out the sun. For a creature of such immense size, his movements are surprisingly swift, and his intelligence — contrary to appearances — is deeply strategic.</p><p>He views warfare as geometry and conquest as engineering.</p>'
  },
  {
    name: 'Terzhakkion',
    folder: 'megahforce',
    img: 'assets/Characters/Villains/Megahforce of Destruction/Terzhakkion/Terzhakkion.png',
    dob: 'September 9, 500',
    height: 215,
    gender: 'Male',
    race: 'Abyssal Devourer',
    personality: 'Insatiable · Eldritch · Unfathomable',
    rank: 'Abyss-Lord',
    storyTitle: 'The Hunger from Beyond',
    story: '<p>Terzhakkion emerged from the deepest abyss, a being so ancient that even the oldest records refer to him as "the one who was before." His form is constantly shifting, never fixed, as though reality itself cannot decide how to render him.</p><p>His hunger is infinite. He has consumed planets, star systems, and entire dimensions.</p>'
  },
  {
    name: 'Astermm',
    folder: 'powerful',
    img: 'assets/Characters/Villains/The Powerful Force of Destruction/Astermm the Villanous Roar/Astermm.png',
    dob: 'March 3, 1333',
    height: 202,
    gender: 'Male',
    race: 'Villainous Stormsinger',
    personality: 'Loud · Dominating · Electrifying',
    rank: 'Storm-Warlord',
    storyTitle: 'Villanous Roar',
    story: '<p>Astermm commands storms with nothing but his voice. His roar can summon lightning, his whispers can growl thunder, and his silence is the most terrifying sound of all. He stands as a pillar of destruction whose presence alone is enough to rout entire armies.</p><p>He believes true power lies in being heard — not just physically, but metaphysically.</p>'
  },
  {
    name: 'Melachon',
    folder: 'powerful',
    img: 'assets/Characters/Villains/The Powerful Force of Destruction/Melachon the Apocalyptic Grimreapper/Melachon.png',
    dob: 'December 21, 1',
    height: 212,
    gender: 'Male',
    race: 'Apocalyptic Grimreaper',
    personality: 'Inevitable · Silent · Final',
    rank: 'Apocalypse-Weaver',
    storyTitle: 'The Final Reaping',
    story: '<p>Melachon is not Death itself — he is something far worse. He is the announcement of apocalypse, the entity that heralds the end of all things. When he appears, civilizations fall not because he kills them, but because hope simply leaves.</p><p>His scythe does not cut flesh — it cuts fate itself, severing the threads that bind mortals to their destinies.</p>'
  },
  {
    name: 'Mortex',
    folder: 'powerful',
    img: 'assets/Characters/Villains/The Powerful Force of Destruction/Mortex the Golden Pride/Mortex.png',
    dob: 'August 14, 1600',
    height: 198,
    gender: 'Male',
    race: 'Golden Tyrant',
    personality: 'Proud · Magnificent · Cruel',
    rank: 'Golden-Emperor',
    storyTitle: 'The Gilded Tyranny',
    story: '<p>Mortex rules with a golden fist, his kingdom a monument to opulence built upon the suffering of millions. He believes himself divinely ordained, his golden armor blessed by gods who long abandoned this realm.</p><p>He collects the most powerful warriors as trophies, having defeated each in single combat.</p>'
  },
  {
    name: 'Sanboriua',
    folder: 'powerful',
    img: 'assets/Characters/Villains/The Powerful Force of Destruction/Sanboriua the Iron Chrome Monument/Sanboriua.png',
    dob: 'May 5, 1800',
    height: 208,
    gender: 'Male',
    race: 'Chrome Golem',
    personality: 'Mechanical · Unfeeling · Relentless',
    rank: 'Iron-Chrome Overlord',
    storyTitle: 'The Monument of Doom',
    story: '<p>Sanboriua was forged from a forgotten alloy that no modern smith can replicate, his body a seamless fusion of iron and chrome that reflects no light and radiates no heat. He feels no pain, knows no fatigue, and knows only one purpose: absolute conquest.</p><p>Each blow he takes merely dents the surface. Each wound he inflicts is final.</p>'
  },
  {
    name: 'TienManH',
    folder: 'powerful',
    img: 'assets/Characters/Villains/The Powerful Force of Destruction/TienManH the Beginning/TienManH.png',
    dob: 'January 1, 1',
    height: 195,
    gender: 'Male',
    race: 'Primordial Force',
    personality: 'Ancient · Mysterious · Limitless',
    rank: 'Primordial-Class',
    storyTitle: 'The Beginning and the End',
    story: '<p>TienManH existed before time, before matter, before the very laws that govern existence. He is the beginning given form — the first thought in an empty universe.</p><p>He simply exists, and where he exists, reality adjusts to accommodate him. Entire universes have shifted their laws simply because he walked through them.</p>'
  },
  {
    name: 'Vadernaghaun',
    folder: 'powerful',
    img: 'assets/Characters/Villains/The Powerful Force of Destruction/Vadernaghaun the Chronicunk (Punk Chronicle)/Vadernaghaun.png',
    dob: 'October 28, 1855',
    height: 193,
    gender: 'Male',
    race: 'Punk Apocalypse',
    personality: 'Chaotic · Rebellious · Unpredictable',
    rank: 'Chronic-Anarch',
    storyTitle: 'The Punk Chronicle',
    story: '<p>Vadernaghaun does not follow the old ways. He writes his own chronicle — a chaotic manifesto of rebellion against all order, all structure, all established power. His very presence unravels systems, corrupts hierarchies, and turns empires to dust through sheer anarchic will.</p><p>He is not merely a villain — he is the concept of anti-order incarnate.</p>'
  },
  {
    name: 'Vas',
    folder: 'powerful',
    img: 'assets/Characters/Villains/The Powerful Force of Destruction/Vas the Destroyer/Vas.png',
    dob: 'November 11, 1200',
    height: 206,
    gender: 'Male',
    race: 'World-Breaker',
    personality: 'Brutal · Direct · Unstoppable',
    rank: 'World-Ender',
    storyTitle: 'The World Breaker',
    story: '<p>Vas earned his title through the literal destruction of three separate worlds. He does not scheme, plot, or manipulate — he simply arrives and breaks everything in his path.</p><p>His physiology allows him to absorb kinetic energy, making him stronger with every blow landed against him.</p>'
  },
  {
    name: 'Vathor',
    folder: 'powerful',
    img: 'assets/Characters/Villains/The Powerful Force of Destruction/Vathor the Thunder-ion (Thunder Lion)/Vathor.png',
    dob: 'July 22, 1401',
    height: 210,
    gender: 'Male',
    race: 'Thunder-Ion Lion',
    personality: 'Primal · Electrifying · Dominant',
    rank: 'Thunder-Lion',
    storyTitle: 'The Roar of Thunder',
    story: '<p>Vathor is the apex predator of the storm, a lion whose body crackles with raw electrical energy. Every movement sends arcs of lightning across the battlefield, and his roar can be heard across entire continents.</p><p>He does not negotiate. He does not compromise. He does not retreat.</p>'
  },
  {
    name: 'Yenmar',
    folder: 'powerful',
    img: 'assets/Characters/Villains/The Powerful Force of Destruction/Yenmar the Shield of Ego/Yenmar.png',
    dob: 'March 8, 1700',
    height: 194,
    gender: 'Male',
    race: 'Ego-Titan',
    personality: 'Arrogant · Invincible · Vain',
    rank: 'Ego-Warlord',
    storyTitle: 'The Shield That Never Falls',
    story: '<p>Yenmar believes himself invincible, and his confidence is not entirely misplaced. An energy shield surrounds him at all times — one that has never been breached, never dimmed, never failed.</p><p>He has walked through dragon fire, godly lightning, and anti-matter storms without a scratch.</p>'
  },
  {
    name: 'Zhekki',
    folder: 'powerful',
    img: 'assets/Characters/Villains/The Powerful Force of Destruction/Zhekki the Daemon Prince/Zhekki.png',
    dob: 'June 6, 666',
    height: 211,
    gender: 'Male',
    race: 'Daemon Prince',
    personality: 'Corrupting · Charming · Infernal',
    rank: 'Daemon-Prince',
    storyTitle: 'The Prince of Shadows',
    story: '<p>Zhekki rules from a throne of crystallized sin, his dominion spanning the infernal realms and leaking into the mortal world. He seduces heroes into corruption, turning champions into villains with a few well-chosen words and promises of power.</p><p>His charm is his deadliest weapon.</p>'
  }
];

const FOLDERS = {
  all:       'All Characters',
  fighters:  'Ancient X Fighters',
  megahforce: 'Megahforce of Destruction',
  powerful:  'The Powerful Force of Destruction'
};

let currentFolder = 'all';

function getCurrentHeroChars() {
  if (currentFolder === 'all') return characters.slice(0, 6);
  return characters.filter(ch => ch.folder === currentFolder);
}

function getFiltered() {
  return characters.filter(ch => parseYear(ch.dob) < 1900 && ch.height >= 190);
}

function buildGallery() {
  const root = document.getElementById('charGallery');
  if (!root) return;
  root.innerHTML = '';

  const foldersToRender = currentFolder === 'all'
    ? Object.keys(FOLDERS).filter(k => k !== 'all')
    : [currentFolder];

  const folderLabels = { fighters: 'Ancient X Fighters', megahforce: 'Megahforce of Destruction', powerful: 'The Powerful Force of Destruction' };

  foldersToRender.forEach(fKey => {
    const group = characters.filter(ch => ch.folder === fKey);
    if (!group.length) return;

    const section = document.createElement('section');
    section.className = 'folder-section';

    const title = document.createElement('h2');
    title.className = 'folder-title';
    title.textContent = folderLabels[fKey] || fKey;
    section.appendChild(title);

    const grid = document.createElement('div');
    grid.className = 'char-grid';

    group.forEach(ch => {
      const card = document.createElement('div');
      card.className = 'char-card';
      card.innerHTML = `
        <div class="card-art-wrap">
          <img src="${ch.img}" alt="${ch.name}" class="card-art" loading="lazy"
               onerror="this.classList.add('img-broken')">
        </div>
        <div class="card-body">
          <h3 class="card-name">${ch.name}</h3>
          <div class="card-meta">
            <div class="meta-row"><span class="meta-key">DOB</span><span class="meta-val">${ch.dob}</span></div>
            <div class="meta-row"><span class="meta-key">Height</span><span class="meta-val">${fmtHeight(ch.height)}</span></div>
            <div class="meta-row"><span class="meta-key">Race</span><span class="meta-val">${ch.race}</span></div>
            <div class="meta-row"><span class="meta-key">Gender</span><span class="meta-val">${ch.gender}</span></div>
            <div class="meta-row"><span class="meta-key">Rank</span><span class="meta-val">${ch.rank}</span></div>
            <div class="meta-row"><span class="meta-key">Personality</span><span class="meta-val">${ch.personality}</span></div>
          </div>
          <button class="card-story-toggle">Read Story ▸</button>
          <div class="card-story">
            <div class="story-title">${ch.storyTitle}</div>
            <div class="story-text">${ch.story}</div>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });

    section.appendChild(grid);
    root.appendChild(section);
  });

  document.querySelectorAll('.card-story-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const story = btn.nextElementSibling;
      const isOpen = story.classList.contains('open');
      story.classList.toggle('open');
      story.style.maxHeight = isOpen ? '0px' : story.scrollHeight + 'px';
      btn.textContent = isOpen ? 'Read Story ▸' : 'Hide ◂';
    });
  });

  const totalInView = foldersToRender.reduce((sum, fKey) => {
    return sum + characters.filter(ch => ch.folder === fKey).length;
  }, 0);
  const vc = document.getElementById('visibleCount');
  if (vc) vc.textContent = totalInView;
}

function buildTabs() {
  const tabBar = document.getElementById('catTabs');
  if (!tabBar) return;
  tabBar.innerHTML = '';

  Object.keys(FOLDERS).forEach(key => {
    const btn = document.createElement('button');
    btn.className = 'cat-tab' + (key === currentFolder ? ' active' : '');
    btn.textContent = FOLDERS[key];
    btn.addEventListener('click', () => {
      currentFolder = key;
      document.querySelectorAll('.cat-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      buildAvatarGrid();
      updateCharDisplay(0, getCurrentHeroChars());
      buildGallery();
    });
    tabBar.appendChild(btn);
  });
}

function buildAvatarGrid() {
  const grid = document.getElementById('avatarGrid');
  if (!grid) return;
  grid.innerHTML = '';

  const chars = currentFolder === 'all'
    ? characters.slice(0, 6)
    : characters.filter(ch => ch.folder === currentFolder);

  const heroChars = chars.length ? chars : characters.slice(0, 6);

  heroChars.forEach((ch, i) => {
    const btn = document.createElement('button');
    btn.className = 'avatar-btn' + (i === 0 ? ' active' : '');
    btn.setAttribute('data-char', i);
    btn.setAttribute('aria-label', ch.name);
    btn.innerHTML = `
      <div class="avatar-frame">
        <div class="avatar-img-wrap">
          <img src="${ch.img}" alt="${ch.name}" class="avatar-img" onerror="this.style.display='none'">
        </div>
        <div class="avatar-glow"></div>
      </div>
      <div class="avatar-corner tl"></div><div class="avatar-corner tr"></div>
      <div class="avatar-corner bl"></div><div class="avatar-corner br"></div>
      <span class="avatar-name">${ch.name}</span>
    `;
    grid.appendChild(btn);
  });

  return heroChars;
}

function updateCharDisplay(idx, charList) {
  const chars = charList || characters.slice(0, 6);
  const c = chars[idx];
  if (!c) return;

  const charFullArt = document.getElementById('charFullArt');
  const charArtImg = document.getElementById('charArtImg');
  const charSVGArt = document.getElementById('charSVGArt');
  const charArtGlow = document.getElementById('charArtGlow');
  const charArtNameText = document.getElementById('charArtNameText');
  const charNameEl = document.getElementById('charName');
  const bioNameEl = document.getElementById('bioName');
  const bioDobEl = document.getElementById('bioDob');
  const bioHeightEl = document.getElementById('bioHeight');
  const bioRaceEl = document.getElementById('bioRace');
  const bioGenderEl = document.getElementById('bioGender');
  const bioRankEl = document.getElementById('bioRank');
  const bioPersonalityEl = document.getElementById('bioPersonality');
  const storyTitleEl = document.getElementById('storyTitle');
  const storyContentEl = document.getElementById('storyContent');
  const artPlaceholder = document.getElementById('charArtPlaceholder');

  if (charFullArt) charFullArt.classList.remove('visible');

  setTimeout(() => {
    if (charArtImg && charSVGArt && artPlaceholder && c.img) {
      const charImgA = c.img.replace('.png', ' A.png');
      charArtImg.src = charImgA;
      charArtImg.alt = c.name;
      charArtImg.style.display = 'block';
      charSVGArt.style.display = 'none';
      artPlaceholder.style.display = 'none';
      charArtImg.onerror = () => {
        charArtImg.style.display = 'none';
        charSVGArt.style.display = 'block';
        artPlaceholder.style.display = 'block';
      };
    }
    if (charArtGlow) charArtGlow.style.background = 'radial-gradient(ellipse 80% 80% at 50% 40%, rgba(201,168,76,0.18), transparent)';
    if (charArtNameText) charArtNameText.textContent = c.name;
    if (charNameEl) charNameEl.innerHTML = c.name + '<span class="char-name-dot">.</span>';
    if (bioNameEl) bioNameEl.textContent = c.name;
    if (bioDobEl) bioDobEl.textContent = c.dob;
    if (bioHeightEl) bioHeightEl.textContent = fmtHeight(c.height);
    if (bioRaceEl) bioRaceEl.textContent = c.race;
    if (bioGenderEl) bioGenderEl.textContent = c.gender;
    if (bioRankEl) bioRankEl.textContent = c.rank;
    if (bioPersonalityEl) bioPersonalityEl.textContent = c.personality;
    if (storyTitleEl) storyTitleEl.textContent = c.storyTitle;
    if (storyContentEl) {
      storyContentEl.innerHTML = c.story;
      storyContentEl.style.maxHeight = '100px';
      storyContentEl.style.overflowY = 'hidden';
      storyContentEl.style.position = 'relative';
    }
    const btnRM = document.getElementById('btnReadMore');
    if (btnRM) btnRM.textContent = 'Read More ▸';
    if (charFullArt) requestAnimationFrame(() => charFullArt.classList.add('visible'));
  }, 80);
}

function init() {
  buildTabs();
  const heroChars = buildAvatarGrid();
  updateCharDisplay(0, heroChars);
  buildGallery();

  const grid = document.getElementById('avatarGrid');
  if (grid) {
    grid.onclick = e => {
      const btn = e.target.closest('.avatar-btn');
      if (!btn) return;
      grid.querySelectorAll('.avatar-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const idx = parseInt(btn.dataset.char, 10);
      const chars = getCurrentHeroChars();
      updateCharDisplay(idx, chars);
    };
  }

  const totalEl = document.getElementById('totalCount');
  if (totalEl) totalEl.textContent = getFiltered().length;

  const btnRM = document.getElementById('btnReadMore');
  const storyContent = document.getElementById('storyContent');
  if (btnRM && storyContent) {
    btnRM.addEventListener('click', () => {
      const isOpen = storyContent.classList.contains('story-expanded');
      if (isOpen) {
        storyContent.classList.remove('story-expanded');
        storyContent.style.maxHeight = '100px';
        storyContent.style.overflowY = 'hidden';
        btnRM.textContent = 'Read More ▸';
      } else {
        storyContent.classList.add('story-expanded');
        storyContent.style.maxHeight = 'none';
        storyContent.style.overflowY = 'auto';
        btnRM.textContent = 'Show Less ▸';
      }
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
