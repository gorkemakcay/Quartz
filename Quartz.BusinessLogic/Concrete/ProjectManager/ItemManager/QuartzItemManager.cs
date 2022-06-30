using AutoMapper;
using Quartz.BusinessLogic.Interface.IProjectService.IItemService;
using Quartz.Common.ViewModels.Project.Item.QuartzItemViewModels;
using Quartz.DataAccess.UnitOfWorks.Interface;
using Quartz.Entities.Concrete.Project.Item;
using System.Collections.Generic;

namespace Quartz.BusinessLogic.Concrete.ProjectManager.ItemManager
{
    public class QuartzItemManager : GenericManager<QuartzItem>, IQuartzItemService
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;
        public QuartzItemManager(IUnitOfWork uow, IMapper mapper) : base(uow)
        {
            _uow = uow;
            _mapper = mapper;
        }

        public void AddItem(QuartzItemAddViewModel model)
        {
            Add(_mapper.Map<QuartzItem>(model));
            _uow.SaveChange();
        }

        public List<QuartzItemListViewModel> GetAllItems(int linkId)
        {
            return _mapper.Map<List<QuartzItemListViewModel>>(GetAll(I => I.QuartzLinkId == linkId));
        }

        public QuartzItemUpdateViewModel GetItemDetail(int itemId)
        {
            return _mapper.Map<QuartzItemUpdateViewModel>(GetFirstOrDefult(I => I.Id == itemId));
        }

        public void UpdateItem(QuartzItemUpdateViewModel model)
        {
            Update(_mapper.Map<QuartzItem>(model));
        }
    }
}
