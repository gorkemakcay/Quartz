using Quartz.Common.ViewModels.Projects.QuartzViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quartz.BusinessLogic.Interface.Projects
{
    public interface IQuartzService : IGenericService<Entities.Concrete.Projects.Quartz>
    {
        List<QuartzListViewModel> GetAllQuartzes();
        void AddQuartz(QuartzAddViewModel model);
        void UpdateQuartz(QuartzUpdateViewModel model);
    }
}
