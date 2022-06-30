using AutoMapper;
using Quartz.BusinessLogic.Interface.ILookUpItemsService;
using Quartz.Common.ViewModels.LookUpItems.LookUpItemsTechniqueViewModels;
using Quartz.DataAccess.UnitOfWorks.Interface;
using Quartz.Entities.Concrete.LookUpItems;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quartz.BusinessLogic.Concrete.LookUpItemsManager
{
    public class LookUpItemsTechniqueManager : GenericManager<LookUpItemsTechnique>, ILookUpItemsTechniqueService
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;
        public LookUpItemsTechniqueManager(IUnitOfWork uow, IMapper mapper) : base(uow)
        {
            _uow = uow;
            _mapper = mapper;
        }

        public void AddTechnique(LookUpItemsTechniqueAddViewModel model)
        {
            Add(_mapper.Map<LookUpItemsTechnique>(model));
            _uow.SaveChange();
        }

        public List<LookUpItemsTechniqueListViewModel> GetAllTechniques()
        {
            return _mapper.Map<List<LookUpItemsTechniqueListViewModel>>(GetAll());
        }

        public void UpdateTechnique(LookUpItemsTechniqueUpdateViewModel model)
        {
            Update(_mapper.Map<LookUpItemsTechnique>(model));
            _uow.SaveChange();
        }
    }
}
