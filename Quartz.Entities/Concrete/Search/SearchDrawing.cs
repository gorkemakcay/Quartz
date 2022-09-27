using Quartz.Entities.Interface;

namespace Quartz.Entities.Concrete.Search
{
    public class SearchDrawing : ITable
    {
        public int LinkId { get; set; }
        public string TagNo { get; set; }
        public string Description { get; set; }
        public string PlantArea { get; set; }
        public string PlantSystem { get; set; }
    }
}
