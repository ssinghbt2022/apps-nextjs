export async function GET() {
    // Users in memory (or could read from a file)
    const users = [
      'alice',
      'bob', 
      'charlie',
      'diana',
      'evan',
      'sat'
    ];
  
    return Response.json({ users });
  }