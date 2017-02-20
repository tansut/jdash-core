export interface ISearchDashboards {
    user: string | Array<string>;
    shareWith?: string | Array<string>;
}

export var ShareWith = {
    users: 'users',
    everyone: 'everyone'
}

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
    config?: { [key: string]: any };
}

export interface DashboardUpdateModel {
    title?: string;
    description?: string;
    shareWith?: string;
    layout?: LayoutModel;
    config?: { [key: string]: any };
}

export interface DashboardModel {
    id: string;
    title: string;
    appid: string;
    user: string;
    config: { [key: string]: any };
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
    configuration?: { [key: string]: any };
}

export interface DashletCreateModel {
    moduleId: string;
    dashboardId: string;
    id?: string;
    title?: string;
    description?: string;
    configuration?: { [key: string]: any };
}

export interface DashletUpdateModel {
    title?: string;
    description?: string;
    configuration?: { [key: string]: any };
}


export interface LayoutDashletMetaModel {
    data?: any
    position?: DashletPositionModel
}

export interface LayoutModel {
    moduleId: string;
    config?: { [key: string]: any };
    dashlets?: { [key: string]: LayoutDashletMetaModel };
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

export class JDashProvider implements IClientProvider {

    static getUrl() {
        return 'http://localhost:3000/jdash/api/v1'
    }

    constructor(private tokenProvider: ITokenProvider) {

    }

    request(): axios.AxiosInstance {
        var instance = axios.default.create({
            baseURL: JDashProvider.getUrl(),
            headers: { 'Authentication': 'Bearer ' + this.tokenProvider.userToken() }
        });
        return instance;
    }

    getDashboard(id: string): Promise<DashboardModel> {
        return this.request().get(`/dashboard/${id}`).then(result => result.data);
    }

    createDashboard(model: DashboardCreateModel): Promise<CreateResult> {
        return this.request().post(`/dashboard/create`, model).then(result => result.data);
    }

    getMyDashboards(query?: Query): Promise<QueryResult<DashboardModel>> {
        return this.request().get(`/dashboard/my`).then(result => result.data);
    }

    searchDashboards(search?: ISearchDashboards, query?: Query): Promise<QueryResult<DashboardModel>> {
        return this.request().post(`/dashboard/search`, {
            search: search,
            query: query
        }).then(result => result.data);
    }

    deleteDashboard(id: string): Promise<any> {
        return this.request().post(`/dashboard/delete/${id}`).then(result => result.data);
    }

    saveDashboard(id: string, updateValues: DashboardUpdateModel): Promise<any> {
        return this.request().post(`/dashboard/save/${id}`, updateValues).then(result => result.data);
    }

    createDashlet(model: DashletCreateModel): Promise<CreateResult> {
        return this.request().post(`/dashlet/create`, model).then(result => result.data);
    }

    getDashletsOfDashboard(dashboardId: string): Promise<Array<DashletCreateModel>> {
        return this.request().get(`/dashlet/bydashboard/${dashboardId}`).then(result => result.data);
    }

    deleteDashlet(id: string): Promise<any> {
        return this.request().post(`/dashlet/delete/${id}`).then(result => result.data);
    }

    saveDashlet(id: string, updateValues: DashletUpdateModel): Promise<any> {
        return this.request().post(`/dashlet/save/${id}`, updateValues).then(result => result.data);
    }
}