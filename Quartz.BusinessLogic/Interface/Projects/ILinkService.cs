using Quartz.Common.ViewModels.Projects.LinkViewModels;
using Quartz.Entities.Concrete.Projects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quartz.BusinessLogic.Interface.Projects
{
    public interface ILinkService : IGenericService<Link>
    {
        List<LinkListViewModel> GetAllLists(int memberId, string memberOf);
        void AddLink(LinkAddViewModel model);
        void UpdateLink(LinkUpdateViewModel model);
    }
}
