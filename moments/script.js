const parent = fetchElement('#moments');
const timeline = fetchElement('#timeline');

document.addEventListener('scroll', () => {
  const scrollPos = window.scrollY; // current scroll offset from top
  console.log('Scroll position:', scrollPos);
  timeline.style.height = `${scrollPos + 100}px`;
});

const moments = db.moments;

moments.forEach((moment, index) => {
  const isEven = index % 2 === 0;

  const image = gardener({
    t: 'img',
    attr: { src: `../${moment.photos[0]}` },
    cn: ['w-full', 'object-cover', 'md:w-1/2', 'rounded-lg', 'cursor-pointer', 'shadow-lg'],
    onclick: () => { imageViewer(moment.photos, 0) }
  });

  const textContent = gardener({
    t: 'div',
    cn: ['w-full', 'md:w-1/2', 'p-8'],
    children: [
      {
        t: 'h3',
        cn: ['text-3xl', 'font-bold', 'mb-4'],
        txt: moment.title
      },
      {
        t: 'p',
        cn: ['text-gray-400', 'mb-4'],
        txt: moment.date
      },
      {
        t: 'p',
        cn: ['text-text-700', 'leading-relaxed'],
        txt: moment.description
      }
    ]
  });

  const momentCard = gardener({
    t: 'div',
    cn: ['flex', 'flex-col', 'md:flex-row', 'items-center', 'my-20', 'gap-8'],
  });

  if(isEven) {
  appendElement(momentCard, image);
  appendElement(momentCard, textContent);
  }
  else{
  appendElement(momentCard, textContent);
  appendElement(momentCard, image);
  }

  appendElement(parent, momentCard);
});

function imageViewer(images, imagesliderindex) {
  const parentView = fetchElement('#imageViewer');

  const imageWrapper = gardener({
    t: "div",
    attr:{ id:'imageViewer' },
    cn: [
      "fixed", "top-0", "left-0",
      "w-screen", "h-screen",
      "flex", "justify-center", "items-center",
      "bg-black/80", // dim background
      "z-50"         // ensure it's on top
    ]
  });

  const imageElement = gardener({
    t: "img",
    attr: {
      src: `../${images[imagesliderindex]}`,
      alt: images[imagesliderindex]
    },
    cn: ["max-h-[80vh]", "max-w-[90vw]", "rounded-2xl", "shadow-xl", "transition", "duration-300"]
  });

  const prevButton = gardener({
    t: "button",
    txt: "⟨",
    cn: [
    "cursor-pointer", "absolute", "left-4", "text-white", "text-4xl",
      "bg-black/40", "hover:bg-black/70", "rounded-full",
      "px-4", "py-2", "transition", "duration-200"
    ],
    onclick: () => {
      imageViewer(images, (imagesliderindex - 1 + images.length) % images.length);
      imageElement.attr.src = `../${images[imagesliderindex]}`;
    }
  });

  const nextButton = gardener({
    t: "button",
    txt: "⟩",
    cn: [
     "cursor-pointer", "absolute", "right-4", "text-white", "text-4xl",
      "bg-black/40", "hover:bg-black/70", "rounded-full",
      "px-4", "py-2", "transition", "duration-200"
    ],
    onclick: () => {
      imageViewer(images, (imagesliderindex + 1) % images.length);
      imageElement.attr.src = `../${images[imagesliderindex]}`;
    }
  });

const closeButton = gardener({
  t: "button",
  txt: "×", // cleaner than "close"
  cn: [
    "absolute", "top-4", "right-4",
    "text-white", "text-3xl", "font-bold",
    "bg-black/40", "hover:bg-black/70",
    "rounded-full",
    "w-10", "h-10",
    "flex", "items-center", "justify-center",
    "transition", "duration-200",
    "cursor-pointer", "select-none"
  ],
  onclick: closeSlider
});

  appendElement(imageWrapper, imageElement);
  appendElement(imageWrapper, prevButton);
  appendElement(imageWrapper, nextButton);
  appendElement(imageWrapper, closeButton);

  replaceElement(parentView, imageWrapper);
}

function closeSlider(){
  const parentView = fetchElement('#imageViewer');
  replaceElement(parentView, gardener({
    t:'div',
    attr:{id:'imageViewer'}
  }));
}
