using Quartz.Common.ViewModels.LookUpItems.LookUpItemsWeldTypeViewModels;
using Quartz.Entities.Concrete.LookUpItems;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quartz.BusinessLogic.Interface.ILookUpItemsService
{
    public interface ILookUpItemsWeldTypeService : IGenericService<LookUpItemsWeldType>
    {
        void AddWeldType(LookUpItemsWeldTypeAddViewModel model);
        void UpdateWeldType(LookUpItemsWeldTypeUpdateViewModel model);
        List<LookUpItemsWeldTypeListViewModel> GetAllWeldTypes();
    }
}
