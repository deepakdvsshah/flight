/**
 * Flight Inspiration Search
 *  Before using this API, we recommend you read our **[Authorization Guide](https://developers.amadeus.com/self-service/apis-docs/guides/authorization)** for more information on how to generate an access token.  Please also be aware that our test environment is based on a subset of the production, to see what is included in test please refer to our **[data collection](https://github.com/amadeus4dev/data-collection)**. 
 *
 * The version of the OpenAPI document: 1.0.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * the query parameters for which default values were used are returned here
 */
export interface Defaults { 
    /**
     * the date, or range of dates, on which the flight will depart from the origin. Dates are specified in the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-DD format, e.g. 2017-12-25. Ranges are specified with a comma and are inclusive
     */
    departureDate?: string;
    /**
     * if this parameter is set to true, only one-way flights are considered. If this parameter is not set or set to false, only round-trip flights are considered
     */
    oneWay?: boolean;
    /**
     * exact duration or range of durations of the travel, in days. This parameter must not be set if oneWay is true. Ranges are specified with a comma and are inclusive, e.g. 2,8
     */
    duration?: string;
    /**
     * if this parameter is set to true, only flights going from the origin to the destination with no stop in-between are considered
     */
    nonStop?: boolean;
    /**
     * view the flight destinations by COUNTRY, DATE, DESTINATION, DURATION, or WEEK. View by COUNTRY to get the cheapest flight dates for every country in the given range. View by DATE to get the cheapest flight dates for every departure date in the given range. View by DURATION to get the cheapest flight dates for every departure date and for every duration in the given ranges. View by WEEK to get the cheapest flight destination for every week in the given range of departure dates
     */
    viewBy?: Defaults.ViewByEnum;
}
export namespace Defaults {
    export type ViewByEnum = 'COUNTRY' | 'DATE' | 'DESTINATION' | 'DURATION' | 'WEEK';
    export const ViewByEnum = {
        COUNTRY: 'COUNTRY' as ViewByEnum,
        DATE: 'DATE' as ViewByEnum,
        DESTINATION: 'DESTINATION' as ViewByEnum,
        DURATION: 'DURATION' as ViewByEnum,
        WEEK: 'WEEK' as ViewByEnum
    };
}


