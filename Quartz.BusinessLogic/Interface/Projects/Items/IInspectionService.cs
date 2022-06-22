using Quartz.Common.ViewModels.Projects.Items.InspectionViewModels;
using Quartz.Entities.Concrete.Projects.Items;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quartz.BusinessLogic.Interface.Projects.Items
{
    public interface IInspectionService : IGenericService<Inspection>
    {
        InspectionListViewModel GetInspectionDetail(int memberId, string memberOf);
        void AddInspection(InspectionAddViewModel model);
        void UpdateInspection(InspectionUpdateViewModel model);
    }
}
