using AutoMapper;
using Quartz.BusinessLogic.Interface.IProjectService.ILinkService;
using Quartz.Common.ViewModels.Project.Link.QuartzLinkViewModels;
using Quartz.DataAccess.Concrete.EntityFramworkCore.Context;
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

        public int AddLink(QuartzLinkAddViewModel model)
        {
            using var context = new QuartzContext();

            var link = new QuartzLink()
            {
                TagNo = model.TagNo,
                ShowLabel = model.ShowLabel,
                CreatedDate = model.CreatedDate,
                CreatedBy = model.CreatedBy,
                MainQuartzLinkId = model.MainQuartzLinkId,
                CurrentDrawingId = model.CurrentDrawingId
            };

            context.QuartzLinks.Add(link);
            context.SaveChanges();

            return link.Id;

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

        public void UpdateLinksTagNo(int linkId, string tagNo)
        {
            var model = _mapper.Map<QuartzLinkUpdateViewModel>(GetById(linkId));
            model.TagNo = tagNo;
            Update(_mapper.Map<QuartzLink>(model));
            _uow.SaveChange();
        }
    }
}
