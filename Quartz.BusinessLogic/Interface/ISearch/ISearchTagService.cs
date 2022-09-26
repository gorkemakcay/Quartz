using Quartz.Common.ViewModels.Search.SearchTag;
using Quartz.Entities.Concrete.Search;
using System.Collections.Generic;

namespace Quartz.BusinessLogic.Interface.ISearch
{
    public interface ISearchTagService : IGenericService<SearchTag>
    {
        List<SearchTagListViewModel> FilterTags(SearchTagListViewModel model);
    }
}
