﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using usermanagementNET.Models;

#nullable disable

namespace usermanagementNET.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    partial class ApplicationDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("usermanagementNET.Models.User", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"));

                    b.Property<string>("Address")
                        .HasColumnType("varchar(100)")
                        .HasColumnName("Address");

                    b.Property<string>("DOB")
                        .HasColumnType("varchar(10)")
                        .HasColumnName("DOB");

                    b.Property<string>("Email")
                        .HasColumnType("varchar(100)")
                        .HasColumnName("Email");

                    b.Property<string>("Name")
                        .HasColumnType("varchar(100)")
                        .HasColumnName("Name");

                    b.Property<string>("Number")
                        .HasColumnType("varchar(15)")
                        .HasColumnName("Number");

                    b.HasKey("ID");

                    b.ToTable("Users");
                });
#pragma warning restore 612, 618
        }
    }
}
