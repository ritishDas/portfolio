const achievements = fetchElement('#achievements');

const database = db.achievements.awards;


const awardDiv = gardener({t:'div',
  cn:[ 'flex', 'justify-center', 'flex-wrap']
});

database.forEach(award => {
appendElement(awardDiv, gardener({
    t:'div',
    cn:['m-2', 'px-4', 'border', 'rounded-md', 'w-100'],
    children:[
      {
        t:'h3',
        cn:["font-bold", 'text-2xl', 'my-5'],
        txt:award.title
      },
      {
        t:'span',
        cn:['italic', 'text-gray-600'],
        txt:award.issued
      },
      {
        t:'p',
        cn:['my-2'],
        txt:award.description
      },
      {
        t:'button',
        txt:'Pictures',
        cn:['my-2', 'p-2', 'rounded-md', 'bg-accent-700', 'w-full', 'text-black'],
        onclick:() => {imageViewer(award.pics, 0)}
      }
    ]
  }));
})

replaceElement(achievements, awardDiv);

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
