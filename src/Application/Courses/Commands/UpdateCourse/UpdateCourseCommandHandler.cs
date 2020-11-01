using ContosoUniversityAngular.Application.Common.Exceptions;
using ContosoUniversityAngular.Application.Common.Interfaces;
using ContosoUniversityAngular.Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Threading;
using System.Threading.Tasks;

namespace ContosoUniversityAngular.Application.Courses.Commands.UpdateCourse
{
    public class UpdateCourseCommandHandler : IRequestHandler<UpdateCourseCommand>
    {
        private readonly ISchoolContext _context;

        public UpdateCourseCommandHandler(ISchoolContext context)
        {
            _context = context;
        }

        public async Task<Unit> Handle(UpdateCourseCommand request, CancellationToken cancellationToken)
        {
            if (request.CourseID == null)
                throw new NotFoundException(nameof(Course), request.CourseID);

            var courseToUpdate = await _context.Courses
                .FirstOrDefaultAsync(c => c.CourseID == request.CourseID);

            courseToUpdate.Title = request.Title;
            courseToUpdate.Credits = request.Credits;
            courseToUpdate.DepartmentID = request.DepartmentID;

            await _context.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }
    }
}
