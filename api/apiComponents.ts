/**
 * Generated by @openapi-codegen
 *
 * @version 1.0.0
 */
import * as reactQuery from "@tanstack/react-query";
import { useApiContext, ApiContext } from "./apiContext";
import type * as Fetcher from "./apiFetcher";
import { apiFetch } from "./apiFetcher";
import type * as Responses from "./apiResponses";

export type CubeAcademyLoginError = Fetcher.ErrorWrapper<{
  status: 401;
  payload: Responses.Error;
}>;

export type CubeAcademyLoginRequestBody = {
  /**
   * @example test@test.com
   */
  email?: string;
  /**
   * @example <string>
   */
  password?: string;
};

export type CubeAcademyLoginVariables = {
  body?: CubeAcademyLoginRequestBody;
} & ApiContext["fetcherOptions"];

/**
 * Login an existing user
 */
export const fetchCubeAcademyLogin = (
  variables: CubeAcademyLoginVariables,
  signal?: AbortSignal
) =>
  apiFetch<
    Responses.AuthToken,
    CubeAcademyLoginError,
    CubeAcademyLoginRequestBody,
    {},
    {},
    {}
  >({ url: "/api/login", method: "post", ...variables, signal });

/**
 * Login an existing user
 */
export const useCubeAcademyLogin = (
  options?: Omit<
    reactQuery.UseMutationOptions<
      Responses.AuthToken,
      CubeAcademyLoginError,
      CubeAcademyLoginVariables
    >,
    "mutationFn"
  >
) => {
  const { fetcherOptions } = useApiContext();
  return reactQuery.useMutation<
    Responses.AuthToken,
    CubeAcademyLoginError,
    CubeAcademyLoginVariables
  >({
    mutationFn: (variables: CubeAcademyLoginVariables) =>
      fetchCubeAcademyLogin({ ...fetcherOptions, ...variables }),
    ...options,
  });
};

export type CubeAcademyRegisterError = Fetcher.ErrorWrapper<{
  status: 401;
  payload: Responses.Error;
}>;

export type CubeAcademyRegisterRequestBody = {
  /**
   * @example <string>
   */
  name?: string;
  /**
   * @example <email>
   */
  email?: string;
  /**
   * @example <password>
   */
  password?: string;
};

export type CubeAcademyRegisterVariables = {
  body?: CubeAcademyRegisterRequestBody;
} & ApiContext["fetcherOptions"];

/**
 * Register a new user
 */
export const fetchCubeAcademyRegister = (
  variables: CubeAcademyRegisterVariables,
  signal?: AbortSignal
) =>
  apiFetch<
    Responses.AuthToken,
    CubeAcademyRegisterError,
    CubeAcademyRegisterRequestBody,
    {},
    {},
    {}
  >({ url: "/api/register", method: "post", ...variables, signal });

/**
 * Register a new user
 */
export const useCubeAcademyRegister = (
  options?: Omit<
    reactQuery.UseMutationOptions<
      Responses.AuthToken,
      CubeAcademyRegisterError,
      CubeAcademyRegisterVariables
    >,
    "mutationFn"
  >
) => {
  const { fetcherOptions } = useApiContext();
  return reactQuery.useMutation<
    Responses.AuthToken,
    CubeAcademyRegisterError,
    CubeAcademyRegisterVariables
  >({
    mutationFn: (variables: CubeAcademyRegisterVariables) =>
      fetchCubeAcademyRegister({ ...fetcherOptions, ...variables }),
    ...options,
  });
};

export type CubeAcademyRetrieveNomineeListError =
  Fetcher.ErrorWrapper<undefined>;

export type CubeAcademyRetrieveNomineeListVariables =
  ApiContext["fetcherOptions"];

/**
 * Retrieve a complete list of all nominees
 */
export const fetchCubeAcademyRetrieveNomineeList = (
  variables: CubeAcademyRetrieveNomineeListVariables,
  signal?: AbortSignal
) =>
  apiFetch<
    Responses.Nominee,
    CubeAcademyRetrieveNomineeListError,
    undefined,
    {},
    {},
    {}
  >({ url: "/api/nominee", method: "get", ...variables, signal });

/**
 * Retrieve a complete list of all nominees
 */
export const useCubeAcademyRetrieveNomineeList = <TData = Responses.Nominee>(
  variables: CubeAcademyRetrieveNomineeListVariables,
  options?: Omit<
    reactQuery.UseQueryOptions<
      Responses.Nominee,
      CubeAcademyRetrieveNomineeListError,
      TData
    >,
    "queryKey" | "queryFn" | "initialData"
  >
) => {
  const { fetcherOptions, queryOptions, queryKeyFn } = useApiContext(options);
  return reactQuery.useQuery<
    Responses.Nominee,
    CubeAcademyRetrieveNomineeListError,
    TData
  >({
    queryKey: queryKeyFn({
      path: "/api/nominee",
      operationId: "cubeAcademyRetrieveNomineeList",
      variables,
    }),
    queryFn: ({ signal }) =>
      fetchCubeAcademyRetrieveNomineeList(
        { ...fetcherOptions, ...variables },
        signal
      ),
    ...options,
    ...queryOptions,
  });
};

export type CubeAcademyCreateNominationError = Fetcher.ErrorWrapper<undefined>;

export type CubeAcademyCreateNominationRequestBody = {
  /**
   * Must be a valid nominee_id
   */
  nominee_id: string;
  reason: string;
  /**
   * One of the following values: very_unfair,unfair,not_sure,fair,very_fair
   */
  process: string;
};

export type CubeAcademyCreateNominationVariables = {
  body: CubeAcademyCreateNominationRequestBody;
} & ApiContext["fetcherOptions"];

/**
 * Create a new nomination
 */
export const fetchCubeAcademyCreateNomination = (
  variables: CubeAcademyCreateNominationVariables,
  signal?: AbortSignal
) =>
  apiFetch<
    Responses.Nomination,
    CubeAcademyCreateNominationError,
    CubeAcademyCreateNominationRequestBody,
    {},
    {},
    {}
  >({ url: "/api/nomination", method: "post", ...variables, signal });

/**
 * Create a new nomination
 */
export const useCubeAcademyCreateNomination = (
  options?: Omit<
    reactQuery.UseMutationOptions<
      Responses.Nomination,
      CubeAcademyCreateNominationError,
      CubeAcademyCreateNominationVariables
    >,
    "mutationFn"
  >
) => {
  const { fetcherOptions } = useApiContext();
  return reactQuery.useMutation<
    Responses.Nomination,
    CubeAcademyCreateNominationError,
    CubeAcademyCreateNominationVariables
  >({
    mutationFn: (variables: CubeAcademyCreateNominationVariables) =>
      fetchCubeAcademyCreateNomination({ ...fetcherOptions, ...variables }),
    ...options,
  });
};

export type CubeAcademyGetAllNominationsError = Fetcher.ErrorWrapper<undefined>;

export type CubeAcademyGetAllNominationsVariables =
  ApiContext["fetcherOptions"];

/**
 * Retrieves all nominations set by the user
 */
export const fetchCubeAcademyGetAllNominations = (
  variables: CubeAcademyGetAllNominationsVariables,
  signal?: AbortSignal
) =>
  apiFetch<
    Responses.Nominations,
    CubeAcademyGetAllNominationsError,
    undefined,
    {},
    {},
    {}
  >({ url: "/api/nomination", method: "get", ...variables, signal });

/**
 * Retrieves all nominations set by the user
 */
export const useCubeAcademyGetAllNominations = <TData = Responses.Nominations>(
  variables: CubeAcademyGetAllNominationsVariables,
  options?: Omit<
    reactQuery.UseQueryOptions<
      Responses.Nominations,
      CubeAcademyGetAllNominationsError,
      TData
    >,
    "queryKey" | "queryFn" | "initialData"
  >
) => {
  const { fetcherOptions, queryOptions, queryKeyFn } = useApiContext(options);
  return reactQuery.useQuery<
    Responses.Nominations,
    CubeAcademyGetAllNominationsError,
    TData
  >({
    queryKey: queryKeyFn({
      path: "/api/nomination",
      operationId: "cubeAcademyGetAllNominations",
      variables,
    }),
    queryFn: ({ signal }) =>
      fetchCubeAcademyGetAllNominations(
        { ...fetcherOptions, ...variables },
        signal
      ),
    ...options,
    ...queryOptions,
  });
};

export type CubeAcademyGetNominationByIdPathParams = {
  nominationId: string;
};

export type CubeAcademyGetNominationByIdError = Fetcher.ErrorWrapper<undefined>;

export type CubeAcademyGetNominationByIdVariables = {
  pathParams: CubeAcademyGetNominationByIdPathParams;
} & ApiContext["fetcherOptions"];

/**
 * Retrieve a specific nomination by ID
 */
export const fetchCubeAcademyGetNominationById = (
  variables: CubeAcademyGetNominationByIdVariables,
  signal?: AbortSignal
) =>
  apiFetch<
    Responses.Nomination,
    CubeAcademyGetNominationByIdError,
    undefined,
    {},
    {},
    CubeAcademyGetNominationByIdPathParams
  >({
    url: "/api/nomination/{nominationId}",
    method: "get",
    ...variables,
    signal,
  });

/**
 * Retrieve a specific nomination by ID
 */
export const useCubeAcademyGetNominationById = <TData = Responses.Nomination>(
  variables: CubeAcademyGetNominationByIdVariables,
  options?: Omit<
    reactQuery.UseQueryOptions<
      Responses.Nomination,
      CubeAcademyGetNominationByIdError,
      TData
    >,
    "queryKey" | "queryFn" | "initialData"
  >
) => {
  const { fetcherOptions, queryOptions, queryKeyFn } = useApiContext(options);
  return reactQuery.useQuery<
    Responses.Nomination,
    CubeAcademyGetNominationByIdError,
    TData
  >({
    queryKey: queryKeyFn({
      path: "/api/nomination/{nomination_id}",
      operationId: "cubeAcademyGetNominationById",
      variables,
    }),
    queryFn: ({ signal }) =>
      fetchCubeAcademyGetNominationById(
        { ...fetcherOptions, ...variables },
        signal
      ),
    ...options,
    ...queryOptions,
  });
};

export type CubeAcademyUpdateNominationPathParams = {
  nominationId: string;
};

export type CubeAcademyUpdateNominationError = Fetcher.ErrorWrapper<undefined>;

export type CubeAcademyUpdateNominationRequestBody = {
  /**
   * Must be a valid nominee_id
   */
  nominee_id?: string;
  reason?: string;
  /**
   * Must be one of the following values: very_unfair,unfair,not_sure,fair,very_fair
   */
  process?: string;
};

export type CubeAcademyUpdateNominationVariables = {
  body?: CubeAcademyUpdateNominationRequestBody;
  pathParams: CubeAcademyUpdateNominationPathParams;
} & ApiContext["fetcherOptions"];

/**
 * Update a specific existing nominiation
 */
export const fetchCubeAcademyUpdateNomination = (
  variables: CubeAcademyUpdateNominationVariables,
  signal?: AbortSignal
) =>
  apiFetch<
    Responses.Nomination,
    CubeAcademyUpdateNominationError,
    CubeAcademyUpdateNominationRequestBody,
    {},
    {},
    CubeAcademyUpdateNominationPathParams
  >({
    url: "/api/nomination/{nominationId}",
    method: "put",
    ...variables,
    signal,
  });

/**
 * Update a specific existing nominiation
 */
export const useCubeAcademyUpdateNomination = (
  options?: Omit<
    reactQuery.UseMutationOptions<
      Responses.Nomination,
      CubeAcademyUpdateNominationError,
      CubeAcademyUpdateNominationVariables
    >,
    "mutationFn"
  >
) => {
  const { fetcherOptions } = useApiContext();
  return reactQuery.useMutation<
    Responses.Nomination,
    CubeAcademyUpdateNominationError,
    CubeAcademyUpdateNominationVariables
  >({
    mutationFn: (variables: CubeAcademyUpdateNominationVariables) =>
      fetchCubeAcademyUpdateNomination({ ...fetcherOptions, ...variables }),
    ...options,
  });
};

export type CubeAcademyDeleteNominationPathParams = {
  nominationId: string;
};

export type CubeAcademyDeleteNominationError = Fetcher.ErrorWrapper<undefined>;

export type CubeAcademyDeleteNominationVariables = {
  pathParams: CubeAcademyDeleteNominationPathParams;
} & ApiContext["fetcherOptions"];

/**
 * Delete a specific existing nomination
 */
export const fetchCubeAcademyDeleteNomination = (
  variables: CubeAcademyDeleteNominationVariables,
  signal?: AbortSignal
) =>
  apiFetch<
    Responses.Deletion,
    CubeAcademyDeleteNominationError,
    undefined,
    {},
    {},
    CubeAcademyDeleteNominationPathParams
  >({
    url: "/api/nomination/{nominationId}",
    method: "delete",
    ...variables,
    signal,
  });

/**
 * Delete a specific existing nomination
 */
export const useCubeAcademyDeleteNomination = (
  options?: Omit<
    reactQuery.UseMutationOptions<
      Responses.Deletion,
      CubeAcademyDeleteNominationError,
      CubeAcademyDeleteNominationVariables
    >,
    "mutationFn"
  >
) => {
  const { fetcherOptions } = useApiContext();
  return reactQuery.useMutation<
    Responses.Deletion,
    CubeAcademyDeleteNominationError,
    CubeAcademyDeleteNominationVariables
  >({
    mutationFn: (variables: CubeAcademyDeleteNominationVariables) =>
      fetchCubeAcademyDeleteNomination({ ...fetcherOptions, ...variables }),
    ...options,
  });
};

export type QueryOperation =
  | {
      path: "/api/nominee";
      operationId: "cubeAcademyRetrieveNomineeList";
      variables: CubeAcademyRetrieveNomineeListVariables;
    }
  | {
      path: "/api/nomination";
      operationId: "cubeAcademyGetAllNominations";
      variables: CubeAcademyGetAllNominationsVariables;
    }
  | {
      path: "/api/nomination/{nomination_id}";
      operationId: "cubeAcademyGetNominationById";
      variables: CubeAcademyGetNominationByIdVariables;
    };
