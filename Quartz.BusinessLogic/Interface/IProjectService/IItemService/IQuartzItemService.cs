﻿using Quartz.Common.ViewModels.Project.Item.QuartzItemViewModels;
using Quartz.Entities.Concrete.Project.Item;
using System.Collections.Generic;

namespace Quartz.BusinessLogic.Interface.IProjectService.IItemService
{
    public interface IQuartzItemService : IGenericService<QuartzItem>
    {
        List<QuartzItemListViewModel> GetAllItems(int linkId);
        QuartzItemUpdateViewModel GetItemDetail(int itemId);
        int AddItem(QuartzItemAddViewModel model);
        void UpdateItem(QuartzItemUpdateViewModel model);
        void DeleteItem(QuartzItemDeleteViewModel model);
    }
}
