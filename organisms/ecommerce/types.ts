interface Prod {
  id: number;
  name: string;
  price: number;
  color: string;
  colors?: string[];
  sizes?: string[];
  images?: string[];
  imgSrc?: string;
}

export type Product =
  | (Prod & {
      category: string;
    })
  | (Prod & {
      category: 'thobes';
      armStyles?: string[];
    });

export type PropductProp = Product & {
  className?: string;
  children?: React.ReactNode;
};
