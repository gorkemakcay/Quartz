using System;

namespace Quartz.Common.ViewModels.Project.Item.QuartzItemsInspectionViewModels
{
    public class QuartzItemsInspectionAddViewModel
    {
        public string ReportNo { get; set; }
        public string Method { get; set; }
        public string Procedure { get; set; }
        public string Technique { get; set; }
        public string Status { get; set; }
        public DateTime Date { get; set; }
        public DateTime DueDate { get; set; }
        public DateTime CreatedDate { get; set; }
        public string Details { get; set; }
        public int QuartzItemId { get; set; } // Inspection'ın ait olduğu Item'ın Id'si (Foreign Key)
    }
}
