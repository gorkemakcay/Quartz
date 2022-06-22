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
    /// Rol Bilgileri
    /// </summary>
    public class AppRole : IdentityRole<int>, ITable
    {
    }
}
