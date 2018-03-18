using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SendGrid;
using SendGrid.Helpers.Mail;

namespace portfolio.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Error()
        {
            ViewData["RequestId"] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            return View();
        }

        [HttpPost]
        [Route("~/contact")]
        public async Task<ActionResult> Contact([FromForm] ContactFormData model)
        {
            var sendgrid = new SendGridClient("***************** Sendgrid API Key ********************");

            var from = new EmailAddress("noreply@yourdomain.com");
            var to = new EmailAddress("your email address");

            string content = "Sender email: " + model.email + "<br>" + "Message: " + model.message;

            var msg = MailHelper.CreateSingleEmail(from, to, "Message from " + model.name, content, content);
            var response = await sendgrid.SendEmailAsync(msg);

            return Ok();
        }
    }
}

public class ContactFormData
{
    public string name {get;set;}
    public string email {get;set;}
    public string message {get;set;}
}