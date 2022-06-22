using AutoMapper;
using Quartz.BusinessLogic.Interface.Projects;
using Quartz.Common.ViewModels.Projects.LinkViewModels;
using Quartz.DataAccess.UnitOfWorks.Interface;
using Quartz.Entities.Concrete.Projects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quartz.BusinessLogic.Concrete.Projects
{
    public class LinkManager : GenericManager<Link>, ILinkService
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;
        public LinkManager(IUnitOfWork uow, IMapper mapper) : base(uow)
        {
            _uow = uow;
            _mapper = mapper;
        }

        public void AddLink(LinkAddViewModel model)
        {
            Add(_mapper.Map<Link>(model));
            _uow.SaveChange();
        }

        public List<LinkListViewModel> GetAllLists(int memberId, string memberOf)
        {
            return _mapper.Map<List<LinkListViewModel>>(GetAll(I => I.MemberId == memberId && I.MemberOf == memberOf));
        }

        public void UpdateLink(LinkUpdateViewModel model)
        {
            Update(_mapper.Map<Link>(model));
            _uow.SaveChange();
        }
    }
}
