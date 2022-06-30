using AutoMapper;
using Quartz.BusinessLogic.Interface.ILookUpItemsService;
using Quartz.Common.ViewModels.LookUpItems.LookUpItemsPlantAreaViewModels;
using Quartz.DataAccess.UnitOfWorks.Interface;
using Quartz.Entities.Concrete.LookUpItems;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quartz.BusinessLogic.Concrete.LookUpItemsManager
{
    public class LookUpItemsPlantAreaManager : GenericManager<LookUpItemsPlantArea>, ILookUpItemsPlantAreaService
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;
        public LookUpItemsPlantAreaManager(IUnitOfWork uow, IMapper mapper) : base(uow)
        {
            _uow = uow;
            _mapper = mapper;
        }

        public void AddPlantArea(LookUpItemsPlantAreaAddViewModel model)
        {
            Add(_mapper.Map<LookUpItemsPlantArea>(model));
            _uow.SaveChange();
        }

        public List<LookUpItemsPlantAreaListViewModel> GetAllPlantAreas()
        {
            return _mapper.Map<List<LookUpItemsPlantAreaListViewModel>>(GetAll());
        }

        public void UpdatePlantArea(LookUpItemsPlantAreaUpdateViewModel model)
        {
            Update(_mapper.Map<LookUpItemsPlantArea>(model));
            _uow.SaveChange();
        }
    }
}
