
export interface Moneda {
    id?: string;
    name: string;
    url?: string;
}
export interface Cartera {
    id?: string;
    name: string;
    monedas?: string;
}