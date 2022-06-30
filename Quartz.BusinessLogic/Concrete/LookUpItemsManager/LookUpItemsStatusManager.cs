using AutoMapper;
using Quartz.BusinessLogic.Interface.ILookUpItemsService;
using Quartz.Common.ViewModels.LookUpItems.LookUpItemsStatusViewModels;
using Quartz.DataAccess.UnitOfWorks.Interface;
using Quartz.Entities.Concrete.LookUpItems;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quartz.BusinessLogic.Concrete.LookUpItemsManager
{
    public class LookUpItemsStatusManager : GenericManager<LookUpItemsStatus>, ILookUpItemsStatusService
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;
        public LookUpItemsStatusManager(IUnitOfWork uow, IMapper mapper) : base(uow)
        {
            _uow = uow;
            _mapper = mapper;
        }

        public void AddStatus(LookUpItemsStatusAddViewModel model)
        {
            Add(_mapper.Map<LookUpItemsStatus>(model));
            _uow.SaveChange();
        }

        public List<LookUpItemsStatusListViewModel> GetAllStatuses()
        {
            return _mapper.Map<List<LookUpItemsStatusListViewModel>>(GetAll());
        }

        public void UpdateStatus(LookUpItemsStatusUpdateViewModel model)
        {
            Update(_mapper.Map<LookUpItemsStatus>(model));
            _uow.SaveChange();
        }
    }
}
