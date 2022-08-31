using AutoMapper;
using Quartz.BusinessLogic.Interface.ILookUpItemsService;
using Quartz.Common.ViewModels.LookUpItems.LookUpItemsOperatorViewModels;
using Quartz.DataAccess.UnitOfWorks.Interface;
using Quartz.Entities.Concrete.LookUpItems;
using System.Collections.Generic;

namespace Quartz.BusinessLogic.Concrete.LookUpItemsManager
{
    public class LookUpItemsOperatorManager : GenericManager<LookUpItemsOperator>, ILookUpItemsOperatorService
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;
        public LookUpItemsOperatorManager(IUnitOfWork uow, IMapper mapper) : base(uow)
        {
            _uow = uow;
            _mapper = mapper;
        }

        public void AddOperator(LookUpItemsOperatorAddViewModel model)
        {
            Add(_mapper.Map<LookUpItemsOperator>(model));
            _uow.SaveChange();
        }

        public void DeleteOperator(LookUpItemsOperatorDeleteViewModel model)
        {
            Delete(_mapper.Map<LookUpItemsOperator>(model));
            _uow.SaveChange();
        }

        public List<LookUpItemsOperatorUpdateViewModel> GetAllOperators()
        {
            return _mapper.Map<List<LookUpItemsOperatorUpdateViewModel>>(GetAll());
        }

        public void UpdateOperator(LookUpItemsOperatorUpdateViewModel model)
        {
            Update(_mapper.Map<LookUpItemsOperator>(model));
            _uow.SaveChange();
        }
    }
}
