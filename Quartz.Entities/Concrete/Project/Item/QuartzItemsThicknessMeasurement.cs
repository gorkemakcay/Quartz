using Quartz.Entities.Interface;
using System;

namespace Quartz.Entities.Concrete.Project.Item
{
    public class QuartzItemsThicknessMeasurement : ITable
    {
        public int Id { get; set; }
        public string PlantArea { get; set; }
        public string PlantSystem { get; set; }
        public string Specification { get; set; }
        public float NominalThickness { get; set; }
        public float MeasuredThickness { get; set; }
        public string Description { get; set; }
        public DateTime CreatedDate { get; set; }
        public string AttachmentIds { get; set; }
        public int QuartzItemId { get; set; } // Information'ın ait olduğu Item'ın Id'si (Foreign Key)
        public QuartzItem QuartzItem { get; set; } // Information'ın ait olduğu Item (One-to-Many Relationship)
    }
}
