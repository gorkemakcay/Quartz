using Quartz.Entities.Concrete.Users;
using Quartz.Entities.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quartz.Entities.Concrete.Projects
{
    public class Quartz : ITable
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Creater { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
