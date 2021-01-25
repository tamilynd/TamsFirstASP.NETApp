using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TamsFirstASP.NETApp.Models;

namespace TamsFirstASP.NETApp.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet("ComputeGrades")]
        public IActionResult ComputeGrades()
        {
            return View();
        }
        [HttpPost("ComputeGrades")]
        public IActionResult ComputeGrades(ComputeGradesModel model)
        {
            return View();
        }
    }
}
