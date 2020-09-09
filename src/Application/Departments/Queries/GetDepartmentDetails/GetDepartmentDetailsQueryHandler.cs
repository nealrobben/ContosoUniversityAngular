using AutoMapper;
using AutoMapper.QueryableExtensions;
using ContosoUniversityAngular.Application.Common.Exceptions;
using ContosoUniversityAngular.Application.Common.Interfaces;
using ContosoUniversityAngular.Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Threading;
using System.Threading.Tasks;

namespace ContosoUniversityAngular.Application.Departments.Queries.GetDepartmentDetails
{
    public class GetDepartmentDetailsQueryHandler : IRequestHandler<GetDepartmentDetailsQuery, DepartmentDetailVM>
    {
        private readonly ISchoolContext _context;
        private readonly IMapper _mapper;

        public GetDepartmentDetailsQueryHandler(ISchoolContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<DepartmentDetailVM> Handle(GetDepartmentDetailsQuery request, CancellationToken cancellationToken)
        {
            if (request.ID == null)
                throw new NotFoundException(nameof(Department), request.ID);

            var department = await _context.Departments
                .Include(i => i.Administrator)
                .AsNoTracking()
                .ProjectTo<DepartmentDetailVM>(_mapper.ConfigurationProvider)
                .FirstOrDefaultAsync(m => m.DepartmentID == request.ID, cancellationToken);

            if(department == null)
                throw new NotFoundException(nameof(Department), request.ID);

            return department;
        }
    }
}
