using AutoMapper;
using Quartz.BusinessLogic.Interface.Projects.Items;
using Quartz.Common.ViewModels.Projects.Items.ItemViewModels;
using Quartz.DataAccess.UnitOfWorks.Interface;
using Quartz.Entities.Concrete.Projects.Items;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quartz.BusinessLogic.Concrete.Projects.Items
{
    public class ItemManager : GenericManager<Item>, IItemService
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;

        public ItemManager(IUnitOfWork uow, IMapper mapper) : base(uow)
        {
            _uow = uow;
            _mapper = mapper;
        }

        public void AddItem(ItemAddViewModel model)
        {
            Add(_mapper.Map<Item>(model));
            _uow.SaveChange();
        }

        public List<ItemListViewModel> GetAllItems(int memberId, string memberOf)
        {
            return _mapper.Map<List<ItemListViewModel>>(GetAll(I => I.MemberId == memberId && I.MemberOf == memberOf));
        }

        public void UpdateItem(ItemUpdateViewModel model)
        {
            Update(_mapper.Map<Item>(model));
            _uow.SaveChange();
        }
    }
}
