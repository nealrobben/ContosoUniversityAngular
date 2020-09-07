using ContosoUniversityAngular.Application.Departments.Queries.GetDepartmentsOverview;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace ContosoUniversityAngular.WebUI.Controllers
{
    public class DepartmentsApiController : ApiController
    {
        [HttpGet]
        public async Task<ActionResult<DepartmentsOverviewVM>> GetAll()
        {
            var vm = await Mediator.Send(new GetDepartmentsOverviewQuery());

            return Ok(vm);
        }
    }
}
