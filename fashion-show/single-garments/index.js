'use strict';

AOS.init({
  once: true,
  offset: -200
});

let designers = {
  'savannah risenmay': {
    name: 'grace',
    image: 'grace',
    desc: 'Vintage inspired jacket with puffy sleeves and a deep v-neckline. Closed with 2 gold plated buttons. Green gabardine wool jacket includes pockets and a&nbsp;collar.'
  },
  'eduardo daniel jaimes': {
    name: 'addeoru',
    image: 'addeoru',
    desc: 'The Addeoru coat is a versatile piece that any man or woman can wear regardless of gender. It\'s classy, fun, daring, and timeless. I got inspiration from the \'90\'s era which allowed me to create a coat that wasn\'t seen often but still remained that classy silhouette. I added some grommets to the sleeves to give it a pop of&nbsp;fantasy.'
  },
  'nancy marshall': {
    name: 'pavement rodeo',
    image: 'pavementrodeo',
    desc: 'This piece takes influence from street wear and skater aesthetics, paired with a work wear boxy silhouette to create a cropped chore coat style jacket. Alternating color blocking creates contrast at every opportunity to make a statement piece ready for the rodeo or a day in the&nbsp;city.'
  },
  'vania sutandi': {
    name: 'indigo reefs',
    image: 'indigoreefs',
    desc: 'Indigo Reefs was a draping project inspired by the rigid and organic structure of corals. The fabric was dyed using Shibori, a traditional Japanese dyeing technique, and draping was used to create the sculpture like bodice. The resilience of corals in our changing climate can remind us that difficult times are a chance to grow and face our challenges with a firm stance, yet the flexibility to cope. I hope this dress can celebrate everyone\'s unique experiences in&nbsp;coping.'
  },
  'olivia siobhán': {
    name: 'selvage',
    image: 'selvage',
    desc: 'About 15% of fabric intended for clothing ends up on the cutting room floor. Selvage takes those scraps and gives them another life. This jacket is made entirely out of collected fabric&nbsp;scraps.'
  },
  'feier shen': {
    name: 'fit in - stand out',
    image: 'fitinstandout',
    desc: 'My concept is to elevate the design of everyday jackets with a touch of surprise. While keeping the overall design familiar and simple, the asymmetrical bodice, cutouts, and exaggerated collar give this jacket some unexpected personalities which are rarely seen in daily wears. As the name suggests, Fit In – Stand Out, a plain jackets can serve as a great canvas for these unexpected characteristics to “stand&nbsp;out”.'
  },
  'nicholas fish': {
    name: 'woodsy button down',
    image: 'woodsybuttondown',
    desc: 'This jacket is inspired by Americana workwear and military wear to imitate the classic chore coat look with a modern imperfect twist. This jacket features raw edges, pleated pockets, and flared sleeve cuffs. The colors are inspired by Muir Woods and once again Americana and military&nbsp;wear.'
  },
  'simone haggerty': {
    name: 'renewal',
    image: 'renewal',
    desc: 'This dress was made using repurposed materials (old curtains and a sheet). In a world where there is such a large fast fashion industry, it is important that the pieces I create are as sustainable as possible. In this garment I wanted to play with structure to create a simplistic, yet interesting, design including a detail on the back with a sewn line&nbsp;drawing. '
  },
  'emily gu': {
    name: 'cotton candy',
    image: 'cottoncandy',
    desc: 'This dress takes inspiration from cotton candy. It\'s light pastel colors are reminiscent of the colors of cotton candy and the babydoll silhouette gives a the dress childlike quality, alluding to how cotton candy is a treat from childhood. Organza was used to imitate the airyness of the&nbsp;treat.'
  },
  'maitri khanna': {
    name: 'comfort',
    image: 'comfort',
    desc: 'My piece is a representation of my quarantine experience. Craving the normalcy of pre-pandemic life, I rely on my comfort food, Maggi, in times of&nbsp;stress.'
  }
}

let designerBlock = document.getElementsByClassName('designer-block')[0];
for (let d in designers)
  designerBlock.innerHTML += `
    <div class='designer'>
      <div class='name'>
        <span>${designers[d].name}</span> - ${d.replaceAll(' ', '&nbsp;')}
      </div>
      <div class='inner'>
        <div class='portrait-frame'>
          <div class='portrait' style='background-image: url("/media/single-garments/${designers[d].image}1-min.jpg");background-size: cover;background-position: center;'></div>
        </div>
        <div class='portrait-frame'>
          <div class='portrait' style='background-image: url("/media/single-garments/${designers[d].image}2-min.jpg");background-size: cover;background-position: center;'></div>
        </div>
        <div class='right'>
          <div class='content'>
            ${designers[d].desc}
          </div>
        </div>
      </div>
    </div>`;
