using Quartz.Entities.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quartz.Entities.Concrete.Projects.Items
{
    public class Information : ITable
    {
        public int Id { get; set; }
        public int MemberId { get; set; }
        public string MemberOf { get; set; }

        public string TagName { get; set; }
        public string SerialNo { get; set; }
        public string ComponentType { get; set; }
        public string Comments { get; set; }
        public string Specification { get; set; }
        public string FittingType { get; set; }
        public bool ShowLabel { get; set; }
        public string PipeOd { get; set; }
        public string PipeThickness { get; set; }
        public string OperatingTemp { get; set; }
        public string OperatingPressute { get; set; }
    }
}
