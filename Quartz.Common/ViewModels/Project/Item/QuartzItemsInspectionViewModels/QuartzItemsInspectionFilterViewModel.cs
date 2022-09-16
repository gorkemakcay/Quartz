using System;

namespace Quartz.Common.ViewModels.Project.Item.QuartzItemsInspectionViewModels
{
    public class QuartzItemsInspectionFilterViewModel
    {
        public string ReportNo { get; set; }
        public string Method { get; set; }
        public string Procedure { get; set; }
        public string Technique { get; set; }
        public string Status { get; set; }
        public DateTime Date { get; set; }
        public DateTime DueDate { get; set; }
        public string Details { get; set; }
    }
}