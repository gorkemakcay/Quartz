using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Quartz.Models
{
    public class UserSignUpViewModel
    {
        [Display(Name = "First name")]
        [Required(ErrorMessage = "Enter First Name!")]
        public string FirstName { get; set; }

        [Display(Name = "Last name")]
        [Required(ErrorMessage = "Enter Last Name!")]
        public string LastName { get; set; }

        public string FullName { get; set; }

        [Display(Name = "Email")]
        [Required(ErrorMessage = "Enter Email")]
        public string Email { get; set; }

        [Display(Name = "Username")]
        [Required(ErrorMessage = "Enter Username!")]
        public string UserName { get; set; }

        [Display(Name = "Password")]
        [Required(ErrorMessage = "Enter Password")]
        public string Password { get; set; }

        [Display(Name = "Confirm Password")]
        [Compare("Password", ErrorMessage = "Didn't match!")]
        public string ConfirmPassword { get; set; }
        public bool AdminRole { get; set; }
        public bool OperatorRole { get; set; }
    }
}
