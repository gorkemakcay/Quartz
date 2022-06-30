using Quartz.Common.ViewModels.LookUpItems.LookUpItemsTechniqueViewModels;
using Quartz.Entities.Concrete.LookUpItems;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quartz.BusinessLogic.Interface.ILookUpItemsService
{
    public interface ILookUpItemsTechniqueService : IGenericService<LookUpItemsTechnique>
    {
        void AddTechnique(LookUpItemsTechniqueAddViewModel model);
        void UpdateTechnique(LookUpItemsTechniqueUpdateViewModel model);
        List<LookUpItemsTechniqueListViewModel> GetAllTechniques();
    }
}
