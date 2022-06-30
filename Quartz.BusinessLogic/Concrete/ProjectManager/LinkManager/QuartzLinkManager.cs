using AutoMapper;
using Quartz.BusinessLogic.Interface.IProjectService.ILinkService;
using Quartz.Common.ViewModels.Project.Link.QuartzLinkViewModels;
using Quartz.DataAccess.UnitOfWorks.Interface;
using Quartz.Entities.Concrete.Project.Link;
using System.Collections.Generic;

namespace Quartz.BusinessLogic.Concrete.ProjectManager.LinkManager
{
    public class QuartzLinkManager : GenericManager<QuartzLink>, IQuartzLinkService
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;
        public QuartzLinkManager(IUnitOfWork uow, IMapper mapper) : base(uow)
        {
            _uow = uow;
            _mapper = mapper;
        }

        public void AddLink(QuartzLinkAddViewModel model)
        {
            Add(_mapper.Map<QuartzLink>(model));
            _uow.SaveChange();
        }

        public List<QuartzLinkListViewModel> GetAllLinks(int mainLinkId)
        {
            return _mapper.Map<List<QuartzLinkListViewModel>>(GetAll(I => I.MainQuartzLinkId == mainLinkId));
        }

        public QuartzLinkUpdateViewModel GetLinkDetail(int linkId)
        {
            return _mapper.Map<QuartzLinkUpdateViewModel>(GetFirstOrDefult(I => I.Id == linkId));
        }

        public void UpdateLink(QuartzLinkUpdateViewModel model)
        {
            Update(_mapper.Map<QuartzLink>(model));
            _uow.SaveChange();
        }
    }
}
