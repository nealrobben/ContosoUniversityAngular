using ContosoUniversityAngular.Application.TodoLists.Queries.ExportTodos;
using System.Collections.Generic;

namespace ContosoUniversityAngular.Application.Common.Interfaces
{
    public interface ICsvFileBuilder
    {
        byte[] BuildTodoItemsFile(IEnumerable<TodoItemRecord> records);
    }
}
