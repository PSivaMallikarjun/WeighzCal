using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Weighz_Cal.Controllers
{
    public class WeightCalculatorController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult CalculateWeight(double density, double length, double width, double height)
        {
            // Calculate the weight (server-side)
            double volume = length * width * height;
            double weight = density * volume;

            // Return the result to the view
            ViewBag.Weight = weight;
            return View("Weighz Cal");
        }
    }
}

