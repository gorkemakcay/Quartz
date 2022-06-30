using Microsoft.AspNetCore.Identity;
using Quartz.Entities.Interface;

namespace Quartz.Entities.Concrete.Users
{
    /// <summary>
    /// Kullanıcı Bilgileri
    /// </summary>
    public class AppUser : IdentityUser<int>, ITable
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string FullName { get; set; }
    }
}
