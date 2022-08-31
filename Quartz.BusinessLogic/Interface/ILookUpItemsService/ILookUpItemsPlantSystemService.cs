using Quartz.Common.ViewModels.LookUpItems.LookUpItemsPlantSystemViewModels;
using Quartz.Entities.Concrete.LookUpItems;
using System.Collections.Generic;

namespace Quartz.BusinessLogic.Interface.ILookUpItemsService
{
    public interface ILookUpItemsPlantSystemService : IGenericService<LookUpItemsPlantSystem>
    {
        void AddPlantSystem(LookUpItemsPlantSystemAddViewModel model);
        void UpdatePlantSystem(LookUpItemsPlantSystemUpdateViewModel model);
        void DeletePlantSystem(LookUpItemsPlantSystemDeleteViewModel model);
        List<LookUpItemsPlantSystemListViewModel> GetAllPlantSystems();
    }
}
