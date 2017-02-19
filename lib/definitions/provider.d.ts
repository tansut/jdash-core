/// <reference types="es6-shim" />
import { ISearchDashboards } from './';
import { Query, QueryResult, DashboardCreateModel, DashboardModel, CreateResult } from './models';
export interface IClientProvider {
    createDashboard(model: DashboardCreateModel): Promise<CreateResult>;
    getMyDashboards(query?: Query): Promise<QueryResult<DashboardModel>>;
    getSharedDashboards(search?: ISearchDashboards, query?: Query): Promise<QueryResult<DashboardModel>>;
}
