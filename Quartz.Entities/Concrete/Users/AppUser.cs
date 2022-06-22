using Microsoft.AspNetCore.Identity;
using Quartz.Entities.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
