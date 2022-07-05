using Quartz.Common.ViewModels.Project.Link.QuartzLinkViewModels;
using Quartz.Entities.Concrete.Project.Link;
using System.Collections.Generic;

namespace Quartz.BusinessLogic.Interface.IProjectService.ILinkService
{
    public interface IQuartzLinkService : IGenericService<QuartzLink>
    {
        List<QuartzLinkListViewModel> GetAllLinks(int mainLinkId);
        QuartzLinkUpdateViewModel GetLinkDetail(int linkId);
        void AddLink(QuartzLinkAddViewModel model);
        void UpdateLink(QuartzLinkUpdateViewModel model);
        void UpdateLinksTagNo(string tagNo);
    }
}
