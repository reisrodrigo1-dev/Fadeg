interface Category {
  id: string;
  name: string;
  url?: any;
  slug: string;
  icon?: string;
  image?: string;
  imageMobile?: string;
  parent: string[];
  featured?: boolean;
  description?: string;
}

export default Category;
