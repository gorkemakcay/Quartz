using Microsoft.AspNetCore.Identity;
using Quartz.Entities.Interface;

namespace Quartz.Entities.Concrete.Users
{
    /// <summary>
    /// Rol Bilgileri
    /// </summary>
    public class AppRole : IdentityRole<int>, ITable
    {
    }
}
