using Quartz.Entities.Interface;
using System;

namespace Quartz.Entities.Concrete.Project.Item
{
    public class QuartzItemsValveMaintenance : ITable
    {
        public int Id { get; set; }
        public string PlantArea { get; set; }
        public string KKSNo { get; set; }
        public string SerialNo { get; set; }
        public string SupplierManufacturare { get; set; }
        public string Designation { get; set; }
        public float IdealBarg { get; set; }
        public float OpeningPressureBarg { get; set; }
        public string Remarks { get; set; }
        public DateTime TestDate { get; set; }
        public DateTime CreatedDate { get; set; }
        public bool Tested { get; set; }
        public string AttachmentIds { get; set; }
        public int QuartzItemId { get; set; } // Information'ın ait olduğu Item'ın Id'si (Foreign Key)
        public QuartzItem QuartzItem { get; set; } // Information'ın ait olduğu Item (One-to-Many Relationship)
    }
}