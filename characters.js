/* characters.js — Avatar selector + character data */

// ── Character Data ──
const characters = [
  {
    name:        'Arhajan',
    fullName:    'Arhajan Veil',
    dob:         '3rd Moon, Year 0',
    gender:      'Male',
    height:      '185 cm',
    race:        'Draconic Halfblood',
    personality: 'Cold · Resolute · Visionary',
    rank:        'Sovereign-class',
    artSrc:      'char1_art.jpg',
    accentColor: '#c9a84c',
    storyTitle:  'Chronicles of Arhajan',
    story: `<p>In the age before memory, when the heavens were shattered and the earth reforged from the bones of fallen gods, there arose those who carried the old blood. Arhajan Veil was born beneath a moonless sky, his lineage tracing to the first dragon-sovereign who once ruled the void between worlds.</p>
<p>The stories claim that those who inherit draconic essence lose something of their mortal warmth — trading sentiment for clarity, fragility for endurance. Arhajan walks this ancient path, his silver hair a testament to the cold power coursing beneath his skin.</p>
<p>At age seventeen, he underwent the Trial of the Hollow Flame — a ritual where candidates are submerged in cursed black water for three days. Only those of true draconic blood emerge without madness. Arhajan emerged on the fourth day, eyes now permanently silvered, bearing the Dragon Crest upon his collarbone.</p>
<p>He has since served as the Vanguard of the Eastern Void, a title granted only to those who have slain an Abyssal Dragon without the use of spirit-arms. His blade, Nullfang, was forged from the fangs of the last Pure Dragon of the 3rd Age — a creature he defeated alone at age twenty.</p>
<p>Those who encounter him describe a presence like standing at the threshold of something vast and unknowable — a reminder of how brief mortal candles burn against the eternal dark. Yet there are those who claim to have seen him weep once, in the ruins of Shenhao, over a grave whose name he has never spoken aloud.</p>`
  },
  {
    name:        'Selenara',
    fullName:    'Selenara of the Pale Court',
    dob:         '15th Moon, Year 44',
    gender:      'Female',
    height:      '172 cm',
    race:        'Void-Touched Celestial',
    personality: 'Calculating · Ethereal · Fierce',
    rank:        'Oracle-class',
    artSrc:      'char2_art.jpg',
    accentColor: '#7ab0d4',
    storyTitle:  'The Pale Oracle',
    story: `<p>Selenara was not born — she was distilled. From the tears of a dying moon goddess and the last breath of a fallen celestial court, she condensed into being at the exact moment that realm ceased to exist.</p>
<p>She carries the memories of the Pale Court not as recollections, but as open wounds. Every treaty broken, every betrayal committed, every god that chose power over people — she remembers them all with crystalline precision and the patience of someone who has already waited millennia.</p>
<p>Her abilities do not manifest as raw power. She does not summon storms or split mountains. Instead, she unravels. A touch can erase someone's name from all records, their face from all memories, their trace from history itself. She calls it Pale Editing — the world rewrites itself around the deletion.</p>
<p>The ruling factions fear her not because she has armies, but because she doesn't need them. She once ended a civil war by making both generals forget why they were fighting. She considers this mercy.</p>
<p>She seeks only one thing: to find the remaining shards of the Pale Court's soul-crystal, so she can decide — once and for all — whether to restore her people or grant them the peace of complete forgetting.</p>`
  },
  {
    name:        'Vordekhan',
    fullName:    'Vordekhan the Ashbound',
    dob:         '1st Moon, Year 999',
    gender:      'Male',
    height:      '198 cm',
    race:        'Cursed Dragon-Knight',
    personality: 'Savage · Honorable · Tormented',
    rank:        'Warlord-class',
    artSrc:      'char3_art.jpg',
    accentColor: '#cc4422',
    storyTitle:  'Bound in Ash and Fire',
    story: `<p>Vordekhan was the greatest general the Dragon Clans had ever produced — until the day he ordered the burning of the Verdant Archive, the only library containing the true names of every dragon lineage still living. He did it to win a war. The war lasted another forty years anyway.</p>
<p>The punishment handed down by the Dragon Elders was not death. Death would have been mercy. They bound his draconic heritage behind a curse-seal that ignites whenever he uses his power, burning him from the inside out. He fights anyway. The scars on his body are a map of every battle since.</p>
<p>He speaks rarely. When he does, his words carry the weight of someone who has already considered every outcome and has simply chosen the one with the most meaning. He does not claim to be good. He claims only to be useful, and to spend his remaining strength in the service of what the Archive once protected.</p>
<p>He has been searching for forty years for the Ashbound Codex — a rumored text that could undo his curse without erasing his memories. He fears the latter more than the former. The burning reminds him. He does not want to forget what forgetting costs.</p>`
  },
  {
    name:        'Mei Lungshan',
    fullName:    'Mei of House Lungshan',
    dob:         '8th Moon, Year 312',
    gender:      'Female',
    height:      '163 cm',
    race:        'Spirit-Weaver Human',
    personality: 'Gentle · Calculating · Relentless',
    rank:        'Weaver-Sage',
    artSrc:      'char4_art.jpg',
    accentColor: '#d4a0b8',
    storyTitle:  'The Thread Between Worlds',
    story: `<p>Mei Lungshan was the seventh daughter of a line of spirit-weavers stretching back two thousand years. Spirit-weavers do not fight. They maintain the boundary threads between the living world and the spirit plane — delicate, invisible sutures that prevent the dead from wandering and the living from being consumed.</p>
<p>When the threads in her province began snapping — one by one, like stitches in an old wound reopening — Mei was assigned to investigate. What she found was not natural decay but deliberate cutting. Someone, or something, was pulling the world apart at its seams.</p>
<p>She is perhaps the only living person who can see the spirit-threads with her bare eyes. She describes the world as a vast embroidery: beautiful, impossibly complex, and currently bleeding. She moves through conflict not with a weapon but with her needle — a tool that looks decorative and can reweave reality itself in the hands of someone who knows the original pattern.</p>
<p>She carries three things at all times: the needle, a journal written in a language she invented herself, and a small photograph of her family taken the morning before their estate disappeared. Not burned. Not attacked. Simply gone, as if it had never been stitched into the world at all.</p>`
  },
  {
    name:        'Kazurath',
    fullName:    'Kazurath, the Living Thunder',
    dob:         '22nd Moon, Year 700',
    gender:      'Male',
    height:      '190 cm',
    race:        'Storm-Touched Demigod',
    personality: 'Reckless · Magnetic · Deeply Loyal',
    rank:        'Thunderlord-class',
    artSrc:      'char5_art.jpg',
    accentColor: '#a0b8e0',
    storyTitle:  'Where Lightning Walks',
    story: `<p>Every thousand years, a child is born during a storm that has no meteorological cause — a storm that exists only as the sky's response to a significant event below. Kazurath was born during a storm that lasted seventeen days, beginning the moment the last Thunder Sage died and ending the moment he drew his first breath.</p>
<p>He spent his childhood being struck by lightning. Not metaphorically. Actual lightning, following him like an affectionate and devastating companion. By age twelve he had survived forty-three direct strikes. By fourteen he had learned to direct them. By twenty, he could become one.</p>
<p>He is loud in the way that forces of nature are loud — not in volume, but in presence. When he enters a room, the air changes. When he laughs, people smile without knowing why. When he is angry, the lights flicker. He has no talent for subtlety and has never pretended otherwise.</p>
<p>What makes him dangerous is not the thunder. It is that he remembers every single person who has ever been kind to him, and would level a mountain for any of them without being asked. The ancient texts call this a weakness. Kazurath calls it the only power worth having.</p>`
  },
  {
    name:        'Your Char',
    fullName:    'Unknown',
    dob:         '— / — / —',
    gender:      '—',
    height:      '— cm',
    race:        'Unknown Bloodline',
    personality: '— · — · —',
    rank:        'Unranked',
    artSrc:      '',
    accentColor: '#c9a84c',
    storyTitle:  'A Story Yet Written',
    story: `<p>This character slot is yours. Replace the avatar image with your character's portrait, update the data in <strong>characters.js</strong>, and add their full art image.</p>
<p>Each character you create becomes part of the Ancient X universe — or your own. The fields above hold their identity; the story below holds their soul. Write it with the weight it deserves.</p>
<p>To add a character image: place a square image file (e.g. <code>char6.jpg</code>) in the same folder as this website, then update the avatar <code>src</code> in <strong>characters.html</strong>.</p>`
  }
];

// ── DOM References ──
const avatarBtns    = document.querySelectorAll('.avatar-btn');
const charFullArt   = document.getElementById('charFullArt');
const charArtImg    = document.getElementById('charArtImg');
const charSVGArt    = document.getElementById('charSVGArt');
const charArtGlow   = document.getElementById('charArtGlow');
const charArtNameBadge = document.getElementById('charArtNameBadge');
const charArtNameText  = document.getElementById('charArtNameText');

const charName      = document.getElementById('charName');
const bioName       = document.getElementById('bioName');
const bioDob        = document.getElementById('bioDob');
const bioGender     = document.getElementById('bioGender');
const bioHeight     = document.getElementById('bioHeight');
const bioRace       = document.getElementById('bioRace');
const bioPersonality= document.getElementById('bioPersonality');
const bioRank       = document.getElementById('bioRank');
const storyTitle    = document.getElementById('storyTitle');
const storyContent  = document.getElementById('storyContent');
const heartBtn      = document.getElementById('heartBtn');
const heartIcon     = document.getElementById('heartIcon');

let currentChar = 0;
const favorites = new Set();

// ── Load Character ──
function loadCharacter(index, animate = true) {
  const c = characters[index];
  currentChar = index;

  // ─ Fade out art first ─
  if (charFullArt) {
    charFullArt.classList.remove('visible');
  }

  // ─ Update bio (instant) ─
  if (charName)       charName.innerHTML = c.name + '<span class="char-name-dot">.</span>';
  if (bioName)        bioName.textContent = c.fullName;
  if (bioDob)         bioDob.textContent  = c.dob;
  if (bioGender)      bioGender.textContent = c.gender;
  if (bioHeight)      bioHeight.textContent = c.height;
  if (bioRace)        bioRace.textContent  = c.race;
  if (bioPersonality) bioPersonality.textContent = c.personality;
  if (bioRank)        bioRank.textContent  = c.rank;
  if (storyTitle)     storyTitle.textContent = c.storyTitle;
  if (storyContent)   storyContent.innerHTML = c.story;
  if (charArtNameText) charArtNameText.textContent = c.name;

  // ─ Update accent glow color ─
  if (charArtGlow) {
    charArtGlow.style.background = `radial-gradient(ellipse 80% 80% at 50% 40%, ${c.accentColor}18, transparent)`;
  }

  // ─ Heart state ─
  if (heartBtn && heartIcon) {
    if (favorites.has(index)) {
      heartBtn.classList.add('loved');
      heartIcon.querySelector('path').setAttribute('fill', '#cc1f1f');
      heartIcon.querySelector('path').setAttribute('stroke', '#cc1f1f');
    } else {
      heartBtn.classList.remove('loved');
      heartIcon.querySelector('path').setAttribute('fill', 'none');
      heartIcon.querySelector('path').setAttribute('stroke', '#c9a84c');
    }
  }

  // ─ Update art (with delay for slide-in) ─
  setTimeout(() => {
    if (charArtImg && charSVGArt) {
      if (c.artSrc) {
        charArtImg.src = c.artSrc;
        charArtImg.alt = c.name;
        charArtImg.style.display = 'block';
        charSVGArt.style.display = 'none';
        charArtImg.onerror = () => {
          charArtImg.style.display = 'none';
          charSVGArt.style.display = 'block';
        };
      } else {
        charArtImg.style.display = 'none';
        charSVGArt.style.display = 'block';
      }
    }
    // ─ Trigger slide-in from right ─
    if (charFullArt) {
      requestAnimationFrame(() => {
        charFullArt.classList.add('visible');
      });
    }
  }, animate ? 80 : 0);

  // ─ Scroll story to top ─
  if (storyContent) storyContent.scrollTop = 0;
}

// ── Avatar Click ──
avatarBtns.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    if (i === currentChar) return;
    avatarBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    loadCharacter(i, true);
  });
});

// ── Heart Toggle ──
if (heartBtn) {
  heartBtn.addEventListener('click', () => {
    if (favorites.has(currentChar)) {
      favorites.delete(currentChar);
      heartBtn.classList.remove('loved');
      heartIcon.querySelector('path').setAttribute('fill', 'none');
      heartIcon.querySelector('path').setAttribute('stroke', '#c9a84c');
    } else {
      favorites.add(currentChar);
      heartBtn.classList.add('loved');
      heartIcon.querySelector('path').setAttribute('fill', '#cc1f1f');
      heartIcon.querySelector('path').setAttribute('stroke', '#cc1f1f');
      // Pulse animation
      heartBtn.style.transform = 'scale(1.35)';
      setTimeout(() => { heartBtn.style.transform = ''; }, 200);
    }
  });
}

// ── Read More ──
const btnReadMore = document.getElementById('btnReadMore');
if (btnReadMore && storyContent) {
  btnReadMore.addEventListener('click', () => {
    storyContent.style.maxHeight = storyContent.style.maxHeight === 'none' ? '280px' : 'none';
    btnReadMore.textContent = storyContent.style.maxHeight === 'none' ? 'Show Less' : 'Read More';
  });
}

// ── Initial Load ──
loadCharacter(0, false);
// Trigger initial animation after a tiny delay
setTimeout(() => {
  if (charFullArt) charFullArt.classList.add('visible');
}, 150);
