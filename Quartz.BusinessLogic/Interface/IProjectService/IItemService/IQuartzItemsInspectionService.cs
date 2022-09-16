using Quartz.Common.ViewModels.Project.Item.QuartzItemsInspectionViewModels;
using Quartz.Entities.Concrete.Projects.Item;
using System.Collections.Generic;

namespace Quartz.BusinessLogic.Interface.IProjectService.IItemService
{
    public interface IQuartzItemsInspectionService : IGenericService<QuartzItemsInspection>
    {
        int AddInspection(QuartzItemsInspectionAddViewModel model);
        void UpdateInspection(QuartzItemsInspectionUpdateViewModel model);
        void DeleteInspection(QuartzItemsInspectionDeleteViewModel model);
        QuartzItemsInspectionUpdateViewModel GetInspectionDetail(int inspectionId);
        List<QuartzItemsInspectionUpdateViewModel> GetAllInspections(int quartzItemId);
        List<QuartzItemsInspectionFilterViewModel> FilterInspections(QuartzItemsInspectionFilterViewModel model);
    }
}