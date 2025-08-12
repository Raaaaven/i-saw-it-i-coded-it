let huntersContent = {
  "Rumi": {
    "name": "Rumi",
    "description": "Rumi Kang is the fearless leader of the K-pop group HUNTR/X—and a secret half-demon. Raised by a hunter, she now fights demons by night while ruling the stage by day. With her glowing sword and purple hair, she’s all power and presence. Behind the calm face is a girl battling her past, her voice, and a world that wants her silent."
  },
  "Zoey": {
    "name": "Zoey",
    "description": "Zoey is the bubbly maknae of HUNTR/X—lead rapper, lyricist, and knife‑throwing demon hunter. Born in Korea, raised in Burbank, she brings playful energy and heart to the team. Despite being naive at times, her loyalty to Rumi and Mira is fierce—she even agreed to scrap “Takedown” lyrics and stand by Rumi when she lost her voice. Fun-loving, fearless, and always sharp on rhythm and blade."
  },
  "Mira": {
    "name": "Mira",
    "description": "Mira is the sarcastic choreographer and main dancer of HUNTR/X, carrying both visual and rap roles. Known for her blunt honesty and tough exterior, she's the group's 'problem child' turned strategy brain when demons strike.  Wields a magical gokdo polearm to fight demons and can sense spiritual shifts in the Honmoon. Deep down, she fears she’s unworthy—but she lets her strength speak instead of asking permission."
  }
}

const slides = document.querySelectorAll(".slider");
let hunterIds = ['Rumi', 'Zoey', 'Mira'];
let counter = 0;

slides.forEach((slider, index) => {
  slider.style.left = `${index * 200}%`;
});

const prevBtns = () => {
  counter = (counter - 1 + slides.length) % slides.length;
  SliderImage();
};

const nextBtns = () => {
  counter = (counter + 1) % slides.length;
  SliderImage();
};

const SliderImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 200}%)`;
  });
  let currentHunter = hunterIds[counter];
document.querySelector('.hunHead').textContent = huntersContent[currentHunter].name;
document.querySelector('.hunDes').textContent = huntersContent[currentHunter].description; 

};




let rumi = document.getElementById('rumi');
let zoey = document.getElementById('zoey');
let mira = document.getElementById('mira');



const container = document.getElementById("souls-container");
const animations = ["floatA", "floatB", "floatC", "floatD"];

for (let i = 0; i < 10; i++) {
  const soul = document.createElement("div");
  soul.classList.add("soul");

  const anim = animations[Math.floor(Math.random() * animations.length)];
  soul.classList.add(anim);

  soul.style.left = `${Math.random() * 90}%`;
  soul.style.bottom = `${Math.random() * 30}%`;

  soul.style.animationDelay = `${Math.random() * 3}s`;

  container.appendChild(soul);
}

