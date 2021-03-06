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
 * an object containing references to the source of the error
 */
export interface IssueSource { 
    /**
     * a JSON Pointer [RFC6901] to the associated entity in the request document
     */
    pointer?: string;
    /**
     * a string indicating which URI query parameter caused the issue
     */
    parameter?: string;
    /**
     * a string indicating an example of the right value
     */
    example?: string;
}

