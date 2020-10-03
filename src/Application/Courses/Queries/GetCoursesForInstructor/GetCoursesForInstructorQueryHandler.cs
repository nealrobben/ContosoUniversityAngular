using AutoMapper;
using AutoMapper.QueryableExtensions;
using ContosoUniversityAngular.Application.Common.Interfaces;
using ContosoUniversityAngular.Application.Courses.Queries.GetCoursesForInstructor;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace ContosoUniversityAngular.Application.Courses.Queries.GetCoursesOverview
{
    public class GetCoursesForInstructorQueryHandler : IRequestHandler<GetCoursesForInstructorQuery, CoursesForInstructorOverviewVM>
    {
        private readonly ISchoolContext _context;
        private readonly IMapper _mapper;

        public GetCoursesForInstructorQueryHandler(ISchoolContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<CoursesForInstructorOverviewVM> Handle(GetCoursesForInstructorQuery request, CancellationToken cancellationToken)
        {
            if (request.ID == null)
                return new CoursesForInstructorOverviewVM(new List<CourseForInstructorVM>());

            var courses = await _context.Courses
                .Include(c => c.Department)
                .AsNoTracking()
                .ProjectTo<CourseForInstructorVM>(_mapper.ConfigurationProvider)
                .ToListAsync(cancellationToken);

            return new CoursesForInstructorOverviewVM(courses);
        }
    }
}
