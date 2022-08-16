using Quartz.Common.ViewModels.Project.Item.QuartzItemsValveMaintenance;
using Quartz.Entities.Concrete.Project.Item;
using System.Collections.Generic;

namespace Quartz.BusinessLogic.Interface.IProjectService.IItemService
{
    public interface IQuartzItemsValveMaintenanceService : IGenericService<QuartzItemsValveMaintenance>
    {
        int AddValveMaintenance(QuartzItemsValveMaintenanceAddViewModel model);
        void UpdateValveMaintenance(QuartzItemsValveMaintenanceUpdateViewModel model);
        QuartzItemsValveMaintenanceUpdateViewModel GetValveMaintenanceDetail(int valveMaintenanceId);
        List<QuartzItemsValveMaintenanceListViewModel> GetAllValveMaintenances(int quartzItemId);
    }
}
