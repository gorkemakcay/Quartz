using Quartz.Common.ViewModels.Project.Item.QuartzItemsThicknessMeasurement;
using Quartz.Entities.Concrete.Project.Item;
using System.Collections.Generic;

namespace Quartz.BusinessLogic.Interface.IProjectService.IItemService
{
    public interface IQuartzItemsThicknessMeasurementService : IGenericService<QuartzItemsThicknessMeasurement>
    {
        int AddThicknessMeasurement(QuartzItemsThicknessMeasurementAddViewModel model);
        void UpdateThicknessMeasurement(QuartzItemsThicknessMeasurementUpdateViewModel model);
        void DeleteThicknessMeasurement(QuartzItemsThicknessMeasurementDeleteViewModel model);
        QuartzItemsThicknessMeasurementUpdateViewModel GetThicknessMeasurementDetail(int thicknessMeasurementId);
        List<QuartzItemsThicknessMeasurementListViewModel> GetAllThicknessMeasurements(int quartzItemId);
    }
}
