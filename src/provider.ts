import { ISearchDashboards } from './';
import { Query, QueryResult, DashboardCreateModel, DashboardModel, DashboardUpdateModel, DashletCreateModel, DashletUpdateModel, CreateResult } from './models';


export interface IClientProvider {
    createDashboard(model: DashboardCreateModel): Promise<CreateResult>;
    getMyDashboards(query?: Query): Promise<QueryResult<DashboardModel>>;
    searchDashboards(search?: ISearchDashboards, query?: Query): Promise<QueryResult<DashboardModel>>;
    deleteDashboard(id: string): Promise<any>;
    updateDashboard(id: string, updateValues: DashboardUpdateModel): Promise<any>;

    createDashlet(model: DashletCreateModel): Promise<CreateResult>;
    getDashletsOfDashboard(dashboardId: string): Promise<Array<DashletCreateModel>>;
    deleteDashlet(id: string): Promise<any>;
    updateDashlet(id: string, updateValues: DashletUpdateModel): Promise<any>;
}