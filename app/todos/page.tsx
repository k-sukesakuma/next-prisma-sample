
import prisma from '@/lib/prisma';
import Link from 'next/link';

const Page = async () => {
  const todos = await prisma.todo.findMany();

  return (
    <div className="m-8">
      <h1 className="text-xl font-bold">Todo一覧</h1>
      <ul className="mt-8">
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.name}</span>
            <Link href={`/todos/${todo.id}`}>詳細</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;