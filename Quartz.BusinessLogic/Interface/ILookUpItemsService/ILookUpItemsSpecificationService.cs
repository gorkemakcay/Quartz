using Quartz.Common.ViewModels.LookUpItems.LookUpItemsSpecificationViewModels;
using Quartz.Entities.Concrete.LookUpItems;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quartz.BusinessLogic.Interface.ILookUpItemsService
{
    public interface ILookUpItemsSpecificationService : IGenericService<LookUpItemsSpecification>
    {
        void AddSpecification(LookUpItemsSpecificationAddViewModel model);
        void UpdateSpecification(LookUpItemsSpecificationUpdateViewModel model);
        List<LookUpItemsSpecificationListViewModel> GetAllSpecifications();
    }
}
