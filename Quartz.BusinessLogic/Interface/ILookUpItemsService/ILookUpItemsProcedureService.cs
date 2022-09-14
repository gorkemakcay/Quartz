using Quartz.Common.ViewModels.LookUpItems.LookUpItemsProcedureViewModels;
using Quartz.Entities.Concrete.LookUpItems;
using System.Collections.Generic;

namespace Quartz.BusinessLogic.Interface.ILookUpItemsService
{
    public interface ILookUpItemsProcedureService : IGenericService<LookUpItemsProcedure>
    {
        void AddProcedure(LookUpItemsProcedureAddViewModel model);
        void UpdateProcedure(LookUpItemsProcedureUpdateViewModel model);
        void DeleteProcedure(LookUpItemsProcedureDeleteViewModel model);
        List<LookUpItemsProcedureListViewModel> GetAllProcedures();
        LookUpItemsProcedureListViewModel GetProcedureDetail(int procedureId);
    }
}
