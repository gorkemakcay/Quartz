using AutoMapper;
using Quartz.BusinessLogic.Interface.ILookUpItemsService;
using Quartz.Common.ViewModels.LookUpItems.LookUpItemsPlantSystemViewModels;
using Quartz.DataAccess.UnitOfWorks.Interface;
using Quartz.Entities.Concrete.LookUpItems;
using System.Collections.Generic;

namespace Quartz.BusinessLogic.Concrete.LookUpItemsManager
{
    public class LookUpItemsPlantSystemManager : GenericManager<LookUpItemsPlantSystem>, ILookUpItemsPlantSystemService
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;
        public LookUpItemsPlantSystemManager(IUnitOfWork uow, IMapper mapper) : base(uow)
        {
            _uow = uow;
            _mapper = mapper;
        }

        public void AddPlantSystem(LookUpItemsPlantSystemAddViewModel model)
        {
            Add(_mapper.Map<LookUpItemsPlantSystem>(model));
            _uow.SaveChange();
        }

        public void DeletePlantSystem(LookUpItemsPlantSystemDeleteViewModel model)
        {
            Delete(_mapper.Map<LookUpItemsPlantSystem>(model));
            _uow.SaveChange();
        }

        public List<LookUpItemsPlantSystemListViewModel> GetAllPlantSystems()
        {
            return _mapper.Map<List<LookUpItemsPlantSystemListViewModel>>(GetAll());
        }

        public LookUpItemsPlantSystemListViewModel GetPlantSystemDetail(int plantSystemId)
        {
            return _mapper.Map<LookUpItemsPlantSystemListViewModel>(GetById(plantSystemId));
        }

        public void UpdatePlantSystem(LookUpItemsPlantSystemUpdateViewModel model)
        {
            Update(_mapper.Map<LookUpItemsPlantSystem>(model));
            _uow.SaveChange();
        }
    }
}
