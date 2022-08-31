using AutoMapper;
using Quartz.BusinessLogic.Interface.ILookUpItemsService;
using Quartz.Common.ViewModels.LookUpItems.LookUpItemsComponentTypeViewModels;
using Quartz.DataAccess.UnitOfWorks.Interface;
using Quartz.Entities.Concrete.LookUpItems;
using System.Collections.Generic;

namespace Quartz.BusinessLogic.Concrete.LookUpItemsManager
{
    public class LookUpItemsComponentTypeManager : GenericManager<LookUpItemsComponentType>, ILookUpItemsComponentTypeService
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;
        public LookUpItemsComponentTypeManager(IUnitOfWork uow, IMapper mapper) : base(uow)
        {
            _uow = uow;
            _mapper = mapper;
        }

        public void AddComponentType(LookUpItemsComponentTypeAddViewModel model)
        {
            Add(_mapper.Map<LookUpItemsComponentType>(model));
            _uow.SaveChange();
        }

        public void DeleteComponentType(LookUpItemsComponentTypeDeleteViewModel model)
        {
            Delete(_mapper.Map<LookUpItemsComponentType>(model));
            _uow.SaveChange();
        }

        public List<LookUpItemsComponentTypeListViewModel> GetAllComponentTypes()
        {
            return _mapper.Map<List<LookUpItemsComponentTypeListViewModel>>(GetAll());
        }

        public void UpdateComponentType(LookUpItemsComponentTypeUpdateViewModel model)
        {
            Update(_mapper.Map<LookUpItemsComponentType>(model));
            _uow.SaveChange();
        }
    }
}
