using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Primitives;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace HowYouType.Controllers
{
    [Route("api/main")]
    public class MainController : Controller
    {

        [HttpGet("{id}")]
        [Route("")]
        public async Task<IActionResult> checkAsync(string id)
        {
            string newId = id.ToLower();
            var credentials = Convert.ToBase64String(Encoding.ASCII.GetBytes(string.Format("{0}:{1}", "apiKey", "ApiSecret")));

            string baseUrl = "https://api.typingdna.com/user/" + newId;
            HttpClient client = new HttpClient();
            client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", credentials);
            using (HttpResponseMessage res = await client.GetAsync(baseUrl))
            using (HttpContent content = res.Content)
            {
                string data = await content.ReadAsStringAsync();
                if (data != null)
                {
                    return Ok(data);
                }
                return BadRequest(data);
            }
        }

        [HttpPost("{id}/{tip}")]
        [Route("")]
        public async Task<IActionResult> saveUserAsync(string id, string tip)
        {
            string newId = id.ToLower();
            var credentials = Convert.ToBase64String(Encoding.ASCII.GetBytes(string.Format("{0}:{1}", "apiKey", "ApiSecret")));
            string baseUrl = "https://api.typingdna.com/save/" + newId;
            var content = new FormUrlEncodedContent(new[]
            {
                new KeyValuePair<string, string>("tp", tip)
            });

            HttpClient client = new HttpClient();
            client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", credentials);
            using (HttpResponseMessage res = await client.PostAsync(baseUrl, content))
            using (HttpContent content1 = res.Content)
            {
                string data = await content1.ReadAsStringAsync();
                if (data != null)
                {
                    return Ok(data);
                }
                return BadRequest(data);
            }
        }


        [HttpPost("check/{id}/{tip}")]
        [Route("")]
        public async Task<IActionResult> checkUserAsync(string id, string tip)
        {
            string newId = id.ToLower();
            var credentials = Convert.ToBase64String(Encoding.ASCII.GetBytes(string.Format("{0}:{1}", "apiKey", "ApiSecret")));
            string baseUrl = "https://api.typingdna.com/verify/" + newId;
            var content = new FormUrlEncodedContent(new[]
            {
                new KeyValuePair<string, string>("tp", tip)
            });

            HttpClient client = new HttpClient();
            client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", credentials);
            using (HttpResponseMessage res = await client.PostAsync(baseUrl, content))
            using (HttpContent content1 = res.Content)
            {
                string data = await content1.ReadAsStringAsync();
                if (data != null)
                {
                    return Ok(data);
                }
                return BadRequest(data);
            }
        }
    }
}
