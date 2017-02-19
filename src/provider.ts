import { Query, QueryResult, DashboardCreateModel, DashboardModel, Metadata, CreateResult } from './models';


export interface IClientProvider {
    getDashboardsOfUser(username: string, query?: Query): Promise<QueryResult<DashboardModel>>;
    getDashboard(id: string): Promise<DashboardModel>;
    createDashboard(model: DashboardCreateModel): Promise<CreateResult>;
    getMyDashboards(query?: Query): Promise<QueryResult<DashboardModel>>;
}