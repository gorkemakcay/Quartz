namespace Quartz.Common.ViewModels.Project.Link.QuartzLinksDrawingFeaturesViewModels
{
    public class QuartzLinksDrawingFeaturesUpdateViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Coords { get; set; }
        public int QuartzLinkId { get; set; } // DrawFeature'ın ait olduğu Link'in Id'si
    }
}
