using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quartz.Common.ViewModels.Projects.QuartzViewModels
{
    public class QuartzListViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Creater { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
