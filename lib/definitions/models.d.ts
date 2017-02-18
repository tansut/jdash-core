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
export interface Metadata {
    owner?: string;
    created?: Date;
    lastUpdated?: Date;
    sharedWith?: string;
    config?: {
        [key: string]: any;
    };
    publishStatus?: string;
}
export interface DashboardCreateModel {
    user: string;
    id?: string;
    title?: string;
    description?: string;
    config?: {
        [key: string]: any;
    };
}
export interface DashboardModel {
    id: string;
    title?: string;
    config: {
        [key: string]: any;
    };
    description?: string;
    layout: LayoutModel;
}
export interface DashletPositionModel {
    zone?: string;
    y?: number;
    x?: number;
    z?: number;
}
export interface LayoutDashletMetaModel {
    data?: any;
    position?: DashletPositionModel;
}
export interface LayoutModel {
    module: string;
    config?: {
        [key: string]: any;
    };
    dashlets?: {
        [key: string]: LayoutDashletMetaModel;
    };
}
