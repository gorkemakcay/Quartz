using AutoMapper;
using Quartz.BusinessLogic.Interface.Projects.Items;
using Quartz.Common.ViewModels.Projects.Items.InspectionViewModels;
using Quartz.DataAccess.UnitOfWorks.Interface;
using Quartz.Entities.Concrete.Projects.Items;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quartz.BusinessLogic.Concrete.Projects.Items
{
    public class InspectionManager : GenericManager<Inspection>, IInspectionService
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;

        public InspectionManager(IUnitOfWork uow, IMapper mapper) : base(uow)
        {
            _uow = uow;
            _mapper = mapper;
        }

        public void AddInspection(InspectionAddViewModel model)
        {
            Add(_mapper.Map<Inspection>(model));
            _uow.SaveChange();
        }

        public InspectionListViewModel GetInspectionDetail(int memberId, string memberOf)
        {
            return _mapper.Map<InspectionListViewModel>(GetAll(I => I.MemberId == memberId && I.MemberOf == memberOf));
        }

        public void UpdateInspection(InspectionUpdateViewModel model)
        {
            Update(_mapper.Map<Inspection>(model));
            _uow.SaveChange();
        }
    }
}
