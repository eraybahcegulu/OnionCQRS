using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Project.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class update1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CategoryProduct");

            migrationBuilder.CreateTable(
                name: "ProductCategories",
                columns: table => new
                {
                    ProductId = table.Column<int>(type: "int", nullable: false),
                    CategoryId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductCategories", x => new { x.ProductId, x.CategoryId });
                    table.ForeignKey(
                        name: "FK_ProductCategories_Categories_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "Categories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ProductCategories_Products_ProductId",
                        column: x => x.ProductId,
                        principalTable: "Products",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.UpdateData(
                table: "Brands",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedDate", "Name" },
                values: new object[] { new DateTime(2024, 3, 19, 3, 23, 18, 468, DateTimeKind.Local).AddTicks(8214), "Outdoors" });

            migrationBuilder.UpdateData(
                table: "Brands",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedDate", "Name" },
                values: new object[] { new DateTime(2024, 3, 19, 3, 23, 18, 468, DateTimeKind.Local).AddTicks(8221), "Games" });

            migrationBuilder.UpdateData(
                table: "Brands",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedDate", "Name" },
                values: new object[] { new DateTime(2024, 3, 19, 3, 23, 18, 468, DateTimeKind.Local).AddTicks(8564), "Books, Outdoors & Games" });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2024, 3, 19, 3, 23, 18, 469, DateTimeKind.Local).AddTicks(1157));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedDate",
                value: new DateTime(2024, 3, 19, 3, 23, 18, 469, DateTimeKind.Local).AddTicks(1159));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreatedDate",
                value: new DateTime(2024, 3, 19, 3, 23, 18, 469, DateTimeKind.Local).AddTicks(1161));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreatedDate",
                value: new DateTime(2024, 3, 19, 3, 23, 18, 469, DateTimeKind.Local).AddTicks(1163));

            migrationBuilder.UpdateData(
                table: "Details",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedDate", "Description", "Title" },
                values: new object[] { new DateTime(2024, 3, 19, 3, 23, 18, 471, DateTimeKind.Local).AddTicks(2697), "Doğru kulu tempora cesurca voluptatem.", "Mutlu." });

            migrationBuilder.UpdateData(
                table: "Details",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedDate", "Description", "Title" },
                values: new object[] { new DateTime(2024, 3, 19, 3, 23, 18, 471, DateTimeKind.Local).AddTicks(2771), "Çakıl vel aspernatur dolores explicabo.", "Lambadaki amet." });

            migrationBuilder.UpdateData(
                table: "Details",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedDate", "Description", "Title" },
                values: new object[] { new DateTime(2024, 3, 19, 3, 23, 18, 471, DateTimeKind.Local).AddTicks(2804), "Beğendim enim kulu balıkhaneye laudantium.", "Laudantium." });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedDate", "Description", "Discount", "Price", "Title" },
                values: new object[] { new DateTime(2024, 3, 19, 3, 23, 18, 474, DateTimeKind.Local).AddTicks(6406), "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals", 4.022635221278040m, 353.71m, "Handmade Concrete Gloves" });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedDate", "Description", "Discount", "Price", "Title" },
                values: new object[] { new DateTime(2024, 3, 19, 3, 23, 18, 474, DateTimeKind.Local).AddTicks(6442), "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart", 6.102474014877640m, 993.09m, "Incredible Wooden Fish" });

            migrationBuilder.CreateIndex(
                name: "IX_ProductCategories_CategoryId",
                table: "ProductCategories",
                column: "CategoryId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ProductCategories");

            migrationBuilder.CreateTable(
                name: "CategoryProduct",
                columns: table => new
                {
                    CategoriesId = table.Column<int>(type: "int", nullable: false),
                    ProductsId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CategoryProduct", x => new { x.CategoriesId, x.ProductsId });
                    table.ForeignKey(
                        name: "FK_CategoryProduct_Categories_CategoriesId",
                        column: x => x.CategoriesId,
                        principalTable: "Categories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CategoryProduct_Products_ProductsId",
                        column: x => x.ProductsId,
                        principalTable: "Products",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.UpdateData(
                table: "Brands",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedDate", "Name" },
                values: new object[] { new DateTime(2024, 3, 18, 23, 29, 10, 703, DateTimeKind.Local).AddTicks(6884), "Industrial, Jewelery & Grocery" });

            migrationBuilder.UpdateData(
                table: "Brands",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedDate", "Name" },
                values: new object[] { new DateTime(2024, 3, 18, 23, 29, 10, 703, DateTimeKind.Local).AddTicks(6891), "Health" });

            migrationBuilder.UpdateData(
                table: "Brands",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedDate", "Name" },
                values: new object[] { new DateTime(2024, 3, 18, 23, 29, 10, 703, DateTimeKind.Local).AddTicks(6906), "Electronics & Tools" });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2024, 3, 18, 23, 29, 10, 703, DateTimeKind.Local).AddTicks(8952));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedDate",
                value: new DateTime(2024, 3, 18, 23, 29, 10, 703, DateTimeKind.Local).AddTicks(8953));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreatedDate",
                value: new DateTime(2024, 3, 18, 23, 29, 10, 703, DateTimeKind.Local).AddTicks(8955));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreatedDate",
                value: new DateTime(2024, 3, 18, 23, 29, 10, 703, DateTimeKind.Local).AddTicks(8957));

            migrationBuilder.UpdateData(
                table: "Details",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedDate", "Description", "Title" },
                values: new object[] { new DateTime(2024, 3, 18, 23, 29, 10, 706, DateTimeKind.Local).AddTicks(3693), "Nihil sinema dolore ve çobanın.", "Adanaya." });

            migrationBuilder.UpdateData(
                table: "Details",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedDate", "Description", "Title" },
                values: new object[] { new DateTime(2024, 3, 18, 23, 29, 10, 706, DateTimeKind.Local).AddTicks(3740), "Biber fugit kulu uzattı bilgiyasayarı.", "Laboriosam consequatur." });

            migrationBuilder.UpdateData(
                table: "Details",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedDate", "Description", "Title" },
                values: new object[] { new DateTime(2024, 3, 18, 23, 29, 10, 706, DateTimeKind.Local).AddTicks(3780), "Türemiş quia dicta et non.", "Gül." });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedDate", "Description", "Discount", "Price", "Title" },
                values: new object[] { new DateTime(2024, 3, 18, 23, 29, 10, 708, DateTimeKind.Local).AddTicks(8285), "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J", 2.88220611477390m, 644.44m, "Rustic Rubber Fish" });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedDate", "Description", "Discount", "Price", "Title" },
                values: new object[] { new DateTime(2024, 3, 18, 23, 29, 10, 708, DateTimeKind.Local).AddTicks(8317), "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles", 4.945191880394810m, 514.42m, "Unbranded Rubber Gloves" });

            migrationBuilder.CreateIndex(
                name: "IX_CategoryProduct_ProductsId",
                table: "CategoryProduct",
                column: "ProductsId");
        }
    }
}
