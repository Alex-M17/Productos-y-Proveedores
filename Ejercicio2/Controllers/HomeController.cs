﻿using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Ejercicio2.Models;

namespace Ejercicio2.Controllers
{
    public class HomeController : Controller
    {                   
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Proveedor()
        {
            return View();
        }
    }
}
