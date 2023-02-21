using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Bolsa_De_Empleo.Models
{
    public partial class BolsaEmpleoDBContext : DbContext
    {
        public BolsaEmpleoDBContext()
        {
        }

        public BolsaEmpleoDBContext(DbContextOptions<BolsaEmpleoDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Aplicacion> Aplicaciones { get; set; } = null!;
        public virtual DbSet<Ciudadano> Ciudadanos { get; set; } = null!;
        public virtual DbSet<TipoDocumento> TipoDocumentos { get; set; } = null!;
        public virtual DbSet<Vacante> Vacantes { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=(local); DataBase=BolsaEmpleoDB;Integrated Security=true");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Aplicacion>(entity =>
            {
                entity.HasKey(e => e.IdAplicacion)
                    .HasName("PK__Aplicaci__038AB25E5FDB18D0");

                entity.Property(e => e.IdAplicacion).HasColumnName("idAplicacion");

                entity.Property(e => e.IdCiudadano).HasColumnName("idCiudadano");

                entity.Property(e => e.IdVacante).HasColumnName("idVacante");

                entity.HasOne(d => d.IdCiudadanoNavigation)
                    .WithMany(p => p.Aplicaciones)
                    .HasForeignKey(d => d.IdCiudadano)
                    .HasConstraintName("FK_Aplicaciones_idCiudadano");

                entity.HasOne(d => d.IdVacanteNavigation)
                    .WithMany(p => p.Aplicaciones)
                    .HasForeignKey(d => d.IdVacante)
                    .HasConstraintName("FK_Aplicaciones_idVacante");
            });

            modelBuilder.Entity<Ciudadano>(entity =>
            {
                entity.HasKey(e => e.IdCiudadano)
                    .HasName("PK__Ciudadan__0867B172ACFEEBC8");

                entity.Property(e => e.IdCiudadano).HasColumnName("idCiudadano");

                entity.Property(e => e.Apellidos)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("apellidos");

                entity.Property(e => e.AspiracionSalarial).HasColumnName("aspiracionSalarial");

                entity.Property(e => e.CorreoElectronico)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("correoElectronico");

                entity.Property(e => e.FechaNacimiento)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("fechaNacimiento");

                entity.Property(e => e.IdTipoDocumento).HasColumnName("idTipoDocumento");

                entity.Property(e => e.Nombres)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("nombres");

                entity.Property(e => e.NumeroDocumento).HasColumnName("numeroDocumento");

                entity.Property(e => e.Profesion)
                    .HasMaxLength(60)
                    .IsUnicode(false)
                    .HasColumnName("profesion");

                entity.HasOne(d => d.IdTipoDocumentoNavigation)
                    .WithMany(p => p.Ciudadanos)
                    .HasForeignKey(d => d.IdTipoDocumento)
                    .HasConstraintName("FK_Ciudadanos_idTipoDocumento");
            });

            modelBuilder.Entity<TipoDocumento>(entity =>
            {
                entity.HasKey(e => e.IdTipoDocumento)
                    .HasName("PK__Tipo_Doc__61FDF9F552412928");

                entity.ToTable("Tipo_Documento");

                entity.Property(e => e.IdTipoDocumento).HasColumnName("idTipoDocumento");

                entity.Property(e => e.Nombre)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("nombre");
            });

            modelBuilder.Entity<Vacante>(entity =>
            {
                entity.HasKey(e => e.IdVacante)
                    .HasName("PK__Vacantes__FABAACF19687A2F1");

                entity.Property(e => e.IdVacante).HasColumnName("idVacante");

                entity.Property(e => e.Cargo)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("cargo");

                entity.Property(e => e.Codigo)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("codigo");

                entity.Property(e => e.Descripcion)
                    .HasMaxLength(200)
                    .IsUnicode(false)
                    .HasColumnName("descripcion");

                entity.Property(e => e.Empresa)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("empresa");

                entity.Property(e => e.Salario).HasColumnName("salario");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
