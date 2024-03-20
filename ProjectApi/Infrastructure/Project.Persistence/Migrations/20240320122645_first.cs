using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Project.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class first : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Brands",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedDate", "Name" },
                values: new object[] { new DateTime(2024, 3, 20, 15, 26, 45, 166, DateTimeKind.Local).AddTicks(4864), "Health & Kids" });

            migrationBuilder.UpdateData(
                table: "Brands",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedDate", "Name" },
                values: new object[] { new DateTime(2024, 3, 20, 15, 26, 45, 166, DateTimeKind.Local).AddTicks(4884), "Grocery & Beauty" });

            migrationBuilder.UpdateData(
                table: "Brands",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedDate", "Name" },
                values: new object[] { new DateTime(2024, 3, 20, 15, 26, 45, 166, DateTimeKind.Local).AddTicks(4894), "Computers" });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2024, 3, 20, 15, 26, 45, 166, DateTimeKind.Local).AddTicks(8217));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedDate",
                value: new DateTime(2024, 3, 20, 15, 26, 45, 166, DateTimeKind.Local).AddTicks(8219));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreatedDate",
                value: new DateTime(2024, 3, 20, 15, 26, 45, 166, DateTimeKind.Local).AddTicks(8221));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreatedDate",
                value: new DateTime(2024, 3, 20, 15, 26, 45, 166, DateTimeKind.Local).AddTicks(8224));

            migrationBuilder.UpdateData(
                table: "Details",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedDate", "Description", "Title" },
                values: new object[] { new DateTime(2024, 3, 20, 15, 26, 45, 169, DateTimeKind.Local).AddTicks(3917), "Ekşili minima uzattı kalemi karşıdakine.", "Ut." });

            migrationBuilder.UpdateData(
                table: "Details",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedDate", "Description", "Title" },
                values: new object[] { new DateTime(2024, 3, 20, 15, 26, 45, 169, DateTimeKind.Local).AddTicks(3971), "Voluptatem accusantium koştum makinesi gördüm.", "Kapının camisi." });

            migrationBuilder.UpdateData(
                table: "Details",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedDate", "Description", "Title" },
                values: new object[] { new DateTime(2024, 3, 20, 15, 26, 45, 169, DateTimeKind.Local).AddTicks(4047), "Nemo domates orta de tempora.", "Eum." });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedDate", "Description", "Discount", "Price", "Title" },
                values: new object[] { new DateTime(2024, 3, 20, 15, 26, 45, 172, DateTimeKind.Local).AddTicks(7092), "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016", 9.2614069201890m, 533.71m, "Rustic Plastic Fish" });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedDate", "Description", "Discount", "Price", "Title" },
                values: new object[] { new DateTime(2024, 3, 20, 15, 26, 45, 172, DateTimeKind.Local).AddTicks(7130), "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive", 7.372679322900650m, 906.96m, "Unbranded Soft Chicken" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Brands",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedDate", "Name" },
                values: new object[] { new DateTime(2024, 3, 19, 6, 10, 22, 806, DateTimeKind.Local).AddTicks(9442), "Shoes & Garden" });

            migrationBuilder.UpdateData(
                table: "Brands",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedDate", "Name" },
                values: new object[] { new DateTime(2024, 3, 19, 6, 10, 22, 806, DateTimeKind.Local).AddTicks(9465), "Home & Books" });

            migrationBuilder.UpdateData(
                table: "Brands",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedDate", "Name" },
                values: new object[] { new DateTime(2024, 3, 19, 6, 10, 22, 806, DateTimeKind.Local).AddTicks(9479), "Toys" });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2024, 3, 19, 6, 10, 22, 807, DateTimeKind.Local).AddTicks(3761));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedDate",
                value: new DateTime(2024, 3, 19, 6, 10, 22, 807, DateTimeKind.Local).AddTicks(3764));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreatedDate",
                value: new DateTime(2024, 3, 19, 6, 10, 22, 807, DateTimeKind.Local).AddTicks(3766));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreatedDate",
                value: new DateTime(2024, 3, 19, 6, 10, 22, 807, DateTimeKind.Local).AddTicks(3769));

            migrationBuilder.UpdateData(
                table: "Details",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedDate", "Description", "Title" },
                values: new object[] { new DateTime(2024, 3, 19, 6, 10, 22, 815, DateTimeKind.Local).AddTicks(5083), "Sinema göze gül perferendis bundan.", "Balıkhaneye." });

            migrationBuilder.UpdateData(
                table: "Details",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedDate", "Description", "Title" },
                values: new object[] { new DateTime(2024, 3, 19, 6, 10, 22, 815, DateTimeKind.Local).AddTicks(5176), "Commodi kalemi molestiae ipsam modi.", "Koyun anlamsız." });

            migrationBuilder.UpdateData(
                table: "Details",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedDate", "Description", "Title" },
                values: new object[] { new DateTime(2024, 3, 19, 6, 10, 22, 815, DateTimeKind.Local).AddTicks(5231), "Voluptatem un orta ratione masaya.", "Velit." });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedDate", "Description", "Discount", "Price", "Title" },
                values: new object[] { new DateTime(2024, 3, 19, 6, 10, 22, 825, DateTimeKind.Local).AddTicks(945), "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles", 0.3916083123843460m, 788.41m, "Sleek Steel Chicken" });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedDate", "Description", "Discount", "Price", "Title" },
                values: new object[] { new DateTime(2024, 3, 19, 6, 10, 22, 825, DateTimeKind.Local).AddTicks(1006), "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit", 8.146145481122510m, 566.52m, "Awesome Fresh Salad" });
        }
    }
}
