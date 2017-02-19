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
    config?: { [key: string]: any };
}

export interface DashboardUpdateModel {
    title?: string;
    description?: string;
    shareWith?: string;
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