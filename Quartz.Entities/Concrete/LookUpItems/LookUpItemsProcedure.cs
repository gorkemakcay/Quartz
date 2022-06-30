using Quartz.Entities.Interface;

namespace Quartz.Entities.Concrete.LookUpItems
{
    public class LookUpItemsProcedure : ITable
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string LookUpItemsMethod { get; set; }
    }
}
