namespace Quartz.Common.ViewModels.Project.Link.QuartzLinkViewModels
{
    public class QuartzLinkListViewModel
    {
        public int Id { get; set; }
        public string TagNo { get; set; }
        public int MainQuartzLinkId { get; set; } // Linkin ait olduğu üst linkin Id'si
    }
}
