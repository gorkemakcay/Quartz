using Quartz.Common.ViewModels.Project.Item.QuartzItemsInspectionViewModels;
using Quartz.Common.ViewModels.Project.QuartzItem.QuartzItemsInspectionViewModels;
using Quartz.Entities.Concrete.Projects.Item;
using System.Collections.Generic;

namespace Quartz.BusinessLogic.Interface.IProjectService.IItemService
{
    public interface IQuartzItemsInspectionService : IGenericService<QuartzItemsInspection>
    {
        void AddInspection(QuartzItemsInspectionAddViewModel model);
        void UpdateInspection(QuartzItemsInspectionUpdateViewModel model);
        QuartzItemsInspectionUpdateViewModel GetInspectionDetail(int inspectionId);
        List<QuartzItemsInspectionUpdateViewModel> GetAllInspections(int quartzItemId);
    }
}
