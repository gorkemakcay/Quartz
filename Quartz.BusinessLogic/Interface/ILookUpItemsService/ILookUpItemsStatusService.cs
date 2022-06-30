using Quartz.Common.ViewModels.LookUpItems.LookUpItemsStatusViewModels;
using Quartz.Entities.Concrete.LookUpItems;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quartz.BusinessLogic.Interface.ILookUpItemsService
{
    public interface ILookUpItemsStatusService : IGenericService<LookUpItemsStatus>
    {
        void AddStatus(LookUpItemsStatusAddViewModel model);
        void UpdateStatus(LookUpItemsStatusUpdateViewModel model);
        List<LookUpItemsStatusListViewModel> GetAllStatuses();
    }
}
