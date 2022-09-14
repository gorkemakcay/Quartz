using Quartz.Common.ViewModels.LookUpItems.LookUpItemsOperatorViewModels;
using Quartz.Entities.Concrete.LookUpItems;
using System.Collections.Generic;

namespace Quartz.BusinessLogic.Interface.ILookUpItemsService
{
    public interface ILookUpItemsOperatorService : IGenericService<LookUpItemsOperator>
    {
        void AddOperator(LookUpItemsOperatorAddViewModel model);
        void UpdateOperator(LookUpItemsOperatorUpdateViewModel model);
        void DeleteOperator(LookUpItemsOperatorDeleteViewModel model);
        List<LookUpItemsOperatorUpdateViewModel> GetAllOperators();
        LookUpItemsOperatorListViewModel GetOperatorDetail(int operatorId);
    }
}
