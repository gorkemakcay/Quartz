using Quartz.Common.ViewModels.Project.Link.QuartzLinksDrawingSettingsViewModels;
using Quartz.Entities.Concrete.Project.Link;

namespace Quartz.BusinessLogic.Interface.IProjectService.ILinkService
{
    public interface IQuartzLinksDrawingSettingsService : IGenericService<QuartzLinksDrawingSettings>
    {
        void AddDrawingSettings(QuartzLinksDrawingSettingsAddViewModel model);
        void UpdateDrawingSettings(QuartzLinksDrawingSettingsUpdateViewModel model);
        QuartzLinksDrawingSettingsUpdateViewModel GetDrawingSettingsDetail(int quartzLinkId);
    }
}
