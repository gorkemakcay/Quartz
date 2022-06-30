using AutoMapper;
using Quartz.BusinessLogic.Interface.IProjectService.IItemService;
using Quartz.Common.ViewModels.Project.Item.QuartzItemsInspectionViewModels;
using Quartz.Common.ViewModels.Project.QuartzItem.QuartzItemsInspectionViewModels;
using Quartz.DataAccess.UnitOfWorks.Interface;
using Quartz.Entities.Concrete.Projects.Item;

namespace Quartz.BusinessLogic.Concrete.ProjectManager.ItemManager
{
    public class QuartzItemsInspectionManager : GenericManager<QuartzItemsInspection>, IQuartzItemsInspectionService
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;
        public QuartzItemsInspectionManager(IUnitOfWork uow, IMapper mapper) : base(uow)
        {
            _uow = uow;
            _mapper = mapper;
        }

        public void AddInspection(QuartzItemsInspectionAddViewModel model)
        {
            Add(_mapper.Map<QuartzItemsInspection>(model));
            _uow.SaveChange();
        }

        public QuartzItemsInspectionUpdateViewModel GetInspectionDetail(int inspectionId)
        {
            return _mapper.Map<QuartzItemsInspectionUpdateViewModel>(GetFirstOrDefult(I => I.Id == inspectionId));
        }

        public void UpdateInspection(QuartzItemsInspectionUpdateViewModel model)
        {
            Update(_mapper.Map<QuartzItemsInspection>(model));
            _uow.SaveChange();
        }
    }
}
