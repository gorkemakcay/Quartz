using AutoMapper;
using Quartz.BusinessLogic.Interface.IProjectService.ILinkService;
using Quartz.Common.ViewModels.Project.Link.QuartzLinksDrawingSettingsViewModels;
using Quartz.DataAccess.UnitOfWorks.Interface;
using Quartz.Entities.Concrete.Project.Link;

namespace Quartz.BusinessLogic.Concrete.ProjectManager.LinkManager
{
    public class QuartzLinksDrawingSettingsManager : GenericManager<QuartzLinksDrawingSettings>, IQuartzLinksDrawingSettingsService
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;
        public QuartzLinksDrawingSettingsManager(IUnitOfWork uow, IMapper mapper) : base(uow)
        {
            _uow = uow;
            _mapper = mapper;
        }

        public void AddDrawingSettings(QuartzLinksDrawingSettingsAddViewModel model)
        {
            Add(_mapper.Map<QuartzLinksDrawingSettings>(model));
            _uow.SaveChange();
        }

        public QuartzLinksDrawingSettingsUpdateViewModel GetDrawingSettingsDetail(int quartzLinkId)
        {
            return _mapper.Map<QuartzLinksDrawingSettingsUpdateViewModel>(GetFirstOrDefult(I => I.QuartzLinkId == quartzLinkId));
        }

        public void UpdateDrawingSettings(QuartzLinksDrawingSettingsUpdateViewModel model)
        {
            Update(_mapper.Map<QuartzLinksDrawingSettings>(model));
            _uow.SaveChange();
        }
    }
}
