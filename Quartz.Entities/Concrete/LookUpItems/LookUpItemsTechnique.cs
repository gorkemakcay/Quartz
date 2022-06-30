using Quartz.Entities.Interface;

namespace Quartz.Entities.Concrete.LookUpItems
{
    public class LookUpItemsTechnique : ITable
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string LookUpItemsProcedure { get; set; }
    }
}
