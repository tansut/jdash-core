/// <reference types="es6-promise" />
export interface ISearchDashboards {
    user: string | Array<string>;
    shareWith?: string | Array<string>;
}
export declare var ShareWith: {
    users: string;
    everyone: string;
};
export interface Query {
    limit: number;
    startFrom?: any;
}
export interface SearchQuery extends Query {
    filters: any;
}
export interface QueryResult<T> {
    data: Array<T>;
    hasMore: boolean;
}
export interface CreateResult {
    id: string;
}
export interface DashboardCreateModel {
    user: string;
    id?: string;
    title?: string;
    description?: string;
    shareWith?: string;
    layout: LayoutModel;
    config?: {
        [key: string]: any;
    };
}
export interface DashboardUpdateModel {
    title?: string;
    description?: string;
    shareWith?: string;
    layout?: LayoutModel;
    config?: {
        [key: string]: any;
    };
}
export interface DashboardModel {
    id: string;
    title: string;
    appid: string;
    user: string;
    config: {
        [key: string]: any;
    };
    description: string;
    layout: LayoutModel;
    createdAt: Date;
    shareWith?: string;
}
export interface DashletPositionModel {
    zone?: string;
    y?: number;
    x?: number;
    z?: number;
}
export interface DashletModel {
    moduleId: string;
    dashboardId: string;
    id?: string;
    title?: string;
    description?: string;
    configuration?: {
        [key: string]: any;
    };
}
export interface DashletCreateModel {
    moduleId: string;
    dashboardId: string;
    id?: string;
    title?: string;
    description?: string;
    configuration?: {
        [key: string]: any;
    };
}
export interface DashletUpdateModel {
    title?: string;
    description?: string;
    configuration?: {
        [key: string]: any;
    };
}
export interface LayoutDashletMetaModel {
    data?: any;
    position?: DashletPositionModel;
}
export interface LayoutModel {
    moduleId: string;
    config?: {
        [key: string]: any;
    };
    dashlets?: {
        [key: string]: LayoutDashletMetaModel;
    };
}
import * as axios from 'axios';
export interface IClientProvider {
    getDashboard(id: string): Promise<DashboardModel>;
    createDashboard(model: DashboardCreateModel): Promise<CreateResult>;
    getMyDashboards(query?: Query): Promise<QueryResult<DashboardModel>>;
    searchDashboards(search?: ISearchDashboards, query?: Query): Promise<QueryResult<DashboardModel>>;
    deleteDashboard(id: string): Promise<any>;
    saveDashboard(id: string, updateValues: DashboardUpdateModel): Promise<any>;
    createDashlet(model: DashletCreateModel): Promise<CreateResult>;
    getDashletsOfDashboard(dashboardId: string): Promise<Array<DashletCreateModel>>;
    deleteDashlet(id: string): Promise<any>;
    saveDashlet(id: string, updateValues: DashletUpdateModel): Promise<any>;
}
export interface ITokenProvider {
    apikey(): string;
    userToken(): string;
}
export declare class JDashProvider implements IClientProvider {
    private tokenProvider;
    static getUrl(): string;
    constructor(tokenProvider: ITokenProvider);
    request(): axios.AxiosInstance;
    getDashboard(id: string): Promise<DashboardModel>;
    createDashboard(model: DashboardCreateModel): Promise<CreateResult>;
    getMyDashboards(query?: Query): Promise<QueryResult<DashboardModel>>;
    searchDashboards(search?: ISearchDashboards, query?: Query): Promise<QueryResult<DashboardModel>>;
    deleteDashboard(id: string): Promise<any>;
    saveDashboard(id: string, updateValues: DashboardUpdateModel): Promise<any>;
    createDashlet(model: DashletCreateModel): Promise<CreateResult>;
    getDashletsOfDashboard(dashboardId: string): Promise<Array<DashletCreateModel>>;
    deleteDashlet(id: string): Promise<any>;
    saveDashlet(id: string, updateValues: DashletUpdateModel): Promise<any>;
}
