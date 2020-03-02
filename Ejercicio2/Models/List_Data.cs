using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ejercicio2.Models
{
    public class ListData
    {
        public List<Producto> productos = new List<Producto>()
        {
            new Producto() { Id = 1, Nombre = "Alex", Descripcion = "Es Bueno..", FechaVenc = "10/05/2021", ProveedorId = 2},
            new Producto() { Id = 2, Nombre = "asfd", Descripcion = "Es malo..", FechaVenc = "10/07/2021", ProveedorId = 1},
            new Producto() { Id = 3, Nombre = "sf", Descripcion = "Es ad..", FechaVenc = "15/05/2021", ProveedorId = 22}
        };

        public List<Proveedor> proveedores = new List<Proveedor>()
        {
            new Proveedor() { Id = 1, Nombre = "Juan", Direccion = "asdg -sa dsa", Telefono = "829-777-6037"},
            new Proveedor() { Id = 2, Nombre = "Pedro", Direccion = "asdsd -sa dsa", Telefono = "829-457-6437"},
            new Proveedor() { Id = 22, Nombre = "Maria", Direccion = "asdsd -sa dsa", Telefono = "829-753-6417"}
        };
    }
}
