using Quartz.Common.ViewModels.LookUpItems.LookUpItemsOperatorViewModels;
using Quartz.Entities.Concrete.LookUpItems;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quartz.BusinessLogic.Interface.ILookUpItemsService
{
    public interface ILookUpItemsOperatorService : IGenericService<LookUpItemsOperator>
    {
        void AddOperator(LookUpItemsOperatorAddViewModel model);
        void UpdateOperator(LookUpItemsOperatorUpdateViewModel model);
        List<LookUpItemsOperatorUpdateViewModel> GetAllOperators();
    }
}
