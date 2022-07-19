using AutoMapper;
using Quartz.BusinessLogic.Interface.IProjectService.IItemService;
using Quartz.Common.ViewModels.Project.Item.QuartzItemsInformationViewModels;
using Quartz.DataAccess.UnitOfWorks.Interface;
using Quartz.Entities.Concrete.Projects.Item;

namespace Quartz.BusinessLogic.Concrete.ProjectManager.ItemManager
{
    public class QuartzItemsInformationManager : GenericManager<QuartzItemsInformation>, IQuartzItemsInformationService
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;
        public QuartzItemsInformationManager(IUnitOfWork uow, IMapper mapper) : base(uow)
        {
            _uow = uow;
            _mapper = mapper;
        }

        public void AddInformation(QuartzItemsInformationAddViewModel model)
        {
            Add(_mapper.Map<QuartzItemsInformation>(model));
            _uow.SaveChange();
        }

        public QuartzItemsInformationUpdateViewModel GetInformationDetail(int quartzItemId)
        {
            return _mapper.Map<QuartzItemsInformationUpdateViewModel>(GetFirstOrDefult(I => I.QuartzItemId == quartzItemId));
        }

        public void UpdateInformation(QuartzItemsInformationUpdateViewModel model)
        {
            Update(_mapper.Map<QuartzItemsInformation>(model));
            _uow.SaveChange();
        }
    }
}
