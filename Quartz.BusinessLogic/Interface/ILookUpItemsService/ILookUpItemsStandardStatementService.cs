using Quartz.Common.ViewModels.LookUpItems.LookUpItemsStandardStatementViewModels;
using Quartz.Entities.Concrete.LookUpItems;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quartz.BusinessLogic.Interface.ILookUpItemsService
{
    public interface ILookUpItemsStandardStatementService : IGenericService<LookUpItemsStandardStatement>
    {
        void AddStandardStatement(LookUpItemsStandardStatementAddViewModel model);
        void UpdateStandardStatement(LookUpItemsStandardStatementUpdateViewModel model);
        List<LookUpItemsStandardStatementListViewModel> GetAllStandardStatements();
    }
}
