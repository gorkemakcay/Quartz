using Quartz.Common.ViewModels.LookUpItems.LookUpItemsComponentTypeViewModels;
using Quartz.Entities.Concrete.LookUpItems;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quartz.BusinessLogic.Interface.ILookUpItemsService
{
    public interface ILookUpItemsComponentTypeService : IGenericService<LookUpItemsComponentType>
    {
        void AddComponentType(LookUpItemsComponentTypeAddViewModel model);
        void UpdateComponentType(LookUpItemsComponentTypeUpdateViewModel model);
        List<LookUpItemsComponentTypeListViewModel> GetAllComponentTypes();
    }
}
