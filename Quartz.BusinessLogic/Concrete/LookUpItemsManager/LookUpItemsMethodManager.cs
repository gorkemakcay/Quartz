using AutoMapper;
using Quartz.BusinessLogic.Interface.ILookUpItemsService;
using Quartz.Common.ViewModels.LookUpItems.LookUpItemsMethodViewModels;
using Quartz.DataAccess.UnitOfWorks.Interface;
using Quartz.Entities.Concrete.LookUpItems;
using System.Collections.Generic;

namespace Quartz.BusinessLogic.Concrete.LookUpItemsManager
{
    public class LookUpItemsMethodManager : GenericManager<LookUpItemsMethod>, ILookUpItemsMethodService
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;
        public LookUpItemsMethodManager(IUnitOfWork uow, IMapper mapper) : base(uow)
        {
            _uow = uow;
            _mapper = mapper;
        }

        public void AddMethod(LookUpItemsMethodAddViewModel model)
        {
            Add(_mapper.Map<LookUpItemsMethod>(model));
            _uow.SaveChange();
        }

        public void DeleteMethod(LookUpItemsMethodDeleteViewModel model)
        {
            Delete(_mapper.Map<LookUpItemsMethod>(model));
            _uow.SaveChange();
        }

        public List<LookUpItemsMethodListViewModel> GetAllMethods()
        {
            return _mapper.Map<List<LookUpItemsMethodListViewModel>>(GetAll());
        }

        public void UpdateMethod(LookUpItemsMethodUpdateViewModel model)
        {
            Update(_mapper.Map<LookUpItemsMethod>(model));
            _uow.SaveChange();
        }
    }
}
