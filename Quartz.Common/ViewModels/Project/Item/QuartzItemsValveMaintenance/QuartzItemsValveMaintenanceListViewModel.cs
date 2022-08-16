using System;

namespace Quartz.Common.ViewModels.Project.Item.QuartzItemsValveMaintenance
{
    public class QuartzItemsValveMaintenanceListViewModel
    {
        public int Id { get; set; }
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
        public int AttachmentIds { get; set; }
        public int QuartzItemId { get; set; }
    }
}
