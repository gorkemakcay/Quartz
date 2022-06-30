using Quartz.Common.ViewModels.LookUpItems.LookUpItemsFittingTypeViewModels;
using Quartz.Entities.Concrete.LookUpItems;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quartz.BusinessLogic.Interface.ILookUpItemsService
{
    public interface ILookUpItemsFittingTypeService : IGenericService<LookUpItemsFittingType>
    {
        void AddFittingType(LookUpItemsFittingTypeAddViewModel model);
        void UpdateFittingType(LookUpItemsFittingTypeUpdateViewModel model);
        List<LookUpItemsFittingTypeListViewModel> GetAllFittingTypes();
    }
}
