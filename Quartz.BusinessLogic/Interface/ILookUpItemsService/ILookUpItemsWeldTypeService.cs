using Quartz.Common.ViewModels.LookUpItems.LookUpItemsWeldTypeViewModels;
using Quartz.Entities.Concrete.LookUpItems;
using System.Collections.Generic;

namespace Quartz.BusinessLogic.Interface.ILookUpItemsService
{
    public interface ILookUpItemsWeldTypeService : IGenericService<LookUpItemsWeldType>
    {
        void AddWeldType(LookUpItemsWeldTypeAddViewModel model);
        void UpdateWeldType(LookUpItemsWeldTypeUpdateViewModel model);
        void DeleteWeldType(LookUpItemsWeldTypeDeleteViewModel model);
        List<LookUpItemsWeldTypeListViewModel> GetAllWeldTypes();
    }
}
