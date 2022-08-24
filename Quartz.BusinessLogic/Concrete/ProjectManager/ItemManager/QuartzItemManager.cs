using AutoMapper;
using Quartz.BusinessLogic.Interface.IProjectService.IItemService;
using Quartz.Common.ViewModels.Project.Item.QuartzItemViewModels;
using Quartz.DataAccess.Concrete.EntityFramworkCore.Context;
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

        public int AddItem(QuartzItemAddViewModel model)
        {
            using var context = new QuartzContext();

            var item = new QuartzItem()
            {
                TagNo = model.TagNo,
                CreatedDate = model.CreatedDate,
                CreatedBy = model.CreatedBy,
                QuartzLinkId = model.QuartzLinkId
            };

            context.QuartzItems.Add(item);
            context.SaveChanges();

            return item.Id;

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
            _uow.SaveChange();
        }
    }
}
