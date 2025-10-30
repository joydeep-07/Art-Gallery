import paint1 from "../assets/paintings/paint1.jpg";
import paint2 from "../assets/paintings/paint2.jpg";
import paint3 from "../assets/paintings/paint3.jpg";
import paint4 from "../assets/paintings/paint4.jpg";
import paint5 from "../assets/paintings/paint5.jpg";
import paint6 from "../assets/paintings/paint6.jpg";
import paint7 from "../assets/paintings/paint7.jpg";
import paint8 from "../assets/paintings/paint8.jpg";
import paint9 from "../assets/paintings/paint9.jpg";
import paint10 from "../assets/paintings/paint10.jpg";
import paint11 from "../assets/paintings/paint11.jpg";
import paint12 from "../assets/paintings/paint12.jpg";
import paint13 from "../assets/paintings/paint13.jpg";
import paint14 from "../assets/paintings/paint14.jpg";
import paint15 from "../assets/paintings/paint15.jpg";
import paint16 from "../assets/paintings/paint16.jpg";
import paint17 from "../assets/paintings/paint17.jpg";
import paint18 from "../assets/paintings/paint18.jpg";
import paint19 from "../assets/paintings/paint19.jpg";
import paint20 from "../assets/paintings/paint20.jpg";

const paintings = [
  {
    id: 1,
    image: paint1,
    title: "Whispers of Dawn",
    description:
      "A serene landscape capturing the soft glow of morning light as it touches the quiet hills and rivers, evoking peace, renewal, and the gentle start of a new day.",
    artist: "Elena Marquez",
  },
  {
    id: 2,
    image: paint2,
    title: "The Forgotten Path",
    description:
      "An expressive journey through a misty forest, where every brushstroke feels alive with mystery, nostalgia, and the sense of paths untaken in the heart of nature’s silence.",
    artist: "Noah Sterling",
  },
  {
    id: 3,
    image: paint3,
    title: "Golden Echoes",
    description:
      "A vibrant play of gold and amber tones reflecting the warmth of memory and the timeless beauty of sunlit fields swaying under the calm rhythm of an endless summer.",
    artist: "Ava Ricci",
  },
  {
    id: 4,
    image: paint4,
    title: "Shadows in Bloom",
    description:
      "Dark petals and soft colors intertwine in this captivating piece that reveals beauty within contrast, inviting viewers to find grace even in life’s hidden and uncertain corners.",
    artist: "Liam Adebayo",
  },
  {
    id: 5,
    image: paint5,
    title: "Ocean’s Heartbeat",
    description:
      "A mesmerizing portrayal of waves and currents that seem to pulse with emotion, reminding us of the sea’s eternal rhythm, depth, and untamed, powerful spirit that binds all life.",
    artist: "Sofia Armitage",
  },
//   {
//     id: 6,
//     image: paint6,
//     title: "City Beneath Rain",
//     description:
//       "Raindrops shimmer against city lights, blurring the line between chaos and calm in this atmospheric piece that explores isolation, reflection, and the beauty found in everyday moments.",
//     artist: "Julian Park",
//   },
//   {
//     id: 7,
//     image: paint7,
//     title: "Celestial Garden",
//     description:
//       "A dreamlike fusion of flowers and stars where earthly life meets cosmic wonder, portraying nature as both grounded and infinite, blooming in harmony with the galaxies above.",
//     artist: "Mira Tanaka",
//   },
//   {
//     id: 8,
//     image: paint8,
//     title: "Silent Reverie",
//     description:
//       "Gentle brushwork and muted tones invite quiet contemplation, capturing the stillness of thought and the tender emotions that linger between memory and the soft hum of solitude.",
//     artist: "Ethan Navarro",
//   },
//   {
//     id: 9,
//     image: paint9,
//     title: "Ethereal Drift",
//     description:
//       "Soft blues and whites swirl across the canvas like mist and dreams intertwined, evoking the delicate tension between motion and stillness that defines fleeting, transcendent beauty.",
//     artist: "Clara Beaumont",
//   },
//   {
//     id: 10,
//     image: paint10,
//     title: "Fragments of Light",
//     description:
//       "A geometric exploration of color and perspective, where fractured beams of light form new shapes, reflecting humanity’s endless pursuit to find order within creative chaos.",
//     artist: "Raj Patel",
//   },
//   {
//     id: 11,
//     image: paint11,
//     title: "Garden of Echoes",
//     description:
//       "Every leaf and petal seems alive with whispered memories, creating a lush, immersive world that celebrates the cyclical beauty of growth, decay, and eternal rebirth.",
//     artist: "Amara Nwosu",
//   },
//   {
//     id: 12,
//     image: paint12,
//     title: "The Blue Mirage",
//     description:
//       "Waves of cobalt and sapphire blur together, depicting both the vastness of the sea and the illusions of desire, longing, and reflection that live deep within human emotion.",
//     artist: "Theo Laurent",
//   },
//   {
//     id: 13,
//     image: paint13,
//     title: "The Ember Veil",
//     description:
//       "An abstract play of fire and shadow where passion meets restraint, symbolizing transformation and the thin line between destruction and rebirth, captured through glowing crimson hues.",
//     artist: "Lydia Campos",
//   },
//   {
//     id: 14,
//     image: paint14,
//     title: "Dreams in Motion",
//     description:
//       "Dynamic brushstrokes capture a sense of fleeting energy and emotion, where imagination spills beyond boundaries and the spirit dances freely in waves of color and movement.",
//     artist: "Nikolai Petrov",
//   },
//   {
//     id: 15,
//     image: paint15,
//     title: "Twilight’s Vein",
//     description:
//       "Deep purples and golds converge in this moody canvas, portraying the last breath of daylight as it fades into night, a moment suspended between endings and beginnings.",
//     artist: "Iris Delgado",
//   },
//   {
//     id: 16,
//     image: paint16,
//     title: "Beyond the Horizon",
//     description:
//       "Soft gradients and hazy landscapes draw the viewer toward the distance, symbolizing the endless human urge to explore, to dream, and to chase what lies beyond reach.",
//     artist: "Owen Clarke",
//   },
//   {
//     id: 17,
//     image: paint17,
//     title: "Symphony of Silence",
//     description:
//       "Every stroke harmonizes into a quiet melody, portraying serenity and introspection through a balanced interplay of light, shadow, and gentle transitions that soothe the wandering mind.",
//     artist: "Isabelle Fontaine",
//   },
//   {
//     id: 18,
//     image: paint18,
//     title: "Threads of Time",
//     description:
//       "Interwoven colors and textures represent moments stitched together, telling stories of change, resilience, and the delicate threads that connect our past to who we are now.",
//     artist: "Marcus Rhee",
//   },
//   {
//     id: 19,
//     image: paint19,
//     title: "Whirl of Dreams",
//     description:
//       "A surreal motion of colors sweeps across the frame, depicting imagination as a storm—wild yet graceful—where fantasy collides with the subtle realities of human thought.",
//     artist: "Ella Novak",
//   },
  {
    id: 20,
    image: paint20,
    title: "Echoes of Tomorrow",
    description:
      "Abstract forms and futuristic tones converge, envisioning a world on the edge of transformation, filled with uncertainty yet radiant with hope and the promise of creation.",
    artist: "Gabriel Lin",
  },
];

export default paintings;
