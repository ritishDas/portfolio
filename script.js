{
  const skillsparent = fetchElement("#skills");

  let newElement;
  newElement = gardener({ t:'div',
    cn:['flex', 'justify-around', 'm-10', 'p-5', 'rounded-md', 'flex-wrap', 'space-y-5'] 
  });

  let skills = db.skills;
  console.log(skills);
  for(let key in skills) {

    let tempElement = gardener({ t:'div',
      cn:['w-3/10', 'p-3', 'bg-white', 'rounded-md'] 
    });


    let skillList =  gardener({ t:'div',
      cn:['flex', 'flex-wrap', 'gap-2','p-2', 'mt-2'] 
    });

    skills[key].forEach(skill => {
      appendElement(skillList, gardener({ 
        t:'span', 
        txt: skill, 
        cn:['p-0.5', 'bg-gray-300', 'rounded-lg'] 
      }))
    });

    appendElement(tempElement, gardener({ 
      t:'h3', 
      cn:['font-bold', 'text-center', 'text-lg'], 
      txt: key 
    }));

    appendElement(tempElement, skillList);

    appendElement(newElement, tempElement);
  }

  replaceElement(skillsparent, newElement);

}

const featuredParent = fetchElement("#featured");
const container = gardener({
  t:'div',
  cn:['flex', 'justify-around']
});

db.featured.forEach( featured => {
  const card = gardener({
    t:'div',
    cn:['w-3/10', 'border', 'bg-white'],
    children:[
      {
        t:'img',
        cn:['w-full', 'h-80', 'object-cover'],
        attr:{
          src:featured.img,
          alt:featured.title
        }
      },
      {
        t:'div',
        cn:['p-4'],
        children:[
          {
            t:'h3',
            cn:['font-bold', 'text-lg', 'mt-2'],
            txt:featured.title
          },
          {
            t:'p',
            cn:['mt-1', 'text-sm'],
            txt:featured.description
          },
          {
            t:'a',
            cn:['p-2', 'border', 'hover:bg-black', 'hover:text-white', 'w-full', 'block', 'text-center', 'mt-4', 'rounded-md'],
            attr:{
              href:featured.link
            },
            txt:"Learn More"
          }
        ]
      }
    ]
  });

  appendElement(container, card);
})

replaceElement(featuredParent, container);
