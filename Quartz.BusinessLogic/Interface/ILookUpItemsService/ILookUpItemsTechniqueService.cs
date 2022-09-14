using Quartz.Common.ViewModels.LookUpItems.LookUpItemsTechniqueViewModels;
using Quartz.Entities.Concrete.LookUpItems;
using System.Collections.Generic;

namespace Quartz.BusinessLogic.Interface.ILookUpItemsService
{
    public interface ILookUpItemsTechniqueService : IGenericService<LookUpItemsTechnique>
    {
        void AddTechnique(LookUpItemsTechniqueAddViewModel model);
        void UpdateTechnique(LookUpItemsTechniqueUpdateViewModel model);
        void DeleteTechnique(LookUpItemsTechniqueDeleteViewModel model);
        List<LookUpItemsTechniqueListViewModel> GetAllTechniques();
        LookUpItemsTechniqueListViewModel GetTechniqueDetail(int techniqueId);
    }
}
