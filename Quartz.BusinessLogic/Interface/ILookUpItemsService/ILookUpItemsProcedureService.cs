using Quartz.Common.ViewModels.LookUpItems.LookUpItemsProcedureViewModels;
using Quartz.Entities.Concrete.LookUpItems;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quartz.BusinessLogic.Interface.ILookUpItemsService
{
    public interface ILookUpItemsProcedureService : IGenericService<LookUpItemsProcedure>
    {
        void AddProcedure(LookUpItemsProcedureAddViewModel model);
        void UpdateProcedure(LookUpItemsProcedureUpdateViewModel model);
        List<LookUpItemsProcedureListViewModel> GetAllProcedures();
    }
}
