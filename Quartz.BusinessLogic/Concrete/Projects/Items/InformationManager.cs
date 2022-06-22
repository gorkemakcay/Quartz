using AutoMapper;
using Quartz.BusinessLogic.Interface.Projects.Items;
using Quartz.Common.ViewModels.Projects.Items.InformationViewModels;
using Quartz.DataAccess.UnitOfWorks.Interface;
using Quartz.Entities.Concrete.Projects.Items;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quartz.BusinessLogic.Concrete.Projects.Items
{
    public class InformationManager : GenericManager<Information>, IInformationService
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;

        public InformationManager(IUnitOfWork uow, IMapper mapper) : base(uow)
        {
            _uow = uow;
            _mapper = mapper;
        }

        public void AddInformation(InformationAddViewModel model)
        {
            Add(_mapper.Map<Information>(model));
            _uow.SaveChange();
        }
        public InformationListViewModel GetInformationDetail(int memberId, string memberOf)
        {
            return _mapper.Map<InformationListViewModel>(GetAll(I => I.MemberId == memberId && I.MemberOf == memberOf));
        }

        public void UpdateInformation(InformationUpdateViewModel model)
        {
            Update(_mapper.Map<Information>(model));
            _uow.SaveChange();
        }
    }
}
