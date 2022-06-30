using Quartz.Common.ViewModels.LookUpItems.LookUpItemsPlantAreaViewModels;
using Quartz.Entities.Concrete.LookUpItems;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quartz.BusinessLogic.Interface.ILookUpItemsService
{
    public interface ILookUpItemsPlantAreaService : IGenericService<LookUpItemsPlantArea>
    {
        void AddPlantArea(LookUpItemsPlantAreaAddViewModel model);
        void UpdatePlantArea(LookUpItemsPlantAreaUpdateViewModel model);
        List<LookUpItemsPlantAreaListViewModel> GetAllPlantAreas();
    }
}
