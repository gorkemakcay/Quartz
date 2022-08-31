using Quartz.Common.ViewModels.LookUpItems.LookUpItemsFittingTypeViewModels;
using Quartz.Entities.Concrete.LookUpItems;
using System.Collections.Generic;

namespace Quartz.BusinessLogic.Interface.ILookUpItemsService
{
    public interface ILookUpItemsFittingTypeService : IGenericService<LookUpItemsFittingType>
    {
        void AddFittingType(LookUpItemsFittingTypeAddViewModel model);
        void UpdateFittingType(LookUpItemsFittingTypeUpdateViewModel model);
        void DeleteFittingType(LookUpItemsFittingTypeDeleteViewModel model);
        List<LookUpItemsFittingTypeListViewModel> GetAllFittingTypes();
    }
}
