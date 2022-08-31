using Quartz.Common.ViewModels.LookUpItems.LookUpItemsSpecificationViewModels;
using Quartz.Entities.Concrete.LookUpItems;
using System.Collections.Generic;

namespace Quartz.BusinessLogic.Interface.ILookUpItemsService
{
    public interface ILookUpItemsSpecificationService : IGenericService<LookUpItemsSpecification>
    {
        void AddSpecification(LookUpItemsSpecificationAddViewModel model);
        void UpdateSpecification(LookUpItemsSpecificationUpdateViewModel model);
        void DeleteSpecification(LookUpItemsSpecificationDeleteViewModel model);
        List<LookUpItemsSpecificationListViewModel> GetAllSpecifications();
    }
}
