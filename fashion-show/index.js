'use strict';

AOS.init({
  once: true,
  offset: -200
});

let designers = {
  'Christina Tan': {
    image: 'christina.jpg',
    desc: `Christina Tan is an undergraduate student attending the University of California, Davis, who creates elegant, casual, and effortless designs in women’s wear that focuses on confidence empowering. From sketching, prototyping, sewing, to modeling, she approaches all of them passionately, allowing others to understand her and her designs as bold and unrestricted. She is currently the Chief of Event Coordinator for an organization called Fashion and Design Society, in which she researches and educates professional fashion resources and opportunities for the Davis Community. She has also worked as a costume producer for the Nutcracker performance, where she creates and alternates costumes for children of different ages. After she graduates, she will continue designing and pursuing a career in the fashion industry and develop her own clothing line to the best of her&nbsp;ability. `
  },
  'Ingrid Yeung': {
    image: 'ingrid.jpg',
    desc: `Ingrid Yeung is a student and designer from the Bay Area whose style is timeless and elegant. She currently attends the University of California, Davis, and is working towards her B.A. in Design and B.S. in Managerial Economics. She is involved in two student organizations, InPrint Magazine and the Fashion & Design Society. As the executive director for FADS, she works to provide professional resources for students and advocates for the growth of fashion in the Davis community. Additionally, Ingrid has participated in multiple fashion programs, including the Arts of Fashion Competition in 2020. Most recently, Ingrid has launched her own shop, YLXDesign, where she sells thrifted products with hand painted designs. She hopes to grow her brand and pursue fashion design throughout the rest of her college career and into the future. You can find more information about Ingrid at <a href='ingrid-yeung.com'>ingrid-yeung.com</a>.`
  },
  'Madison Moriarty': {
    image: 'madison.jpg',
    desc: `Madison is a fashion designer based in Santa Barbara, California. She is currently
    pursuing a B.A. at the University of California, Davis, in fashion&nbsp;design.
    Her collection, Sheer Delight, focuses on the women’s sex appeal with elegant details of chiffon and
    tulle. She often creates garments to enhance a woman’s appearance and provoke self-
    confidence. In addition, her work often enhances the over sexualizing of women as she
    firmly believe that women need to re own our sex appeal in order to stop other
    people from doing it. Her aesthetic is light, simple, and&nbsp;sexy.
    <div class='space'></div>
    To learn more about Madison, visit <a href='madisonmoriartydesigns.squarespace.com'>madisonmoriartydesigns.squarespace.com</a>
    or on Instagram at <a href='https://instagram.com/madisonmoriartydesigns'>madisonmoriartydesigns</a>.`
  },
  'Maya Tirumurti': {
    image: 'maya.jpg',
    desc: `Maya Tirumurti is a third year design student at UC Davis. She employs her background in studio art to create wearable pieces that are inspired by self reflective processes and her interaction with memory. Apart from fashion design, Maya is one of the founders of Davis Art Collective and she also works with the UCD Basement Gallery in helping curate a space for artists in the Davis community. In her free time she enjoys experimenting with video art and music. You can learn more about Maya’s projects at <a href='https://mctirumurti.wixsite.com/m4ya'>https://mctirumurti.wixsite.com/m4ya</a>`
  },
  'Qi Chen': {
    image: 'qi.png',
    desc: `Qi Chen is a designer and scientist who investigates and innovates clothing based on Chinese traditional design elements and modern fashion design for both men and women that are interested in inheritage of traditional arts and&nbsp;properties.
    <div class='space'></div>
    She is passionate about creating new trends that arise from old fashion to create possibilities for re-illumination of special designs that are worth appreciating. Her background in Neuroscience also inspires herself to add elements from the macro and micro world of nature into her&nbsp;designs.`
  },
  'Siuyan Wong': {
    image: 'siuyan.jpg',
    desc: `Siuyan Wong is a senior design major student whose primary focus on fashion and interior design at UC DAVIS. She has been interested in fashion since she was a little kid and first got hooked on sewing in her first year of middle school in Hong Kong. Because of her love for fashion, she took courses in fashion merchandising, but what she loved most was designing clothes and making it a real piece to go to fashion&nbsp;shows.`
  },
  'Vania Sutandi': {
    image: 'vania.jpg',
    desc: `Vania Sutandi B.A., University of California, Davis, is a designer who creates clothing with environmentally sustainable processes. She has taken technical fashion design classes such as pattern making and draping, experimental fashion design, functional apparel design, and is now working on a capsule signature collection. She also has experience in textile surface design, especially in making patterns and resists. Furthermore, she has experience in design research during an instructor-led project on children’s protective face masks that focuses on adjustability and&nbsp;comfort.`
  },
  'Yuxin Mao': {
    image: 'yuxin.jpg',
    desc: `Yuxin Mao is an undergraduate at UC Davis. He is a fashion and industrial designer who focuses on utilitarian designs in both urban and organic environments. His upcycled and sustainable clothing designs have been shown and sold in multiple art shows in California. Additionally, his textile collection was shown in the UC Davis Design Museum. His interests within the design field include 3D modeling, product development, product testing, technical outdoor clothing. Other interests, building motorbikes, marksmanship, mountain biking and other outdoor&nbsp;sports.`
  },
  'Zhaoran Li': {
    image: 'zhaoran.jpg',
    desc: `Zhaoran Li is a fashion designer and also a B.A. from the University of California, Davis. She investigates and innovates kids’ apparel based on interesting fashion elements by incorporating unique manipulations with comfort. She is passionate about creating new ideations and aspects from all kinds of elements from both the real world and digital world that can provide her unique inspirations for her designs. Her textile design background also offers her unique and fun fabric pattern designs that can incorporate into her fashion design, such as silkscreen print, Mimaki print, natural dye, and solar fast dye&nbsp;techniques.`
  }
}

let designerBlock = document.getElementsByClassName('designer-block')[0];
for (let d in designers)
  designerBlock.innerHTML += `
    <div class='designer'>
      <div class='name'>
        ${d}
      </div>
      <div class='inner'>
        <div class='portrait-frame'>
          <div class='portrait' style='background-image: url("/media/designers/${designers[d].image}");background-size: cover;background-position: center;'></div>
        </div>
        <div class='right'>
          <div class='content'>
            ${designers[d].desc}
          </div>
        </div>
      </div>
    </div>`;
