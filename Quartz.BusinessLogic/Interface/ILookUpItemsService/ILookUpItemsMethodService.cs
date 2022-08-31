using Quartz.Common.ViewModels.LookUpItems.LookUpItemsMethodViewModels;
using Quartz.Entities.Concrete.LookUpItems;
using System.Collections.Generic;

namespace Quartz.BusinessLogic.Interface.ILookUpItemsService
{
    public interface ILookUpItemsMethodService : IGenericService<LookUpItemsMethod>
    {
        void AddMethod(LookUpItemsMethodAddViewModel model);
        void UpdateMethod(LookUpItemsMethodUpdateViewModel model);
        void DeleteMethod(LookUpItemsMethodDeleteViewModel model);
        List<LookUpItemsMethodListViewModel> GetAllMethods();
    }
}
