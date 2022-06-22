using Quartz.Common.ViewModels.Projects.Items.ItemViewModels;
using Quartz.Entities.Concrete.Projects.Items;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quartz.BusinessLogic.Interface.Projects.Items
{
    public interface IItemService : IGenericService<Item>
    {
        List<ItemListViewModel> GetAllItems(int memberId, string memberOf);
        void AddItem(ItemAddViewModel model);
        void UpdateItem(ItemUpdateViewModel model);

    }
}
