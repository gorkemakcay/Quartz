using Quartz.Entities.Interface;

namespace Quartz.Entities.Concrete.Project.Link
{
    public class QuartzLinksDrawingSettings : ITable
    {
        public int Id { get; set; }
        public string DrawingNo { get; set; }
        public string Description { get; set; }
        public string File { get; set; }
        public string PlantArea { get; set; }
        public string PlantSystem { get; set; }
        public int QuartzLinkId { get; set; }
        public QuartzLink QuartzLink { get; set; }
    }
}
