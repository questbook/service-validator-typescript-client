/* tslint:disable */
/* eslint-disable */
/**
 * QuestBook Data Validator
 * Validates data, uploads & pins it to IPFS
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * Maps ID of the field to the answer by the applicant
 * @export
 * @interface GrantApplicationFieldAnswers
 */
export interface GrantApplicationFieldAnswers {
    [key: string]: string | any;

    /**
     * 
     * @type {string}
     * @memberof GrantApplicationFieldAnswers
     */
    'applicantName': string;
    /**
     * 
     * @type {string}
     * @memberof GrantApplicationFieldAnswers
     */
    'applicantEmail': string;
    /**
     * 
     * @type {string}
     * @memberof GrantApplicationFieldAnswers
     */
    'projectName': string;
    /**
     * 
     * @type {string}
     * @memberof GrantApplicationFieldAnswers
     */
    'projectDetails': string;
    /**
     * 
     * @type {string}
     * @memberof GrantApplicationFieldAnswers
     */
    'fundingBreakdown': string;
}
/**
 * 
 * @export
 * @interface GrantApplicationRequest
 */
export interface GrantApplicationRequest {
    /**
     * 
     * @type {string}
     * @memberof GrantApplicationRequest
     */
    'grantId': string;
    /**
     * 
     * @type {string}
     * @memberof GrantApplicationRequest
     */
    'applicantId': string;
    /**
     * 
     * @type {GrantApplicationFieldAnswers}
     * @memberof GrantApplicationRequest
     */
    'fields': GrantApplicationFieldAnswers;
    /**
     * 
     * @type {Array<GrantApplicationRequestMembers>}
     * @memberof GrantApplicationRequest
     */
    'members': Array<GrantApplicationRequestMembers>;
    /**
     * 
     * @type {Array<GrantProposedMilestone>}
     * @memberof GrantApplicationRequest
     */
    'milestones'?: Array<GrantProposedMilestone>;
}
/**
 * 
 * @export
 * @interface GrantApplicationRequestMembers
 */
export interface GrantApplicationRequestMembers {
    /**
     * 
     * @type {string}
     * @memberof GrantApplicationRequestMembers
     */
    'details': string;
}
/**
 * 
 * @export
 * @interface GrantApplicationUpdate
 */
export interface GrantApplicationUpdate {
    /**
     * 
     * @type {string}
     * @memberof GrantApplicationUpdate
     */
    'details'?: string;
    /**
     * 
     * @type {Array<GrantProposedMilestone>}
     * @memberof GrantApplicationUpdate
     */
    'milestones'?: Array<GrantProposedMilestone>;
    /**
     * 
     * @type {string}
     * @memberof GrantApplicationUpdate
     */
    'feedback'?: string;
}
/**
 * 
 * @export
 * @interface GrantCreateRequest
 */
export interface GrantCreateRequest {
    /**
     * 
     * @type {string}
     * @memberof GrantCreateRequest
     */
    'title': string;
    /**
     * 
     * @type {string}
     * @memberof GrantCreateRequest
     */
    'summary': string;
    /**
     * 
     * @type {string}
     * @memberof GrantCreateRequest
     */
    'details': string;
    /**
     * Deadline of the application
     * @type {string}
     * @memberof GrantCreateRequest
     */
    'deadline'?: string;
    /**
     * 
     * @type {GrantCreateRequestReward}
     * @memberof GrantCreateRequest
     */
    'reward': GrantCreateRequestReward;
    /**
     * 
     * @type {string}
     * @memberof GrantCreateRequest
     */
    'creatorId': string;
    /**
     * the workspace the grant is from
     * @type {string}
     * @memberof GrantCreateRequest
     */
    'workspaceId': string;
    /**
     * 
     * @type {Array<GrantField>}
     * @memberof GrantCreateRequest
     */
    'fields': Array<GrantField>;
}
/**
 * 
 * @export
 * @interface GrantCreateRequestReward
 */
export interface GrantCreateRequestReward {
    /**
     * 
     * @type {number}
     * @memberof GrantCreateRequestReward
     */
    'committed': number;
    /**
     * ID of the network
     * @type {string}
     * @memberof GrantCreateRequestReward
     */
    'asset': string;
}
/**
 * 
 * @export
 * @interface GrantField
 */
export interface GrantField {
    /**
     * 
     * @type {string}
     * @memberof GrantField
     */
    'id': string;
    /**
     * Human readable title of the field
     * @type {string}
     * @memberof GrantField
     */
    'title': string;
    /**
     * 
     * @type {string}
     * @memberof GrantField
     */
    'inputType': GrantFieldInputTypeEnum;
    /**
     * Constraint possible inputs for this field
     * @type {Array<string>}
     * @memberof GrantField
     */
    'enum'?: Array<string>;
}

export const GrantFieldInputTypeEnum = {
    ShortForm: 'short-form',
    LongForm: 'long-form',
    Numeric: 'numeric'
} as const;

export type GrantFieldInputTypeEnum = typeof GrantFieldInputTypeEnum[keyof typeof GrantFieldInputTypeEnum];

/**
 * 
 * @export
 * @interface GrantProposedMilestone
 */
export interface GrantProposedMilestone {
    /**
     * 
     * @type {string}
     * @memberof GrantProposedMilestone
     */
    'title': string;
    /**
     * 
     * @type {number}
     * @memberof GrantProposedMilestone
     */
    'amount': number;
}
/**
 * 
 * @export
 * @interface GrantUpdateRequest
 */
export interface GrantUpdateRequest {
    /**
     * 
     * @type {string}
     * @memberof GrantUpdateRequest
     */
    'details'?: string;
    /**
     * Deadline of the application
     * @type {string}
     * @memberof GrantUpdateRequest
     */
    'deadline'?: string;
    /**
     * 
     * @type {Array<GrantField>}
     * @memberof GrantUpdateRequest
     */
    'fields'?: Array<GrantField>;
}
/**
 * 
 * @export
 * @interface InlineResponse200
 */
export interface InlineResponse200 {
    /**
     * IPFS hash of the uploaded grant
     * @type {string}
     * @memberof InlineResponse200
     */
    'ipfsHash': string;
    /**
     * http url that can be used to fetch the uploaded grant file
     * @type {string}
     * @memberof InlineResponse200
     */
    'url': string;
}
/**
 * 
 * @export
 * @interface ModelError
 */
export interface ModelError {
    /**
     * 
     * @type {number}
     * @memberof ModelError
     */
    'statusCode': number;
    /**
     * Specific description of the error
     * @type {string}
     * @memberof ModelError
     */
    'error': string;
    /**
     * What the error was
     * @type {string}
     * @memberof ModelError
     */
    'message': string;
    /**
     * Some extra information about the error
     * @type {object}
     * @memberof ModelError
     */
    'data'?: object;
}
/**
 * 
 * @export
 * @interface SocialItem
 */
export interface SocialItem {
    /**
     * 
     * @type {string}
     * @memberof SocialItem
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof SocialItem
     */
    'value': string;
}
/**
 * 
 * @export
 * @interface WorkspaceCreateRequest
 */
export interface WorkspaceCreateRequest {
    /**
     * 
     * @type {string}
     * @memberof WorkspaceCreateRequest
     */
    'title': string;
    /**
     * 
     * @type {string}
     * @memberof WorkspaceCreateRequest
     */
    'about': string;
    /**
     * IPFS hash of the logo of the workspace
     * @type {string}
     * @memberof WorkspaceCreateRequest
     */
    'logoIpfsHash': string;
    /**
     * IPFS hash of the cover of the workspace
     * @type {string}
     * @memberof WorkspaceCreateRequest
     */
    'coverImageIpfsHash'?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkspaceCreateRequest
     */
    'creatorId': string;
    /**
     * 
     * @type {Array<string>}
     * @memberof WorkspaceCreateRequest
     */
    'supportedNetworks': Array<string>;
    /**
     * 
     * @type {Array<SocialItem>}
     * @memberof WorkspaceCreateRequest
     */
    'socials': Array<SocialItem>;
}
/**
 * 
 * @export
 * @interface WorkspaceUpdateRequest
 */
export interface WorkspaceUpdateRequest {
    /**
     * 
     * @type {string}
     * @memberof WorkspaceUpdateRequest
     */
    'title'?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkspaceUpdateRequest
     */
    'about'?: string;
    /**
     * IPFS hash of the logo of the workspace
     * @type {string}
     * @memberof WorkspaceUpdateRequest
     */
    'logoIpfsHash'?: string;
    /**
     * IPFS hash of the cover of the workspace
     * @type {string}
     * @memberof WorkspaceUpdateRequest
     */
    'coverImageIpfsHash'?: string;
    /**
     * 
     * @type {Array<SocialItem>}
     * @memberof WorkspaceUpdateRequest
     */
    'socials'?: Array<SocialItem>;
}

/**
 * ValidationApi - axios parameter creator
 * @export
 */
export const ValidationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Validate, upload & pin grant application data to IPFS
         * @param {GrantApplicationRequest} [grantApplicationRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        validateGrantApplicationCreate: async (grantApplicationRequest?: GrantApplicationRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/validate/grant-application-create`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(grantApplicationRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Validate, upload & pin grant application data to IPFS
         * @param {GrantApplicationUpdate} [grantApplicationUpdate] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        validateGrantApplicationUpdate: async (grantApplicationUpdate?: GrantApplicationUpdate, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/validate/grant-application-update`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(grantApplicationUpdate, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Validate, upload & pin grant to IPFS
         * @param {GrantCreateRequest} [grantCreateRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        validateGrantCreate: async (grantCreateRequest?: GrantCreateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/validate/grant-create`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(grantCreateRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Validate & update grant to IPFS
         * @param {GrantUpdateRequest} [grantUpdateRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        validateGrantUpdate: async (grantUpdateRequest?: GrantUpdateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/validate/grant-update`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(grantUpdateRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Validate, upload & pin workspace data to IPFS
         * @param {WorkspaceCreateRequest} [workspaceCreateRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        validateWorkspaceCreate: async (workspaceCreateRequest?: WorkspaceCreateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/validate/workspace-create`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(workspaceCreateRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Validate, upload & pin workspace patch data to IPFS
         * @param {WorkspaceUpdateRequest} [workspaceUpdateRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        validateWorkspaceUpdate: async (workspaceUpdateRequest?: WorkspaceUpdateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/validate/workspace-update`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(workspaceUpdateRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ValidationApi - functional programming interface
 * @export
 */
export const ValidationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ValidationApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Validate, upload & pin grant application data to IPFS
         * @param {GrantApplicationRequest} [grantApplicationRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async validateGrantApplicationCreate(grantApplicationRequest?: GrantApplicationRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse200>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.validateGrantApplicationCreate(grantApplicationRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Validate, upload & pin grant application data to IPFS
         * @param {GrantApplicationUpdate} [grantApplicationUpdate] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async validateGrantApplicationUpdate(grantApplicationUpdate?: GrantApplicationUpdate, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse200>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.validateGrantApplicationUpdate(grantApplicationUpdate, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Validate, upload & pin grant to IPFS
         * @param {GrantCreateRequest} [grantCreateRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async validateGrantCreate(grantCreateRequest?: GrantCreateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse200>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.validateGrantCreate(grantCreateRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Validate & update grant to IPFS
         * @param {GrantUpdateRequest} [grantUpdateRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async validateGrantUpdate(grantUpdateRequest?: GrantUpdateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse200>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.validateGrantUpdate(grantUpdateRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Validate, upload & pin workspace data to IPFS
         * @param {WorkspaceCreateRequest} [workspaceCreateRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async validateWorkspaceCreate(workspaceCreateRequest?: WorkspaceCreateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse200>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.validateWorkspaceCreate(workspaceCreateRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Validate, upload & pin workspace patch data to IPFS
         * @param {WorkspaceUpdateRequest} [workspaceUpdateRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async validateWorkspaceUpdate(workspaceUpdateRequest?: WorkspaceUpdateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse200>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.validateWorkspaceUpdate(workspaceUpdateRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ValidationApi - factory interface
 * @export
 */
export const ValidationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ValidationApiFp(configuration)
    return {
        /**
         * 
         * @summary Validate, upload & pin grant application data to IPFS
         * @param {GrantApplicationRequest} [grantApplicationRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        validateGrantApplicationCreate(grantApplicationRequest?: GrantApplicationRequest, options?: any): AxiosPromise<InlineResponse200> {
            return localVarFp.validateGrantApplicationCreate(grantApplicationRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Validate, upload & pin grant application data to IPFS
         * @param {GrantApplicationUpdate} [grantApplicationUpdate] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        validateGrantApplicationUpdate(grantApplicationUpdate?: GrantApplicationUpdate, options?: any): AxiosPromise<InlineResponse200> {
            return localVarFp.validateGrantApplicationUpdate(grantApplicationUpdate, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Validate, upload & pin grant to IPFS
         * @param {GrantCreateRequest} [grantCreateRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        validateGrantCreate(grantCreateRequest?: GrantCreateRequest, options?: any): AxiosPromise<InlineResponse200> {
            return localVarFp.validateGrantCreate(grantCreateRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Validate & update grant to IPFS
         * @param {GrantUpdateRequest} [grantUpdateRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        validateGrantUpdate(grantUpdateRequest?: GrantUpdateRequest, options?: any): AxiosPromise<InlineResponse200> {
            return localVarFp.validateGrantUpdate(grantUpdateRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Validate, upload & pin workspace data to IPFS
         * @param {WorkspaceCreateRequest} [workspaceCreateRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        validateWorkspaceCreate(workspaceCreateRequest?: WorkspaceCreateRequest, options?: any): AxiosPromise<InlineResponse200> {
            return localVarFp.validateWorkspaceCreate(workspaceCreateRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Validate, upload & pin workspace patch data to IPFS
         * @param {WorkspaceUpdateRequest} [workspaceUpdateRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        validateWorkspaceUpdate(workspaceUpdateRequest?: WorkspaceUpdateRequest, options?: any): AxiosPromise<InlineResponse200> {
            return localVarFp.validateWorkspaceUpdate(workspaceUpdateRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ValidationApi - object-oriented interface
 * @export
 * @class ValidationApi
 * @extends {BaseAPI}
 */
export class ValidationApi extends BaseAPI {
    /**
     * 
     * @summary Validate, upload & pin grant application data to IPFS
     * @param {GrantApplicationRequest} [grantApplicationRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ValidationApi
     */
    public validateGrantApplicationCreate(grantApplicationRequest?: GrantApplicationRequest, options?: AxiosRequestConfig) {
        return ValidationApiFp(this.configuration).validateGrantApplicationCreate(grantApplicationRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Validate, upload & pin grant application data to IPFS
     * @param {GrantApplicationUpdate} [grantApplicationUpdate] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ValidationApi
     */
    public validateGrantApplicationUpdate(grantApplicationUpdate?: GrantApplicationUpdate, options?: AxiosRequestConfig) {
        return ValidationApiFp(this.configuration).validateGrantApplicationUpdate(grantApplicationUpdate, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Validate, upload & pin grant to IPFS
     * @param {GrantCreateRequest} [grantCreateRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ValidationApi
     */
    public validateGrantCreate(grantCreateRequest?: GrantCreateRequest, options?: AxiosRequestConfig) {
        return ValidationApiFp(this.configuration).validateGrantCreate(grantCreateRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Validate & update grant to IPFS
     * @param {GrantUpdateRequest} [grantUpdateRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ValidationApi
     */
    public validateGrantUpdate(grantUpdateRequest?: GrantUpdateRequest, options?: AxiosRequestConfig) {
        return ValidationApiFp(this.configuration).validateGrantUpdate(grantUpdateRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Validate, upload & pin workspace data to IPFS
     * @param {WorkspaceCreateRequest} [workspaceCreateRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ValidationApi
     */
    public validateWorkspaceCreate(workspaceCreateRequest?: WorkspaceCreateRequest, options?: AxiosRequestConfig) {
        return ValidationApiFp(this.configuration).validateWorkspaceCreate(workspaceCreateRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Validate, upload & pin workspace patch data to IPFS
     * @param {WorkspaceUpdateRequest} [workspaceUpdateRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ValidationApi
     */
    public validateWorkspaceUpdate(workspaceUpdateRequest?: WorkspaceUpdateRequest, options?: AxiosRequestConfig) {
        return ValidationApiFp(this.configuration).validateWorkspaceUpdate(workspaceUpdateRequest, options).then((request) => request(this.axios, this.basePath));
    }
}


