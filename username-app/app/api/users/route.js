export async function GET() {
    // Users in memory (or could read from a file)
    const users = [
      'alice',
      'bob', 
      'charlie',
      'diana',
      'evan',
      'sat',
      'bob2'
    ];
  
    return Response.json({ users });
  }