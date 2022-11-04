namespace Quartz.Common.ViewModels.Project.Item.QuartzItemViewModels
{
    public class QuartzItemListViewModel
    {
        public int Id { get; set; }
        public string TagNo { get; set; }
        public bool ShowLabel { get; set; }
        public int QuartzLinkId { get; set; } // Item'ın ait olduğu Link'in Id'si (Foreign Key)
    }
}
