using AutoMapper;
using Quartz.BusinessLogic.Interface.ILookUpItemsService;
using Quartz.Common.ViewModels.LookUpItems.LookUpItemsFittingTypeViewModels;
using Quartz.DataAccess.UnitOfWorks.Interface;
using Quartz.Entities.Concrete.LookUpItems;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quartz.BusinessLogic.Concrete.LookUpItemsManager
{
    public class LookUpItemsFittingTypeManager : GenericManager<LookUpItemsFittingType>, ILookUpItemsFittingTypeService
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;
        public LookUpItemsFittingTypeManager(IUnitOfWork uow, IMapper mapper) : base(uow)
        {
            _uow = uow;
            _mapper = mapper;
        }

        public void AddFittingType(LookUpItemsFittingTypeAddViewModel model)
        {
            Add(_mapper.Map<LookUpItemsFittingType>(model));
            _uow.SaveChange();
        }

        public List<LookUpItemsFittingTypeListViewModel> GetAllFittingTypes()
        {
            return _mapper.Map<List<LookUpItemsFittingTypeListViewModel>>(GetAll());
        }

        public void UpdateFittingType(LookUpItemsFittingTypeUpdateViewModel model)
        {
            Update(_mapper.Map<LookUpItemsFittingType>(model));
            _uow.SaveChange();
        }
    }
}
