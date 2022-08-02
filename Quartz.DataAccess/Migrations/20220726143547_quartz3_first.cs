using Microsoft.EntityFrameworkCore.Migrations;

namespace Quartz.DataAccess.Migrations
{
    public partial class quartz3_first : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "MainId",
                table: "FileUploads");

            migrationBuilder.DropColumn(
                name: "MainType",
                table: "FileUploads");

            migrationBuilder.AddColumn<int>(
                name: "AttachmentIds",
                table: "QuartzItemsInspections",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "AttachmentIds",
                table: "QuartzItems",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AttachmentIds",
                table: "QuartzItemsInspections");

            migrationBuilder.DropColumn(
                name: "AttachmentIds",
                table: "QuartzItems");

            migrationBuilder.AddColumn<int>(
                name: "MainId",
                table: "FileUploads",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "MainType",
                table: "FileUploads",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
