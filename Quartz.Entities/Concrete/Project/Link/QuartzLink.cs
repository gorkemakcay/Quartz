using Quartz.Entities.Concrete.Project.Item;
using Quartz.Entities.Concrete.Project.Link;
using Quartz.Entities.Interface;
using System;
using System.Collections.Generic;

namespace Quartz.Entities.Concrete.Project.Link
{
    public class QuartzLink : ITable
    {
        public int Id { get; set; }
        public string TagNo { get; set; }
        public bool ShowLabel { get; set; }
        public DateTime CreatedDate { get; set; }
        public string CreatedBy { get; set; }
        public int MainQuartzLinkId { get; set; } // Linkin ait olduğu üst linkin Id'si
        public int CurrentDrawingId { get; set; } // Linkin mevcut çiziminin Id'si
        public QuartzLinksDrawingSettings DrawingSettings { get; set; } // Linke ait DrawingSettings (One-to-One Relationship)
        public List<QuartzItem> Items { get; set; } // Linkin Itemları (One-to-Many Relationship)
        public List<QuartzLinksDrawingFeatures> DrawingFeatures { get; set; } // Linke ait DrawingFeature'lar (One-to-Many Relationship)
    }
}