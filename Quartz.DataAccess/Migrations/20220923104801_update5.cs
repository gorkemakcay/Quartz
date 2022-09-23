using Microsoft.EntityFrameworkCore.Migrations;

namespace Quartz.DataAccess.Migrations
{
    public partial class SearchTagsSqlView : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_quartzItemsThicknessMeasurements_QuartzItems_QuartzItemId",
                table: "quartzItemsThicknessMeasurements");

            migrationBuilder.DropForeignKey(
                name: "FK_quartzItemsValveMaintenances_QuartzItems_QuartzItemId",
                table: "quartzItemsValveMaintenances");

            migrationBuilder.DropPrimaryKey(
                name: "PK_quartzItemsValveMaintenances",
                table: "quartzItemsValveMaintenances");

            migrationBuilder.DropPrimaryKey(
                name: "PK_quartzItemsThicknessMeasurements",
                table: "quartzItemsThicknessMeasurements");

            migrationBuilder.RenameTable(
                name: "quartzItemsValveMaintenances",
                newName: "QuartzItemsValveMaintenances");

            migrationBuilder.RenameTable(
                name: "quartzItemsThicknessMeasurements",
                newName: "QuartzItemsThicknessMeasurements");

            migrationBuilder.RenameIndex(
                name: "IX_quartzItemsValveMaintenances_QuartzItemId",
                table: "QuartzItemsValveMaintenances",
                newName: "IX_QuartzItemsValveMaintenances_QuartzItemId");

            migrationBuilder.RenameIndex(
                name: "IX_quartzItemsThicknessMeasurements_QuartzItemId",
                table: "QuartzItemsThicknessMeasurements",
                newName: "IX_QuartzItemsThicknessMeasurements_QuartzItemId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_QuartzItemsValveMaintenances",
                table: "QuartzItemsValveMaintenances",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_QuartzItemsThicknessMeasurements",
                table: "QuartzItemsThicknessMeasurements",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_QuartzItemsThicknessMeasurements_QuartzItems_QuartzItemId",
                table: "QuartzItemsThicknessMeasurements",
                column: "QuartzItemId",
                principalTable: "QuartzItems",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_QuartzItemsValveMaintenances_QuartzItems_QuartzItemId",
                table: "QuartzItemsValveMaintenances",
                column: "QuartzItemId",
                principalTable: "QuartzItems",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_QuartzItemsThicknessMeasurements_QuartzItems_QuartzItemId",
                table: "QuartzItemsThicknessMeasurements");

            migrationBuilder.DropForeignKey(
                name: "FK_QuartzItemsValveMaintenances_QuartzItems_QuartzItemId",
                table: "QuartzItemsValveMaintenances");

            migrationBuilder.DropPrimaryKey(
                name: "PK_QuartzItemsValveMaintenances",
                table: "QuartzItemsValveMaintenances");

            migrationBuilder.DropPrimaryKey(
                name: "PK_QuartzItemsThicknessMeasurements",
                table: "QuartzItemsThicknessMeasurements");

            migrationBuilder.RenameTable(
                name: "QuartzItemsValveMaintenances",
                newName: "quartzItemsValveMaintenances");

            migrationBuilder.RenameTable(
                name: "QuartzItemsThicknessMeasurements",
                newName: "quartzItemsThicknessMeasurements");

            migrationBuilder.RenameIndex(
                name: "IX_QuartzItemsValveMaintenances_QuartzItemId",
                table: "quartzItemsValveMaintenances",
                newName: "IX_quartzItemsValveMaintenances_QuartzItemId");

            migrationBuilder.RenameIndex(
                name: "IX_QuartzItemsThicknessMeasurements_QuartzItemId",
                table: "quartzItemsThicknessMeasurements",
                newName: "IX_quartzItemsThicknessMeasurements_QuartzItemId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_quartzItemsValveMaintenances",
                table: "quartzItemsValveMaintenances",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_quartzItemsThicknessMeasurements",
                table: "quartzItemsThicknessMeasurements",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_quartzItemsThicknessMeasurements_QuartzItems_QuartzItemId",
                table: "quartzItemsThicknessMeasurements",
                column: "QuartzItemId",
                principalTable: "QuartzItems",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_quartzItemsValveMaintenances_QuartzItems_QuartzItemId",
                table: "quartzItemsValveMaintenances",
                column: "QuartzItemId",
                principalTable: "QuartzItems",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
