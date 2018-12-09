export class Card {
    card_id: number;
    card_name: string;
    companies : Company[];
    categories: string;
    description: string;
    image_front: string|any;
    tags: any;



}

export class Company {
  company_id: number;
  company_name: string;
  locations: any;

}



