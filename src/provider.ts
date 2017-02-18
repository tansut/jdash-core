import { Query, QueryResult, DashboardCreateModel, DashboardModel, Metadata, CreateResult } from './models';


export interface IJDashProvider {
    getDashboardsOfUser(username: string, query?: Query): Promise<QueryResult<DashboardModel>>;
    getDashboard(id: string): Promise<DashboardModel>;
    createDashboard(model: DashboardCreateModel): Promise<CreateResult>;
}