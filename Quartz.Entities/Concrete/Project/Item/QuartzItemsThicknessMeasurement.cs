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
        public int AttachmentIds { get; set; }
        public int QuartzItemId { get; set; }
    }
}
