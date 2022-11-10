using System;

namespace Quartz.Common.ViewModels.Search.SearchDrawing
{
    public class SearchDrawingListViewModel
    {
        public int LinkId { get; set; }
        public string TagNo { get; set; }
        public string Description { get; set; }
        public string PlantArea { get; set; }
        public string PlantSystem { get; set; }
        public int CurrentDrawingId { get; set; }
        public DateTime CreatedDate { get; set; }
        public string CreatedBy { get; set; }
        public int MainLinkId { get; set; }
    }
}
