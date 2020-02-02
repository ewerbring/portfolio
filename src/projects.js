import AframeVid from "./Assets2/Aframe/aframe2.webm";
import GrimPub from "./Assets2/Grimeton/print.gif";
import Grim0 from "./Assets2/Grimeton/brand.jpg";
import Grim1 from "./Assets2/Grimeton/poster3.gif";
import Grim2 from "./Assets2/Grimeton/card1.jpg";
import Grim3 from "./Assets2/Grimeton/card2.jpg";
import Grim4 from "./Assets2/Grimeton/4.png";
import Grim5 from "./Assets2/Grimeton/5.png";
import Grim6 from "./Assets2/Grimeton/6.png";
import Grim7 from "./Assets2/Grimeton/7.png";
import Grim8 from "./Assets2/Grimeton/8.png";
import Grimp1 from "./Assets2/Grimeton/Publication/1.png";
import Grimp2 from "./Assets2/Grimeton/Publication/1a.jpg";
import Grimp3 from "./Assets2/Grimeton/Publication/1b.jpg";
import Grimp4 from "./Assets2/Grimeton/Publication/1c.jpg";
import Grimp5 from "./Assets2/Grimeton/Publication/1d.jpg";
import Grimp6 from "./Assets2/Grimeton/Publication/1e.jpg";
import Grimp7 from "./Assets2/Grimeton/Publication/1f.jpg";
import Grimp8 from "./Assets2/Grimeton/Publication/2.jpg";
import Grimp9 from "./Assets2/Grimeton/Publication/3.jpg";

import Arch1 from ".//Assets2/Archrenderings/arch1.png";
import ArchVid2 from "./Assets2/Archrenderings/arch3.webm";
import SketchupVid from ".//Assets2/Sketchup/b.webm";
import BlockGif from "./Assets2/Waterman/montage_12.gif";
import CosmosGif from "./Assets2/Cosmos/cgif.gif";
import fSpecimen from "./Assets2/Falconer/specimen4.gif";
import testletter from "./Assets2/shoot/a.mp4";
import strangeVid from "./Assets2/StrangeLoops/Strangeloop2.webm";
import spaceVid from "./Assets2/Spacestories/Space3.webm";
import s1 from "./Assets2/stadium/s1.jpg";
import s2 from "./Assets2/stadium/s2.jpg";
import s3 from "./Assets2/stadium/s3.jpg";
import s4 from "./Assets2/stadium/s4.jpg";
import s5 from "./Assets2/stadium/s5.jpg";
import s6 from "./Assets2/stadium/s6.jpg";
import s7 from "./Assets2/stadium/sk1.jpg";
import s8 from "./Assets2/stadium/sk2.jpg";
import s9 from "./Assets2/stadium/sk3.jpg";
import s10 from "./Assets2/stadium/sk4.jpg";

import gif1 from "./Assets2/misc/stamps.gif";
import dinnerVid from "./Assets2/DinnerParty/dinnerTest.webm";

export default [
  {
    type: "image",
    filter: "swim",
    id: "Grimeton",
    titleClass: "projectTitle",
    ingress: "",
    name: "*Grimeton",
    year: 2018,
    video: [testletter],
    counter: 0,
    image: [Grim1, Grim2, Grim3, Grim4, Grim5, Grim6, Grim7, Grim8, Grim0],
    imageM: [
      { original: Grim0 },

      { original: Grim2 },
      { original: Grim3 },
      { original: Grim4 },
      { original: Grim5 },
      { original: Grim6 },
      { original: Grim7 },
      { original: Grim8 },
      { original: Grim1 }
    ],
    Grim2,

    technologies: "Identity",
    description: `Grimeton Radiostation is a radio station located outside Varberg on the Swedish west coast. It was essential for Scandinavia during world war II. The longwave radio transmitter was during periods the only way for Scandinavia to communicate with the US.

    This project is a fictive brand identity for the radio station. I looked at the radio towers and found some patterns and structures that I translated into graphics. The typeface I've been working with is called GT Cinetype, by the type foundry Grilli Type. `
  },
  {
    type: "image",
    filter: "swim",
    id: "Grimeton2",
    titleClass: "projectTitle",
    ingress: "",
    name: "*Grimeton Publication",
    year: 2018,
    video: [],
    counter: 0,
    image: [Grimp1, Grimp2, Grimp3, Grimp4, Grimp5, Grimp6, Grimp7, Grimp8],
    imageM: [
      { original: Grimp1 },
      { original: Grimp2 },
      { original: Grimp3 },
      { original: Grimp4 },
      { original: Grimp5 },
      { original: Grimp6 },
      { original: Grimp7 },
      { original: Grimp8 },
      { original: Grimp9 }
    ],

    technologies: "Identity",
    description: `Grimeton Radio Station (Radiostation in swedish) is located outside Varberg on the Swedish west coast. It was very important for Scandinavia during world war II. The long wave radio transmitter was during periods the only ways for Scandinavia to communicate with the US.
    It was added to the Unesco World Heritage List in 2004, with the statement: "Grimeton Radio Station, Varberg is an outstanding monument representing the process of development of communication technology in the period following the First World War."
    In a school assignment, I combined a text about the daily life at Grimeton Radio Station with a general text about Unesco and the mission to preserve important sites around the world.`
  },
  {
    type: "video",
    filter: "deepdive",
    id: "strange",
    titleClass: "projectTitle",
    ingress: "",
    link: "https://archrenderings.herokuapp.com/",
    linkName: "Hack an architecture rendering",
    name: "This should be a park",
    year: 2019,
    video: [ArchVid2],
    // video: "https://player.vimeo.com/video/364928434",
    counter: 0,
    image: [GrimPub],
    imageM: [{ original: Arch1 }],
    technologies: "Website",
    description: `Architectural renderings have very typical aesthetics. It is often a building with people walking, biking, and looking happy in their surroundings. These renderings are commonly used as a “Money Shots” trying to convince someone that this is the right thing to build, or it is used to present an already decided project to the public.

    In my project, I wanted to create a tool for people to build architectural renderings like these on their own. Instead of making the people look happy, I included the possibility to drag and drop people wherever they wanted in the picture, and then add a speech bubble. Another visitor can then respond to this comment, almost like a thread in a forum. In this way, the image can become a canvas for fruitful discussions and critical comments about the project. `
  },
  {
    type: "video",
    filter: "swim",
    id: "blockbook",
    titleClass: "projectTitle",
    ingress: "",
    link: "",
    linkName: "",
    name: "*Web Vr Book",
    year: 2018,
    counter: 0,
    image: [],
    video: [AframeVid],
    imageM: [],

    technologies: "Print",
    description: `3D-Warehouse is an amazing website where you can download all sorts of 3D model and import them directly in the free 3D-modelling software Sketchup. I personally used this a lot while working as an interior architect, visualizing how retail environments could look like. The warehouse is open source, and anyone can download or upload models to use.

     In this project, I chose four texts that I found on the internet that all are related to materialistic things. I visualized the texts with models I found in the library, and then created a narrative so that the user can follow the text with the visuals.
     
     I coded a website with a direct link to the model and an audio file. If the user would like to download my model and edit it themselves they are very welcome to. The website can be found here. Download the model to Biggie Smalls Juicy here.`
  },

  {
    type: "image",
    filter: "swim",
    id: "Block",
    titleClass: "projectTitle",
    ingress: "",
    name: "*Sisyphos Book",
    year: 2018,
    video: [],
    counter: 0,
    image: [BlockGif],
    imageM: [{ original: BlockGif }],
    Grim2,

    technologies: "Identity",
    description: `Grimeton Radio Station (Radiostation in swedish) is located outside Varberg on the Swedish west coast. It was very important for Scandinavia during world war II. The long wave radio transmitter was during periods the only ways for Scandinavia to communicate with the US.
    It was added to the Unesco World Heritage List in 2004, with the statement: "Grimeton Radio Station, Varberg is an outstanding monument representing the process of development of communication technology in the period following the First World War."
    In a school assignment, I combined a text about the daily life at Grimeton Radio Station with a general text about Unesco and the mission to preserve important sites around the world.`
  },

  {
    type: "image",
    filter: "swim",
    id: "falconer",
    titleClass: "projectTitle",
    ingress: "",
    name: "*Cryptic Font",
    year: 2018,
    video: [],
    counter: 0,
    image: [fSpecimen],
    imageM: [{ original: fSpecimen }],

    technologies: "Print",
    description: `3D-Warehouse is an amazing website where you can download all sorts of 3D model and import them directly in the free 3D-modelling software Sketchup. I personally used this a lot while working as an interior architect, visualizing how retail environments could look like. The warehouse is open source, and anyone can download or upload models to use.

     In this project, I chose four texts that I found on the internet that all are related to materialistic things. I visualized the texts with models I found in the library, and then created a narrative so that the user can follow the text with the visuals.
     
     I coded a website with a direct link to the model and an audio file. If the user would like to download my model and edit it themselves they are very welcome to. The website can be found here. Download the model to Biggie Smalls Juicy here.`
  },
  {
    type: "video",
    filter: "deepdive",
    id: "dinner",
    titleClass: "projectTitle",
    ingress: "",
    link: "https://www.blink.se/work/stadium.html",
    linkName: "Visit Calles Dinnerparty",
    name: "*An essay dinner party",
    year: 2020,
    video: [dinnerVid],
    counter: 0,
    image: [],
    imageM: [],

    technologies: "Print",
    description: `3D-Warehouse is an amazing website where you can download all sorts of 3D model and import them directly in the free 3D-modelling software Sketchup. I personally used this a lot while working as an interior architect, visualizing how retail environments could look like. The warehouse is open source, and anyone can download or upload models to use.

     In this project, I chose four texts that I found on the internet that all are related to materialistic things. I visualized the texts with models I found in the library, and then created a narrative so that the user can follow the text with the visuals.
     
     I coded a website with a direct link to the model and an audio file. If the user would like to download my model and edit it themselves they are very welcome to. The website can be found here. Download the model to Biggie Smalls Juicy here.`
  },
  {
    type: "video",
    filter: "deepdive",
    id: "space",
    link: "https://ewerbring.github.io/Space/",
    linkName: "Link to Space Stories",
    titleClass: "projectTitle",
    ingress: "",
    name: "*Space stories",
    year: 2019,
    video: [spaceVid],

    // video: "https://player.vimeo.com/video/386256782",
    counter: 0,
    image: [GrimPub],
    imageM: [],
    technologies: "Website",
    description: `This project is called ”So strange loops”. The initial intention was to make an infographic about the subject. I soon realised it is very complicated, so it ended up beeing a catalog of my attempts to understand what it actually is. I interviewed Cem Eskinazi, who is an alumni of this program. I then made a website where where our conversation is presented

  The user is encouraged to click through the interview. In some places, when our conversation is going off on a sidetrack, there are links to the things we are talking about. If the user looks carefully and reads the interview, they can find pockets of information. 
  
  Here we are talking about rock paper and scissor. Rock beats scissor, scissor beats paper, and paper beats rock again. This is a passion project of one guy extending that to 101 versions. 
  
  If they find their way to the end of the website it loops again, but with a few new layers on top of it. In the background one of the strangest loop we have is showed, our ecosystem.
  
  I think this way of unpacking information, serving it with friction, builds relation to the content. `
  },

  {
    type: "image",
    filter: "swim",
    id: "cosmos",
    titleClass: "projectTitle",
    ingress: "",
    name: "*Cosmos Book",
    year: 2018,
    video: [],
    counter: 0,
    image: [CosmosGif],
    imageM: [{ original: CosmosGif }],

    technologies: "Print",
    description: `3D-Warehouse is an amazing website where you can download all sorts of 3D model and import them directly in the free 3D-modelling software Sketchup. I personally used this a lot while working as an interior architect, visualizing how retail environments could look like. The warehouse is open source, and anyone can download or upload models to use.

     In this project, I chose four texts that I found on the internet that all are related to materialistic things. I visualized the texts with models I found in the library, and then created a narrative so that the user can follow the text with the visuals.
     
     I coded a website with a direct link to the model and an audio file. If the user would like to download my model and edit it themselves they are very welcome to. The website can be found here. Download the model to Biggie Smalls Juicy here.`
  },
  {
    type: "image",
    filter: "swim",
    id: "stadium",
    titleClass: "projectTitle",
    ingress: "",
    link: "https://www.blink.se/work/stadium.html",
    linkName: "Look at Blinks website",
    name: "*Stadium Retail Concept",
    year: 2018,
    video: [],
    counter: 0,
    image: [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10],
    imageM: [
      { original: s1 },
      { original: s2 },
      { original: s3 },
      { original: s4 },
      { original: s5 },
      { original: s6 },
      { original: s7 },
      { original: s8 },
      { original: s9 }
    ],

    technologies: "Store Interior",
    description: `3D-Warehouse is an amazing website where you can download all sorts of 3D model and import them directly in the free 3D-modelling software Sketchup. I personally used this a lot while working as an interior architect, visualizing how retail environments could look like. The warehouse is open source, and anyone can download or upload models to use.

     In this project, I chose four texts that I found on the internet that all are related to materialistic things. I visualized the texts with models I found in the library, and then created a narrative so that the user can follow the text with the visuals.
     
     I coded a website with a direct link to the model and an audio file. If the user would like to download my model and edit it themselves they are very welcome to. The website can be found here. Download the model to Biggie Smalls Juicy here.`
  },

  {
    type: "video",

    filter: "deepdive",
    id: "sketchup",
    titleClass: "projectTitle",
    ingress: "",
    link: "https://www.blink.se/work/stadium.html",
    linkName: "Look at the Sketchup Model",
    name: "*Sketchhup Explorations",
    year: 2019,
    video: [SketchupVid],

    // video: "https://player.vimeo.com/video/364928543",
    counter: 0,
    image: [Grim1, Grim2],
    imageM: [],

    technologies: "Sketchup",
    description: `3D-Warehouse is an amazing website where you can download all sorts of 3D model and import them directly in the free 3D-modelling software Sketchup. I personally used this a lot while working as an interior architect, visualizing how retail environments could look like. The warehouse is open source, and anyone can download or upload models to use.

     In this project, I chose four texts that I found on the internet that all are related to materialistic things. I visualized the texts with models I found in the library, and then created a narrative so that the user can follow the text with the visuals.
     
     I coded a website with a direct link to the model and an audio file. If the user would like to download my model and edit it themselves they are very welcome to. The website can be found here. Download the model to Biggie Smalls Juicy here.`
  },

  {
    type: "video",
    filter: "deepdive",
    id: "sdadd",
    titleClass: "projectTitle",
    ingress: "",
    link: "https://www.blink.se/work/stadium.html",
    linkName: "Discover a Strange Loop",
    name: "*strange",
    year: 2019,
    video: [strangeVid],
    counter: 0,
    image: [],
    imageM: [{ original: gif1 }],

    technologies: "Exhibition Design",
    description: `3D-Warehouse is an amazing website where you can download all sorts of 3D model and import them directly in the free 3D-modelling software Sketchup. I personally used this a lot while working as an interior architect, visualizing how retail environments could look like. The warehouse is open source, and anyone can download or upload models to use.

     In this project, I chose four texts that I found on the internet that all are related to materialistic things. I visualized the texts with models I found in the library, and then created a narrative so that the user can follow the text with the visuals.
     
     I coded a website with a direct link to the model and an audio file. If the user would like to download my model and edit it themselves they are very welcome to. The website can be found here. Download the model to Biggie Smalls Juicy here.`
  },
  {
    type: "image",
    filter: "swim",
    id: "misc",
    titleClass: "projectTitle",
    ingress: "",
    name: "*Misc",
    year: 2019,
    video: [],
    counter: 0,
    image: [gif1],
    imageM: [{ original: gif1 }],

    technologies: "Exhibition Design",
    description: `3D-Warehouse is an amazing website where you can download all sorts of 3D model and import them directly in the free 3D-modelling software Sketchup. I personally used this a lot while working as an interior architect, visualizing how retail environments could look like. The warehouse is open source, and anyone can download or upload models to use.

     In this project, I chose four texts that I found on the internet that all are related to materialistic things. I visualized the texts with models I found in the library, and then created a narrative so that the user can follow the text with the visuals.
     
     I coded a website with a direct link to the model and an audio file. If the user would like to download my model and edit it themselves they are very welcome to. The website can be found here. Download the model to Biggie Smalls Juicy here.`
  }

  // {
  //   type: "video",
  //   id: "shoot",
  //   titleClass: "projectTitle",
  //   name: `*"Can you shoot me an alphabet"`,
  //   year: 2018,
  //   video: "https://player.vimeo.com/video/364930588",
  //   counter: 0,
  //   image: [testletter],
  //   imageM: [{ original: fSpecimen }, { original: fSpecimen2 }],
  //   technologies: "Website",
  //   description: `"Can you shoot me an alphabet?" is a project focused on participatory design. I wanted to explore what the interaction would look like when asking players on online browser-based games to collaborate with me to create graphic form.

  //   I played the games Warmerise and Minetest (a free version of Minecraft). In Warmerise, a first-person shooting game I used the chat function to convince other players to not kill me and to shoot letters on the walls. I ended up with an alphabet of letters that has a thicker bottom and thinner top, due to the bullet holes being bigger close to the player and smaller as they were aiming further away.

  //   In Minetest I joined a server and found players that were interested in helping me to build forms. I then took screenshots of some of the forms and letterforms and made an alphabet of it.

  //   For me, the most important part of this project is not the final alphabet but the conversations I had with the other players. If you browse the website attached to the right you can find some of the conversations I had. Sometimes I had to use Google translate while playing.`
  // },
];
