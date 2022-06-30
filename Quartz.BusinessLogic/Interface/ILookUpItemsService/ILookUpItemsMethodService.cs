using Quartz.Common.ViewModels.LookUpItems.LookUpItemsMethodViewModels;
using Quartz.Entities.Concrete.LookUpItems;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quartz.BusinessLogic.Interface.ILookUpItemsService
{
    public interface ILookUpItemsMethodService : IGenericService<LookUpItemsMethod>
    {
        void AddMethod(LookUpItemsMethodAddViewModel model);
        void UpdateMethod(LookUpItemsMethodUpdateViewModel model);
        List<LookUpItemsMethodListViewModel> GetAllMethods();
    }
}
