using ContosoUniversityAngular.Application.Courses.Queries.GetCoursesOverview;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace ContosoUniversityAngular.WebUI.Controllers
{
    public class CoursesController : ApiController
    {
        [HttpGet]
        public async Task<ActionResult<CoursesOverviewVM>> GetAll()
        {
            var vm = await Mediator.Send(new GetCoursesOverviewQuery());

            return Ok(vm);
        }
    }
}
