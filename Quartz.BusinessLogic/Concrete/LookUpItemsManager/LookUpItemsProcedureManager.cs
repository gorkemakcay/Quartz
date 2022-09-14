using AutoMapper;
using Quartz.BusinessLogic.Interface.ILookUpItemsService;
using Quartz.Common.ViewModels.LookUpItems.LookUpItemsProcedureViewModels;
using Quartz.DataAccess.UnitOfWorks.Interface;
using Quartz.Entities.Concrete.LookUpItems;
using System.Collections.Generic;

namespace Quartz.BusinessLogic.Concrete.LookUpItemsManager
{
    public class LookUpItemsProcedureManager : GenericManager<LookUpItemsProcedure>, ILookUpItemsProcedureService
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;
        public LookUpItemsProcedureManager(IUnitOfWork uow, IMapper mapper) : base(uow)
        {
            _uow = uow;
            _mapper = mapper;
        }

        public void AddProcedure(LookUpItemsProcedureAddViewModel model)
        {
            Add(_mapper.Map<LookUpItemsProcedure>(model));
            _uow.SaveChange();
        }

        public void DeleteProcedure(LookUpItemsProcedureDeleteViewModel model)
        {
            Delete(_mapper.Map<LookUpItemsProcedure>(model));
            _uow.SaveChange();
        }

        public List<LookUpItemsProcedureListViewModel> GetAllProcedures()
        {
            return _mapper.Map<List<LookUpItemsProcedureListViewModel>>(GetAll());
        }

        public LookUpItemsProcedureListViewModel GetProcedureDetail(int procedureId)
        {
            return _mapper.Map<LookUpItemsProcedureListViewModel>(GetById(procedureId));
        }

        public void UpdateProcedure(LookUpItemsProcedureUpdateViewModel model)
        {
            Update(_mapper.Map<LookUpItemsProcedure>(model));
            _uow.SaveChange();
        }
    }
}
