using Quartz.Common.ViewModels.Project.Link.QuartzLinksDrawingFeaturesViewModels;
using Quartz.Entities.Concrete.Project.Link;

namespace Quartz.BusinessLogic.Interface.IProjectService.ILinkService
{
    public interface IQuartzLinksDrawingFeaturesService : IGenericService<QuartzLinksDrawingFeatures>
    {
        void AddFeature(QuartzLinksDrawingFeaturesAddViewModel model);
        void UpdateFeature(QuartzLinksDrawingFeaturesUpdateViewModel model);
        QuartzLinksDrawingFeaturesUpdateViewModel GetDrawingFeaturesDetail(int drawingFeaturesId);
        QuartzLinksDrawingFeaturesUpdateViewModel GetVectorSource(int quartzLinkId);
    }
}
