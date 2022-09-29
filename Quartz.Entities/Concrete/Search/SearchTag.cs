using Quartz.Entities.Interface;

namespace Quartz.Entities.Concrete.Search
{
    public class SearchTag : ITable
    {
        public int ItemId { get; set; }
        public string ItemTagNo { get; set; }
        public int LinkId { get; set; }
        public string LinkTagNo { get; set; }
        public string Specification { get; set; }
        public string SerialNo { get; set; }
        public string FittingType { get; set; }
        public string WeldType { get; set; }
        public string PlantArea { get; set; }
        public string PlantSystem { get; set; }
        public string Description { get; set; }
    }
}
