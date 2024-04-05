export type CardProductType = {
    product: {
        id: number;
        title: string;
        price: number;
        image: string | any;
        categories: string[];
        quantity: number;
    };
    };