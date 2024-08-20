function getRandomTag() {
  const tags = ['新闻', '咨询', '医疗', '设备'];
  return tags[Math.floor(Math.random() * tags.length)];
}

function getImageForTag(tag) {
  const images = {
    '新闻': 'https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    '咨询': 'https://images.unsplash.com/photo-1528218635780-5952720c9729?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    '医疗': 'https://plus.unsplash.com/premium_photo-1661699717204-82c08926c77a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    '设备': 'https://images.unsplash.com/photo-1630128283451-6a3c40ba26d0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  };
  return images[tag];
}

export const data = [
  {
    id: 1,
    name: 'IVFUSA',
    category: getRandomTag(),
    get image() {
      return getImageForTag(this.category);
    },
    get description() {
      return `最新资讯 - ${this.category}`;
    },
    price: '$$$$',
  },
  {
    id: 2,
    name: 'IVFUSA',
    category: getRandomTag(),
    get image() {
      return getImageForTag(this.category);
    },
    get description() {
      return `最新资讯 - ${this.category}`;
    },
    price: '$',
  },
  {
    id: 3,
    name: 'IVFUSA',
    category: getRandomTag(),
    get image() {
      return getImageForTag(this.category);
    },
    get description() {
      return `最新资讯 - ${this.category}`;
    },
    price: '$$',
  },
  {
    id: 4,
    name: 'IVFUSA',
    category: getRandomTag(),
    get image() {
      return getImageForTag(this.category);
    },
    get description() {
      return `最新资讯 - ${this.category}`;
    },
    price: '$$$',
  },
  {
    id: 5,
    name: 'IVFUSA',
    category: getRandomTag(),
    get image() {
      return getImageForTag(this.category);
    },
    get description() {
      return `最新资讯 - ${this.category}`;
    },
    price: '$$',
  },
  {
    id: 6,
    name: 'IVFUSA',
    category: getRandomTag(),
    get image() {
      return getImageForTag(this.category);
    },
    get description() {
      return `最新资讯 - ${this.category}`;
    },
    price: '$$$',
  },
  {
    id: 7,
    name: 'IVFUSA',
    category: getRandomTag(),
    get image() {
      return getImageForTag(this.category);
    },
    get description() {
      return `最新资讯 - ${this.category}`;
    },
    price: '$$$$',
  },
  {
    id: 8,
    name: 'IVFUSA',
    category: getRandomTag(),
    get image() {
      return getImageForTag(this.category);
    },
    get description() {
      return `最新资讯 - ${this.category}`;
    },
    price: '$',
  },
  {
    id: 9,
    name: 'IVFUSA',
    category: getRandomTag(),
    get image() {
      return getImageForTag(this.category);
    },
    get description() {
      return `最新资讯 - ${this.category}`;
    },
    price: '$$',
  },
  {
    id: 10,
    name: 'IVFUSA',
    category: getRandomTag(),
    get image() {
      return getImageForTag(this.category);
    },
    get description() {
      return `最新资讯 - ${this.category}`;
    },
    price: '$$$',
  },
  {
    id: 11,
    name: 'IVFUSA',
    category: getRandomTag(),
    get image() {
      return getImageForTag(this.category);
    },
    get description() {
      return `最新资讯 - ${this.category}`;
    },
    price: '$$$$',
  },
  {
    id: 12,
    name: 'IVFUSA',
    category: getRandomTag(),
    get image() {
      return getImageForTag(this.category);
    },
    get description() {
      return `最新资讯 - ${this.category}`;
    },
    price: '$',
  },
  {
    id: 13,
    name: 'IVFUSA',
    category: getRandomTag(),
    get image() {
      return getImageForTag(this.category);
    },
    get description() {
      return `最新资讯 - ${this.category}`;
    },
    price: '$$',
  },
  {
    id: 14,
    name: 'IVFUSA',
    category: getRandomTag(),
    get image() {
      return getImageForTag(this.category);
    },
    get description() {
      return `最新资讯 - ${this.category}`;
    },
    price: '$$$$',
  },
  {
    id: 15,
    name: 'IVFUSA',
    category: getRandomTag(),
    get image() {
      return getImageForTag(this.category);
    },
    get description() {
      return `最新资讯 - ${this.category}`;
    },
    price: '$',
  },
  {
    id: 16,
    name: 'IVFUSA',
    category: getRandomTag(),
    get image() {
      return getImageForTag(this.category);
    },
    get description() {
      return `最新资讯 - ${this.category}`;
    },
    price: '$$$',
  },
];
