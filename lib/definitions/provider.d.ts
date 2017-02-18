/// <reference types="es6-shim" />
import { Query, QueryResult, DashboardCreateModel, DashboardModel, CreateResult } from './models';
export interface IJDashProvider {
    getDashboardsOfUser(username: string, query?: Query): Promise<QueryResult<DashboardModel>>;
    getDashboard(id: string): Promise<DashboardModel>;
    createDashboard(model: DashboardCreateModel): Promise<CreateResult>;
}
