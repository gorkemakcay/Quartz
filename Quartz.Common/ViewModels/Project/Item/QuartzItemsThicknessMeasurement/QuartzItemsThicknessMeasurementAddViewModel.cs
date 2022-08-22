using System;

namespace Quartz.Common.ViewModels.Project.Item.QuartzItemsThicknessMeasurement
{
    public class QuartzItemsThicknessMeasurementAddViewModel
    {
        public string PlantArea { get; set; }
        public string PlantSystem { get; set; }
        public string Specification { get; set; }
        public float NominalThickness { get; set; }
        public float MeasuredThickness { get; set; }
        public string Description { get; set; }
        public DateTime CreatedDate { get; set; }
        public string AttachmentIds { get; set; }
        public int QuartzItemId { get; set; }
    }
}
