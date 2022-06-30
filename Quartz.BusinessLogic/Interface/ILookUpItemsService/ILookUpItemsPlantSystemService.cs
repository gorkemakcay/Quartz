using Quartz.Common.ViewModels.LookUpItems.LookUpItemsPlantSystemViewModels;
using Quartz.Entities.Concrete.LookUpItems;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quartz.BusinessLogic.Interface.ILookUpItemsService
{
    public interface ILookUpItemsPlantSystemService : IGenericService<LookUpItemsPlantSystem>
    {
        void AddPlantSystem(LookUpItemsPlantSystemAddViewModel model);
        void UpdatePlantSystem(LookUpItemsPlantSystemUpdateViewModel model);
        List<LookUpItemsPlantSystemListViewModel> GetAllPlantSystems();
    }
}
