export type TProduct = {
  id: number;
  imageUrl: ImageMetadata | string;
  title: string;
  oldPrice: number;
  newPrice: number;
  soldCount: string;
  colorCircle: string;
  count: number;
  rating: {
    soldCountTitle: string;
  };
  nameAndPrice: {
    titleOther: string;
    subPrice: string;
    advantages: {
      advantage1: {
        title: string;
        icon: ImageMetadata | string;
      };
      advantage2: {
        title: string;
        icon: ImageMetadata | string;
      };
    };
  };
  description: {
    block1: {
      title: string;
      text: string;
    };
    block2: {
      title: string;
      text: string;
    };
    block3: {
      title: string;
      text: string;
    };
    block4: {
      title: string;
      text: string;
    };
  };
  notes: {
    title: string;
    text1: string;
    text2: string;
  };
  reviews: {
    title: string;
    review: string;
    score: string;
    date: string;
    textConfirm: string;
    author: string;
    quantityPeople: string;
    btnTitle: string;
  };
  question: {
    title: string;
    text: {
      oneChunk: string;
      twoChunk: string;
      threeChunk: string;
      forChunk: string;
    };
  };
  comment: {
    author: string;
    date: string;
    text: string;
    btnTitle: string;
  };
}; 