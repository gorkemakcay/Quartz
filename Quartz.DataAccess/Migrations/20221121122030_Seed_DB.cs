using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Quartz.DataAccess.Migrations
{
    public partial class Seed_DB : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { 1, "e7d7c5f4-0ce5-4257-af9d-c73a46248fb6", "Admin", "ADMIN" },
                    { 2, "7cf8b3a0-50a6-44ea-9597-85780c2c48c4", "Operator", "OPERATOR" }
                });

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "ConcurrencyStamp", "Email", "EmailConfirmed", "FirstName", "FullName", "LastName", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "SecurityStamp", "TwoFactorEnabled", "UserName" },
                values: new object[] { 1, 0, "a4b5dffb-a36c-4278-99e2-8a1365b14980", "admin@quartz.com", false, "Admin", "Admin Quartz", "Quartz", true, null, "ADMIN@QUARTZ.COM", "ADMIN", "AQAAAAEAACcQAAAAEPobgxnycHlVFer472HrsgpWNNrAJYNnC8fB4g2Hac5cA+ZTdkLmSJwfkJ+drH8r1Q==", null, false, "6f891b0c-d54f-4ce2-ab58-05ebe0cb65f4", false, "admin" });

            migrationBuilder.InsertData(
                table: "FileUploads",
                columns: new[] { "Id", "CreatedDate", "Extension", "Name", "Path", "Type", "UploadedBy" },
                values: new object[] { 1, new DateTime(2022, 11, 21, 15, 20, 29, 705, DateTimeKind.Local).AddTicks(6581), ".jpg", "MainDrawing", "wwwroot\\Files\\MainDrawing.jpg", "image/jpeg", "QUARTZ" });

            migrationBuilder.InsertData(
                table: "QuartzLinks",
                columns: new[] { "Id", "CreatedBy", "CreatedDate", "CurrentDrawingId", "Hierarchy", "MainQuartzLinkId", "ShowLabel", "TagNo" },
                values: new object[] { 1, "QUARTZ", new DateTime(2022, 11, 21, 15, 20, 29, 704, DateTimeKind.Local).AddTicks(874), 1, "0", 0, true, "Main" });

            migrationBuilder.InsertData(
                table: "AspNetUserRoles",
                columns: new[] { "RoleId", "UserId" },
                values: new object[] { 1, 1 });

            migrationBuilder.InsertData(
                table: "QuartzLinksDrawingSettings",
                columns: new[] { "Id", "AttachmentIds", "Description", "DrawingNo", "File", "PlantArea", "PlantSystem", "QuartzLinkId" },
                values: new object[] { 1, null, null, "Main", "1", "select", "select", 1 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "AspNetUserRoles",
                keyColumns: new[] { "RoleId", "UserId" },
                keyValues: new object[] { 1, 1 });

            migrationBuilder.DeleteData(
                table: "FileUploads",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "QuartzLinksDrawingSettings",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "QuartzLinks",
                keyColumn: "Id",
                keyValue: 1);
        }
    }
}
