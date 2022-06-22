using Quartz.Entities.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quartz.Entities.Concrete.Projects.Items
{
    public class Inspection : ITable
    {
        public int Id { get; set; }
        public int MemberId { get; set; }
        public string MemberOf { get; set; }

        public int ReportNo { get; set; }
        public string Method { get; set; }
        public string Procedure { get; set; }
        public string Technique { get; set; }
        public string Status { get; set; }
        public string Deatils { get; set; }
        public DateTime Date { get; set; }
        public DateTime DueDate { get; set; }
    }
}
