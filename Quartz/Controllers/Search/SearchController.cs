using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Quartz.BusinessLogic.Interface.ISearch;
using Quartz.Common.ViewModels.Search.SearchDrawing;
using Quartz.Common.ViewModels.Search.SearchTag;

namespace Quartz.Controllers.Search
{
    public class SearchController : Controller
    {
        private readonly ISearchDrawingService _searchDrawingService;
        private readonly ISearchTagService _searchTagService;
        public SearchController(ISearchDrawingService searchDrawingService, ISearchTagService searchTagService)
        {
            _searchDrawingService = searchDrawingService;
            _searchTagService = searchTagService;
        }

        [HttpPost]
        public IActionResult FilterTag(SearchTagListViewModel model)
        {
            var filteredTags = _searchTagService.FilterTags(model);
            var jSonModel = JsonConvert.SerializeObject(filteredTags, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpPost]
        public IActionResult FilterDrawing(SearchDrawingListViewModel model)
        {
            var filteredDrawings = _searchDrawingService.FilterDrawings(model);
            var jSonModel = JsonConvert.SerializeObject(filteredDrawings, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }
    }
}
