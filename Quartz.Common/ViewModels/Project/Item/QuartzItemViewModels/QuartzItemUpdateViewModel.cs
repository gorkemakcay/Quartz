using System;

namespace Quartz.Common.ViewModels.Project.Item.QuartzItemViewModels
{
    public class QuartzItemUpdateViewModel
    {
        public int Id { get; set; }
        public string TagNo { get; set; }
        public string AttachmentIds { get; set; } // Bu Item'a ait olan dosyalar
        public DateTime CreatedDate { get; set; }
        public string CreatedBy { get; set; }
        public bool ShowLabel { get; set; }
        public int QuartzLinkId { get; set; }

    }
}
