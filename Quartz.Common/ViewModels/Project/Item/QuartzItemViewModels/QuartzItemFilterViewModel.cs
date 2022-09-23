using System;

namespace Quartz.Common.ViewModels.Project.Item.QuartzItemViewModels
{
    public class QuartzItemFilterViewModel
    {
        public int Id { get; set; }
        public string TagNo { get; set; }
        public DateTime CreatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string AttachmentIds { get; set; }
        public int QuartzLinkId { get; set; }
    }
}
