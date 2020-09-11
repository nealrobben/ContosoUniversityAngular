using ContosoUniversityAngular.Application.Common.Exceptions;
using ContosoUniversityAngular.Application.Common.Interfaces;
using ContosoUniversityAngular.Domain.Entities;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace ContosoUniversityAngular.Application.Courses.Commands.DeleteCourse
{
    public class DeleteCourseCommandHandler : IRequestHandler<DeleteCourseCommand>
    {
        private readonly ISchoolContext _context;

        public DeleteCourseCommandHandler(ISchoolContext context)
        {
            _context = context;
        }

        public async Task<Unit> Handle(DeleteCourseCommand request, CancellationToken cancellationToken)
        {
            var course = await _context.Courses.FindAsync(request.ID);

            if (course == null)
                throw new NotFoundException(nameof(Course), request.ID);

            _context.Courses.Remove(course);
            await _context.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }
    }
}
