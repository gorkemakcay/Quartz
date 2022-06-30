using Quartz.Common.ViewModels.Project.Item.QuartzItemsInformationViewModels;
using Quartz.Entities.Concrete.Projects.Item;

namespace Quartz.BusinessLogic.Interface.IProjectService.IItemService
{
    public interface IQuartzItemsInformationService : IGenericService<QuartzItemsInformation>
    {
        void AddInformation(QuartzItemsInformationAddViewModel model);
        void UpdateInformation(QuartzItemsInformationUpdateViewModel model);
        QuartzItemsInformationUpdateViewModel GetInformationDetail(int informationId);
    }
}
