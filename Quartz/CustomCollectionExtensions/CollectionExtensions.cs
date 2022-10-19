using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Quartz.DataAccess.Concrete.EntityFramworkCore.Context;
using Quartz.Entities.Concrete.Users;
using System;

namespace Quartz.CustomCollectionExtensions
{
    public static class CollectionExtensions
    {
        public static void AddCustomIdentity(this IServiceCollection services)
        {

            services.AddIdentity<AppUser, AppRole>(opt =>
            {
                opt.Password.RequireDigit = false; // Sayı içerme zorunluluğu
                opt.Password.RequireUppercase = false; // Büyük harf içerme zorunluluğu
                opt.Password.RequireLowercase = false; // Küçük harf içerme zorunluluğu
                opt.Password.RequireNonAlphanumeric = false; // Özel karakter içerme zorunluluğu (!#%$...)
                opt.Password.RequiredLength = 1; // Minimum uzunluk sayısı
            }).AddEntityFrameworkStores<QuartzContext>(); // Identity'nin çalışacağı veritabanı

            services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme).AddCookie(opt =>
            {
                opt.Cookie.Name = "QuartzCookie";
                opt.Cookie.HttpOnly = true;
                opt.Cookie.SameSite = SameSiteMode.Strict;
                opt.Cookie.SecurePolicy = CookieSecurePolicy.SameAsRequest;
                opt.Cookie.IsEssential = true;
                opt.ExpireTimeSpan = DateTime.Now.Subtract(DateTime.UtcNow).Add(TimeSpan.FromMinutes(1));
                opt.SlidingExpiration = true;
                opt.LoginPath = "/SignInUser/Index";
                opt.LogoutPath = "/SignInUser/Index";
            });

            services.AddSession(opt =>
            {
                opt.IdleTimeout = DateTime.Now.Subtract(DateTime.UtcNow).Add(TimeSpan.FromMinutes(1));
            });

            services.ConfigureApplicationCookie(opt =>
            {
                opt.Cookie.Name = "QuartzCookie";
                opt.Cookie.SameSite = SameSiteMode.Strict;
                opt.Cookie.HttpOnly = true;
                opt.Cookie.SecurePolicy = CookieSecurePolicy.SameAsRequest;
                //opt.ExpireTimeSpan = DateTime.Now.Subtract(DateTime.UtcNow).Add(TimeSpan.FromMinutes(1));
                opt.ExpireTimeSpan = TimeSpan.FromMinutes(15);
                opt.LoginPath = "/SignInUser/Index";
                opt.LogoutPath = "/SignInUser/Index";
            });
        }
    }
}
