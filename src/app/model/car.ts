/**
 * Car Rental Webservice
 * This is backend web service for the Car Rental application. For further information, please visit our [Wiki](https://se-2022.atlassian.net/wiki/)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface Car {
    car_id: number;
    car_status: Car.CarStatusEnum;
    chassis_number: string;
    manufacturer: string;
    construction_year: string;
    color: string;
    model: string;
    model_series: string;
    engine_fuel: string;
    engine_fuel_consumption: number;
    engine_performance: number;
    engine_type: string;
    gear_type: string;
    adblue: boolean;
    seats: number;
    price: number;
    currency_symbol: Car.CurrencySymbolEnum;
    picture_link: string;
}
export namespace Car {
    export type CarStatusEnum = 'REPAIR' | 'AVAILABLE' | 'RENTED';
    export const CarStatusEnum = {
        Repair: 'REPAIR' as CarStatusEnum,
        Available: 'AVAILABLE' as CarStatusEnum,
        Rented: 'RENTED' as CarStatusEnum
    };
    export type CurrencySymbolEnum = 'USD' | 'JPY' | 'BGN' | 'CZK' | 'DKK' | 'GBP' | 'HUF' | 'PLN' | 'RON' | 'SEK' | 'CHF' | 'ISK' | 'NOK' | 'HRK' | 'TRY' | 'AUD' | 'BRL' | 'CAD' | 'CNY' | 'HKD' | 'IDR' | 'ILS' | 'INR' | 'KRW' | 'MXN' | 'MYR' | 'NZD' | 'PHP' | 'SGD' | 'THB' | 'ZAR' | 'EUR';
    export const CurrencySymbolEnum = {
        Usd: 'USD' as CurrencySymbolEnum,
        Jpy: 'JPY' as CurrencySymbolEnum,
        Bgn: 'BGN' as CurrencySymbolEnum,
        Czk: 'CZK' as CurrencySymbolEnum,
        Dkk: 'DKK' as CurrencySymbolEnum,
        Gbp: 'GBP' as CurrencySymbolEnum,
        Huf: 'HUF' as CurrencySymbolEnum,
        Pln: 'PLN' as CurrencySymbolEnum,
        Ron: 'RON' as CurrencySymbolEnum,
        Sek: 'SEK' as CurrencySymbolEnum,
        Chf: 'CHF' as CurrencySymbolEnum,
        Isk: 'ISK' as CurrencySymbolEnum,
        Nok: 'NOK' as CurrencySymbolEnum,
        Hrk: 'HRK' as CurrencySymbolEnum,
        Try: 'TRY' as CurrencySymbolEnum,
        Aud: 'AUD' as CurrencySymbolEnum,
        Brl: 'BRL' as CurrencySymbolEnum,
        Cad: 'CAD' as CurrencySymbolEnum,
        Cny: 'CNY' as CurrencySymbolEnum,
        Hkd: 'HKD' as CurrencySymbolEnum,
        Idr: 'IDR' as CurrencySymbolEnum,
        Ils: 'ILS' as CurrencySymbolEnum,
        Inr: 'INR' as CurrencySymbolEnum,
        Krw: 'KRW' as CurrencySymbolEnum,
        Mxn: 'MXN' as CurrencySymbolEnum,
        Myr: 'MYR' as CurrencySymbolEnum,
        Nzd: 'NZD' as CurrencySymbolEnum,
        Php: 'PHP' as CurrencySymbolEnum,
        Sgd: 'SGD' as CurrencySymbolEnum,
        Thb: 'THB' as CurrencySymbolEnum,
        Zar: 'ZAR' as CurrencySymbolEnum,
        Eur: 'EUR' as CurrencySymbolEnum
    };
}


