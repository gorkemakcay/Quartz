using Quartz.Entities.Interface;

namespace Quartz.Entities.Concrete.Project.Link
{
    public class QuartzLinksDrawingFeatures : ITable
    {
        public int Id { get; set; }
        public string Features { get; set; }
        public int QuartzLinkId { get; set; } // DrawFeature'ın ait olduğu Link'in Id'si
        public QuartzLink QuartzLink { get; set; } // DrawingFeature'ın ait olduğu Link (One-to-One Relationship)
    }
}
