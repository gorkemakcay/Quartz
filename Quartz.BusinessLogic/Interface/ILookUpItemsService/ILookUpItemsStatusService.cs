using Quartz.Common.ViewModels.LookUpItems.LookUpItemsStatusViewModels;
using Quartz.Entities.Concrete.LookUpItems;
using System.Collections.Generic;

namespace Quartz.BusinessLogic.Interface.ILookUpItemsService
{
    public interface ILookUpItemsStatusService : IGenericService<LookUpItemsStatus>
    {
        void AddStatus(LookUpItemsStatusAddViewModel model);
        void UpdateStatus(LookUpItemsStatusUpdateViewModel model);
        void DeleteStatus(LookUpItemsStatusDeleteViewModel model);
        List<LookUpItemsStatusListViewModel> GetAllStatuses();
    }
}
