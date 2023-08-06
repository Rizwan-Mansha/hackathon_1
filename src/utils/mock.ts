import { product } from "./types";
import P1 from '/public/Product1.png'
import P2 from '/public/Product2.png'
import P3 from '/public/Product3.png'
import P4 from '/public/Product4.png'
import P5 from '/public/Product5.png'
import P6 from '/public/Product6.png'
import P7 from '/public/Product7.png'
import P8 from '/public/Product8.png'
import P9 from '/public/Product9.png'
import P10 from '/public/Product10.png'
import P11 from '/public/Product11.png'

export const Products:product[] = [
    {
        id: 1,
        name: 'Brushed Raglan Sweatshirt',
        tagline: "Sweater",
        category: 'female',
        price: 195,
        image: P1
    },
    {
        id: 2,
        name: 'Cameryn Sash Tie Dress',
        tagline: "Dress",
        category: 'male',
        price: 545,
        image: P2
    },
    {
        id: 3,
        name: 'Flex Sweatshirt',
        category: 'kids',
        tagline: "Sweater",
        price: 175,
        image: P3
    },
    {
        id: 4,
        name: 'Flex Sweatpants',
        tagline: "Pants",
        category: 'female',
        price: 175,
        image: P4
    },
    {
        id: 5,
        name: 'Pink Fleece Sweatpants',
        tagline: "Pants",
        category: 'male',
        price: 195,
        image: P5
    },
   {
        id: 6,
        name: 'Lite Sweatpants',
        tagline: "Pants",
        category: 'female',
        price: 150,
        image: P6
    }
   , {
        id: 7,
        name: 'Imperial Alpaca Hoodie',
        tagline: "Jackets",
        category: 'female',
        price: 525,
        image: P7
    }
   , {
        id: 8,
        name: 'Flex Push Button Bomber',
        tagline: "Jackets",
        category: 'female',
        price: 225,
        image: P8
    },
   {
        id: 9,
        name: 'Muscle Tank',
        tagline: "T Shirts",
        category: 'female',
        price: 75,
        image: P9
    }
   , {
        id: 10,
        name: 'Brushed Bomber',
        tagline: "Jackets",
        category: 'female',
        price: 225,
        image: P10
    }
   , {
        id: 11,
        name: 'Raglan Sweatshirt',
        tagline: "Sweater",
        category: 'female',
        price: 150,
        image: P11
    }
];
