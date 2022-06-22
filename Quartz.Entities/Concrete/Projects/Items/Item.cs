using Quartz.Entities.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quartz.Entities.Concrete.Projects.Items
{
    public class Item : ITable
    {
        public int Id { get; set; }
        public int MemberId { get; set; }
        public string MemberOf { get; set; }

        public string Name { get; set; }
        public string Creator { get; set; }

        public DateTime CreatedDate { get; set; }
    }
}
