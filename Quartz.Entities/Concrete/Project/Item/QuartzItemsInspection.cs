using Quartz.Entities.Concrete.Project.Item;
using Quartz.Entities.Interface;
using System;

namespace Quartz.Entities.Concrete.Projects.Item
{
    public class QuartzItemsInspection : ITable
    {
        public int Id { get; set; }
        public string ReportNo { get; set; }
        public string Method { get; set; }
        public string Procedure { get; set; }
        public string Technique { get; set; }
        public string Status { get; set; }
        public DateTime Date { get; set; }
        public DateTime DueDate { get; set; }
        public DateTime CreatedDate { get; set; }
        public string Details { get; set; }
        public string AttachmentIds { get; set; } // Bu Inspection'a ait olan dosyalar
        public int QuartzItemId { get; set; } // Inspection'ın ait olduğu Item'ın Id'si (Foreign Key)
        public QuartzItem QuartzItem { get; set; } // Inspection'ın ait olduğu Item (One-to-One Relationship)
    }
}
