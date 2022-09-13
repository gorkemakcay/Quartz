using Quartz.Common.ViewModels.LookUpItems.LookUpItemsPlantAreaViewModels;
using Quartz.Entities.Concrete.LookUpItems;
using System.Collections.Generic;

namespace Quartz.BusinessLogic.Interface.ILookUpItemsService
{
    public interface ILookUpItemsPlantAreaService : IGenericService<LookUpItemsPlantArea>
    {
        void AddPlantArea(LookUpItemsPlantAreaAddViewModel model);
        void UpdatePlantArea(LookUpItemsPlantAreaUpdateViewModel model);
        void DeletePlantArea(LookUpItemsPlantAreaDeleteViewModel model);
        List<LookUpItemsPlantAreaListViewModel> GetAllPlantAreas();
        LookUpItemsPlantAreaListViewModel GetPlantAreaDetail(int plantAreaId);
    }
}
