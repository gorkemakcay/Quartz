using Quartz.Common.ViewModels.LookUpItems.LookUpItemsStandardStatementViewModels;
using Quartz.Entities.Concrete.LookUpItems;
using System.Collections.Generic;

namespace Quartz.BusinessLogic.Interface.ILookUpItemsService
{
    public interface ILookUpItemsStandardStatementService : IGenericService<LookUpItemsStandardStatement>
    {
        void AddStandardStatement(LookUpItemsStandardStatementAddViewModel model);
        void UpdateStandardStatement(LookUpItemsStandardStatementUpdateViewModel model);
        void DeleteStandardStatement(LookUpItemsStandardStatementDeleteViewModel model);
        List<LookUpItemsStandardStatementListViewModel> GetAllStandardStatements();
    }
}
