const INITIAL_STATE = {
  sections: [
    {
      title: "Mobilni telefoni",
      imageUrl: process.env.PUBLIC_URL + "/mobile.jpg",
      id: 1,
      linkUrl: "shop/mobilni"
    },
    {
      title: "Računari",
      imageUrl: process.env.PUBLIC_URL + "/laptop.jpg",
      id: 2,
      linkUrl: "shop/racunari"
    },
    {
      title: "Power Banks",
      imageUrl: process.env.PUBLIC_URL + "/powerbank.jpg",
      id: 3,
      linkUrl: "shop/powerbanks"
    },
    {
      title: "Zvučnici",
      imageUrl: process.env.PUBLIC_URL + "/speaker.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/zvucnici"
    },
    {
      title: "LED",
      imageUrl: process.env.PUBLIC_URL + "/led.jpg",
      size: "large",
      id: 5,
      linkUrl: "shop/led"
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
