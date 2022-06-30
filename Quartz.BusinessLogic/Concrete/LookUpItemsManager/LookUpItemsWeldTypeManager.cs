using AutoMapper;
using Quartz.BusinessLogic.Interface.ILookUpItemsService;
using Quartz.Common.ViewModels.LookUpItems.LookUpItemsWeldTypeViewModels;
using Quartz.DataAccess.UnitOfWorks.Interface;
using Quartz.Entities.Concrete.LookUpItems;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quartz.BusinessLogic.Concrete.LookUpItemsManager
{
    public class LookUpItemsWeldTypeManager : GenericManager<LookUpItemsWeldType>, ILookUpItemsWeldTypeService
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;
        public LookUpItemsWeldTypeManager(IUnitOfWork uow, IMapper mapper) : base(uow)
        {
            _uow = uow;
            _mapper = mapper;
        }

        public void AddWeldType(LookUpItemsWeldTypeAddViewModel model)
        {
            Add(_mapper.Map<LookUpItemsWeldType>(model));
            _uow.SaveChange();
        }

        public List<LookUpItemsWeldTypeListViewModel> GetAllWeldTypes()
        {
            return _mapper.Map<List<LookUpItemsWeldTypeListViewModel>>(GetAll());
        }

        public void UpdateWeldType(LookUpItemsWeldTypeUpdateViewModel model)
        {
            Update(_mapper.Map<LookUpItemsWeldType>(model));
            _uow.SaveChange();
        }
    }
}
