using System;

namespace Quartz.Common.ViewModels.Project.Link.QuartzLinkViewModels
{
    public class QuartzLinkAddViewModel
    {
        public string TagNo { get; set; }
        public bool ShowLabel { get; set; } = true;
        public DateTime CreatedDate { get; set; }
        public string CreatedBy { get; set; }
        public int MainQuartzLinkId { get; set; } // Linkin ait olduğu üst linkin Id'si
        public int CurrentDrawingId { get; set; } // Linke ait çizimin Id'si
        public string Hierarchy { get; set; }
    }
}
