using ContosoUniversityAngular.Application.Departments.Queries.GetDepartmentDetails;
using ContosoUniversityAngular.Application.Departments.Queries.GetDepartmentsOverview;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace ContosoUniversityAngular.WebUI.Controllers
{
    public class DepartmentsController : ApiController
    {
        [HttpGet]
        public async Task<ActionResult<DepartmentsOverviewVM>> GetAll()
        {
            var vm = await Mediator.Send(new GetDepartmentsOverviewQuery());

            return Ok(vm);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<DepartmentDetailVM>> Get(string id)
        {
            var vm = await Mediator.Send(new GetDepartmentDetailsQuery(int.Parse(id)));

            return Ok(vm);
        }
    }
}
