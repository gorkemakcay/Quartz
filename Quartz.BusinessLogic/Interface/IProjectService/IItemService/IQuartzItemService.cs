using Quartz.Common.ViewModels.Project.Item.QuartzItemViewModels;
using Quartz.Entities.Concrete.Project.Item;
using System.Collections.Generic;

namespace Quartz.BusinessLogic.Interface.IProjectService.IItemService
{
    public interface IQuartzItemService : IGenericService<QuartzItem>
    {
        QuartzItemUpdateViewModel GetItemDetail(int itemId);
        int AddItem(QuartzItemAddViewModel model);
        void UpdateItem(QuartzItemUpdateViewModel model);
        void DeleteItem(QuartzItemDeleteViewModel model);
        List<QuartzItemListViewModel> GetAllItems(int linkId);
        List<QuartzItemFilterViewModel> FilterItems(QuartzItemFilterViewModel model);
    }
}
