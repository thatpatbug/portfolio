const gamesData = [
  {
    title: "Antempo",
    genre: "Rhythm",
    description1: "<i>Antempo</i> is a quirky rhythm game inspired by the <i>Rhythm Heaven</i> series. Notably, it's the first of its kind to feature a beatmap composed entirely of ants. March to the beat with your colony, navigating visual obstructions and pattern shake-ups along the way!",
    description2: "<i>Antempo</i> was created in four days for GMTK Game Jam 2026. I programmed and designed the game in collaboration with an artist and composer.",
    thumbnail: "assets/antempo.gif",
    url: "https://patbug.itch.io/antempo"
  },
  {
    title: "Santa's Substitute",
    genre: "Action",
    description1: "As <i>Santa's Substitute</i>, you've been tasked with assuring the quality of every toy produced at the big guy's factory. This would be a whole lot easier if you could slow down that conveyor belt... or if Santa permitted bathroom breaks.",
    description2: "<i>Santa's Substitute</i> was created in five days for One Button Jam 2026. I programmed and designed the game in collaboration with an artist and composer.",
    thumbnail: "assets/santas-substitute.gif",
    url: "https://patbug.itch.io/santas-substitute"
  },
  {
    title: "UFO GO!",
    genre: "Action",
    description1: "<i>UFO GO!</i> is an action-packed arcade title inspired by <i>Campanella</i> from the <i>UFO 50</i> collection. Navigate a tiny planet teeming with hostile lifeforms, grabbing stars to refuel and avoiding your mothership at all costs!",
    description2: "<i>UFO GO!</i> was created in four days for GMTK Game Jam 2025. I programmed, designed, and made the art for the game in collaboration with a composer.",
    thumbnail: "assets/ufo-go.png",
    url: "https://patbug.itch.io/ufo-go"
  },
  {
    title: "Benedict Beaver the Builder",
    genre: "Puzzle",
    description1: "<i>Benedict Beaver the Builder</i> (or <i>How Benedict Beaver Helped Birch Grove Get Its Groove Back</i>) is a puzzle game about building homes for animals impacted by a devastating flood. Grab logs and chomp 'em down, then line them up on your blueprint to finish each job before the sun sets!",
    description2: "<i>Benedict Beaver the Builder</i> was created in four days for GMTK Game Jam 2024. I programmed and designed the game in collaboration with an artist and composer.",
    thumbnail: "assets/benedict-beaver-the-builder.gif",
    url: "https://patbug.itch.io/benedict-beaver-the-builder"
  },
  {
    title: "Stellar Shepherd",
    genre: "Action",
    description1: "Welcome to the Satellite Herding & Extraction Enterprise Program! As the <i>Stellar Shepherd</i>, you are duty-bound to liberate your woolly compatriots from their endless drift through space by safely containing them within your star system's constellations.",
    description2: "<i>Stellar Shepherd</i> was created in a week for Pizza Jam 2024. I programmed and designed the game in collaboration with an artist and composer.",
    thumbnail: "assets/stellar-shepherd.gif",
    url: "https://patbug.itch.io/stellar-shepherd"
  },
  {
    title: "Flee the Slaughter, Cannon Fodder!",
    genre: "Action",
    description1: "<i>Flee the Slaughter, Cannon Fodder!</i> puts you in the shoes of a helpless little slime creature with enough sense to flee the powerful hero mowing down its friends by the dozen. It's sort of like a reverse <i>Survivors</i>-like... or a double reverse bullet hell?",
    description2: "<i>Flee the Slaughter, Cannon Fodder!</i> was created in two days for GMTK Game Jam 2023. I programmed, designed, and made the art for the game independently.",
    thumbnail: "assets/flee-the-slaughter-cannon-fodder.png",
    url: "https://patbug.itch.io/flee-the-slaughter-cannon-fodder"
  },
  {
    title: "Congress Defunded Us, So We're Blowing Up the Moon",
    genre: "Action",
    description1: "Those nasty little weasels in Congress pulled all our funding because we \"don't do cool stuff anymore.\" News flash, jerks: you don't take NASO's money and walk away with an intact moon! As our head launch technician, this operation is in your hands.",
    description2: "<i>Congress Defunded Us, So We're Blowing Up the Moon</i> was created in three days for Mini Jam 130. I programmed, designed, and made the art for the game independently.",
    thumbnail: "assets/congress-defunded-us-so-were-blowing-up-the-moon.png",
    url: "https://patbug.itch.io/congress-defunded-us-so-were-blowing-up-the-moon"
  },
];

const container = document.getElementById("game-list");

gamesData.forEach(game => {
  
  const card = document.createElement("div");
  card.className = "game-card";
  
  card.innerHTML = `
    <a href="${game.url}" target="_blank">
      <img src="${game.thumbnail}" alt="${game.title}" class="game-thumbnail">
    </a>
    <div class="game-details">
      <h2>${game.title}</h2>
      <p>${game.description1}</p>
      <p>${game.description2}</p>
      <a class="link" href="${game.url}" target="_blank">Play it here!</a>
    </div>
  `;
  
  container.appendChild(card);
});