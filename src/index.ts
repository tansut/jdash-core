import * as axios from 'axios';


export interface ISearchDashboards {
    user: string | Array<string>;
    shareWith?: string | Array<string>;
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

export interface GetDashboardResult {
    dashboard: DashboardModel;
    dashlets: Array<DashletModel>
}

export interface DashboardCreateModel {
    id?: string;
    title?: string;
    description?: string;
    shareWith?: string;
    layout: LayoutModel;
    config?: { [key: string]: any };
    user?: string;
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
    createdAt: Date;
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



export interface IClientProvider {
    getDashboard(id: string): Promise<GetDashboardResult>;
    createDashboard(model: DashboardCreateModel): Promise<CreateResult>;
    getMyDashboards(query?: Query): Promise<QueryResult<DashboardModel>>;
    searchDashboards(search?: ISearchDashboards, query?: Query): Promise<QueryResult<DashboardModel>>;
    deleteDashboard(id: string): Promise<any>;
    saveDashboard(id: string, updateValues: DashboardUpdateModel): Promise<any>;
    createDashlet(model: DashletCreateModel): Promise<CreateResult>;
    deleteDashlet(id: string): Promise<any>;
    saveDashlet(id: string, updateValues: DashletUpdateModel): Promise<any>;
}

