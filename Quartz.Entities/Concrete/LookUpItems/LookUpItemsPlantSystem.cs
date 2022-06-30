using Quartz.Entities.Interface;

namespace Quartz.Entities.Concrete.LookUpItems
{
    public class LookUpItemsPlantSystem : ITable
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string LookUpItemsPlantAreas { get; set; }
    }
}
