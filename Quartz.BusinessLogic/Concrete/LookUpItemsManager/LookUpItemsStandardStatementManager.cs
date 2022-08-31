using AutoMapper;
using Quartz.BusinessLogic.Interface.ILookUpItemsService;
using Quartz.Common.ViewModels.LookUpItems.LookUpItemsStandardStatementViewModels;
using Quartz.DataAccess.UnitOfWorks.Interface;
using Quartz.Entities.Concrete.LookUpItems;
using System.Collections.Generic;

namespace Quartz.BusinessLogic.Concrete.LookUpItemsManager
{
    public class LookUpItemsStandardStatementManager : GenericManager<LookUpItemsStandardStatement>, ILookUpItemsStandardStatementService
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;
        public LookUpItemsStandardStatementManager(IUnitOfWork uow, IMapper mapper) : base(uow)
        {
            _uow = uow;
            _mapper = mapper;
        }

        public void AddStandardStatement(LookUpItemsStandardStatementAddViewModel model)
        {
            Add(_mapper.Map<LookUpItemsStandardStatement>(model));
            _uow.SaveChange();
        }

        public void DeleteStandardStatement(LookUpItemsStandardStatementDeleteViewModel model)
        {
            Delete(_mapper.Map<LookUpItemsStandardStatement>(model));
            _uow.SaveChange();
        }

        public List<LookUpItemsStandardStatementListViewModel> GetAllStandardStatements()
        {
            return _mapper.Map<List<LookUpItemsStandardStatementListViewModel>>(GetAll());
        }

        public void UpdateStandardStatement(LookUpItemsStandardStatementUpdateViewModel model)
        {
            Update(_mapper.Map<LookUpItemsStandardStatement>(model));
            _uow.SaveChange();
        }
    }
}
