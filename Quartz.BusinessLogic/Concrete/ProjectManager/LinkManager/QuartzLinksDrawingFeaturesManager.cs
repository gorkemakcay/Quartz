using AutoMapper;
using Quartz.BusinessLogic.Interface.IProjectService.ILinkService;
using Quartz.Common.ViewModels.Project.Link.QuartzLinksDrawingFeaturesViewModels;
using Quartz.DataAccess.UnitOfWorks.Interface;
using Quartz.Entities.Concrete.Project.Link;

namespace Quartz.BusinessLogic.Concrete.ProjectManager.LinkManager
{
    public class QuartzLinksDrawingFeaturesManager : GenericManager<QuartzLinksDrawingFeatures>, IQuartzLinksDrawingFeaturesService
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;
        public QuartzLinksDrawingFeaturesManager(IUnitOfWork uow, IMapper mapper) : base(uow)
        {
            _uow = uow;
            _mapper = mapper;
        }

        public void AddFeature(QuartzLinksDrawingFeaturesAddViewModel model)
        {
            Add(_mapper.Map<QuartzLinksDrawingFeatures>(model));
            _uow.SaveChange();
        }

        public QuartzLinksDrawingFeaturesUpdateViewModel GetDrawingFeaturesDetail(int drawingFeaturesId)
        {
            return _mapper.Map<QuartzLinksDrawingFeaturesUpdateViewModel>(GetFirstOrDefult(I => I.Id == drawingFeaturesId));
        }

        public QuartzLinksDrawingFeaturesUpdateViewModel GetVectorSource(int quartzLinkId)
        {
            return _mapper.Map<QuartzLinksDrawingFeaturesUpdateViewModel>(GetFirstOrDefult(I => I.QuartzLinkId == quartzLinkId));
        }

        public void UpdateFeature(QuartzLinksDrawingFeaturesUpdateViewModel model)
        {
            Update(_mapper.Map<QuartzLinksDrawingFeatures>(model));
            _uow.SaveChange();
        }
    }
}
