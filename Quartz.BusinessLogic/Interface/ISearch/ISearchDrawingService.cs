using Quartz.Common.ViewModels.Search.SearchDrawing;
using System.Collections.Generic;

namespace Quartz.BusinessLogic.Interface.ISearch
{
    public interface ISearchDrawingService
    {
        List<SearchDrawingListViewModel> FilterDrawings(SearchDrawingListViewModel model);
    }
}
