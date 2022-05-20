import { Offer } from './offer';
import { travel } from './Travels';
import { person } from './person';

export class request {
    id: number;
    id_person: number;
    resourse: string;
    destination: string;
    seats: number;
    date_time: Date;
    active: number;
    ignore_offers: string;

    offer: Offer;
    travel: travel;
    driver: person;
}

