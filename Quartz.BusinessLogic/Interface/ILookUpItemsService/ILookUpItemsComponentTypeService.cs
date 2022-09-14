using Quartz.Common.ViewModels.LookUpItems.LookUpItemsComponentTypeViewModels;
using Quartz.Entities.Concrete.LookUpItems;
using System.Collections.Generic;

namespace Quartz.BusinessLogic.Interface.ILookUpItemsService
{
    public interface ILookUpItemsComponentTypeService : IGenericService<LookUpItemsComponentType>
    {
        void AddComponentType(LookUpItemsComponentTypeAddViewModel model);
        void UpdateComponentType(LookUpItemsComponentTypeUpdateViewModel model);
        void DeleteComponentType(LookUpItemsComponentTypeDeleteViewModel model);
        List<LookUpItemsComponentTypeListViewModel> GetAllComponentTypes();
        LookUpItemsComponentTypeListViewModel GetComponentTypeDetail(int componentTypeId);
    }
}
