using AutoMapper;
using Quartz.BusinessLogic.Interface.ILookUpItemsService;
using Quartz.Common.ViewModels.LookUpItems.LookUpItemsTechniqueViewModels;
using Quartz.DataAccess.UnitOfWorks.Interface;
using Quartz.Entities.Concrete.LookUpItems;
using System.Collections.Generic;

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

        public void DeleteTechnique(LookUpItemsTechniqueDeleteViewModel model)
        {
            Delete(_mapper.Map<LookUpItemsTechnique>(model));
            _uow.SaveChange();
        }

        public List<LookUpItemsTechniqueListViewModel> GetAllTechniques()
        {
            return _mapper.Map<List<LookUpItemsTechniqueListViewModel>>(GetAll());
        }

        public LookUpItemsTechniqueListViewModel GetTechniqueDetail(int techniqueId)
        {
            return _mapper.Map<LookUpItemsTechniqueListViewModel>(GetById(techniqueId));
        }

        public void UpdateTechnique(LookUpItemsTechniqueUpdateViewModel model)
        {
            Update(_mapper.Map<LookUpItemsTechnique>(model));
            _uow.SaveChange();
        }
    }
}
