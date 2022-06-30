using System.ComponentModel.DataAnnotations;

namespace Quartz.Common.ViewModels.Users.AppUserViewModels
{
    public class AppUserAddViewModel
    {
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        public string FullName { get; set; }
        [Required]
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
