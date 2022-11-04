using Quartz.Entities.Concrete.Project.Link;
using Quartz.Entities.Concrete.Projects.Item;
using Quartz.Entities.Interface;
using System;
using System.Collections.Generic;

namespace Quartz.Entities.Concrete.Project.Item
{
    public class QuartzItem : ITable
    {
        public int Id { get; set; }
        public string TagNo { get; set; }
        public DateTime CreatedDate { get; set; }
        public string CreatedBy { get; set; }
        public bool ShowLabel { get; set; }
        public string AttachmentIds { get; set; } // Bu Item'a ait olan dosyalar
        public int QuartzLinkId { get; set; } // Item'ın ait olduğu Link'in Id'si (Foreign Key)
        public QuartzLink QuartzLink { get; set; } // Item'ın ait olduğu Link (One-to-Many Relationship)
        public List<QuartzItemsInspection> Inspections { get; set; } // Item'a ait Inspection (One-to-One Relationship)
        public QuartzItemsInformation Information { get; set; } // Item'a ait Information (One-to-One Relationship)
    }
}
