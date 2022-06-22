using Quartz.Common.ViewModels.Projects.Items.InformationViewModels;
using Quartz.Entities.Concrete.Projects.Items;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quartz.BusinessLogic.Interface.Projects.Items
{
    public interface IInformationService : IGenericService<Information>
    {
        InformationListViewModel GetInformationDetail(int memberId, string memberOf);
        void AddInformation(InformationAddViewModel model);
        void UpdateInformation(InformationUpdateViewModel model);
    }
}
